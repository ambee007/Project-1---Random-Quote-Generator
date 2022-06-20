/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` library with quote, source, citation, and year objects for 5 quotes
***/
const quotes = [
  {
      quote: 'Everything was beautiful and nothing hurt.',
      source: 'Kurt Vonnegut',
      citation:'Vonnegut, K. (1999). Slaughterhouse-Five. New York City: Dial Press.',
      year: '1999',
  },
  {
      quote: "It's the possibility of having a dream come true that makes life interesting",
      source: "Deckle Edge",
      citation: "Edge, D. (2014). The Alchemist, 25th Anniversary: A Fable About Following Your Dream. New York: HarperOne.",
      year: "2014",
  },
  {
      quote: "Beware; for I am fearless, and therefore powerful.",
      source: "Mary Shelley",
      citation: "Shelley, M. (1994). Frankenstein. Mineola: Dover Publications.",
      year: "1994",
  },
  {
      quote: "My garden is riotous, unholy, deliriously glorious! I wish you were here.",
      source: "Isabella Stewart Gardner",
      citation: "Gardner, I. S. (1898, June 24). Letter to Bernard Berenson. Boston, MA.",
      year: "1898",
  },
  {
      quote: "Honesty all pays off with open minds. Honesty all pays off with open hearts",
      source: "Tiny Moving Parts",
      citation: "Parts, T. M. (2013). Vacation Bible School. Minnesota, USA.",
      year: "2013",
  },
];


/***
 * `getRandomQuote`function to get a number between 0 and 5 to index to an object in the quotes array - there are 5 quotes
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber]; 
};


function colorgen() {
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}


/***
 * `printQuote` function to build the html that displays on the browser. 
 * first calls the random quote and assigns it to a variable
 * then creates the quote and source html text to appear on the page - from the variable of the random quote call
 * then checks to see if there is a citation for the quote - adds it to the html text if there is a citation
 * then checks to see if there is a year - adds it to the html text if there is
 * Then displays the final html to the page
***/
function printQuote(arr) {
  let quoter = getRandomQuote();
  let html =  `<p class="quote" tags="liberating"> ${quoter.quote}  </p>`;
      html += `<p class="source"> ${quoter.source}`;

  if (quoter.citation !== null) {
      html +=`<span class="citation"> ${quoter.citation} </span>`
  }

  if (quoter.year !== null) {
      html += `<span class="year"> ${quoter.year} </span>`
  }

  html += `</p>`
  
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = colorgen();
}

//print new random quote and change color every 10 seconds or 10000 milliseconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);