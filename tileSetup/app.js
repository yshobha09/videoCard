const apiURL = "http://192.168.1.213:3000/videos";
async function fetchVideoData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log("here is raw data")
        console.log(data);
        setupTile(data);
    } catch (error) {
        console.log("Error in fetching data", error);
    }
}

function setupTile(videos) {
    const container = document.getElementById("videoGrid");

    videos.forEach(video => {
        const videoTile = document.createElement("div");
        videoTile.classList.add("video-tile");

        

        const videoEl = document.createElement("video");
        videoEl.src = video.videoUrl;
        videoEl.controls = true;
        videoEl.poster = video.thumbnailUrl;


        const videoInfo = document.createElement("p");
        videoInfo.classList.add("video-info");
        videoInfo.textContent = video.description;



        videoTile.appendChild(videoEl);
        videoTile.appendChild(videoInfo);

        container.appendChild(videoTile);


    })


}

fetchVideoData();



//"https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"