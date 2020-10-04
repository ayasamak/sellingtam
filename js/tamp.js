
var list = $(".navbar-nav li");
   list.click(function(){
   $(this).addClass("active").siblings().removeClass("active");
 });
 var listt=document.querySelectorAll(".navbar-nav li");
    window.onscroll =function(){
      var x= document.documentElement.scrollTop;
   for(var i=0;i<listt.length;i++){
    listt[i].classList.remove("active");
  }
  if(x < 630){
  listt[0].classList.add("active");
}
  else if(x >= 630 && x < 3951){
  listt[1].classList.add("active");
}
else if(x >= 3951 && x <5555){
   listt[2].classList.add("active");
}
else if(x >=5555 && x <6730){
   listt[3].classList.add("active");
}
else if(x >=6730 && x <7340){
   listt[4].classList.add("active");
}
else if(x >=7340 && x <8420){
   listt[5].classList.add("active");
}
else{
  listt[6].classList.add("active");
}
};
var weeks= document.getElementById("weeks").textContent;
var weekstext= document.getElementById("weeks");
var days= document.getElementById("days").textContent;
var daystext= document.getElementById("days");
var hr= document.getElementById("hr").textContent;
var hrtext= document.getElementById("hr");
var min= document.getElementById("min").textContent;
var mintext= document.getElementById("min");
var sec= document.getElementById("sec").textContent;
var sectext= document.getElementById("sec");
function down(){
 sec = sec-1;
 sectext.textContent =sec;
if(sec==00){
  sec=60;
  sectext.textContent =60;
  min--;
  mintext.textContent =min;
}
if(min==00){
  min=60;
  mintext.textContent =60;
  hr--;
  hrtext.textContent =hr;
}
if(hr==00){
  hr=24;
  hrtext.textContent =24;
  days++;
  if(days==7){
    weeks--;
    weekstext.textContent =weeks;
  }
}
}
setInterval(down,1000);
/*small sixe*/
$(".fa-bars").click(function(){
$(".navbar-nav").toggleClass("left");
});
