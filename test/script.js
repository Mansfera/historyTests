const h2_title = document.getElementById("h2");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const block_answers = document.getElementById("block_answers");
const answer_field = document.getElementById("text_input");
const letter_answers = document.getElementById("letter_answers");
const numeric_answers = document.getElementById("numeric_answers");
const correct_answer = document.getElementById("correct_answer");

var queryString = window.location.search;
var params = new URLSearchParams(queryString);
var test_id = params.get('id');
var block_id = params.get('block');

function fetchJsonData(filePath) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var jsonData = JSON.parse(xhr.responseText);
                    resolve(jsonData);
                } else {
                    reject(new Error("Failed to fetch data"));
                }
            }
        };
        xhr.open("GET", filePath, true);
        xhr.send();
    });
}

switch (test_id) {
    case "6":
        test_name = "Українські землі в другій половині XVI ст.";
        break;
    case "7":
        test_name = "Українські землі в першій половині XVII ст";
        break;
    case "8":
        test_name = "Національно-визвольна війна Українського народу середини XVII ст.";
        break;
    case "9":
        test_name = "Козацька Україна наприкінці 50 – 80-х років XVII ст.";
        break;
    case "10":
        test_name = "Українські землі наприкінці XVII – в першій половині XVIII ст.";
        break;
    case "11":
        test_name = "Українські землі в другій половині XVIII ст.";
        break;
    case "12":
        test_name = "Українські землі у складі російської імперії наприкінці XVIII – в першій половині XIX ст.";
        break;
    case "13":
        test_name = "Українські землі у складі Австрійської імперії наприкінці XVIII – в першій половині XIX ст.";
        break;
    case "14":
        test_name = "Культура України наприкінці XVIII – в першій половині XIX ст.";
        break;
    case "15":
        test_name = "Українські землі в складі російської імперії в другій половині ХІХ ст.";
        break;
    case "16":
        test_name = "Українські землі в складі Австрійської імперії в другій половині ХІХ ст.";
        break;
    case "17":
        test_name = "Культура України в другій половині ХІХ ст. – на початку XX ст.";
        break;
    case "18":
        test_name = "Українські землі у складі російської імперії в 1900-1914-х роках";
        break;
    case "19":
        test_name = "Українські землі у складі Австро-Угорщини в 1900-1914-х роках";
        break;
    default:
        test_name = "Назва тесту"
}
document.getElementById("h1").innerHTML = test_name;

let questions = [];
let vidpovidnist_questions = [];
let hronology_questions = [];
let mul_ans_questions = [];
let questionCount = 0;
let max_score = 0;

let promises = [
    fetchJsonData("../block" + block_id + "/test" + test_id + "/questions.json").then(function (data) {
        questions = data;
    }),
    fetchJsonData("../block" + block_id + "/test" + test_id + "/vidpovidnist_questions.json").then(function (data) {
        vidpovidnist_questions = data;
    }),
    fetchJsonData("../block" + block_id + "/test" + test_id + "/hronology_questions.json").then(function (data) {
        hronology_questions = data;
    }),
    fetchJsonData("../block" + block_id + "/test" + test_id + "/mul_ans_questions.json").then(function (data) {
        mul_ans_questions = data;
    })
];

Promise.all(promises)
    .then(function () {
        startQuiz();
    })
    .catch(function (error) {
        console.error(error);
    });

let alreadyAsked = [];
let vidpovidnist_alreadyAsked = [];
let hronology_alreadyAsked = [];
let mul_ans_alreadyAsked = [];
let selectedAnswers = [];
let vidpovidnist_selectedAnswers = [];
let hronology_selectedAnswers = [];
let mul_selectedAnswers = [];
questionCount = 15;
let currentQuestionIndex = 0;
let score = 0;
var test_completed = false;
let RND_question = 0;

let clicked_variant;

