var docById = document.getElementById,
    docByClass = document.getElementsByClassName,
    secs = 0,
    xp = 0;

function updateTimer() {
    "use strict";
    secs += 1;
    docById("timer").innerHTML = secs;
    docByClass("xp").innerHTML = xp;
}

function updateXp() {
    "use strict";
    xp += 1;
}

setInterval(updateXp, 60000);
setInterval(updateTimer, 1000);
