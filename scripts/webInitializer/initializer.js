

import { setupApiContent } from "./../networkModule/getApiContent.js";
console.log("web app initializing");
const apiForThisProject = "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";

setupApiContent().setApi(apiForThisProject);
