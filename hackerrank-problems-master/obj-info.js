function displayInformation() {
  for (var i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
      console.log("Already read " + "'" + library[i].title + "'" + " by " + library[i].author + ".");
    }
    else {
      console.log("You still need to read '" + library[i].title + "' by " + library[i].author + ".");
    }
  }
}
var library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }
];
displayInformation();
