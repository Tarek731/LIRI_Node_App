var fs = require("fs")
var inquirer = require("inquirer");
var Twitter = require('twitter');
var Spotify = require('spotify');
var request = require('request');
var command = process.argv[2];
// importing key from twitter keys file so keys are not shown in liri
var omdbApiKey = keys.omdbApiKey;		
var keys = require('./keys.js');
// keys already in key file
var spotify =  new Spotify(keys.spotifyKey);

var client = new Twitter(keys.twitterKeys);
var movie = process.argv[3];



if (command === "my-tweets"){

	DisplayTweets();

}


// putting random twxt into an array
fs.readFile("random.txt", "UTF8", function (error, data) {

	if (error){

		return console.log(error);
	}

	console.log(data);
//will bring back what is in the text exactly

	var dataArr = data.split(",");
	//split the array where you have a comma

	console.log(dataArr);


var arrayLength = dataArr.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(dataArr[i]);
    //Do something
}
})



// bringing in keys from keys file using keys.twitterKeys


function DisplayTweets(){
	var params = {screen_name: 'triharder23'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets.text);
	  }
	  else {
	  	console.log(error);
	  }
	});
}

// spotify


spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});
// request

request('http://www.omdbapi.com/?apikey=' + keys.omdbApiKey + '&t=' + movie + '&plot=short&tomatoes=true', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});
// inquirer
inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!! 
});