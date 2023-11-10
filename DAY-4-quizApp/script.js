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
const quizes = document.getElementById('quizes');
const answerELs = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz]; 

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
     let answer = undefined;

    answerELs.forEach((answerEL) => {
        if(answerEL.checked) {
            answer = answerEL.id;
        }
    });
    
    return answer;
}
    function deselectAnswer() {
        answerELs.forEach((answerEL) => {
            answerEL.checked = false;
        });
    }

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer =  getSelected();
    console.log(answer)
    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else {
                quizes.innerHTML = '<h2>You got ${score}/${quizData.length}.</h2>' ;
                }
        }   
});

//function totalScore() {
//    const totalScoreEl = document.getElementById('totalScore');
//
//    totalScoreEl.innerHTML = totalScore;
//
//}