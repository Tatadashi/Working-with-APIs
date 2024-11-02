const img = document.querySelector("img");

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

const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener('click', (e) => {
    getNewCatGif();
});

getNewCatGif();
