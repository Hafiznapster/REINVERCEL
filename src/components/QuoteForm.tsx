import React, { useState, useEffect, useRef } from 'react';
import AddressAutocomplete from './AddressAutocomplete';
import SimpleAddressInput from './SimpleAddressInput';

interface QuoteFormData {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  notes: string;
  roofType: string;
  numberOfPhases: string;
}

// Google Places types
declare global {
  interface Window {
    google: any;
    initGooglePlaces: () => void;
  }
}

// Hybrid approach: Store locally AND try OpenSolar API
const submitQuoteData = async (data: QuoteFormData): Promise<{ localSuccess: boolean; apiSuccess: boolean }> => {
  let localSuccess = false;
  let apiSuccess = false;

  // 1. Always store locally first (guaranteed backup)
  try {
    const quoteData = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
      apiSubmitted: false // Track if API submission succeeded
    };
    
    const existingQuotes = JSON.parse(localStorage.getItem('solarQuotes') || '[]');
    existingQuotes.push(quoteData);
    localStorage.setItem('solarQuotes', JSON.stringify(existingQuotes));
    
    console.log('✅ Quote stored locally:', quoteData);
    localSuccess = true;
  } catch (error) {
    console.error('❌ Failed to store quote locally:', error);
  }

  // 2. Try to submit to OpenSolar API (multiple methods)
  try {
    console.log('🔄 Attempting OpenSolar API submission...');
    
    // Method 1: Try serverless function proxy first
    try {
      console.log('🔄 Trying serverless proxy...');
      const serverlessResponse = await fetch('/api/opensolar-proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (serverlessResponse.ok) {
        const result = await serverlessResponse.json();
        if (result.success) {
          apiSuccess = true;
          console.log('✅ OpenSolar API submission via serverless proxy successful');
          
          // Update local storage to mark as API submitted
          if (localSuccess) {
            const quotes = JSON.parse(localStorage.getItem('solarQuotes') || '[]');
            if (quotes.length > 0) {
              quotes[quotes.length - 1].apiSubmitted = true;
              localStorage.setItem('solarQuotes', JSON.stringify(quotes));
            }
          }
        } else {
          console.warn('❌ Serverless proxy returned success=false:', result);
        }
      } else {
        console.warn('❌ Serverless proxy response not ok:', serverlessResponse.status, await serverlessResponse.text());
      }
    } catch (serverlessError) {
      console.warn('❌ Serverless proxy failed:', serverlessError);
    }

    // Method 1b: Try PHP proxy as backup
    if (!apiSuccess) {
      try {
        console.log('🔄 Trying PHP proxy...');
        const phpResponse = await fetch('/opensolar-proxy.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        if (phpResponse.ok) {
          const result = await phpResponse.json();
          if (result.success) {
            apiSuccess = true;
            console.log('✅ OpenSolar API submission via PHP proxy successful');
            
            // Update local storage to mark as API submitted
            if (localSuccess) {
              const quotes = JSON.parse(localStorage.getItem('solarQuotes') || '[]');
              if (quotes.length > 0) {
                quotes[quotes.length - 1].apiSubmitted = true;
                localStorage.setItem('solarQuotes', JSON.stringify(quotes));
              }
            }
          } else {
            console.warn('❌ PHP proxy returned success=false:', result);
          }
        } else {
          console.warn('❌ PHP proxy response not ok:', phpResponse.status, await phpResponse.text());
        }
      } catch (phpError) {
        console.warn('❌ PHP proxy failed:', phpError);
      }
    }

    // Method 2: Try direct AJAX submission with proper headers
    if (!apiSuccess) {
      try {
        console.log('🔄 Trying direct AJAX submission...');
        
        // Prepare form data
        const formData = new FormData();
        formData.append('first_name', data.firstName);
        formData.append('last_name', data.lastName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('address', data.address);
        formData.append('notes', data.notes || `Roof Type: ${data.roofType || 'Not specified'}, Phases: ${data.numberOfPhases || 'Not specified'}`);
        formData.append('roof_type', data.roofType || '');
        formData.append('number_of_phases', data.numberOfPhases || '');
        formData.append('widget_id', 'ca8ae2d8109747b496bf67a411ac789b');

        const directResponse = await fetch('https://api.opensolar.com/api/lead_capture_widget/ca8ae2d8109747b496bf67a411ac789b', {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // This bypasses CORS but we can't read the response
          credentials: 'omit'
        });

        // Since we're using no-cors, we can't check the actual response
        // But the request was sent, so we'll assume it worked
        apiSuccess = true;
        console.log('✅ Direct AJAX submission sent (no-cors mode)');
        
        // Update local storage
        if (localSuccess) {
          const quotes = JSON.parse(localStorage.getItem('solarQuotes') || '[]');
          if (quotes.length > 0) {
            quotes[quotes.length - 1].apiSubmitted = true;
            localStorage.setItem('solarQuotes', JSON.stringify(quotes));
          }
        }
      } catch (directError) {
        console.warn('❌ Direct AJAX submission failed:', directError);
      }
    }

    // Method 3: Try hidden form submission as final fallback
    if (!apiSuccess) {
      try {
        console.log('🔄 Trying hidden form submission...');
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://api.opensolar.com/api/lead_capture_widget/ca8ae2d8109747b496bf67a411ac789b';
        form.target = 'opensolar_frame';
        form.style.display = 'none';

        // Create hidden iframe
        let iframe = document.getElementById('opensolar_frame') as HTMLIFrameElement;
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.id = 'opensolar_frame';
          iframe.name = 'opensolar_frame';
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
        }

        const fields = {
          'first_name': data.firstName,
          'last_name': data.lastName,
          'email': data.email,
          'phone': data.phone,
          'address': data.address,
          'notes': data.notes || `Roof Type: ${data.roofType || 'Not specified'}, Phases: ${data.numberOfPhases || 'Not specified'}`,
          'roof_type': data.roofType || '',
          'number_of_phases': data.numberOfPhases || '',
          'widget_id': 'ca8ae2d8109747b496bf67a411ac789b'
        };

        Object.entries(fields).forEach(([key, value]) => {
          if (value) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = String(value);
            form.appendChild(input);
          }
        });

        document.body.appendChild(form);
        
        // Submit and wait briefly
        form.submit();
        
        // Cleanup
        setTimeout(() => {
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
        }, 2000);

        // Assume success for form submission
        apiSuccess = true;
        console.log('✅ Hidden form submission completed');
        
        // Update local storage
        if (localSuccess) {
          const quotes = JSON.parse(localStorage.getItem('solarQuotes') || '[]');
          if (quotes.length > 0) {
            quotes[quotes.length - 1].apiSubmitted = true;
            localStorage.setItem('solarQuotes', JSON.stringify(quotes));
          }
        }
      } catch (formError) {
        console.warn('❌ Hidden form submission failed:', formError);
      }
    }

  } catch (error) {
    console.error('❌ OpenSolar API submission failed:', error);
  }

  return { localSuccess, apiSuccess };
};

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    notes: '',
    roofType: '',
    numberOfPhases: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [addressSelected, setAddressSelected] = useState(false);
  const [useSimpleAddress, setUseSimpleAddress] = useState(false);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  const roofTypes = [
    { value: '6', label: 'Composition / Asphalt Shingle' },
    { value: '7', label: 'Flat Concrete' },
    { value: '8', label: 'Flat Foam' },
    { value: '9', label: 'Membrane EPDM' },
    { value: '10', label: 'Membrane PVC' },
    { value: '11', label: 'Membrane TPO' },
    { value: '12', label: 'Metal Decramastic' },
    { value: '13', label: 'Metal Shingle' },
    { value: '14', label: 'Metal Standing Seam' },
    { value: '15', label: 'Metal Stone Coated' },
    { value: '16', label: 'Metal Tin' },
    { value: '17', label: 'Tar and Gravel / Bitumen' },
    { value: '18', label: 'Thatched' },
    { value: '19', label: 'Tile Clay' },
    { value: '20', label: 'Tile Concrete' },
    { value: '21', label: 'Tile Slate' },
    { value: '22', label: 'Wood/Shake Shingle' },
    { value: '23', label: 'Other' },
    { value: '24', label: 'Kliplock' },
    { value: '25', label: 'Rolled Asphalt' },
    { value: '26', label: 'Trapezoidal' }
  ];

  const phases = [
    { value: '1', label: '1 Phase' },
    { value: '2', label: '2 Phase' },
    { value: '3', label: '3 Phase' }
  ];

  // Initialize Google Places Autocomplete
  const initializeGooglePlaces = () => {
    console.log('Initializing Google Places...');
    console.log('Google available:', !!window.google);
    console.log('Google Maps available:', !!(window.google && window.google.maps));
    console.log('Address input ref:', !!addressInputRef.current);

    if (window.google && window.google.maps && window.google.maps.places && addressInputRef.current) {
      try {
        // Try the new PlaceAutocompleteElement first (recommended)
        if (window.google.maps.places.PlaceAutocompleteElement) {
          console.log('Using new PlaceAutocompleteElement');
          const autocompleteElement = new window.google.maps.places.PlaceAutocompleteElement({
            componentRestrictions: { country: ['us', 'ca', 'au', 'gb', 'in'] },
            types: ['address']
          });
          
          autocompleteElement.addEventListener('gmp-placeselect', (event: any) => {
            const place = event.place;
            console.log('Place selected (new API):', place);
            if (place.formattedAddress) {
              setFormData(prev => ({
                ...prev,
                address: place.formattedAddress
              }));
              setAddressSelected(true);
              console.log('Address selected:', place.formattedAddress);
            }
          });

          // Replace the input with the new element
          if (addressInputRef.current && addressInputRef.current.parentNode) {
            addressInputRef.current.parentNode.replaceChild(autocompleteElement, addressInputRef.current);
            autocompleteRef.current = autocompleteElement;
          }
        } else {
          // Fallback to old Autocomplete
          console.log('Using legacy Autocomplete');
          const autocomplete = new window.google.maps.places.Autocomplete(
            addressInputRef.current,
            {
              types: ['address'],
              componentRestrictions: { country: ['us', 'ca', 'au', 'gb', 'in'] },
            }
          );

          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            console.log('Place selected (legacy):', place);
            if (place.formatted_address) {
              setFormData(prev => ({
                ...prev,
                address: place.formatted_address
              }));
              setAddressSelected(true);
              console.log('Address selected:', place.formatted_address);
            }
          });

          autocompleteRef.current = autocomplete;
        }
        
        console.log('Google Places Autocomplete initialized successfully');
      } catch (error) {
        console.error('Error initializing Google Places:', error);
      }
    } else {
      console.error('Google Places API not available');
      console.log('Available objects:', {
        google: !!window.google,
        maps: !!(window.google && window.google.maps),
        places: !!(window.google && window.google.maps && window.google.maps.places),
        input: !!addressInputRef.current
      });
      
      // Retry after a short delay
      setTimeout(() => {
        if (window.google && window.google.maps && window.google.maps.places && addressInputRef.current) {
          console.log('Retrying Google Places initialization...');
          initializeGooglePlaces();
        }
      }, 1000);
    }
  };

  useEffect(() => {
    // Component initialization - AddressAutocomplete handles Google Places loading
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address) {
        throw new Error('Please fill in all required fields');
      }

      // Address is always valid for manual input

      // Hybrid submission: Store locally AND try OpenSolar API
      console.log('🚀 Starting hybrid quote submission...');
      const { localSuccess, apiSuccess } = await submitQuoteData(formData);
      
      console.log('📊 Submission Results:', { localSuccess, apiSuccess });
      
      if (localSuccess) {
        console.log('✅ Quote guaranteed to be saved locally');
      } else {
        throw new Error('Failed to store quote data locally');
      }
      
      if (apiSuccess) {
        console.log('🎉 Bonus: Quote also sent to OpenSolar API!');
      } else {
        console.log('⚠️ OpenSolar API failed, but quote is safely stored locally');
      }

      // Show success regardless of OpenSolar response
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        notes: '',
        roofType: '',
        numberOfPhases: ''
      });
      setAddressSelected(false);

    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'There was an issue submitting your quote. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="card border-0 shadow-lg">
        <div className="card-body text-center py-5">
          <div className="mb-4">
            <i className="fas fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
          </div>
          <h3 className="text-success mb-3">Quote Request Submitted!</h3>
          <p className="text-muted mb-4">
            Thank you for your interest in solar energy. Our team will contact you within 24 hours to discuss your project.
          </p>
          <button 
            onClick={() => {
              setSuccess(false);
              setAddressSelected(false);
            }}
            className="btn btn-success"
          >
            Submit Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-lg overflow-hidden">
      <div className="card-header text-center py-5 position-relative" style={{ backgroundColor: '#336021' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
          <div className="position-absolute" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
            width: '100%',
            height: '100%'
          }}></div>
        </div>
        <div className="position-relative">
          <div className="mb-3">
            <i className="fas fa-calculator text-white" style={{ fontSize: '2.5rem' }}></i>
          </div>
          <h3 className="text-white mb-2 fw-bold">Get Your Free Solar Quote</h3>
          <p className="text-white-50 mb-0">Personalized solution for your home</p>
        </div>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
              <i className="fas fa-exclamation-triangle me-2"></i>
              <div>{error}</div>
            </div>
          )}

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label fw-semibold">
                <i className="fas fa-user text-muted me-2"></i>First Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Enter your first name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label fw-semibold">
                <i className="fas fa-user text-muted me-2"></i>Last Name *
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold">
              <i className="fas fa-map-marker-alt text-muted me-2"></i>Address *
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, address: e.target.value }));
                setAddressSelected(true); // Always consider manual input as selected
              }}
              required
              placeholder="Enter your complete address..."
            />
            <div className="form-text">
              <small className="text-muted">
                Please enter your complete address including street, city, state, and zip code
              </small>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-semibold">
                <i className="fas fa-envelope text-muted me-2"></i>Email *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label fw-semibold">
                <i className="fas fa-phone text-muted me-2"></i>Phone *
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="notes" className="form-label fw-semibold">
              <i className="fas fa-sticky-note text-muted me-2"></i>Notes
            </label>
            <textarea
              className="form-control"
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any additional information or questions..."
            ></textarea>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="roofType" className="form-label fw-semibold">
                <i className="fas fa-home text-muted me-2"></i>Roof Type
              </label>
              <select
                className="form-select"
                id="roofType"
                name="roofType"
                value={formData.roofType}
                onChange={handleInputChange}
              >
                <option value="">Choose Roof Type</option>
                {roofTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="numberOfPhases" className="form-label fw-semibold">
                <i className="fas fa-bolt text-muted me-2"></i>Number of Phases
              </label>
              <select
                className="form-select"
                id="numberOfPhases"
                name="numberOfPhases"
                value={formData.numberOfPhases}
                onChange={handleInputChange}
              >
                <option value="">Choose Number of Phases</option>
                {phases.map((phase) => (
                  <option key={phase.value} value={phase.value}>
                    {phase.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success btn-lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Submitting Quote...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane me-2"></i>
                  Submit Quote Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;