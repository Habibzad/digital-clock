function newClock() {
    var myClock = document.getElementById('myClock');

    var myDate = new Date();
    var x = 5;
    var hour = myDate.getHours();
    var mins = myDate.getMinutes();
    var secs = myDate.getSeconds();

  

    if (mins < 10) {
        mins = '0' + mins
    }

    if (secs < 10) {
        secs = '0' + secs
    }

    if (hour > 12) {
        hour = hour - 12
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    var myTime = hour + ':' + mins + ':' + secs;
    myClock.innerText = myTime + ' PM';
}
setInterval(newClock, 1000);