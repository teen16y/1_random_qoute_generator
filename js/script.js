/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
Created quotes object array
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
Created getRandomQuote function
1. It pick a quote from quotes array
2. If picked quote is same with prev quote, it implement fucntion again until it pick quote different with prev one
(by 재귀함수)
***/
let prevIndex = 0 ;
function getRandomQuote(quotes) {
  let index = Math.floor(Math.random()*quotes.length)
  console.log(`prev: ${prevIndex} / index: ${index}`);
  if( index !== prevIndex ) {
    prevIndex = index;
    return quotes[index];
  } else {
    return getRandomQuote(quotes); // 재귀를 할때는 꼭 return 함수를 넣어 줘야한다.
  }

}

/***
  Create printQuote funtion
  1. It select whole 'quote-box' div element and change it
  2. I made htmlStr
  3. I made if statement to check citation and year keyword's existance.
***/
function printQuote() {
  let quote = getRandomQuote(quotes);
  let htmlStr = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  if(quote.citation) {
    htmlStr +=`<span class="citation">${quote.citation}</span>`;
  }

  if(quote.year){
    htmlStr +=`<span class="year">${quote.year}</span>`;
  }
  htmlStr += '</p>'


  document.querySelector('.quote-box').innerHTML = htmlStr;

}



/***
 Select the button element and add Event listener for click event ( it changes the quote printed)
***/

let changeButton = document.querySelector('.loadQuote');
changeButton.addEventListener("click", printQuote, false);
