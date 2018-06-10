function myFunction() {
    var x = document.getElementById("mynavtop");
    if (x.className === "navtop") {
        x.className += " responsive";
    } else {
        x.className = "navtop";
    }
}