
function DigitalClock() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sections = document.getElementById('section')


    if (hrs < 12) {
        sections.innerHTML = "PM";
    }
    else {
        sections.innerHTML = "AM";
    }
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mit').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;

}
setInterval(DigitalClock, 10)

