<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required_fields = ['companyName', 'founderName', 'email', 'industrySector', 'stage', 'motivation'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: {$field}"]);
        exit();
    }
}

try {
    require_once '../config/database.php';
    
    // Create database instance and get connection
    $database = new Database();
    $conn = $database->getConnection();
    
    // Start transaction
    $conn->beginTransaction();

    try {
        // Prepare SQL statement
        $sql = "INSERT INTO incubationprogram (
            VentureName,
            FounderName,
            Email,
            IndustrySector,
            Stage,
            MotivationStatement
        ) VALUES (:companyName, :founderName, :email, :industrySector, :stage, :motivation)";
        
        $stmt = $conn->prepare($sql);
        
        if (!$stmt) {
            throw new Exception("Failed to prepare statement");
        }
        
        // Bind parameters
        $stmt->bindParam(':companyName', $data['companyName']);
        $stmt->bindParam(':founderName', $data['founderName']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':industrySector', $data['industrySector']);
        $stmt->bindParam(':stage', $data['stage']);
        $stmt->bindParam(':motivation', $data['motivation']);
        
        // Execute the statement
        if (!$stmt->execute()) {
            throw new Exception("Failed to execute statement");
        }
        
        // Get the inserted ID
        $insertedId = $conn->lastInsertId();
        
        // Commit transaction
        $conn->commit();
        
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'message' => 'Application submitted successfully',
            'applicationId' => $insertedId
        ]);
        
    } catch (Exception $e) {
        // Rollback transaction on error
        if ($conn->inTransaction()) {
            $conn->rollBack();
        }
        throw $e;
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Server error occurred',
        'message' => $e->getMessage()
    ]);
}
?> 