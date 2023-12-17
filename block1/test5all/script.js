const h2_title = document.getElementById("h2")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const block_answers = document.getElementById("block_answers")
const answer_field = document.getElementById("text_input")
const correct_answer = document.getElementById("correct_answer")
const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const q3 = document.getElementById("q3")
const q4 = document.getElementById("q4")
const q5 = document.getElementById("q5")
const q6 = document.getElementById("q6")
const q7 = document.getElementById("q7")
const q8 = document.getElementById("q8")
const q9 = document.getElementById("q9")
const q10 = document.getElementById("q10")
const q11 = document.getElementById("q11")
const q12 = document.getElementById("q12")
const q13 = document.getElementById("q13")
const q14 = document.getElementById("q14")
const q15 = document.getElementById("q15")


/* 
ЩОБ ДОБАВИТИ КАРТИНКУ ПЕРЕЙМЕНУЙТЕ ЇЇ І ЗАМІСТЬ images//1.png ВКАЖІТЬ images/ЯК ВИ ЇЇ НАЗВАЛИ

ПИСАТИ У ФОРМАТІ



    ,    //<---- НЕ ЗАБУДЬТЕ ПРО КОМУ 
    {
        selected: "",
        question: "images//1.png",
        answers: [
            {text: "Текст варіанту 1", correct: false},
            {text: "Текст варіанту 2", correct: false}, //<---- false = не правильне, true = правильне
            {text: "Текст варіанту 3", correct: false},
            {text: "Текст варіанту 4", correct: false}, 
        ]
    }



КІЛЬКІСТЬ ВІДПОВІДЕЙ    НЕ     ОБОВ'ЯЗКОВО МАЄ БУТИ 4, просто скопіюйте останній рядок {text: "Текст варіанту", correct: false}, і натисніть Enter та вставте його
*/


const questions = [
    {
        selected: "",
        question: "images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/6.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/12.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/19.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/23.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/26.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/27.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/28.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/31.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/34.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/35.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/36.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/38.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/46.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/54.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/55.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/56.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/58.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/59.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/63.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/64.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/66.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/68.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/69.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/70.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/74.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/76.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/79.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/80.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/81.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/82.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/84.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/85.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/87.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/91.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/93.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/94.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/95.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/99.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/101.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/103.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/104.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "images/105.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/106.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/108.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/109.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/110.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/111.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "images/112.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    }
]
const vidpovidnist_questions = [
    {
        question: "images/1-1.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "images/1-2.png",
        selected: "",
        correct: "4512",
    },
    {
        question: "images/1-3.png",
        selected: "",
        correct: "3452",
    },
    {
        question: "images/1-4.png",
        selected: "",
        correct: "2154",
    },
    {
        question: "images/1-5.png",
        selected: "",
        correct: "3452",
    },
    {
        question: "images/1-6.png",
        selected: "",
        correct: "1324",
    },
    {
        question: "images/1-7.png",
        selected: "",
        correct: "4321",
    },
    {
        question: "images/1-8.png",
        selected: "",
        correct: "2153",
    },
    {
        question: "images/1-9.png",
        selected: "",
        correct: "1245",
    },
    {
        question: "images/1-10.png",
        selected: "",
        correct: "3214",
    },
    {
        question: "images/1-11.png",
        selected: "",
        correct: "1253",
    },
    {
        question: "images/1-12.png",
        selected: "",
        correct: "4312",
    },
    {
        question: "images/1-13.png",
        selected: "",
        correct: "4325",
    },
    {
        question: "images/1-14.png",
        selected: "",
        correct: "2153",
    },
    {
        question: "images/1-15.png",
        selected: "",
        correct: "3521",
    },
    {
        question: "images/1-16.png",
        selected: "",
        correct: "4215",
    }
]

const hronology_questions = [
    {
        question: "images/2-1.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "images/2-2.png",
        selected: "",
        correct: "АГБВ",
    },
    {
        question: "images/2-3.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "images/2-4.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "images/2-5.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "images/2-6.png",
        selected: "",
        correct: "АГБВ",
    },
    {
        question: "images/2-7.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "images/2-8.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "images/2-9.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "images/2-10.png",
        selected: "",
        correct: "АБГВ",
    },
    {
        question: "images/2-11.png",
        selected: "",
        correct: "АБВГ",
    },
    {
        question: "images/2-12.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "images/2-13.png",
        selected: "",
        correct: "БВГА",
    },
    {
        question: "images/2-14.png",
        selected: "",
        correct: "АВБГ",
    },
    {
        question: "images/2-15.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "images/2-16.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "images/2-17.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "images/2-18.png",
        selected: "",
        correct: "АБГВ",
    },
    {
        question: "images/2-19.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "images/2-20.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "images/2-21.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "images/2-22.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "images/2-23.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "images/2-24.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "images/2-25.png",
        selected: "",
        correct: "ВГАБ",
    },
    {
        question: "images/2-26.png",
        selected: "",
        correct: "БАГВ",
    }
]

const mul_ans_questions = [
    {
        question: "images/3-1.png",
        selected: "",
        correct: "234",
    },
    {
        question: "images/3-2.png",
        selected: "",
        correct: "567",
    },
    {
        question: "images/3-3.png",
        selected: "",
        correct: "267",
    },
    {
        question: "images/3-4.png",
        selected: "",
        correct: "246",
    },
    {
        question: "images/3-5.png",
        selected: "",
        correct: "126",
    },
    {
        question: "images/3-6.png",
        selected: "",
        correct: "167",
    },
    {
        question: "images/3-7.png",
        selected: "",
        correct: "135",
    },
    {
        question: "images/3-8.png",
        selected: "",
        correct: "467",
    },
    {
        question: "images/3-9.png",
        selected: "",
        correct: "123",
    },
    {
        question: "images/3-10.png",
        selected: "",
        correct: "135",
    },
    {
        question: "images/3-11.png",
        selected: "",
        correct: "234",
    },
    {
        question: "images/3-12.png",
        selected: "",
        correct: "246",
    }
]

let alreadyAsked = []
let vidpovidnist_alreadyAsked = []
let hronology_alreadyAsked = []
let mul_ans_alreadyAsked = []
let selectedAnswers = []
let vidpovidnist_selectedAnswers = []
let hronology_selectedAnswers = []
let mul_selectedAnswers = []
questionCount = questions.length+vidpovidnist_questions.length+hronology_questions.length+mul_ans_questions.length;
let currentQuestionIndex = 0
let score = 0
var test_completed = false
var checked_answer = false
let RND_question = 0

max_score = questions.length+(vidpovidnist_questions.length+hronology_questions.length+mul_ans_questions.length)*3

let clicked_variant

let startingMinutes = 60
let time = startingMinutes * 60
let timerInterval
startTime = time
const countdownEl = document.getElementById('timer')
function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdownEl.innerHTML =`Часу залишилося: ${minutes}:${seconds}`
    if (time == 0) {
        showScore()
        clearInterval(timerInterval)
        countdownEl.innerHTML = "Час вийшов!"
    } else {
        time--
    }if (time < startTime/2) {
        document.getElementById('timerDiv').style.background = "#f7c510"
    }
    if (time < startTime/4) {
        document.getElementById('timerDiv').style.background = "#f35b5b"
    }

    var today = new Date()
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
    var time_str = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var dateTime = date+' '+time_str
    document.getElementById("date").innerHTML = dateTime
}

