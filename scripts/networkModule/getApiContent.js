let api = "";
let response = null;

export function setupApiContent(){
    console.log("setupApiContent")
    let contentApi={};
    contentApi.setApi = function(apiUrl){
        console.log("setApi", apiUrl);
        setApiInternal(apiUrl);
    };
    contentApi.makeApiCall = function(){makeApiCallInternal(api)};
    contentApi.getApiResponse = function(){getApiResponseInternal()};
    return contentApi;
}

function setApiInternal(apiUrl){
    api =  apiUrl;
}

function makeApiCallInternal(api) {
    fetch(api)
        .then((response) => response.json())
        .then((data) => setApiResponseInternal(data))
}

function setApiResponseInternal(apiResponseData){
    response = apiResponseData;
}

function getApiResponseInternal(){
    return response
}