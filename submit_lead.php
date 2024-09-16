<?php


$servername = "localhost";
$username = "root"; 
$password = "2005"; 
$dbname = "4s_form";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    // $name = trim($_POST['name']);
    // $email = trim($_POST['email']);
    // $phone = trim($_POST['phone']);
    $name ="jack";
    $email="happy@gmail.com";
    $phone="7556898478";

    $errors = [];

    if (empty($name) || strlen($name) < 2) {
        $errors[] = "Invalid name. It must be at least 2 characters long.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    if (!preg_match('/^\d{10,15}$/', $phone)) {
        $errors[] = "Invalid phone number. It should be numeric and between 10 and 15 digits.";
    }

    if (!empty($errors)) {
        echo json_encode(["success" => false, "message" => "Validation failed", "errors" => $errors]);
        exit();
    }
    $stmt = $conn->prepare("INSERT INTO leads (name, email, phone) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $phone);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Data inserted successfully"]);
    } else {
        throw new Exception("Error inserting data");
    }

    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
