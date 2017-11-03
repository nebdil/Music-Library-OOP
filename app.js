function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist)
  console.log(this)
}

var library1 = new Library("90's Turkish Pop", "Dilan");

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function() {
//calculate the rating by averaging the rating of its tracks
  let num = this.tracks.length;
  let sum = 0;
  this.tracks.forEach(function(e){
    sum += e.rating;
  })
  let average = sum / num;
  console.log(average);
  return average;
}

Playlist.prototype.totalDuration = function() {
//sum the duration of all of its tracks
  let sum = 0;
  this.tracks.forEach(function(e){
    sum += e.length;
  })
  console.log(sum);
  return sum;
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
  console.log(this)
}

var playlist1 = new Playlist("Top Tarkan");
var playlist2 = new Playlist("Second Best Tarkan");

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
  // rating 1-5 && length integer in seconds
}

var track1 = new Track("Dudu", 5, 278);
var track2 = new Track("Bu Sarkilar da Olmasa", 4, 269);
var track3 = new Track("Gulumse Kaderine", 4, 229);
var track4 = new Track("Sorma Kalbim", 3, 277);
var track5 = new Track("Ask", 5, 260);
var track6 = new Track("Kuzu Kuzu", 5, 210);

/*
    A Library has a name and a creator (both strings)
        These are the only things required in order to create a music library
    A Library has many playlists (starts as an empty array)
        Playlist objects can be added to an instance of a library
    A Playlist also has many tracks
    A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track

Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.
*/
