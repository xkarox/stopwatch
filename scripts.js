const watchTimer = document.getElementById('stopwatch');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milSeconds = 0;

let timeStopped = true;

function startTimer() {
    if (timeStopped == true) {
        timeStopped = false;
        timer();
    }
}

function stopTimer() {
    if (timeStopped == false) {
        timeStopped = true;
    }
}

function resetTimer() {
    watchTimer.innerHTML = '00:00:00:00';
    hours = 0;
    minutes = 0;
    seconds = 0;
    milSeconds = 0;
}

function timer() {
    if (timeStopped == false) {
        milSeconds = parseInt(milSeconds);
        seconds = parseInt(seconds);
        minutes = parseInt(minutes);
        hours = parseInt(hours);

        milSeconds = milSeconds + 1;

        if (milSeconds == 100) {
            seconds = seconds + 1;
            milSeconds = 0;
        }

        if (seconds == 60) {
            minutes = minutes + 1;
            seconds = 0;
        }

        if (minutes == 60) {
            hours = hours + 1;
            minutes = 0;
        }
        if (milSeconds < 10 || milSeconds == 0) {
            milSeconds = '0' + milSeconds;
        }
        if (seconds < 10 || seconds == 0) {
            seconds = '0' + seconds;
        }
        if (minutes < 10 || minutes == 0) {
            minutes = '0' + minutes;
        }
        if (hours < 10 || hours == 0) {
            hours = '0' + hours;
        }

        watchTimer.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milSeconds;
        setTimeout('timer()', 10);
    }


}

//BItte das selbe nochmal mit 100stel sekunden 