function startQuiz() {
    test_completed = false
    time = startingMinutes * 60
    timerInterval = setInterval(updateCountdown, 1000)
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Наступне запитання"
    answer_field.style.display = "none"
    answer_field.disabled = false
    correct_answer.style.display = "none"
    alreadyAsked = []
    vidpovidnist_alreadyAsked = []
    hronology_alreadyAsked = []
    mul_ans_alreadyAsked = []
    selectedAnswers = []
    vidpovidnist_selectedAnswers = []
    hronology_selectedAnswers = []
    mul_selectedAnswers = []
    showQuestion()
}

function showQuestion() {
    resetState()
    if (currentQuestionIndex <= questions.length) {
        let randomQuestionIndex = Math.floor(Math.random()*questions.length)
        let currentQuestion = questions[randomQuestionIndex]
        while (alreadyAsked.includes(currentQuestion)) {
            randomQuestionIndex = Math.floor(Math.random()*questions.length)
            currentQuestion = questions[randomQuestionIndex]
        }
        RND_question = randomQuestionIndex
        let questionNo = currentQuestionIndex + 1
        h2_title.innerHTML = "Питання №"+questionNo

        document.getElementById("question").src = currentQuestion.question

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button")
            button.innerHTML = answer.text
            button.classList.add("btn")
            answerButtons.appendChild(button)
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click" , selectAnswer)
        })
        this_Q = currentQuestion
    }
    else {
        nextButton.style.display = "block"
        answer_field.style.display = "block"
        correct_answer.style.display = "block"
        if (currentQuestionIndex > questions.length && currentQuestionIndex <= (questions.length+vidpovidnist_questions.length)) {
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти А-1 Б-2 В-3 Г-4, то впишіть 1234"
            let randomQuestionIndex = Math.floor(Math.random()*vidpovidnist_questions.length)
            let currentQuestion = vidpovidnist_questions[randomQuestionIndex]
            while (vidpovidnist_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*vidpovidnist_questions.length)
                currentQuestion = vidpovidnist_questions[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        } else if (currentQuestionIndex > (questions.length+vidpovidnist_questions.length) && currentQuestionIndex <= (questions.length+vidpovidnist_questions.length+hronology_questions.length)) {
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти 1-А 2-Б 3-В 4-Г, то вкажіть АБВГ"
            let randomQuestionIndex = Math.floor(Math.random()*hronology_questions.length)
            let currentQuestion = hronology_questions[randomQuestionIndex]
            while (hronology_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*hronology_questions.length)
                currentQuestion = hronology_questions[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        } else if (currentQuestionIndex > (questions.length+vidpovidnist_questions.length+hronology_questions.length) && currentQuestionIndex <= questionCount) {
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти 3, 4, 5, то вкажіть 345"
            let randomQuestionIndex = Math.floor(Math.random()*mul_ans_questions.length)
            let currentQuestion = mul_ans_questions[randomQuestionIndex]
            while (mul_ans_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*mul_ans_questions.length)
                currentQuestion = mul_ans_questions[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        }
    }
    const q_info_str = document.getElementById("question").src
    const cut_q_info_str = q_info_str.slice(36, -4)
    const q_info_num = cut_q_info_str.match(/\d+/g)
    document.getElementById("q_info").innerHTML = ""+q_info_num
}

function resetState() {
    answer_field.value = ""
    answer_field.style.display = "none"
    answer_field.classList.remove("correct")
    answer_field.classList.remove("incorrect")
    correct_answer.style.display = "none"
    nextButton.style.display = "none"
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    let currentQuestion = questions[RND_question]
    const selectedBtn = e.target
    if (selectedBtn.disabled == false){
        Array.from(answerButtons.children).forEach(button => {
            button.classList.remove("selected")
            button.classList.remove("incorrect")
            button.classList.remove("correct")
        })
        if (alreadyAsked[currentQuestion] != null) {
            if (alreadyAsked[currentQuestionIndex].question == currentQuestion.question) {
                alreadyAsked.remove[currentQuestionIndex]
            }
        }
        const isCorrect = selectedBtn.dataset.correct === "true"
        if(isCorrect) {
            selectedBtn.classList.add("selected")
            selectedBtn.classList.add("correct")
            clicked_variant = selectedBtn
            score++
        } else {
            selectedBtn.classList.add("selected")
            selectedBtn.classList.add("incorrect")
            clicked_variant = selectedBtn
            Array.from(answerButtons.children).forEach(button => {
                button.classList.add("selected_all")
                if(button.dataset.correct === "true") {
                    button.classList.add("correct")
                }
            })
        }
        currentQuestion.selected = selectedBtn.innerHTML
        this_Q = currentQuestion
        nextButton.innerHTML = "Перевірити"
        nextButton.style.display = "block"
    }
}

function showScore(){
    resetState()
    if (score < max_score*0.2) {
        document.getElementById("question").src = "/siteHistoryTests/grades/very_bad.jpg"
    } else if (score < max_score*0.4) {
        document.getElementById("question").src = "/siteHistoryTests/grades/bad.jpg"
    } else if (score < max_score*0.6) {
        document.getElementById("question").src = "/siteHistoryTests/grades/average.jpg"
    } else if (score < max_score*0.8) {
        document.getElementById("question").src = "/siteHistoryTests/grades/good.jpg"
    } else if (score >= max_score*0.8) {
        document.getElementById("question").src = "/siteHistoryTests/grades/very_good.jpg"
    }
    clearInterval(timerInterval)
    h2_title.innerHTML =`Ви набрали ${score} з ${max_score} балу!`
    nextButton. innerHTML = "Пройти знову"
    nextButton.style.display = "block"
    test_completed = true
    block_answers.style.display = "block"
    answer_field.style.display = "none"
}

function handleNextButton(){ 
    if (!test_completed){
        let currentQuestion
        if (currentQuestionIndex <= questions.length) {
            {
                selectedAnswers.push(clicked_variant)
                alreadyAsked.push(this_Q)
                Array.from(answerButtons.children).forEach(button => {
                    button.classList.remove("selected_all")
                    button.classList.remove("selected")
                    button.disabled = true
            })
        }
        }

        if (currentQuestionIndex > questions.length && currentQuestionIndex <= questions.length+vidpovidnist_questions.length) {
            currentQuestion = vidpovidnist_questions[RND_question]
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                selectedAnswers.push(answer_field)
                vidpovidnist_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                vidpovidnist_selectedAnswers.push(answer_field.value)
                correct_answer.style.display = "block"
                correct_answer.innerHTML = "Правильна відповідь: "+currentQuestion.correct
            }
            vidpovidnist_alreadyAsked.push(currentQuestion)
        }
        
        
        else if (currentQuestionIndex > questions.length+vidpovidnist_questions.length && currentQuestionIndex <= questions.length+vidpovidnist_questions.length+hronology_questions.length) {
            currentQuestion = hronology_questions[RND_question]
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected.toLocaleUpperCase() == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                selectedAnswers.push(answer_field)
                hronology_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                hronology_selectedAnswers.push(answer_field.value)
                correct_answer.style.display = "block"
                correct_answer.innerHTML = "Правильна відповідь: "+currentQuestion.correct
            }
            hronology_alreadyAsked.push(currentQuestion)
        } 
        
        
        else if (currentQuestionIndex > questions.length+vidpovidnist_questions.length+hronology_questions.length  && currentQuestionIndex <= questionCount) {
            currentQuestion = mul_ans_questions[RND_question]
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                selectedAnswers.push(answer_field)
                mul_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                mul_selectedAnswers.push(answer_field.value)
                correct_answer.style.display = "block"
                correct_answer.innerHTML = "Правильна відповідь: "+currentQuestion.correct
            }
            mul_ans_alreadyAsked.push(currentQuestion)
        }

        if (checked_answer) {
            currentQuestionIndex++
        }

        if (currentQuestionIndex == questionCount-1) {
            nextButton.innerHTML = "Завершити тест"
        }

        console.log()
        console.log(currentQuestionIndex)
        console.log(questions.length)
        console.log(questions.length+vidpovidnist_questions.length)

        if(currentQuestionIndex < questionCount) {
            if (checked_answer) {
                checked_answer = false
                nextButton.style.display = "none"
                showQuestion()
            } else {
                checked_answer = true
                nextButton.innerHTML = "Наступне запитання"
            }
        } else {
            nextButton.style.display = "none"
            setTimeout(() => { showScore() }, 1500);
        }
    } else {
        startQuiz()
    }
    
}

