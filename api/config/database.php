<?php
class Database {
    private $host = "localhost";
    private $database_name = "ourown";
    private $username = "root";     // Default XAMPP/WAMP username
    private $password = "";         // Default XAMPP/WAMP password
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->database_name, 
                $this->username, 
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo json_encode(array("message" => "Connection error: " . $e->getMessage()));
            exit();
        }
        return $this->conn;
    }
}
?> 