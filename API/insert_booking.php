<?php

include 'config.php';

$message = '';

$connection = new mysqli($host_name, $host_user, $host_password, $database_name);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$json = json_decode(file_get_contents('php://input'), true);

$GTour = 0;
$TTour = 0;
$Lunch = 0;
if ($json['GTour']) {
    $GTour = 1;
}
if ($json['TTour']) {
    $GTour = 1;
}
if ($json['Lunch']) {
    $Lunch = 1;
}
$query = "INSERT INTO booking(CID,GTour,TTour,LunchDinner) values($json[CID],$json[GTour],$json[TTour],$json[Lunch])";

$query_result = $connection->query($query);

if ($query_result === true) {
    $message = 'Success!';
} else {
    $message = 'CID has been already in database';
}

echo json_encode($message);

$connection->close();