nextButton.addEventListener("click", ()=>{
    handleNextButton()
})

// function showCorrectAnswer(id) {
//     resetState()
//     nextButton.style.display = "block"
//     if (id < 12) {
//         alreadyAsked[id].answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerHTML = answer.text
//         button.classList.add("btn")
//         answerButtons.appendChild(button)
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         const isCorrect = button.dataset.correct === "true"
//         if(alreadyAsked[id].selected.toLocaleUpperCase() === button.innerHTML) {
//             button.classList.add("incorrect")
//         } 
//         if(isCorrect) {
//             button.classList.add("correct")
//         }
//         button.disabled = true
//         })
//     } else if (id == 12) {
//         answer_field.style.display = "block"
//         answer_field.disabled = true
//         if (vidpovidnist_alreadyAsked[0].selected == vidpovidnist_alreadyAsked[0].correct) {
//             answer_field.classList.add("correct")
//         } else {
//             answer_field.classList.add("incorrect")
//             correct_answer.style.display = "block"
//             correct_answer.innerHTML = "Правильна відповідь: "+vidpovidnist_alreadyAsked[0].correct
//         }
//         answer_field.value = vidpovidnist_selectedAnswers[0]
//     } else if (id == 13) {
//         answer_field.style.display = "block"
//         answer_field.disabled = true
//         if (hronology_alreadyAsked[0].selected.toLocaleUpperCase() == hronology_alreadyAsked[0].correct) {
//             answer_field.classList.add("correct")
//         } else {
//             answer_field.classList.add("incorrect")
//             correct_answer.style.display = "block"
//             correct_answer.innerHTML = "Правильна відповідь: "+hronology_alreadyAsked[0].correct
//         }
//         answer_field.value = hronology_selectedAnswers[0]
//     } else if (id == 14) {
//         answer_field.style.display = "block"
//         answer_field.disabled = true
//         if (mul_ans_alreadyAsked[0].selected == mul_ans_alreadyAsked[0].correct) {
//             answer_field.classList.add("correct")
//         } else {
//             answer_field.classList.add("incorrect")
//             correct_answer.style.display = "block"
//             correct_answer.innerHTML = "Правильна відповідь: "+mul_ans_alreadyAsked[0].correct
//         }
//         answer_field.value = mul_selectedAnswers[0]
//     }
//     const q_info_str = document.getElementById("question").src
//     const cut_q_info_str = q_info_str.slice(27, -4)
//     const q_info_num = cut_q_info_str.match(/\d+/g)
//     document.getElementById("q_info").innerHTML = ""+q_info_num
// }

startQuiz()