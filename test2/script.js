const h2_title = document.getElementById("h2")
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const block_answers = document.getElementById("block_answers");
const answer_field = document.getElementById("text_input");
const correct_answer = document.getElementById("correct_answer");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const q13 = document.getElementById("q13");
const q14 = document.getElementById("q14");
const q15 = document.getElementById("q15");


/* 
ЩОБ ДОБАВИТИ КАРТИНКУ ПЕРЕЙМЕНУЙТЕ ЇЇ І ЗАМІСТЬ images//1.png ВКАЖІТЬ images//ЯК ВИ ЇЇ НАЗВАЛИ

ПИСАТИ У ФОРМАТІ



    ,    //<---- НЕ ЗАБУДЬТЕ ПРО КОМУ 
    {
        selected: "",
        question: "images//1.png",
        answers: [
            {text: "Текст варіанту 1", correct: false},
            {text: "Текст варіанту 2", correct: true}, //<---- false = не правильне, true = правильне
            {text: "Текст варіанту 3", correct: false},
            {text: "Текст варіанту 4" , correct: false}, 
        ]
    }



КІЛЬКІСТЬ ВІДПОВІДЕЙ    НЕ     ОБОВ'ЯЗКОВО МАЄ БУТИ 4, просто скопіюйте останній рядок {text: "Текст варіанту" , correct: false}, і натисніть Enter та вставте його
*/


const questions = [
    {
        selected: "",
        question: "images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/6.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
        {
        selected: 0,
        selected: "",
        question: "images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/12.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/19.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/23.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/25.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/26.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/27.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/28.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/31.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/34.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/35.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/36.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/38.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/39.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/47.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/54.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/55.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/56.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/58.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/63.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/64.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/66.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/68.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/69.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/70.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/72.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/76.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/79.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/80.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/82.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/84.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/85.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/87.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/91.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/93.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/94.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    }
]

const mul_ans_questions = [
    {
        question: "images/1-1.png",
        selected: "",
        correct: "3124",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-2.png",
        selected: "",
        correct: "3521",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-3.png",
        selected: "",
        correct: "4123",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-4.png",
        selected: "",
        correct: "5143",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-5.png",
        selected: "",
        correct: "2431",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-6.png",
        selected: "",
        correct: "4135",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-7.png",
        selected: "",
        correct: "2431",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-8.png",
        selected: "",
        correct: "1432",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-9.png",
        selected: "",
        correct: "2431",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-10.png",
        selected: "",
        correct: "5421",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-11.png",
        selected: "",
        correct: "3425",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-12.png",
        selected: "",
        correct: "2431",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-13.png",
        selected: "",
        correct: "5243",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-14.png",
        selected: "",
        correct: "4523",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-15.png",
        selected: "",
        correct: "4321",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-16.png",
        selected: "",
        correct: "4213",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-17.png",
        selected: "",
        correct: "2431",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-18.png",
        selected: "",
        correct: "3512",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    },
    {
        question: "images/1-19.png",
        selected: "",
        correct: "4235",
        answers: [
            {text: "А"},
            {text: "Б"},
            {text: "В"},
            {text: "Г"},
        ]
    }
]

const alreadyAsked = []
const mul_ans_alreadyAsked = []
const selectedAnswers = []
const mul_selectedAnswers = []
questionCount = 15; //          <----- КІЛЬКІСТЬ ЗАПИТАНЬ
let currentQuestionIndex = 0;
let score = 0;
var test_completed = false;
let RND_question = 0;

const startingMinutes = 15;
let time = startingMinutes * 60;
startTime = time;
const countdownEl = document.getElementById('timer');
const timerInterval = setInterval(updateCountdown, 1000);
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML =`Часу залишилося: ${minutes}:${seconds}`;
    if (time == 0) {
        showScore();
        clearInterval(timerInterval);
        countdownEl.innerHTML = "Час вийшов!";
    } else {
        time--;
    }if (time < startTime/2) {
        document.getElementById('timerDiv').style.background = "#f7c510";
    }
    if (time < startTime/4) {
        document.getElementById('timerDiv').style.background = "#f35b5b";
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Наступне запитання";
    showQuestion();
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex < 12) {
        let randomQuestionIndex = Math.floor(Math.random()*questions.length);
        let currentQuestion = questions[randomQuestionIndex];
        while (alreadyAsked.includes(currentQuestion)) {
            randomQuestionIndex = Math.floor(Math.random()*questions.length);
            currentQuestion = questions[RND_question];
        }
        RND_question = randomQuestionIndex;
        let questionNo = currentQuestionIndex + 1;
        h2_title.innerHTML = "Питання №"+questionNo

        document.getElementById("question").src = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click" , selectAnswer);
        });
    }
    else {
        nextButton.style.display = "block"
        answer_field.style.display = "block"
        correct_answer.style.display = "block"
        correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти А-1 Б-2 В-3 Г-4 то впишіть 1234";
        let randomQuestionIndex = Math.floor(Math.random()*mul_ans_questions.length);
        let currentQuestion = mul_ans_questions[randomQuestionIndex];
        while (mul_ans_alreadyAsked.includes(currentQuestion)) {
            randomQuestionIndex = Math.floor(Math.random()*questions.length);
            currentQuestion = mul_ans_questions[RND_question];
        }
        RND_question = randomQuestionIndex;
        let questionNo = currentQuestionIndex + 1;
        h2_title.innerHTML = "Питання №"+questionNo;

        document.getElementById("question").src = currentQuestion.question;
        answer_field.style.display = "block";
    }
}

