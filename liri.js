// environment variables 
require("dotenv").config();

// Import keys
var keys = require("./key.js");
// Spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Write to random.txt
var fs = require("fs");

// Moment JS
var moment = require('moment');

// Bands In Town
var requestBands = require('request');

// OMDB
var request = require("request");

// user input commands
var command = process.argv[2];
//slice and add + to make multi word commands friendly with queryURLs
var userInput = process.argv.slice(3).join('+');




// Case Statement 
switch (command) {

    case "spotify-this-song":
        spotify.search({ type: 'track', query: userInput, limit: 1 }, function (error, data) {
            if (error) {
                console.log('------Error-----');

            } else {
                console.log("------Artists-----");
                console.log(data.tracks.items[0].artists[0].name);

                console.log("------Song Name-----");
                console.log(data.tracks.items[0].name);

                console.log("-------Preview Link-----");
                console.log(data.tracks.items[0].preview_url);

                console.log("-------Album-----");
                console.log(data.tracks.items[0].album.name);
            }
        });
        break;

    case "concert-this":
        requestBands("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp", function (error, response, body) {
            // Print the error if one occurred

            if (!error && response.statusCode === 200) {
                // Format body to JSON
                body = JSON.parse(body);
                // Print to the console for the Bands in Town
                console.log("------Artist Line Up-----");
                console.log(body[0].lineup);

                console.log("------Venue-----");
                console.log(body[0].venue.name);

                console.log("------Location-----");
                console.log(body[0].venue.city + ", " + body[0].venue.region);

                console.log("------Event Date-----");
                console.log(moment(body[0].datetime).format());
            }
        });
        break;

    case "movie-this":

        var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

        // This line is just to help us debug against the actual URL.
        console.log(queryUrl);

        request(queryUrl, function (error, response, body) {

            // If the request is successful
            if (!error && response.statusCode === 200) {


                console.log("------Title-----");
                console.log(JSON.parse(body).Title);

                console.log("------Year-----");
                console.log(JSON.parse(body).Year);

                console.log("------IMDB Rating-----");
                console.log(JSON.parse(body).imdbRating);

                console.log("------Rotten Tomatoes Rating-----");
                console.log(JSON.parse(body).Ratings[1]);

                console.log("------Country-----");
                console.log(JSON.parse(body).Country);

                console.log("------Plot-----");
                console.log(JSON.parse(body).Plot);

                console.log("------Cast-----");
                console.log(JSON.parse(body).Actors);
            }
        });
        break;

    case "do-what-it-says":
    
  
       //Read random.txt file
       fs.readFile("random.txt", "utf8", function (error, data) {
        if (!error);
        console.log(data.toString());
        //split text with comma 
        var cmds = data.toString().split(` `);
    });


        break;
    
}



 

  

  

