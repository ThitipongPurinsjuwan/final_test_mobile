<?php
//1. เชื่อมต่อ database: 
include('config2.php');  //ไฟล์เชื่อมต่อกับ database ที่เราได้สร้างไว้ก่อนหน้าน้ี
//2. query ข้อมูลจากตาราง: 
$query = "SELECT * FROM staff" or die("Error:" . mysqli_error());
//3.เก็บข้อมูลที่ query ออกมาไว้ในตัวแปร result . 
$result = mysqli_query($con, $query);

$row = mysqli_fetch_array($result);

echo "<pre>";
print_r($row);
echo "</pre>";

mysqli_close($con);
