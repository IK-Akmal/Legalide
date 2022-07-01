
export default function Player() {
    const btnPlay = document.querySelector(".btn-play");
    const player = document.querySelector(".media-about");
    const blackDrop = document.querySelector(".back-drop");

    btnPlay.addEventListener("click", (event) => {
        player.play();
        blackDrop.style.display = "none";
    })

    player.addEventListener("play", () => {
        player.setAttribute("controls", true);
    })

    player.addEventListener("ended", () => {
        player.removeAttribute("controls");
        blackDrop.style.display = "flex";
    })
    player.addEventListener("pause", () => {
        player.removeAttribute("controls");
        blackDrop.style.display = "flex";
    })

}