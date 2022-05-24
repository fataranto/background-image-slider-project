const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

let currentPic = [pictures[0], 0];
let currentIndex = 0;
// buena suerte


nextImage = function(){
  
  if (currentPic[1] == pictures.length-1){
    currentPic = [pictures[0], 0];
    currentIndex = 0;
  } else {
    currentPic = [pictures[currentIndex++], currentIndex++]
  }
  console.log(currentPic);
}