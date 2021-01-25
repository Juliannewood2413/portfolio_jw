$(document).ready(function() {

//Portfolio Page Links
$("#repo1").click(function(){
    window.open("https://juliannewood2413.github.io/weather-dashboard-assignment/")
});

$("#repo2").click(function(){
    window.open("https://juliannewood2413.github.io/HW-day-scheduler/")
});

$("#repo3").click(function(){
    window.open("https://juliannewood2413.github.io/Lets_get_trivial/")
})

$("#gitIcon").click(function(){
    window.open("https://github.com/Juliannewood2413")
})

$("#linkedIcon").click(function(){
    window.open("https://www.linkedin.com/in/julianne-wood-1392261b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk12rQLfXQVuyMAs1Aq70mw%3D%3D")
})

$("#resumeBtn").click(function(){
    window.open("https://juliannewood2413.github.io/Resume_file/")
})


//Contact Page links

$(function () {
    $('#emailLink').on('click', function (event) {
        event.preventDefault();
    //   alert("Huh");
      var email = 'juliannewood2413@gmail.com';
      var subject = 'Circle Around';
      var emailBody = 'Some blah';
      window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
    });
  });

$("#linkedIcon2").click(function(){
    window.open("https://www.linkedin.com/in/julianne-wood-1392261b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk12rQLfXQVuyMAs1Aq70mw%3D%3D")
})

















});