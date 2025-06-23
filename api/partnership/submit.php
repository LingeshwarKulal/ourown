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

// Validate required fields
if (
    !empty($data->organizationName) &&
    !empty($data->contactPerson) &&
    !empty($data->email) &&
    !empty($data->phone) &&
    !empty($data->partnershipType) &&
    !empty($data->industry) &&
    !empty($data->companySize) &&
    !empty($data->proposal)
) {
    try {
        // Prepare the SQL query
        $query = "INSERT INTO partner 
                (OrganizationName, ContactPerson, Email, phone, PartnershipInterest, BriefProposal, PartnershipType, IndustrySector, CompanySize) 
                VALUES 
                (:organizationName, :contactPerson, :email, :phone, :partnershipType, :proposal, :partnershipType, :industry, :companySize)";

        $stmt = $db->prepare($query);

        // Sanitize and bind the data
        $organizationName = htmlspecialchars(strip_tags($data->organizationName));
        $contactPerson = htmlspecialchars(strip_tags($data->contactPerson));
        $email = htmlspecialchars(strip_tags($data->email));
        $phone = htmlspecialchars(strip_tags($data->phone));
        $partnershipType = htmlspecialchars(strip_tags($data->partnershipType));
        $industry = htmlspecialchars(strip_tags($data->industry));
        $companySize = htmlspecialchars(strip_tags($data->companySize));
        $proposal = htmlspecialchars(strip_tags($data->proposal));

        // Bind parameters
        $stmt->bindParam(":organizationName", $organizationName);
        $stmt->bindParam(":contactPerson", $contactPerson);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":phone", $phone);
        $stmt->bindParam(":partnershipType", $partnershipType);
        $stmt->bindParam(":industry", $industry);
        $stmt->bindParam(":companySize", $companySize);
        $stmt->bindParam(":proposal", $proposal);

        // Execute the query
        if($stmt->execute()) {
            http_response_code(201);
            echo json_encode(array(
                "message" => "Partnership application submitted successfully.",
                "status" => "success"
            ));
        } else {
            http_response_code(503);
            echo json_encode(array(
                "message" => "Unable to submit partnership application.",
                "status" => "error"
            ));
        }
    } catch(PDOException $e) {
        http_response_code(503);
        echo json_encode(array(
            "message" => "Database error: " . $e->getMessage(),
            "status" => "error"
        ));
    }
} else {
    http_response_code(400);
    echo json_encode(array(
        "message" => "Unable to submit partnership application. Required data is incomplete.",
        "status" => "error"
    ));
}
?> 