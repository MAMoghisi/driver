
function setCookie(c_name,value,exdays)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{

        username=prompt("Please enter your name:","");
        if (username!=null && username!="")
        {
            setCookie(username,"RECORD",365);
        }

}


var plustime = 1;
function increasetime(){
    plustime = plustime+1;
}
setInterval(increasetime,1000);
function check() {
    var baseCar = document.getElementById("whiteCar").style;
    var enemy = document.getElementById("blueCar").style;
    var distance = parseInt(parseInt(baseCar.top) - parseInt(parseInt(enemy.top)+163));
    if (baseCar.left == enemy.left && Math.abs(distance) < 163){
        setCookie(username,plustime,365);
        clearInterval(x);
        alert(plustime + " seconds!");
        window.location = window.location;
    }
}
function changeLine() {
    var random = Math.random();
    if (random < 0.25){
        document.getElementById("blueCar").style.left = "190px"
    }else if (random > 0.75){
        document.getElementById("blueCar").style.left = "315px"
    } else if(0.5 < random < 0.75){
        document.getElementById("blueCar").style.left = "445px"
    }else {
        document.getElementById("blueCar").style.left = "570px"
    }
}
var plus = 1;
function increase(){
    plus = plus+1;
}
setInterval(increase,5000);

function go() {
    check();
    if (parseInt(blueCar.style.top) > 490) {
        blueCar.style.top = "-330px";
        changeLine();
    }else {

        document.getElementById("blueCar").style.top = parseInt(blueCar.style.top) + plus + 'px';
    }
}
function road(){
    document.getElementById("road").style.backgroundPositionY = parseInt(document.getElementById("road").style.backgroundPositionY) +  plus + "px";
}
setInterval(road,10);
var x = setInterval(go,10);
function Up() {
    if (parseInt(whiteCar.style.top) > 20) {
        document.getElementById("whiteCar").style.top = parseInt(whiteCar.style.top) - 40 + 'px';

    }
}
function Down() {
    if (parseInt(whiteCar.style.top) < 460) {
        document.getElementById("whiteCar").style.top = parseInt(whiteCar.style.top) + 40 + 'px';
    }
}
function Left() {
    var Line = document.getElementById("whiteCar").style.left;
    if (Line == "570px") {
        document.getElementById("whiteCar").style.left = "445px";
    } else if (Line == "445px") {
        document.getElementById("whiteCar").style.left = "315px";
    } else {
        document.getElementById("whiteCar").style.left = "190px";
    }
}
function Right() {
    var Line = document.getElementById("whiteCar").style.left;
    if (Line ==  "190px"){
        document.getElementById("whiteCar").style.left = "315px";
    } else if(Line == "315px"){
        document.getElementById("whiteCar").style.left = "445px";
    }else{
        document.getElementById("whiteCar").style.left = "570px";
    }
}
key("W",Up);
key("S",Down);
key("A",Left);
key("D",Right);