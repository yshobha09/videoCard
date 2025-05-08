const apiURL = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";
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

        const thumbnail = document.createElement("img");
        thumbnail.classList.add("thumbnail");
        // console.log(" here is new thumbnail === ")
        // console.log(thumbnail)
        // console.log(video.thumbnailUrl)
        // console.log("end of this stuff")
        thumbnail.src = video.thumbnailUrl;
        thumbnail.alt = video.title;


        const videoInfo = document.createElement("p");
        videoInfo.classList.add("video-info");
        videoInfo.textContent = video.description;



        videoTile.appendChild(thumbnail);
        videoTile.appendChild(videoInfo);

        container.appendChild(videoTile);


    })


}

fetchVideoData();
