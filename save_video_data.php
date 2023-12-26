<?php

include ("db_conn.php");

$data = json_decode(file_get_contents("php://input"));

$title = $data->title;
$publishedAt = $data->publishedAt;
$viewCount = $data->viewCount;
$likeCount = $data->likeCount;
$commentCount = $data->commentCount;
$videoId = $data->videoId;


$sql = "INSERT INTO video_data (title, published_at, view_count, like_count, comment_count, video_id) VALUES ('$title', '$publishedAt', $viewCount, $likeCount, $commentCount, '$videoId')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success"]);

} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

// $conn->close();
mysqli_close($conn);
?>
