 function myFunction() {
    const navContent = document.getElementById("myTopnav");
    if (navContent.className === "topnav") {
        navContent.className += " responsive";
    } else {
        navContent.className = "topnav";
    }
}