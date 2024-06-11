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
    var fullCounter = 30
    var counter = document.getElementById("timer")
    function countdown() {
        counter.innerHTML = `${fullCounter}`;
        fullCounter--;
        if (fullCounter > 0) {
            setTimeout(countdown, 1000);
        }
        else if (fullCounter == 0){
            window.location.href = "../05-LoadingSkjerm/thirdLoadingpage.html";
        };
    }
    countdown();
}
function selectAnswer(answerId){
    const situation = 2;
    let answerChoise = "Score" + answerId;
    window.location.href = "../05-LoadingSkjerm/thirdLoadingpage.html";
}

Timer();
getData();
Button1.onclick = function() { selectAnswer("A"); };
Button2.onclick = function() { selectAnswer("B"); };
Button3.onclick = function() { selectAnswer("C"); };
Button4.onclick = function() { selectAnswer("D"); };
