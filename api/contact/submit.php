<?php
// Set CORS headers
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400"); // 24 hours cache for preflight

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

header('Content-Type: application/json; charset=UTF-8');

include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

// Get posted data
$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
) {
    try {
        // Prepare the SQL query
        $query = "INSERT INTO contactus 
                (name, email, organization, title, message) 
                VALUES 
                (:name, :email, :organization, :role, :message)";

        $stmt = $db->prepare($query);

        // Sanitize and bind the data
        $name = htmlspecialchars(strip_tags($data->name));
        $email = htmlspecialchars(strip_tags($data->email));
        $organization = !empty($data->organization) ? htmlspecialchars(strip_tags($data->organization)) : null;
        $role = !empty($data->role) ? htmlspecialchars(strip_tags($data->role)) : null;
        $message = htmlspecialchars(strip_tags($data->message));

        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":organization", $organization);
        $stmt->bindParam(":role", $role);
        $stmt->bindParam(":message", $message);

        // Execute the query
        if($stmt->execute()) {
            http_response_code(201);
            echo json_encode(array("message" => "Contact form submitted successfully."));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "Unable to submit contact form."));
        }
    } catch(PDOException $e) {
        http_response_code(503);
        echo json_encode(array("message" => "Database error: " . $e->getMessage()));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to submit contact form. Data is incomplete."));
}
?> 