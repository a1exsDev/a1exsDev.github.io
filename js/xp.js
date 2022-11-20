var docById = document.getElementById;
var docByClass = document.getElementsByClassName;
var secs = 0;
var xp = 0;

function updateTimer() {
    secs += 1;
    docById("timer").innerHTML = secs;
    docByClass("xp").innerHTML = xp;
}

function updateXp() {
    xp += 1;
}

setInterval(updateXp, 60000);
setInterval(updateTimer, 1000);
