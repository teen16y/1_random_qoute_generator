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
]

//Pick Random quote
function randomQuote(quotes) {
  let index = Math.floor(Math.random()*quotes.length)
  return quotes[index];
}

//Print quote on console
function printQuote(quote) {
  console.log(`${quote.quote} -- ${quote.source}`);
}

printQuote(randomQuote(quotes));
