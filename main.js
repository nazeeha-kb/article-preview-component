// using DOM we're retrieve footer
const socialIcons = document.getElementById("social-icons");
const userInfo = document.getElementById("user-info");
const footer = document.getElementById("footer");
const button = document.getElementById("btn");
const shareIcon = document.getElementById("share-icon");

console.log(socialIcons, userInfo);


function handleClick() {
  // hide / show
  socialIcons.classList.toggle("hidden");
  userInfo.classList.toggle("hidden");

  //   footer
  footer.classList.toggle("bg-grayish-blue-800");
  footer.classList.toggle("pb-10");
  footer.classList.toggle("py-5");

  //   button
  button.classList.toggle("bg-dark-blue");
  button.classList.toggle("bg-grayish-blue-200");

  // share icon
  shareIcon.classList.toggle("text-white");
  shareIcon.classList.toggle("text-grayish-blue-800");
}
