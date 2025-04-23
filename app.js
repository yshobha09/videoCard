
makeApiCall();

function makeApiCall() {

    console.log("entered the make api call function")

    fetch("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")
        .then((res) => {
            console.log("Resolved", res)
            return res.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {
            console.log("Errorrr!!", e)
        });

}