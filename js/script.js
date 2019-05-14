/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller"
  },
  {
    quote:"Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.",
    source: "Oscar Wilde"
  },
  {
    quote:"It is during our darkest moments that we must focus to see the light.",
    source:"Aristotle"
  },
  {
    quote:"Try to be a rainbow in someone's cloud.",
    source:"Maya Angelou"
  },
  {
    quote:"Find a place inside where there's joy, and the joy will burn out the pain.",
    source:"Joseph Campbell"
  },
  {
    quote:"Risking nothing is risking everything",
    source:"Youngjin Ha",
    citation:"On his room",
    year:"2019"

  },
]

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
let prevIndex = 0 ;
function getRandomQuote(quotes) {
  let index = Math.floor(Math.random()*quotes.length)
  console.log(`prev: ${prevIndex} / index: ${index}`);
  if( index !== prevIndex ) {
    prevIndex = index;
    return quotes[index];
  } else {
    return getRandomQuote(quotes);
  }

}

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote() {
  let quote = getRandomQuote(quotes);
  console.log(quote);
  let htmlStr = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  if(quote.citation) {
    htmlStr +=`<span class="citation">${quote.citation}</span>`;
  }
  if(quote.year){
    htmlStr +=`<span class="year">${quote.year}</span>`;
  }
  htmlStr += '</p>'


  document.getElementById('quote-box').innerHTML = htmlStr;



}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

let changeButton = document.getElementById('loadQuote');
changeButton.addEventListener("click", printQuote, false);

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
