
export default function Player() {
    const btnPlay = document.querySelector(".btn-play");
    const player = document.querySelector(".media-about");
    const blackDrop = document.querySelector(".back-drop");

    btnPlay.addEventListener("click", (event) => {
        player.play();
        blackDrop.style.display = "none";
        player.setAttribute("controls", true);
    })

    player.addEventListener("play", (event) => {
   
        player.setAttribute("controls", true);
    })

    player.addEventListener("ended", (event) => {
     
        player.removeAttribute("controls");
        blackDrop.style.display = "flex";
    })
    // player.addEventListener("pause", (event) => {
    //     event.stopPropagation()
    //     console.log("pause");
    //     player.removeAttribute("controls");
    //     blackDrop.style.display = "flex";
    // })

}