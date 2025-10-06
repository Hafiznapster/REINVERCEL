// Simple proxy to handle OpenSolar API submissions
// This can be deployed to Vercel, Netlify, or any serverless platform

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      notes,
      roofType,
      numberOfPhases
    } = req.body;

    // Prepare form data for OpenSolar
    const formData = new URLSearchParams();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('notes', notes || '');
    formData.append('roof_type', roofType || '');
    formData.append('number_of_phases', numberOfPhases || '');
    formData.append('widget_id', 'ca8ae2d8109747b496bf67a411ac789b');

    // Submit to OpenSolar API
    const response = await fetch('https://api.opensolar.com/api/lead_capture_widget/ca8ae2d8109747b496bf67a411ac789b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (compatible; Website-Proxy/1.0)',
      },
      body: formData.toString()
    });

    console.log('OpenSolar response status:', response.status);
    
    if (response.ok) {
      res.status(200).json({ success: true, message: 'Quote submitted successfully' });
    } else {
      const errorText = await response.text();
      console.error('OpenSolar error:', errorText);
      res.status(400).json({ success: false, error: 'Failed to submit to OpenSolar' });
    }

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}