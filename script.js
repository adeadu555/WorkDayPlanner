$("#currentDay").text(moment().format("dddd, MMMM Do"))

var scheduleHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().hour()

//To iterate through the schedulehours, use for loop//

for (i = 0; i < scheduleHours.length; i++) {
    if (currentHour === scheduleHours[i]) {
        $("#" + i).addClass("present")
    } else if (currentHour > scheduleHours[i]) {
        $("#" + i).addClass("past")
    } else if (presentHour < scheduleHours[i]) {
        $("#" + i).addClass("future")
    }
};

$(".btn-success").on("click", function(){
    var valueOfEight = $("#textAreaEight").val();
    console.log(valueOfEight);
    localStorage.setItem("8 AM", JSON.stringify(valueOfEight));
});


$(".btn-success").on("click", function(){
    var valueOfNine = $("#textAreaNine").val();
    console.log(valueOfNine);
    localStorage.setItem("9 AM", JSON.stringify(valueOfNine));
});

$(".btn-success").on("click", function(){
    var valueOfTen = $("#textAreaTen").val();
    console.log(valueOfTen);
    localStorage.setItem("10 AM", JSON.stringify(valueOfTen));
});

$(".btn-success").on("click", function(){
    var valueOfEleven = $("#textAreaEleven").val();
    console.log(valueOfEleven);
    localStorage.setItem("11 AM", JSON.stringify(valueOfEleven));
});

$(".btn-success").on("click", function(){
    var valueOfTwelve = $("#textAreaTwelve").val();
    console.log(valueOfTwelve);
    localStorage.setItem("12 PM", JSON.stringify(valueOfTwelve));
});

$(".btn-success").on("click", function(){
    var valueOfThirteen = $("#textAreaThirteen").val();
    console.log(valueOfThirteen);
    localStorage.setItem("1 PM", JSON.stringify(valueOfThirteen));
});

$(".btn-success").on("click", function(){
    var valueOfFourteen = $("#textAreaFourteen").val();
    console.log(valueOfFourteen);
    localStorage.setItem("2 PM", JSON.stringify(valueOfFourteen));
});

$(".btn-success").on("click", function(){
    var valueOfFifteen = $("#textAreaFifteen").val();
    console.log(valueOfFifteen);
    localStorage.setItem("3 PM", JSON.stringify(valueOfFifteen));
});

$(".btn-success").on("click", function(){
    var valueOfSixteen = $("#textAreaSixteen").val();
    console.log(valueOfSixteen);
    localStorage.setItem("4 PM", JSON.stringify(valueOfSixteen));
});


$(".btn-success").on("click", function(){
    var valueOfSeventeen = $("#textAreaSeventeen").val();
    console.log(valueOfSeventeen);
    localStorage.setItem("5 PM", JSON.stringify(valueOfSeventeen));
});

$(".btn-success").on("click", function(){
    var valueOfEighteen = $("#textAreaEighteen").val();
    console.log(valueOfEighteen);
    localStorage.setItem("6 PM", JSON.stringify(valueOfEighteen));
});

$("clearBtn").on("click", function(event){
    event.preventDefault();
    localStorage.clear();
});

var eight = JSON.parse(localStorage.getItem("8 AM"));
$("#textAreaEight").val(eight);
var nine = JSON.parse(localStorage.getItem("9 AM"));
$("#textAreaNine").val(nine);
var ten = JSON.parse(localStorage.getItem("10 AM"));
$("#textAreaTen").val(ten);
var eleven = JSON.parse(localStorage.getItem("11 AM"));
$("#textAreaEleven").val(eleven);
var twelve = JSON.parse(localStorage.getItem("12 PM"));
$("#textAreaTwelve").val(twelve);
var thirteen = JSON.parse(localStorage.getItem("1 PM"));
$("#textAreaThirteen").val(thirteen);
var fourteen = JSON.parse(localStorage.getItem("2 PM"));
$("#textAreaFourteen").val(fourteen);
var fifteen = JSON.parse(localStorage.getItem("3 PM"));
$("#textAreaFifteen").val(fifteen);
var sixteen = JSON.parse(localStorage.getItem("4 PM"));
$("#textAreaSixteen").val(sixteen);
var seventeen = JSON.parse(localStorage.getItem("5 PM"));
$("#textAreaSeventeen").val(seventeen);
var eighteen = JSON.parse(localStorage.getItem("6 PM"));
$("#textAreaEighteen").val(eighteen);