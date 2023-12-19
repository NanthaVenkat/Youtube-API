<?php 

include("index.php");

    $link = mysqli_connect("localhost", "root", "", "youtubeapi");

    if(!$link) {
        die("connection erro:" . mysqli_connect_error());
    }

    $query = "INSERT INTO channel_list(Title, Publish_date, Vviews, Likes, VComments) values($title, $pDate, $views, $likes, $comments)";

    $result = mysqli_query($link, $query);

    if($result) {
        echo "successfullt inserted";
    } else {
        echo "Error while inseted data";
    }
?>