const drumenth = document.querySelectorAll(".drum").length;

console.log(drumenth);

for (let i = 0; i < drumenth; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function(e){
 makeNoise(this.innerHTML)
  });
}

function makeNoise(key){
    const sounds = new Audio()
  switch(key){
    case 'w': console.log("w working");
    break;
    case 'a': console.log("a working");
    break;
    case 's': console.log("s working");
    break;
    case 'd': console.log("d working");
    break;
    case 'j': console.log("j working");
    break;
    case 'k': console.log("k working");
    break;
    case 'l': console.log("l working");
    break;
    default : console.log("invalid data");
    break;
  }
}