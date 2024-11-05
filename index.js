function getNewCatGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=IIpHuHgFhbRo54JLaw9GvFo8HaCWeIeH&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

function searchGif(input) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=IIpHuHgFhbRo54JLaw9GvFo8HaCWeIeH&q=${input}&limit=5`,
    { mode: "cors" }
  )
    .then(function (response) {
      //check if valid API key
      if (response.ok) {
        return response.json();
      } else {
        alert("invalid API Key");
        throw new Error("invalid API Key");
      }
    })
    .then(function (response) {
      //GIFHY input cannot find any gifs matching, returning an empty array (ex. input blank)
      if (response.data.length > 0) {
        setSearchGifImages(response.data);
      } else {
        alert("Input not found in GIFHY API");
      }
    });
}

function setSearchGifImages(array) {
  const imageElements = document
    .getElementById("search-gif")
    .querySelectorAll("img");
  const NUMBER_OF_GIFS = 5;
  for (let i = 0; i < NUMBER_OF_GIFS; i++) {
    imageElements[i].src = array[i].images.original.url;
  }
}

const img = document.querySelector("img");

const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", (e) => {
  getNewCatGif();
});

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", (e) => {
  const input = document.getElementById("search");

  searchGif(input.value);
});

getNewCatGif();
