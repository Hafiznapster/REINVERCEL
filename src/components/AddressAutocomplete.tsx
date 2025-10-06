import React, { useEffect, useRef, useState } from 'react';

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string) => void;
  onAddressSelected: (selected: boolean) => void;
  placeholder?: string;
  className?: string;
}

// Global flag to prevent multiple API loads
let isGoogleLoading = false;
let isGoogleLoaded = false;

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  onAddressSelected,
  placeholder = "Start typing your address...",
  className = "form-control"
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initAutocomplete = () => {
      if (isInitialized || !inputRef.current) return;

      if (window.google && window.google.maps && window.google.maps.places) {
        try {
          // Clean up any existing autocomplete
          if (autocompleteRef.current) {
            window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
          }

          // Try new PlaceAutocompleteElement first (recommended)
          if (window.google.maps.places.PlaceAutocompleteElement) {
            const autocompleteElement = new window.google.maps.places.PlaceAutocompleteElement({
              componentRestrictions: { country: ['us', 'ca', 'au', 'gb', 'in'] },
              types: ['address']
            });
            
            autocompleteElement.addEventListener('gmp-placeselect', (event: any) => {
              const place = event.place;
              if (place.formattedAddress) {
                onChange(place.formattedAddress);
                onAddressSelected(true);
                console.log('Address selected (new API):', place.formattedAddress);
              }
            });

            // Replace the input with the new element
            if (inputRef.current && inputRef.current.parentNode) {
              inputRef.current.parentNode.replaceChild(autocompleteElement, inputRef.current);
              autocompleteRef.current = autocompleteElement;
            }
          } else {
            // Fallback to legacy Autocomplete
            const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
              types: ['address'],
              componentRestrictions: { country: ['us', 'ca', 'au', 'gb', 'in'] }
            });

            autocomplete.addListener('place_changed', () => {
              const place = autocomplete.getPlace();
              if (place.formatted_address) {
                onChange(place.formatted_address);
                onAddressSelected(true);
                console.log('Address selected (legacy):', place.formatted_address);
              }
            });

            autocompleteRef.current = autocomplete;
          }

          autocompleteRef.current = autocomplete;
          setIsInitialized(true);
          console.log('Address autocomplete initialized successfully');
        } catch (error) {
          console.error('Error initializing address autocomplete:', error);
        }
      }
    };

    // Load Google Places API if not already loaded
    if (!isGoogleLoaded && !isGoogleLoading) {
      // Check if already exists in DOM
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        isGoogleLoaded = true;
        setTimeout(initAutocomplete, 500);
        return;
      }

      isGoogleLoading = true;
      const script = document.createElement('script');
      const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
      
      if (!apiKey || apiKey === 'your-google-places-api-key') {
        console.warn('Google Places API key not configured - address suggestions disabled');
        isGoogleLoading = false;
        return;
      }

      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        isGoogleLoaded = true;
        isGoogleLoading = false;
        setTimeout(initAutocomplete, 500);
      };
      
      script.onerror = (error) => {
        console.error('Failed to load Google Places API:', error);
        isGoogleLoading = false;
      };
      
      document.head.appendChild(script);
    } else if (isGoogleLoaded) {
      setTimeout(initAutocomplete, 100);
    }

    return () => {
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [onChange, onAddressSelected, isInitialized]);

  return (
    <div className="position-relative">
      <input
        ref={inputRef}
        type="text"
        className={className}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          onAddressSelected(false);
        }}
        placeholder={placeholder}
        autoComplete="off"
      />
      {!isInitialized && (
        <small className="text-muted">
          <i className="fas fa-spinner fa-spin me-1"></i>
          Loading address suggestions...
        </small>
      )}
    </div>
  );
};

export default AddressAutocomplete;