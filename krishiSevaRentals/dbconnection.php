<?php
// Database connection configuration
$host = "localhost";
$user = "root";
$pass = "";
$db   = "krishiseva";

// Attempt connection gracefully
$con = @mysqli_connect($host, $user, $pass, $db);

if (!$con) {
    // If database connection fails, provide helpful notice or fallback
    // error_log("Database connection failed: " . mysqli_connect_error());
}
?>
