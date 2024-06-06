document.getElementById('add-question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const questionContent = document.getElementById('questionContent').value;
    const answerA = document.getElementById('answerA').value;
    const answerB = document.getElementById('answerB').value;
    const answerC = document.getElementById('answerC').value;
    const answerD = document.getElementById('answerD').value;
    fetch('/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionContent, answerA, answerB, answerC, answerD })
    })
    .then(response => response.json())
    .then(data => {
        alert('Question added!');
        loadQuestions(); // Reload questions
    })
    .catch(error => alert('Error adding question'));
});

function loadQuestions() {
    fetch('/questions')
        .then(response => response.json())
        .then(questions => {
            const container = document.getElementById('questions-container');
            container.innerHTML = '';
            questions.forEach(question => {
                const questionDiv = document.createElement('div');
                questionDiv.textContent = question.QuestionContent;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.onclick = () => deleteQuestion(question.QuestionID);
                questionDiv.appendChild(deleteBtn);
                container.appendChild(questionDiv);
            });
        });
}

function deleteQuestion(id) {
    fetch(`/questions/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            alert('Question deleted');
            loadQuestions(); // Reload questions
        })
        .catch(error => alert('Error deleting question'));
}

window.onload = loadQuestions; // Load questions when page loads
