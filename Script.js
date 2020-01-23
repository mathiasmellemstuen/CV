function getAge(birthDate) {

    var now = new Date();
  
    function isLeap(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }

    var days = Math.floor((now.getTime() - birthDate.getTime())/1000/60/60/24);
    var age = 0;

    for(var y = birthDate.getFullYear(); y <= now.getFullYear(); y++) {

      var daysInYear = isLeap(y) ? 366 : 365; 

      if (days >= daysInYear) {
        days -= daysInYear;
        age++;
      }
    }
    return age;
}

var birthDateStr = "19990113"
var parts = birthDateStr.match(/(\d{4})(\d{2})(\d{2})/);
var dateObj = new Date(parts[1], parts[2]-1, parts[3]);

window.onload = function() {

    document.getElementById("age").innerHTML = "Alder: " + getAge(dateObj) + " år"; 
}