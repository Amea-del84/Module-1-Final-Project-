//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  //const inputValue = document.getElementById("search-input").value; // edit this line for testing or put slash to test in main.test.js, delete slash for Live Server.
  
  const inputValue = "news_list"; //put slash after testing from main.test.js, and to test for Live Server. Then delete slash for testing in main.test.js
  let searchNews;
  for(let i = 0; i < newsList.length; i++){
    let lowerCaseNewsList = newsList[i].toLowerCase().replace(/[\W_]/g,"");
    let lowerCaseInputValue = inputValue.toLowerCase().replace(/[\W_]/g,"");
    if(lowerCaseNewsList.includes(lowerCaseInputValue)){
      return searchNews = newsList.filter( text => text.toLowerCase().replace(/[\W_]/g,"").includes(lowerCaseInputValue) ); //check if the inputValue exist in the newsList
    }
  }
  return newsList;
};

export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)
    return newsList.sort();
  } else {
    //Write your code here for sorting (descending)
    return newsList.sort().reverse();
  }
};