let startingMinutes = 15;
let time = startingMinutes * 60;
let timerInterval;
startTime = time;
const countdownEl = document.getElementById("timer");
function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `Часу залишилося: ${minutes}:${seconds}`;
    if (time == 0) {
        showScore();
        clearInterval(timerInterval);
        countdownEl.innerHTML = "Час вийшов!";
    } else {
        time--;
    }
    if (time < startTime / 2) {
        document.getElementById("timerDiv").style.background = "#f7c510";
    }
    if (time < startTime / 4) {
        document.getElementById("timerDiv").style.background = "#f35b5b";
    }

    var today = new Date();
    var date =
        today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var time_str =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time_str;
    document.getElementById("date").innerHTML = dateTime;
}
for (var i = 1; i <= questionCount; i++) {
    var btn = document.createElement("button");
    btn.className += "q_id";
    btn.id = "q" + i;
    btn.innerHTML = i;
    block_answers.appendChild(btn);
}
function startQuiz() {
    test_completed = false;
    time = startingMinutes * 60;
    timerInterval = setInterval(updateCountdown, 1000);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Наступне запитання";
    answer_field.style.display = "none";
    answer_field.disabled = false;
    correct_answer.style.display = "none";
    block_answers.style.display = "none";
    alreadyAsked = [];
    vidpovidnist_alreadyAsked = [];
    hronology_alreadyAsked = [];
    mul_ans_alreadyAsked = [];
    selectedAnswers = [];
    vidpovidnist_selectedAnswers = [];
    hronology_selectedAnswers = [];
    mul_selectedAnswers = [];
    showQuestion();
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex < 12) {
        let randomQuestionIndex = Math.floor(Math.random() * questions.length);
        let currentQuestion = questions[randomQuestionIndex];
        while (alreadyAsked.includes(currentQuestion)) {
            randomQuestionIndex = Math.floor(Math.random() * questions.length);
            currentQuestion = questions[randomQuestionIndex];
        }
        RND_question = randomQuestionIndex;
        let questionNo = currentQuestionIndex + 1;
        h2_title.innerHTML = "Питання №" + questionNo;

        document.getElementById("question").src = currentQuestion.question;

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
        this_Q = currentQuestion;
    } else {
        nextButton.style.display = "block";
        answer_field.style.display = "block";
        correct_answer.style.display = "block";
        if (currentQuestionIndex == 12) {
            // letter_answers.style.display = "block";
            let randomQuestionIndex = Math.floor(
                Math.random() * vidpovidnist_questions.length
            );
            let currentQuestion = vidpovidnist_questions[randomQuestionIndex];
            while (vidpovidnist_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(
                    Math.random() * vidpovidnist_questions.length
                );
                currentQuestion = vidpovidnist_questions[randomQuestionIndex];
            }
            RND_question = randomQuestionIndex;
            let questionNo = currentQuestionIndex + 1;
            h2_title.innerHTML = "Питання №" + questionNo;

            document.getElementById("question").src = currentQuestion.question;
        } else if (currentQuestionIndex == 13) {
            // numeric_answers.style.display = "block";
            let randomQuestionIndex = Math.floor(
                Math.random() * hronology_questions.length
            );
            let currentQuestion = hronology_questions[randomQuestionIndex];
            while (hronology_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(
                    Math.random() * hronology_questions.length
                );
                currentQuestion = hronology_questions[randomQuestionIndex];
            }
            RND_question = randomQuestionIndex;
            let questionNo = currentQuestionIndex + 1;
            h2_title.innerHTML = "Питання №" + questionNo;

            document.getElementById("question").src = currentQuestion.question;
        } else {
            // numeric_answers.style.display = "block";
            // document.getElementById("select_numbers4").style.display = "none"
            answer_field.style.display = "block";
            let randomQuestionIndex = Math.floor(
                Math.random() * mul_ans_questions.length
            );
            let currentQuestion = mul_ans_questions[randomQuestionIndex];
            while (mul_ans_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(
                    Math.random() * mul_ans_questions.length
                );
                currentQuestion = mul_ans_questions[randomQuestionIndex];
            }
            RND_question = randomQuestionIndex;
            let questionNo = currentQuestionIndex + 1;
            h2_title.innerHTML = "Питання №" + questionNo;

            document.getElementById("question").src = currentQuestion.question;
        }
    }
    const q_info_str = document.getElementById("question").src;
    const cut_q_info_str = q_info_str.slice(36, -4);
    const q_info_num = cut_q_info_str.match(/\d+/g);
    document.getElementById("q_info").innerHTML = "" + q_info_num;
}

