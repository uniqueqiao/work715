var index = 0;
var timer = null;
window.onload = function () {
    var buttons = document.getElementById("buttons").getElementsByTagName("a");
    var lunbo = document.getElementById("lunbo").getElementsByTagName("li");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].id = i;
        buttons[i].onclick = function () {
            seton2(this.id);
        }
        buttons[i].onmouseover = function () {
            clearInterval(timer);
        }
        buttons[i].onmouseout = function () {
            timer = setInterval(autoPlay, 4000)
        }
    }
    timer = setInterval(autoPlay, 4000);

};
function autoPlay() {
    var lunbo = document.getElementById("lunbo").getElementsByTagName("li");
    index++;
    if (index >= lunbo.length) {
        index = 0;

    }
    seton2(index);
}
function seton2(curIndex) {
    var buttons = document.getElementById("buttons").getElementsByTagName("a");
    var lunbo = document.getElementById("lunbo").getElementsByTagName("li");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = "";
        lunbo[i].style.display = "none";
    }
    buttons[curIndex].className = "on2";
    lunbo[curIndex].style.display = "block";
    index = curIndex;
}