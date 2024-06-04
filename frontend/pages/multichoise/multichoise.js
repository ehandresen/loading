const url = 'http://localhost:3000/get-values';
var Button1 = document.getElementById("answer1");
var Button2 = document.getElementById("answer2");
var Button3 = document.getElementById("answer3");
var Button4 = document.getElementById("answer4");
var QuestionBody = document.getElementById("theQuestion");
var questions;
var quest, An1, An2, An3, An4;



function getData() {
    fetch(url)
    .then(response => {
        // Sjekke om responsen er vellykket (statuskode 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Konvertere responsen til JSON
        return response.json();
    })
    .then(data => {
        // Logge dataen for debugging
        quest = data.question;
        An1 = data.answerA;
        An2 = data.answerB;
        An3 = data.answerC;
        An4 = data.answerD;
        console.log(data);
        updateFront();
    })
    .catch(error => {
        // Håndtere eventuelle feil som oppstår under forespørselen
        console.error('There was a problem with the fetch operation:', error);
    });
}

function updateFront(){
    var qCont1 = document.getElementById("cont1");
    var qCont2 = document.getElementById("cont2");
    var qCont3 = document.getElementById("cont3");
    var qCont4 = document.getElementById("cont4");
    QuestionBody.innerHTML = `<p>${quest}</p>`
    qCont1.innerHTML = `${An1}`;
    qCont2.innerHTML = `${An2}`;
    qCont3.innerHTML = `${An3}`;
    qCont4.innerHTML = `${An4}`;
}

function Timer(){
    var fullCounter = 500
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

Timer();
getData();
Button1.onclick = choose1;
Button2.onclick = choose2;
Button3.onclick = choose3;
Button4.onclick = choose4;
