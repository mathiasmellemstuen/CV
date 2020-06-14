function getAge(birthDateStr) {

  var birthDate = getDateObject(birthDateStr); 
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
function getDateObject(birthDateStr) {
  var parts = birthDateStr.match(/(\d{4})(\d{2})(\d{2})/);
  var birthDate = new Date(parts[1], parts[2]-1, parts[3]);
  return birthDate;
}
function formatDate(date) {
  var d = new Date(date),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

  return [day, month, year].join('.');
}
function createListItemString(date,header,description) {
  return '<section class="list-item"><p class="date"><span>' + date.start + '</span><br><span>' + date.end + '</span></p><p class="description"><b>' + header + '</b><br>' + description + '</p></section>';
}

window.onload = function() {


  let currentLanguage = "norwegian"; 

  const urlParameters = new URLSearchParams(window.location.search);
  const languageParameter = urlParameters.get("language");

  if(languageParameter != undefined)
    currentLanguage = languageParameter;

    //Legger til funksjonalitet på language-button 
    document.getElementById("language-button").addEventListener("click", function() {
      document.getElementById("modal-language").style.display = "block";

    });

    //Legger til funksjonalitet på alle lukk modal knappene. 
    for (let element of document.getElementsByClassName("modal-close-button")) {
        element.addEventListener("click", function() {
          element.parentElement.parentElement.style.display = "none";
        });
    }

    //Legger til funksjonalitet på alle select-language-button 
    for (let element of document.getElementsByClassName("select-language-button")) {
      element.addEventListener("click", function() {

        let selectedLanguage = element.value;
        document.location.href = document.location.href.split("?")[0] + "?language=" + selectedLanguage;
      });
  }

  fetch("data.json").then(response => response.json()).then(data => {

    window.document.title = data.title; 
    document.getElementById("modal-language").getElementsByClassName("modal-language-header")[0].innerHTML = data.literals.language[currentLanguage];

    document.getElementById("page-header").innerHTML = data.header; 
    document.getElementById("name").innerHTML = data.person.name; 
    document.getElementById("title").innerHTML = data.person.title[currentLanguage]; 
    document.getElementById("email").innerHTML = data.person.email;
    document.getElementById("email").href = data.person.email;
    document.getElementById("github").innerHTML = data.person.github.display;
    document.getElementById("github").href = data.person.github.hyperlink;
    document.getElementById("website").innerHTML = data.person.website.display;
    document.getElementById("website").href = data.person.website.hyperlink;
    document.getElementById("about-me-text").innerHTML = data.literals.aboutme[currentLanguage]; 
    document.getElementById("about-me-paragraph").innerHTML = data.literals.name[currentLanguage] + ": " + data.person.name + "<br>" + "<span id='age'>" + data.literals.age[currentLanguage] +": " + getAge(data.person.birth) + "</span><br>" + data.literals.born[currentLanguage] + ": " + formatDate(getDateObject(data.person.birth)) + "<br>" + data.literals.drivinglicense[currentLanguage] + ": " + data.person.driving_license;
    document.getElementById("education-header").innerHTML = data.literals.education[currentLanguage]; 
    document.getElementById("job-experience-header").innerHTML = data.literals.jobexperience[currentLanguage];

    data.education.forEach(element => {
      document.getElementById("education-list").innerHTML += createListItemString(element.date,element[currentLanguage].header, element[currentLanguage].description);
    });

    data.work.forEach(element => {
      document.getElementById("job-list").innerHTML += createListItemString(element.date,element[currentLanguage].header, element[currentLanguage].description);

    });
  });
}