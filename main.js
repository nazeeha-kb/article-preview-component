// using DOM we're retrieve footer
const socialIcons = document.getElementById("social-icons");
const button = document.getElementById("btn");
const shareIcon = document.getElementById("share-icon");

function handleClick() {
  // hide / show
  socialIcons.classList.toggle("hidden");

  //   button
  button.classList.toggle("bg-dark-blue");
  button.classList.toggle("bg-grayish-blue-200");
  button.classList.toggle("bottom-6");
  button.classList.toggle("bottom-8");

  // share icon
  shareIcon.classList.toggle("text-white");
  shareIcon.classList.toggle("text-grayish-blue-800");
}
