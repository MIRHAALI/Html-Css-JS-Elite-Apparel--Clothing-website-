
//                  Timer
//expiry date
var countDownDate = new Date("Feb 24, 2023 12:00:00").getTime();

// Updates the count every 1 seconds
var x = setInterval(function() {

  // Get current date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations
  //Days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //Hrs
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //Minutes
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //Seconds
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //slide no.1
  document.getElementById("timer").innerHTML ="<td> "+ days + " </td><td> " + hours + " </td><td> " + minutes + " </td><td> "+ seconds + " </td>";
  //slide no.2
  document.getElementById("timer1").innerHTML ="<td> "+ days + " </td><td> " + hours + " </td><td> " + minutes + " </td><td> "+ seconds + " </td>";
  //slide no.3
  document.getElementById("timer2").innerHTML ="<td> "+ days + " </td><td> " + hours + " </td><td> " + minutes + " </td><td> "+ seconds + " </td>";
  //slide no.4
  document.getElementById("timer3").innerHTML ="<td> "+ days + " </td><td> " + hours + " </td><td> " + minutes + " </td><td> "+ seconds + " </td>";

  // When counter ends
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Timer end

//   Menu
function openMenu() {
  document.getElementById("menu").style.width = "24%";
    
}

function closeMenu() {
  document.getElementById("menu").style.width = "0";
}
// End of Menu

//              slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  
}
//   End of slideshow

//    Loader
function myfunction() {
    var loader = document.getElementById("preloader");
    loader.style.display = "none";
  }
// end of loader

// fav,cart

function cart(){
      var x=document.getElementById("cart").innerText;
      var z= Number(x) +1;
      if(z<=4){
      document.getElementById("cart").innerHTML=z;}
      else{
        alert("Cart Limit Reached!");
      }
    }
    function fav() {
        var x = document.getElementById("fav").innerText;
        var z = Number(x) + 1;
        if (z <= 5) {
          document.getElementById("fav").innerHTML = z;
        }
        else {
          alert("Favorite Limit Reached!");
        }
      }

//    contact page
function acc(){
   var x=document.getElementById("contact");
   var y = document.getElementById("form");
   x.style.display="none";
   y.style.display="block";
  }
  function login() {
    var x = document.getElementById("contact");
    var y = document.getElementById("login");
    x.style.display = "none";
    y.style.display = "block";
   }

   //login 
function valiadate(){
     var x=document.getElementById("user").value;
     var y=document.getElementById("pass").value;
     if(x=="admin" && y=="123"){
       alert("Success Login!");
     }
     else{
       alert("Wrong Username/Password!");
     }
   }

function formValidate(){
  var pass1=document.getElementById("pass1").value;
  var pass2=document.getElementById("pass2").value;
  var name=document.getElementById("nme").value;
  var gender=document.getElementById("gend").value;
  var email=document.getElementById("mail").value;
  if (pass1 != pass2) {
    alert("Passwords does not match!")
  } 
  else{
    alert("Your Profile:"+"\n\n   Name:"+name+"\n   Gender:"+gender+"\n   Email:"+email);
  }
}