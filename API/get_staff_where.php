<?php
include 'config.php';

// Create connection
$conn = new mysqli($host_name, $host_user, $host_password, $database_name);
if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}

$json = json_decode(file_get_contents('php://input'), true);


$sql = "SELECT * FROM staff WHERE SID LIKE '%$_GET[id]%' or SName LIKE '%$_GET[id]%'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row[] = $result->fetch_assoc()) {
        $tem = $row;
        $json = json_encode($tem);
    }
} else {
    echo "No Results Found.";
}
echo $json;
$conn->close();
