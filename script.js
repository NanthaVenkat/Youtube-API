const clickBtn = document.getElementById("cta");
const addedVideos = [];

clickBtn.addEventListener("click", () => {

    const apiKey = 'AIzaSyCWebOLHLAy3qUmP13R-mglh67t1T31y6g';
    const videoLink = document.getElementById('videoLink').value;
    const videoId = getVideoId(videoLink);
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;
    console.log(fetch(apiUrl))

  if (addedVideos.includes(videoId)) {
      alert('This video is already added!');
      return;
  }

    fetch(apiUrl)
        .then((res) => res.json())
        .then((msg) =>
        {
            const tableVal = document.getElementById("tbody");
            const videoData = msg.items[0];
            if (videoData) {
                const snippet = videoData.snippet;
                const statistics = videoData.statistics;

                tableVal.innerHTML += `
                    <td>${snippet.title}</td>
                    <td>${snippet.publishedAt}</td>
                    <td>${statistics.viewCount}</td>
                    <td>${statistics.likeCount}</td>
                    <td>${statistics.commentCount}</td>
                    `;
                    addedVideos.push(videoId);

                    document.getElementById('videoInfo').innerHTML = "";
                    // console.log(getVideoId(videoLink));
            } else {
                document.getElementById('videoInfo').innerHTML = '<span>Error: Please check the video link.</span>';
            }

        })
        .catch(err => console.log(err));
})     

        function getVideoId(url) {
            const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(regExp);

            return match ? match[1] : false;
        }

