let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
onscroll = function () {
    if (scrollHeight > 300) {
        document.getElementById("side-bar").style.backgroundColor = "#000000c7";
    }
}

document.getElementById("btn-menu").onclick = function () {
    if (document.getElementById("menu").style.display == "none") {
        document.getElementById("menu").style.display = "block";
    }
    else {
        document.getElementById("menu").style.display = "none";
    }

}

document.getElementById("email").onmouseenter = function () {
    document.getElementById("email").style.borderColor = "red";
}
document.getElementById("email").onmouseleave = function () {
    document.getElementById("email").style.borderColor = "gray";
}
document.getElementById("name").onmouseenter = function () {
    document.getElementById("name").style.borderColor = "red";
}
document.getElementById("name").onmouseleave = function () {
    document.getElementById("name").style.borderColor = "gray";
}