const questions = [
    { question: "Дэлхийн хамгийн жижиг улс?", answer: "ВАТИКАН" },
    { question: "Дэлхийн хамгийн олон жил хур тундас ороогүй цөл?", answer: "АТАКАМ" },
    { question: "Дэлхий хэдэн далайтай вэ?", answer: "ТАВ" },
    { question: "2024 оны олимп болох хот?", answer: "ПАРИС" },
    { question: "Монгол улсын хамгийн том газар нутагтай аймаг юу вэ?", answer: "ӨМНӨГОВЬ" }
];

let currentQuestionIndex = 0;
let currentAnswer = "";
let guessedLetters = [];
let lives = 5;

const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");

let drawnHangmanParts = [];

function drawPlatform() {
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 140, 100, 10); // Газар
    ctx.strokeRect(80, 10, 2, 130);  // Босоо мод
    ctx.strokeRect(80, 10, 50, 2);   // Хөндлөн мод
    ctx.strokeRect(130, 10, 2, 30);  // Олс
}

function drawHangman() {
    ctx.lineWidth = 2;

    switch (5 - lives) {
        case 1:
            if (!drawnHangmanParts.includes('head')) {
                ctx.beginPath();
                ctx.arc(131, 50, 10, 0, Math.PI * 2);
                ctx.stroke();
                drawnHangmanParts.push('head');
            }
            break;
        case 2:
            if (!drawnHangmanParts.includes('body')) {
                ctx.moveTo(131, 60);
                ctx.lineTo(131, 100);
                ctx.stroke();
                drawnHangmanParts.push('body');
            }
            break;
        case 3:
            if (!drawnHangmanParts.includes('leftLeg')) {
                ctx.moveTo(131, 70);
                ctx.lineTo(120, 90);
                ctx.stroke();
                drawnHangmanParts.push('leftLeg');
            }
            break;
        case 4:
            if (!drawnHangmanParts.includes('rightLeg')) {
                ctx.moveTo(131, 70);
                ctx.lineTo(142, 90);
                ctx.stroke();
                drawnHangmanParts.push('rightLeg');
            }
            break;
        case 5:
            if (!drawnHangmanParts.includes('arms')) {
                ctx.moveTo(131, 100);
                ctx.lineTo(120, 120);
                ctx.stroke();
                ctx.moveTo(131, 100);
                ctx.lineTo(142, 120);
                ctx.stroke();
                drawnHangmanParts.push('arms');
            }
            break;
    }
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
    currentAnswer = questions[currentQuestionIndex].answer;
    guessedLetters = Array(currentAnswer.length).fill("_");
    updateDisplay();
}

function updateDisplay() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `${questions[currentQuestionIndex].question}\n\n ${guessedLetters.join(" ")}`;
    document.getElementById("lives-count").textContent = lives;
}

function handleGuess(letter) {
    const keyboard = document.getElementById("keyboard");
    const button = [...keyboard.children].find(btn => btn.textContent === letter);
    button.style.backgroundColor = "#ccc"; // Дарсан товчийг саарал өнгөтэй болгох
    button.style.color = "#fff"; // Үсгийн өнгийг цагаан болгох

    if (currentAnswer.includes(letter)) {
        for (let i = 0; i < currentAnswer.length; i++) {
            if (currentAnswer[i] === letter) {
                guessedLetters[i] = letter;
            }
        }
        updateDisplay();

        if (!guessedLetters.includes("_")) {
            alert("Баяр хүргэе! Та зөв хариуллаа!");
            nextQuestion();
        }
    } else {
        lives--;
        drawHangman();
        updateDisplay();

        if (lives === 0) {
            alert("Тоглоом дууслаа. Зөв хариулт: " + currentAnswer);
            resetGame();
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        //Дараагийн асуулт руу шилжүүлэхэд зураг байгаа хэвээ хадгалах
        displayQuestion();
    } else {
        alert("Баяр хүргэе! Тоглоом дууслаа!");
        resetGame();
    }
}

function resetGame() {
    currentQuestionIndex = 0;
    lives = 5;
    drawnHangmanParts = []; // Hangman дүрсийг цэвэрлэх
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas цэвэрлэх
    drawPlatform();
    displayQuestion();
    initializeKeyboard();
}

function initializeKeyboard() {
    const keyboard = document.getElementById("keyboard");
    keyboard.innerHTML = "";
    const alphabet = "АБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯ".split("");
    alphabet.forEach(letter => {
        const button = document.createElement("button");
        button.textContent = letter;
        button.onclick = () => handleGuess(letter);
        keyboard.appendChild(button);
    });
}

drawPlatform();
initializeKeyboard();
displayQuestion();
