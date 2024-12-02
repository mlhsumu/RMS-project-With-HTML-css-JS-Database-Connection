<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password is empty
$dbname = "rms_project"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Check if data is received
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = json_decode(file_get_contents("php://input"), true);

   
    if (empty($data['name']) || empty($data['phone']) || empty($data['address']) || empty($data['paymentMethod']) || empty($data['cart']) || !isset($data['totalPrice'])) {
        echo json_encode(["success" => false, "message" => "All fields are required."]);
        exit;
    }


    $name = $conn->real_escape_string($data['name']);
    $phone = $conn->real_escape_string($data['phone']);
    $address = $conn->real_escape_string($data['address']);
    $payment_method = $conn->real_escape_string($data['paymentMethod']);
    $cart_items = $conn->real_escape_string(json_encode($data['cart'])); 
    $total_price = $data['totalPrice'];

    
    $stmt = $conn->prepare("INSERT INTO orders (name, phone, address, payment_method, cart_items, total_price) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssd", $name, $phone, $address, $payment_method, $cart_items, $total_price);


    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Order submitted successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    
    $stmt->close();
}


$conn->close();
?>
