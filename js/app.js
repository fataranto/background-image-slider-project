const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

let currentPic = [pictures[0], 0];
let currentIndex = 0;
let nextIndex = 0;
// buena suerte



nextImage = function(){
  //console.log(currentPic, currentIndex);
  
  if (currentPic[1] == pictures.length-1){
    nextPic = [pictures[0], 0];
    nextIndex = 0;
  } else {
    nextIndex++;
    nextPic = [pictures[nextIndex], nextIndex];
  }

  //primero actualizo la imagen
  currentPic = nextPic;
  currentIndex = nextIndex;

  //luego cargo la imagen currentPic
  img = `./img/${currentPic[0]}.jpeg`;
  //console.log(img);
  document.querySelector(".img-container").style.backgroundImage=`url(${img})`;
}

prevImage = function(){
  //console.log(currentPic, currentIndex);
  
  if (currentPic[1] == 0){
    nextPic = [pictures[pictures.length-1], pictures.length-1];
    nextIndex = pictures.length-1;
  } else {
    nextIndex--;
    nextPic = [pictures[nextIndex], nextIndex];
  }

  //primero actualizo la imagen
  currentPic = nextPic;
  currentIndex = nextIndex;

  //luego cargo la imagen currentPic
  img = `./img/${currentPic[0]}.jpeg`;
  //console.log(img);
  document.querySelector(".img-container").style.backgroundImage=`url(${img})`;
}

const nextElement = document.querySelector(".btn-right");
nextElement.addEventListener("click", nextImage);

const prevElement = document.querySelector(".btn-left");
prevElement.addEventListener("click", prevImage);