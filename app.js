//create prototypes
function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}
//add functions
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist)
  console.log(this)
}
Playlist.prototype.overallRating = function() {
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

//Dummy data
var library1 = new Library("90's Turkish Pop", "Dilan");
var playlist1 = new Playlist("Top Tarkan");
var playlist2 = new Playlist("Second Best Tarkan");
var track1 = new Track("Dudu", 5, 278);
var track2 = new Track("Bu Sarkilar da Olmasa", 4, 269);
var track3 = new Track("Gulumse Kaderine", 4, 229);
var track4 = new Track("Sorma Kalbim", 3, 277);
var track5 = new Track("Ask", 5, 260);
var track6 = new Track("Kuzu Kuzu", 5, 210);
