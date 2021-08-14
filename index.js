window.addEventListener("load", () =>{
     const sounds = document.querySelectorAll(".sounds");
     const pads = document.querySelectorAll(".pads div");
     const visual = document.querySelector(".visual");
     const colors = [
         "#aac9ce",
         "#b684c2",
         "#c9bbc8",
         "#e5c1cd",
         "#f3dbcf",
         "#dee2ff"

     ];

     pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
             sounds[index].currentTime = 0;
             sounds[index].play();
             createBubbles(index);
        });
    });

    // create function to make bubbble

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]; 
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
           visual.removeChild(this);
        });
    }
});