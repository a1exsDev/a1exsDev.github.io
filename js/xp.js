setInterval(updateXp, 60000);
setInterval(updateTimer, 1000);

var secs = 0;
var xp = 0;

function updateTimer() {
    secs += 1;
    document.getElementById("timer").innerHTML = secs;
    document.getElementById("xp").innerHTML = xp;
}

function updateXp() {
    xp += 1;
}