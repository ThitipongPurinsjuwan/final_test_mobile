<?php
include 'config.php';

// Create connection
$conn = new mysqli($host_name, $host_user, $host_password, $database_name);
if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT CID FROM customer WHERE CName = '$_GET[id]'";

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
