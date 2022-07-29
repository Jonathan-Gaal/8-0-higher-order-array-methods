/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  let songs2 = [...songs];
  const sortedRuntimes = songs2.sort((a, b) => (a.runtimeInSeconds - b.runtimeInSeconds));
  return songs2
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  const songs2 = [...songs];
  // console.log(songs2)
  const sortedDescending = songs2.sort((a, b) => {
    if (a.artist.toLowerCase() < b.artist.toLowerCase()) return 1;
    if (a.artist.toLowerCase() > b.artist.toLowerCase()) return -1;
    return 0;
  });
  return sortedDescending;
}
  
  
  
  
  // let songs2 = [...songs]
  // return songs2.sort((a, b) => {
  //   if (a.artist > b.artist) {
  //     return -1 
  //   } else if (a.artist < b.artist) {
  //     return 1
  //   } else { return 0 }
  //   // return a.artist === b.artist ? 0 : a.artist > b.artist ? 1 : -1
  // }) 
  // return songs2

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  const songs2 = [...songs]
  console.log(songs2)
  const sortedAscending = songs2.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
  return sortedAscending;
}
  

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
