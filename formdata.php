<?php
session_start();

if(isset($_POST['name'])){
    
    $channel = isset($_POST['source']) ? $_POST['source'] : '';

    $source_utm = isset($_POST['source']) ? $_POST['source'] : '';
    if($source_utm == ''){
        $source_utm = "Web";
    }
    else {
        $source_utm = test_input($_POST['source']);
    }
    

    
    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $phone = test_input($_POST['phone']);
    $source = $source_utm;
    $medium = isset($_POST['medium'])?test_input($_POST['medium']):'';
    $campaign = isset($_POST['campaign'])?test_input($_POST['campaign']):'';
    $term = isset($_POST['term'])?test_input($_POST['term']):'';

    if (empty($name)) {
        echo "Name is required";
        exit;
    } else {
      // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        echo "Name must contain only characters";
        exit;
      }
    }

    if (empty($phone)) {
        echo "Mobile is required";
        exit;
    } else {
      // check if Mobile is well-formed

      if (!preg_match("/^[6-9]\d{9}$/",$phone)) {
        echo "Please enter a valid 10-digit Mobile number";
        exit;
      }
    }

    
    if (empty($email)) {
        echo "Email is required";
        exit;
    } else {
      // check if e-mail address is well-formed
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "You have entered an invalid email address!";
        exit;
      }
    }

  
  // $servername = 'localhost';
  // $username = "root";
  // $password = '';
  // $dbname = 'silverglades';

  $servername = 'localhost';
  $username = "root";
  $password = '';
  $dbname = 'foursdev';
    
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 

    $stmt = $conn->prepare("INSERT INTO lpleads4s (name, emailid, phone, utm_source, utm_medium, utm_campaign, utm_term) VALUES (:name, :emailid, :phone, :utm_source, :utm_medium, :utm_campaign, :utm_term)");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':emailid', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':utm_source', $source);
    $stmt->bindParam(':utm_medium', $medium);
    $stmt->bindParam(':utm_campaign', $campaign);
    $stmt->bindParam(':utm_term', $term);

    $stmt->execute();
    //echo "New records created successfully";
} catch(PDOException $e) {
  //echo "Error: " . $e->getMessage();
  $conn = null;
}
$conn = null;


    


    echo "success";

    $_SESSION['silverglades'] = "silverglades";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

 // $servername = 'localhost';
  // $username = "root";
  // $password = '';
  // $dbname = 'silverglades';

  $servername = 'localhost';
  $username = "root";
  $password = '';
  $dbname = 'foursdev';

    $conn = new mysqli($servername,$username,$password,$dbname);
  
    $data = mysqli_real_escape_string($conn, $data);
    return $data;
  }
?>