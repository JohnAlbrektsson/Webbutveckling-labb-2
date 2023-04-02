
const handleClick = () =>{
    const element = document.querySelector("body");
    element.style.backgroundImage = "url('imgs/background2.jpg')";
    element.style.color= "White";
    console.log("klick");
}
document.querySelector("h1").addEventListener("click",handleClick);


const modal = document.querySelector(".modal-ee")
const overlay = document.querySelector(".overlay-ee")

let check1=0;
let check2=0;
let check3=0;
const handleKey = (evt) => {
    console.log(evt)
    if(evt.key == '1'){
        check1=1;
    }
    else if(evt.key == '3' && check1 == 1 && check2==0){
        check2=1;
    }
    else if(evt.key =='3'&& check2==1 && check3==0){
        check3=1;
    }
    else if(evt.key =='7' && check3==1){
        modal.classList.remove("hidden");
        overlay.classList.add("hidden");
    }
    else{
        check1=0;
        check2=0;
        check3=0;
    }
}
document.querySelector("body").addEventListener("keydown",handleKey);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
document.querySelector(".btn-close").addEventListener("click",closeModal);

