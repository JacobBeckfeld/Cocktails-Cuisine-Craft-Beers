<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> c5ea794c75093490681135754b8328eac96167e2
var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

<<<<<<< HEAD
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
=======
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
=======

// var searchFormEl = document.querySelector('#search-form');

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var formatInputVal = document.querySelector('#format-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

//   location.assign(queryString);
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);
>>>>>>> 882668334a5c4f57ca28467c4ddcf097ed801d8e






<<<<<<< HEAD
>>>>>>> c5ea794c75093490681135754b8328eac96167e2
=======
>>>>>>> 882668334a5c4f57ca28467c4ddcf097ed801d8e