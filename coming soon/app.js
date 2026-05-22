var countDown=new Date("oct 20,2026 00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDown-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("days").innerHTML=days;
    document.getElementById("mins").innerHTML=minutes;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("secs").innerHTML=seconds;

},1000);