const Quote = document.getElementById('quote');
const Author = document.getElementById('author');

const ApiUrl = "https://api.quotable.io/quotes/random";

async function GetQuote(params) {

    const response =  await fetch(ApiUrl);
    const result = await response.json();

    console.log(result);

    Quote.innerText = result[0].content;
    Author.innerText =  result[0].author;
  
}

GetQuote();

function Tweet(params) {

    window.open("https://twitter.com/intent/tweet?text=" + Quote.innerText + " ━ By: " + Author.innerText , "Twitte-Tweet" , "Width=700 , Height-700" );
    
}

