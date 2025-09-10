// Get all necessary DOM elements
const addBtn = document.getElementById("cta");
const clearBtn = document.getElementById("clear-btn");
const videoLinkInput = document.getElementById("videoLink");
const videoTableBody = document.getElementById("tbody");
const videoInfoMessage = document.getElementById("videoInfo");
const videoPlayerContainer = document.getElementById("player"); // New: Get the player container

// Use a simple array to keep track of added videos
const addedVideos = [];

// IMPORTANT: Replace with your actual YouTube Data API key
const apiKey = 'AIzaSyCWebOLHLAy3qUmP13R-mglh67t1T31y6g';

// Function to extract the video ID from a YouTube URL
function getVideoId(url) {
    // This regular expression finds the 11-character video ID
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Function to display messages to the user
function showMessage(message, isError) {
    videoInfoMessage.textContent = message;
    videoInfoMessage.style.color = isError ? 'red' : 'green';
}

// New: Function to embed the YouTube video
function embedVideo(videoId) {
    videoPlayerContainer.innerHTML = `
        <iframe 
            src="https://lite-youtube-embed-iframe.vercel.app/embed/${videoId}" loading="lazy">
        </iframe>
    `;
}
// New: Function to clear the embedded video
function clearEmbeddedVideo() {
    videoPlayerContainer.innerHTML = '';
}

// Main function to fetch video data from the YouTube API
function fetchVideoData(videoId) {
    // Construct the API URL with the video ID and API key
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;

    // Make the API request using fetch()
    fetch(apiUrl)
        .then(response => {
            // Check if the response was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data
        })
        .then(data => {
            const videoData = data.items[0];
            if (videoData) {
                // If video data is found, extract the snippet and statistics
                const snippet = videoData.snippet;
                const statistics = videoData.statistics;

                // Create a new table row and add it to the table body
                const newRow = `
                    <tr>
                        <td>${snippet.title}</td>
                        <td>${new Date(snippet.publishedAt).toLocaleDateString()}</td>
                        <td>${statistics.viewCount.toLocaleString()}</td>
                        <td>${statistics.likeCount ? statistics.likeCount.toLocaleString() : 'N/A'}</td>
                        <td>${statistics.commentCount ? statistics.commentCount.toLocaleString() : 'N/A'}</td>
                    </tr>
                `;
                videoTableBody.innerHTML += newRow;

                // Add the video ID to our tracker array
                addedVideos.push(videoId);

                // *** Call the new embedVideo function here ***
                embedVideo(videoId);

                showMessage('Video information added successfully and embedded.', false);
            } else {
                showMessage('Video not found. Please check the link.', true);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            showMessage('Error fetching video data. Please check your network or API key.', true);
        });
}

// Event listener for the "Add" button click
addBtn.addEventListener("click", () => {
    const videoLink = videoLinkInput.value.trim();
    if (!videoLink) {
        showMessage('Please enter a video link.', true);
        return;
    }

    const videoId = getVideoId(videoLink);
    if (!videoId) {
        showMessage('Invalid YouTube video link.', true);
        return;
    }

    // Check if the video is already in our array
    if (addedVideos.includes(videoId)) {
        showMessage('This video has already been added!', true);
        // If already added, just embed it again
        embedVideo(videoId);
        return;
    }

    showMessage('Fetching video data...', false);
    fetchVideoData(videoId);
    videoLinkInput.value = ''; // Clear the input field
});

// Event listener for the "Clear" button
clearBtn.addEventListener("click", () => {
    videoTableBody.innerHTML = ''; // Clear all rows
    addedVideos.length = 0; // Clear the array
    clearEmbeddedVideo(); // *** Clear the embedded video ***
    showMessage('Table and embedded video cleared.', false);
});