function resetState() {
    answer_field.value = "";
    answer_field.style.display = "none";
    answer_field.classList.remove("correct");
    answer_field.classList.remove("incorrect");
    correct_answer.style.display = "none";
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    let currentQuestion = questions[RND_question];
    const q_id = document.getElementById("q"+(currentQuestionIndex+1));
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        selectedAnswers.push(selectedBtn);
        score++;
        q_id.classList.add("correct")
    } else {
        selectedBtn.classList.add("incorrect");
        selectedAnswers.push(selectedBtn);
        q_id.classList.add("incorrect");
    }
    selectedBtn.classList.add("selected");
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    currentQuestion.selected = selectedBtn.innerHTML;
    alreadyAsked.push(currentQuestion);
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    if (score < 5) {
        document.getElementById("question").src = "/grades/very_bad_grade.jpg";
    } else if (score < 10) {
        document.getElementById("question").src = "/grades/bad_grade.jpg";
    } else if (score < 14) {
        document.getElementById("question").src = "/grades/average_grade.jpg";
    } else if (score < 16) {
        document.getElementById("question").src = "/grades/good_grade.jpg";
    } else if (score >= 16) {
        document.getElementById("question").src = "/grades/very_good_grade.jpg";
    }
    clearInterval(timerInterval);
    h2_title.innerHTML =`Ви набрали ${score} з ${questionCount} балів!`;
    nextButton. innerHTML = "Пройти знову"
    nextButton.style.display = "block";
    test_completed = true;
    block_answers.style.display = "block";
    answer_field.style.display = "none";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (!test_completed){
        if (currentQuestionIndex > 12) {
            let currentQuestion = mul_ans_questions[RND_question];
            const q_id = document.getElementById("q"+currentQuestionIndex);
            currentQuestion.selected = answer_field.value;
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct");
                score = score +3;
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
        };
        if(currentQuestionIndex < questionCount) {
            showQuestion();
        } else {
            showScore();
        }
    } else {
        location.reload();
    }
    
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function showCorrectAnswer(id) {
    resetState();
    nextButton.style.display = "block";
    if (id < 12) {
        alreadyAsked[id].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        const isCorrect = button.dataset.correct === "true";
        if(alreadyAsked[id].selected === button.innerHTML) {
            button.classList.add("incorrect");
        } 
        if(isCorrect) {
            button.classList.add("correct");
        }
        button.disabled = true;
        });
    } else {
        answer_field.style.display = "block";
        answer_field.disabled = true;
        if (mul_ans_alreadyAsked[id-9].selected == mul_ans_alreadyAsked[id-9].correct) {
            answer_field.classList.add("correct");
        } else {
            answer_field.classList.add("incorrect");
            correct_answer.style.display = "block";
            correct_answer.innerHTML = "Правильна відповідь: "+mul_ans_alreadyAsked[id-9].correct;
        }
        answer_field.value = mul_selectedAnswers[id-9];
    }
}

q1.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[0].question;
    showCorrectAnswer(0);
});
q2.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[1].question;
    showCorrectAnswer(1);
});
q3.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[2].question;
    showCorrectAnswer(2);
});
q4.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[3].question;
    showCorrectAnswer(3);
});
q5.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[4].question;
    showCorrectAnswer(4);
});
q6.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[5].question;
    showCorrectAnswer(5);
});
q7.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[6].question;
    showCorrectAnswer(6);
});
q8.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[7].question;
    showCorrectAnswer(7);
});
q9.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[8].question;
    showCorrectAnswer(8);
});
q10.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[9].question;
    showCorrectAnswer(9);
});
q11.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[10].question;
    showCorrectAnswer(10);
});
q12.addEventListener("click", ()=> {
    document.getElementById("question").src = alreadyAsked[11].question;
    showCorrectAnswer(11);
});
q13.addEventListener("click", ()=> {
    document.getElementById("question").src = mul_ans_alreadyAsked[0].question;
    showCorrectAnswer(12);
});
q14.addEventListener("click", ()=> {
    document.getElementById("question").src = mul_ans_alreadyAsked[1].question;
    showCorrectAnswer(13);
});
q15.addEventListener("click", ()=> {
    document.getElementById("question").src = mul_ans_alreadyAsked[2].question;
    showCorrectAnswer(14);
});

startQuiz();