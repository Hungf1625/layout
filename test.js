function openSideBar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if(sidebar && overlay){
        sidebar.style.transform = "translateX(0)";

        overlay.style.display = "block";
    }
}

function openUserAuthSideBar(){
    const userAuthSidebar = document.getElementById('userAuthSideBar');
    const overlay = document.getElementById('overlay');
    if(userAuthSidebar && overlay){
        userAuthSidebar.style.transform = "translateX(0)";

        overlay.style.display = "block";
    }
}

function closeSideBar(){
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const userAuthSidebar = document.getElementById('userAuthSideBar');
    if(sidebar && overlay){
        sidebar.style.transform = "translateX(-200%)";
        sidebar.style.transition = "transform 0.5s ease-in-out";
        
        overlay.style.display = "none";
    }

    if(userAuthSidebar){
        userAuthSidebar.style.transform = "translateX(100%)";

        overlay.style.display = "none";
    }
}

console.log('Script đã được load!');