<?php

include ("db_conn.php");

$sql = "SELECT * FROM video_data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $videoData = [];
    while ($row = $result->fetch_assoc()) {
        $videoData[] = $row;
    }
    echo json_encode(["status" => "success", "data" => $videoData]);
} else {
    echo json_encode(["status" => "empty"]);
}

$conn->close();
?>
