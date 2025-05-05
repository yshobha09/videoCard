


const apiURL = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";

async function getVideos(){
    const res = await fetch(apiURL);
    const videos = await res.json();
    setupVideoPlayers(videos);
}

function setupVideoPlayers(arrayOfVideos){
    // console.log(document)
    console.log(arrayOfVideos)

    const videoContainer = document.getElementById("container");
    // videoContainer.innerHTML = "All the videos";
    // for (let video of arrayOfVideos){
    if(arrayOfVideos.length > 0){
        const video = arrayOfVideos[0];
        const videoElement = document.createElement("video");
        console.log(video)
        console.log(videoElement)
        videoElement.src = video.videoUrl;
        videoElement.poster = video.thumbnailUrl;
        videoElement.controls = true;
        videoContainer.appendChild(videoElement);


    }
}

getVideos();