function resetState() {
    answer_field.value = "";
    answer_field.style.display = "none";
    answer_field.classList.remove("correct");
    answer_field.classList.remove("incorrect");
    correct_answer.style.display = "none";
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const q_id = document.getElementById("q" + (currentQuestionIndex + 1));
    let currentQuestion = questions[RND_question];
    const selectedBtn = e.target;
    Array.from(answerButtons.children).forEach((button) => {
        button.classList.remove("selected");
        button.classList.remove("incorrect");
        button.classList.remove("correct");
    });
    q_id.classList.remove("incorrect");
    q_id.classList.remove("correct");
    if (alreadyAsked[currentQuestion] != null) {
        if (
            alreadyAsked[currentQuestionIndex].question == currentQuestion.question
        ) {
            alreadyAsked.remove[currentQuestionIndex];
        }
    }
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("selected");
        selectedBtn.classList.add("correct");
        q_id.classList.add("correct");
        clicked_variant = selectedBtn;
        score++;
    } else {
        selectedBtn.classList.add("selected");
        selectedBtn.classList.add("incorrect");
        q_id.classList.add("incorrect");
        clicked_variant = selectedBtn;
    }
    currentQuestion.selected = selectedBtn.innerHTML;
    this_Q = currentQuestion;
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    if (score < 10) {
        document.getElementById("question").src = "../block" + block_id + "/grades/bad.png";
    } else {
        document.getElementById("question").src = "../block" + block_id + "/grades/good.png";
    }
    clearInterval(timerInterval);
    h2_title.innerHTML = `Ви набрали ${score} з 21 балу!`;
    nextButton.innerHTML = "Пройти знову";
    nextButton.style.display = "block";
    test_completed = true;
    block_answers.style.display = "block";
    answer_field.style.display = "none";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (!test_completed) {
        let currentQuestion;
        if (currentQuestionIndex < 13) {
            selectedAnswers.push(clicked_variant);
            alreadyAsked.push(this_Q);
        }

        if (currentQuestionIndex == 13) {
            currentQuestion = vidpovidnist_questions[RND_question];
            const q_id = document.getElementById("q" + currentQuestionIndex);
            currentQuestion.selected = answer_field.value;
            if (currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct");
                score = score + 3;
                q_id.classList.add("correct");
                selectedAnswers.push(answer_field);
                vidpovidnist_selectedAnswers.push(answer_field.value);
            } else {
                answer_field.classList.add("incorrect");
                selectedAnswers.push(answer_field);
                vidpovidnist_selectedAnswers.push(answer_field.value);
                q_id.classList.add("incorrect");
            }
            vidpovidnist_alreadyAsked.push(currentQuestion);
        } else if (currentQuestionIndex == 14) {
            currentQuestion = hronology_questions[RND_question];
            const q_id = document.getElementById("q" + currentQuestionIndex);
            currentQuestion.selected = answer_field.value;
            if (
                currentQuestion.selected.toLocaleUpperCase() == currentQuestion.correct
            ) {
                answer_field.classList.add("correct");
                score = score + 3;
                q_id.classList.add("correct");
                selectedAnswers.push(answer_field);
                hronology_selectedAnswers.push(answer_field.value);
            } else {
                answer_field.classList.add("incorrect");
                selectedAnswers.push(answer_field);
                hronology_selectedAnswers.push(answer_field.value);
                q_id.classList.add("incorrect");
            }
            hronology_alreadyAsked.push(currentQuestion);
            nextButton.innerHTML = "Завершити тест";
        } else if (currentQuestionIndex == 15) {
            currentQuestion = mul_ans_questions[RND_question];
            const q_id = document.getElementById("q" + currentQuestionIndex);
            currentQuestion.selected = answer_field.value;
            if (currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct");
                score = score + 3;
                q_id.classList.add("correct");
                selectedAnswers.push(answer_field);
                mul_selectedAnswers.push(answer_field.value);
            } else {
                answer_field.classList.add("incorrect");
                selectedAnswers.push(answer_field);
                mul_selectedAnswers.push(answer_field.value);
                q_id.classList.add("incorrect");
            }
            mul_ans_alreadyAsked.push(currentQuestion);
        }

        if (currentQuestionIndex < questionCount) {
            showQuestion();
        } else {
            showScore();
        }
    } else {
        startQuiz();
    }
}

