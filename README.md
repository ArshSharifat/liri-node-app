# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:
  * concert-this
  * spotify-this-song
  * movie-this
  * do-what-it-says

Technologies used:
  * Node.js
  * Javascript
  * npm packages: require, bands in town, spotify, moment.js, omdb

How to Run LIRI-Bot

1:install all the npm packages in terminal 
  * npm install
  * npm install omdb
  * npm install --save bandsintown
  * npm install moment --save
  * npm install require
  * npm install spotify

2: node liri.js concert-this <artist/band name here> This will output the following information to your terminal window:
  * Name of the venue
  * Venue location
  * Date of the Event

3: node liri.js spotify-this-song <song name here> This will show the following information about the song in your terminal window 
  * Artist(s) 
  * The song's name 
  * A preview link of the song from Spotify 
  * The album 


4: node liri.js movie-this <movie name here> This will output the following information to your terminal window:
  * Title of the movie.
  * Year the movie came out
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

4: node liri.js do-what-it-says

This will output the text in random.txt file

****Link to watch LIRI in action: https://drive.google.com/file/d/1MdaFtvne98F2HPZW_8nuMZMnzcl_2XmY/view
