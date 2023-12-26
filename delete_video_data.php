<?php

include ("db_conn.php");

$data = json_decode(file_get_contents("php://input"));
$videoIds = $data->videoIds;

$sql = "DELETE FROM video_data WHERE video_id IN ('" . implode("','", $videoIds) . "')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>
