// Cloudinary presets needed for correct upload
// Change these in order to upload images to your own cloudinary account 
const apiKey = ""
const cloudName = ""
const uploadPreset = ""

// Pulls data from form and then uploads image
function onSubmit(e) {

  // Image link starter
  // By appending image id, you have a direct link to a file view of the image
  let imageURL = "https://drive.google.com/uc?id="
  
  // Initial team number
  // no team should have a number of 0...
  let teamNumber = 0;

  // Goes through all the questions and their responses
  for(const item of e.response.getItemResponses()) {

    // Title of each question, to check which question we want to grab data from 
    const title = item.getItem().getTitle()

    // Checks if the item contains the photo data, and that the image url hasn't been set yet
    if(title.toLowerCase().includes("photo") && imageURL === "https://drive.google.com/uc?id=") {
      // getResponse returns an array for image ids, so we get the first element, and append it to the url
      imageURL += (item.getResponse())[0]
    }

    // Checks if item contains the team number, then sets it to the team number
    if(title.toLowerCase().includes("team #")) teamNumber = item.getResponse()
    
  }

  // Ensures both of the pieces of data were actually changed and filled out
  if(imageURL !== "https://drive.google.com/uc?id=" && teamNumber !== 0){
    uploadImage(imageURL, teamNumber)
  } else {
    Logger.log("Error! Some data was not filled out!")
  }

}

// Uploads an image to cloudinary given a image url and team number
function uploadImage(imageURL, teamNumber) {
  
    /* Data includes
      * the image url,
      * the upload preset that allows unsigned uploads (no server calls yipee)
      * api key of your cloud
      * the tag (optional) which helps to group the team images by team number
    */
    const data = {
      "file": imageURL,
      "upload_preset": uploadPreset,
      "api_key": apiKey,
      "tags": String(teamNumber)
    }

    // Post request
    var options = {
      'method' : 'post',
      'payload' : data
    };

    // Api call
    UrlFetchApp.fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, options)
}