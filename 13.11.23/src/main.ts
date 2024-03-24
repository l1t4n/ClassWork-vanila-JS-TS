import './style.css'

const getIMG = document.getElementById("getIMG");
const SHphoto = document.getElementById("SHphoto");
const SHpost = document.getElementById("SHpost");

const post = document.getElementById("post");

const data = await fetch('https://jsonplaceholder.typicode.com/photos');
const server = await data.json();

console.log(server);

function getRandomID() {
  const mathRandom = Math.random().toString()
  const randomID = mathRandom.slice(3,5);
  return randomID;
}








// function getImg(params:) {
  
// }
