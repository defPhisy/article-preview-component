const shareButton = document.getElementById("share-button");
const footer = document.getElementById("footer");
const shareToggle = document.getElementsByClassName("share-toggle");

shareButton.onclick = function () {
  shareButton.classList.toggle("toggle-clr");
  footer.classList.toggle("toggle-bg-clr")

  for (const div of shareToggle) {
    div.classList.toggle("hidden");
  }
};