nextButton.addEventListener("click", () => {
    handleNextButton();
});

function showCorrectAnswer(id) {
    resetState();
    nextButton.style.display = "block";
    if (id < 12) {
        alreadyAsked[id].answers.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            const isCorrect = button.dataset.correct === "true";
            if (alreadyAsked[id].selected.toLocaleUpperCase() === button.innerHTML) {
                button.classList.add("incorrect");
            }
            if (isCorrect) {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
    } else if (id == 12) {
        answer_field.style.display = "block";
        answer_field.disabled = true;
        if (
            vidpovidnist_alreadyAsked[0].selected ==
            vidpovidnist_alreadyAsked[0].correct
        ) {
            answer_field.classList.add("correct");
        } else {
            answer_field.classList.add("incorrect");
            correct_answer.style.display = "block";
            correct_answer.innerHTML =
                "Правильна відповідь: " + vidpovidnist_alreadyAsked[0].correct;
        }
        answer_field.value = vidpovidnist_selectedAnswers[0];
    } else if (id == 13) {
        answer_field.style.display = "block";
        answer_field.disabled = true;
        if (
            hronology_alreadyAsked[0].selected.toLocaleUpperCase() ==
            hronology_alreadyAsked[0].correct
        ) {
            answer_field.classList.add("correct");
        } else {
            answer_field.classList.add("incorrect");
            correct_answer.style.display = "block";
            correct_answer.innerHTML =
                "Правильна відповідь: " + hronology_alreadyAsked[0].correct;
        }
        answer_field.value = hronology_selectedAnswers[0];
    } else if (id == 14) {
        answer_field.style.display = "block";
        answer_field.disabled = true;
        if (mul_ans_alreadyAsked[0].selected == mul_ans_alreadyAsked[0].correct) {
            answer_field.classList.add("correct");
        } else {
            answer_field.classList.add("incorrect");
            correct_answer.style.display = "block";
            correct_answer.innerHTML =
                "Правильна відповідь: " + mul_ans_alreadyAsked[0].correct;
        }
        answer_field.value = mul_selectedAnswers[0];
    }
    const q_info_str = document.getElementById("question").src;
    const cut_q_info_str = q_info_str.slice(27, -4);
    const q_info_num = cut_q_info_str.match(/\d+/g);
    document.getElementById("q_info").innerHTML = "" + q_info_num;
}

Array.from(document.getElementById("block_answers").children).forEach(
    (item) => {
        item.addEventListener("click", () => {
            var id = item.innerHTML - 1;
            temp_list = [];
            var qid = 0;
            if (id < 12) {
                temp_list = alreadyAsked;
                qid = id;
            } else if (id == 12) {
                temp_list = vidpovidnist_alreadyAsked;
            } else if (id == 13) {
                temp_list = hronology_alreadyAsked;
            } else if (id == 14) {
                temp_list = mul_ans_alreadyAsked;
            }
            document.getElementById("question").src = temp_list[qid].question;
            showCorrectAnswer(id);
        });
    }
);

function setCurrentQuestion(index) {
    currentQuestionIndex = index;
    showQuestion();
}