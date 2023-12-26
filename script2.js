    const clickBtn = document.getElementById("cta");
    const addedVideos = [];

function fetchVideoDataFromDatabase() {
    const tableVal = document.getElementById("tbody");

    fetch('get_video_data.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const videoData = data.data;

    videoData.forEach(video => {
        addedVideos.push(video.video_id);
        tableVal.innerHTML += `
        <tr>
        <td><input type="checkbox" class="videoCheckbox" data-video-id="${video.video_id}"></td>
                <td>${video.title}</td>
                <td>${video.published_at}</td>
                <td>${video.view_count}</td>
                <td>${video.like_count}</td>
                <td>${video.comment_count}</td>
            </tr>
        `
    });
} else if (data.status === 'empty') {
    console.log('No saved video data available.');
} else {
    console.error('Error fetching video data:', data.message);
}
})
.catch(error => {
console.error('Error:', error);
});
}

fetchVideoDataFromDatabase();


clickBtn.addEventListener("click", () => {

    const apiKey = 'AIzaSyCWebOLHLAy3qUmP13R-mglh67t1T31y6g';
    const videoLink = document.getElementById('videoLink').value;
    const videoId = getVideoId(videoLink);
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true); 

    xhr.onload = function () {
        if(xhr.readyState = 4 && xhr.status === 200) {
        if (!addedVideos.includes(videoId)) {
            addedVideos.push(videoId);
        } else {
            alert('This video is already added!');
            return;
        }

        fetch(apiUrl)
        .then((res) => res.json())
        .then((msg) => {
            const tableVal = document.getElementById("tbody");
            const videoData = msg.items[0];
            let video;
        
            if (videoData) {
                video = videoData;
        
                const snippet = video.snippet;
                const statistics = video.statistics;
                const newRowHTML = `
                <tr>
                <td>
                <input id="orange-checkbox" type="checkbox" class="videoCheckbox" data-video-id="${video.video_id}"></td>
                        <td>${snippet.title}</td>
                        <td>${snippet.publishedAt}</td>
                        <td>${statistics.viewCount}</td>
                        <td>${statistics.likeCount}</td>
                        <td>${statistics.commentCount}</td>
                    </tr>
                `;
                tableVal.innerHTML += newRowHTML;

                fetch('save_video_data.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: snippet.title,
                        publishedAt: snippet.publishedAt,
                        viewCount: statistics.viewCount,
                        likeCount: statistics.likeCount,
                        commentCount: statistics.commentCount,
                        videoId: videoId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        console.log('Video data saved successfully!');
                    } else {
                        console.error('Error saving video data:', data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        
                addedVideos.push(video.video_id);

        document.getElementById('videoInfo').innerHTML = "";
        document.getElementById('videoLink').value = "";
    } else {
        // document.getElementById('videoInfo').innerHTML = '<span>Error: Please check the video link.</span>';
        alert("Please check the video link")
    }
})
.catch(err => console.log(err));
        }
    }

    xhr.send();   
})

function getVideoId(url) {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp)
    return match ? match[1] : false;
}

document.getElementById('deleteBtn').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.videoCheckbox:checked');
    const videosToDelete = Array.from(checkboxes).map(checkbox => checkbox.dataset.videoId);

    if (videosToDelete.length === 0) {
        alert('Please select videos to delete.');
        return;
    }

    videosToDelete.forEach(videoId => {
        const rowToRemove = document.querySelector(`.videoCheckbox[data-video-id="${videoId}"]`).closest('tr');
        rowToRemove.remove();
        addedVideos.splice(addedVideos.indexOf(videoId), 1);
    });

    fetch('delete_video_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            videoIds: videosToDelete,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            console.log('Selected videos deleted successfully from the database!');
        } else {
            console.error('Error deleting videos from the database:', data.message);
        }
    })
    .catch(error => {
        console.error('Error deleting videos:', error);
    });
});