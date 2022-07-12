var prev=document.querySelector(".previous");
var next=document.querySelector(".next");
var Images=document.querySelector(".carousel-container").children;
var totalImages=Images.length;

var index=0;
prev.addEventListener('click',()=>{
    nextImage('prev');
})

next.addEventListener('click',()=>{
    nextImage('next');
})

function nextImage(direction){
    if(direction=="next"){
        index++;
        if(index==totalImages){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalImages-1;
        }
        else{
            index--;
        }
    }
    for(let i=0;i<totalImages;i++){
    Images[i].classList.remove("main");
    }
    Images[index].classList.add("main");
}
function automove(){
    setInterval(()=>{
        nextImage("next");
    }, 5000);
}

window.onload=automove;

