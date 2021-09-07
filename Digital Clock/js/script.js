window.onload = function() {
    loadClock();
    // alert ("This is a digital clock for current time, day and month of the year")
}

function loadClock() {
    var hrAndMin = document.getElementById("hrs-mins"),
    sec = document.getElementById("secs"),
    monthDateYear = document.getElementById("d-m-y"),
    weekDay = document.getElementById("day-paragraph"),
    // ==================
    time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    month = time.getMonth(),
    date = time.getDate(),
    year = time.getFullYear(),
    day = time.getDay(),

    lessThanTen;
        function isLessThanTen() {
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
        }
        isLessThanTen();
        hrAndMin.innerHTML = hours + ":" + minutes;
        sec.innerHTML = seconds;
    
    function whichMonth() {
        var monthsOfTheYear = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var currentMonth = monthsOfTheYear[month];
        monthDateYear.innerHTML = currentMonth + " " + date + " " + year;
    }
    function whichDay() {
        var daysOfTheWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednessday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        var currentDay = daysOfTheWeek[day];
        weekDay.innerHTML = currentDay;
    }
    
    whichMonth();
    whichDay();

}
setInterval(loadClock, 1000);