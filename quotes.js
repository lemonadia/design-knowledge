const quoteTag = document.querySelector("h1");
const bodyTag = document.querySelector("body");
const authorTag = document.querySelector("p");
const randomTag = document.querySelector("img");

let data = [];

// fetch("https://api.superhi.com/api/test/quotes/")
//   .then(response => response.json())
//   .then(jsonData => {
//     data = jsonData;
//     getQuote();
//   });

const getQuote = function() {
  //   if (data.length > 0) {
  //     const randomNumber = Math.floor(Math.random() + data.length);
  //     const randomQuote = data[randomNumber];

  //     quoteTag.innerHTML = randomQuote.quote;
  //     authorTag.innerHTML = randomQuote.author;
  //   }
  fetch("https://api.superhi.com/api/test/quotes/random")
    .then(response => response.json())
    .then(jsonData => {
      quoteTag.innerHTML = "&ldquo;" + jsonData.quote + "&rdquo;";
      authorTag.innerHTML = "-" + jsonData.author;

      if (jsonData.quote.length > 80) {
        quoteTag.classList.add("long");
      } else {
        quoteTag.classList.remove("long");
      }

      bodyTag.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`;
    });
};

getQuote();

randomTag.addEventListener("click", function() {
  getQuote();
});
