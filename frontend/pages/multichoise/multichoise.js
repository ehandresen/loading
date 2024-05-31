var Button1 = document.getElementById("answer1");
var Button2 = document.getElementById("answer2");
var Button3 = document.getElementById("answer3");
var Button4 = document.getElementById("answer4");

function Timer(){
    var fullCounter = 30
    var counter = document.getElementById("timer")
    function countdown() {
        counter.innerHTML = `${fullCounter}`;
        fullCounter--;
        if (fullCounter > 0) {
            setTimeout(countdown, 1000);
        }
        else if (fullCounter == 0){
            window.location.href = "../resultScreen/resultatScreen.html"
        };
    }
    countdown();
}
function choose1(){
    var aScore = 0;
    aScore += 1;
    window.location.href = "../resultScreen/resultatScreen.html"
}
function choose2(){
    var bScore = 0;
    bScore += 1;
    window.location.href = "../resultScreen/resultatScreen.html"
}
function choose3(){
    var cScore = 0;
    cScore += 1;
    window.location.href = "../resultScreen/resultatScreen.html"
}
function choose4(){
    var dScore = 0;
    dScore += 1;
    window.location.href = "../resultScreen/resultatScreen.html"
}
Timer()
Button1.onclick = choose1;
Button2.onclick = choose2;
Button3.onclick = choose3;
Button4.onclick = choose4;