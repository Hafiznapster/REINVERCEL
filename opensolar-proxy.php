<?php
// OpenSolar API Proxy
// Upload this file to your web server and call it from your React app

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        throw new Exception('Invalid JSON input');
    }

    // Prepare form data for OpenSolar
    $postData = [
        'first_name' => $input['firstName'] ?? '',
        'last_name' => $input['lastName'] ?? '',
        'email' => $input['email'] ?? '',
        'phone' => $input['phone'] ?? '',
        'address' => $input['address'] ?? '',
        'notes' => $input['notes'] ?? '',
        'roof_type' => $input['roofType'] ?? '',
        'number_of_phases' => $input['numberOfPhases'] ?? '',
        'widget_id' => 'ca8ae2d8109747b496bf67a411ac789b'
    ];

    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.opensolar.com/api/lead_capture_widget/ca8ae2d8109747b496bf67a411ac789b');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; Website-Proxy/1.0)');
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/x-www-form-urlencoded',
        'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    ]);

    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        throw new Exception('cURL error: ' . $error);
    }

    if ($httpCode >= 200 && $httpCode < 300) {
        echo json_encode(['success' => true, 'message' => 'Quote submitted successfully']);
    } else {
        error_log('OpenSolar API error: HTTP ' . $httpCode . ' - ' . $response);
        echo json_encode(['success' => false, 'error' => 'Failed to submit to OpenSolar']);
    }

} catch (Exception $e) {
    error_log('OpenSolar proxy error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Internal server error']);
}
?>