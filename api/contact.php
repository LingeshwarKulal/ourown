<?php
require_once 'config/database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate required fields
    $required_fields = ['name', 'Email', 'Organization', 'Title', 'Message'];
    foreach ($required_fields as $field) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            http_response_code(400);
            echo json_encode(['error' => $field . ' is required']);
            exit();
        }
    }

    try {
        // Prepare SQL statement
        $sql = "INSERT INTO contacts (name, Email, Organization, Title, Message) 
                VALUES (:name, :email, :organization, :title, :message)";
        
        $stmt = $pdo->prepare($sql);
        
        // Bind parameters
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':email', $data['Email']);
        $stmt->bindParam(':organization', $data['Organization']);
        $stmt->bindParam(':title', $data['Title']);
        $stmt->bindParam(':message', $data['Message']);

        // Execute the statement
        $stmt->execute();

        // Send success response
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Contact form submitted successfully'
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Database error: ' . $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
} 