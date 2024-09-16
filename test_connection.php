<?php
$servername = "localhost";
$username = "root";
$password = "2005";
$dbname = "4s_form";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

    $response = 'POST request received!';
    echo $response;
} else {
    http_response_code(405); 
    echo 'Method Not Allowed';
}

$conn->close();
?>

