
export default function Sidebar(){
    const btnOpen = document.getElementById("sidebar-open");
    const btnClose = document.getElementById("sidebar-close");
    const sideBar = document.querySelector(".sidebar");

    btnOpen.addEventListener("click",()=>{
        // const screenWidth = window.screen.width
        if(!sideBar.classList.contains("sidebar--active") && document.body.offsetWidth <= 992){
            sideBar.classList.add("sidebar--active");
        }
    })

    btnClose.addEventListener("click",()=>{
        if(sideBar.classList.contains("sidebar--active")){
            sideBar.classList.remove("sidebar--active");
        }
    })
}