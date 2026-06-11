const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

let idx = 0;
let score = 0;

function startquiz() {
    idx = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();

    let curr = questions[idx];
    let qno = idx + 1;

    questionElement.innerHTML = qno + ". " + curr.question;

    curr.answers.forEach(ans => {
        const button = document.createElement("button");

        button.innerHTML = ans.text;
        button.classList.add("btn");

        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }

        button.addEventListener("click", selectanswer);

        answerbtn.appendChild(button);
    });
}

function resetstate() {
    nextbtn.style.display = "none";

    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswer(e) {
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";

    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    } else {
        selectbtn.classList.add("incorrect");
    }

    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbtn.style.display = "block";
}

function showScore() {
    resetstate();

    questionElement.innerHTML =
        `You Scored ${score} out of ${questions.length}`;

    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function handleNextButton() {
    idx++;

    if (idx < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextbtn.addEventListener("click", () => {
    if (idx < questions.length) {
        handleNextButton();
    } else {
        startquiz();
    }
});

startquiz();