// Array of quiz questions and answers
const quizData = [
    {
        question:'What is my Full Name ?',
        a:'Divinelove Chibuike Adeshina',
        b:'Ademola Divinelove Chibuike',
        c:'Divinelove Chibuike Ademola',
        d:'Ademola Adeshina',
        correct: 'c'
    },
    {
        question:'What is my Age ?',
        a:'19',
        b:'24',
        c:'20',
        d:'21',
        correct:'d'
    },
    {
        question:'What do i love the most ?',
        a:'Games',
        b:'Coding',
        c:'music',
        d:'Food',
        correct:'b'
    },
    {
        question:'Who do i fear the most as a human ?',
        a:'My Father',
        b:'My Mother',
        c:'A-Y',
        d:'My sister',
        correct:'c'
    },
    {
        question:'What is my greatest fear ?',
        a:'Death',
        b:'Unaccomplished Life',
        c:'My mind',
        d:'Uncertainty of Life',
        correct:'c'
    }
];

// Selecting DOM elements
const quizesElement = document.getElementById('quizes');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_textElement = document.getElementById('a_text');
const b_textElement = document.getElementById('b_text');
const c_textElement = document.getElementById('c_text');
const d_textElement = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

// Variables to track the current quiz and score
let currentQuiz = 0;
let score = 0;

// Initial load of the first quiz
loadQuiz();

// Function to load a quiz question
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_textElement.innerText = currentQuizData.a;
    b_textElement.innerText = currentQuizData.b;
    c_textElement.innerText = currentQuizData.c;
    d_textElement.innerText = currentQuizData.d;
}

// Function to get the currently selected answer
function getSelected() {
    let selectedAnswer = undefined;

    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            selectedAnswer = answerElement.id;
        }
    });

    return selectedAnswer;
}

// Function to deselect all answers
function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}


// Event listener for the submit button
submitButton.addEventListener('click', () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizesElement.innerHTML = `<h2>You scored ${score} out of ${quizData.length} questions.</h2> <button onClick = "location.reload()">Reload</button>`;

        }
    }
});
