

import { setupApiContent } from "./../networkModule/getApiContent.js";
console.log("web app initializing");
const apiForThisProject = "http//:localhost:3000/videos";
setupApiContent().setApi(apiForThisProject);
