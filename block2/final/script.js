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
const q16 = document.getElementById("q16")
const q17 = document.getElementById("q17")
const q18 = document.getElementById("q18")
const q19 = document.getElementById("q19")
const q20 = document.getElementById("q20")
const q21 = document.getElementById("q21")
const q22 = document.getElementById("q22")
const q23 = document.getElementById("q23")
const q24 = document.getElementById("q24")
const q25 = document.getElementById("q25")
const q26 = document.getElementById("q26")
const q27 = document.getElementById("q27")
const q28 = document.getElementById("q28")
const q29 = document.getElementById("q29")
const q30 = document.getElementById("q30")


/* 
ЩОБ ДОБАВИТИ КАРТИНКУ ПЕРЕЙМЕНУЙТЕ ЇЇ І ЗАМІСТЬ images//1.png ВКАЖІТЬ images//ЯК ВИ ЇЇ НАЗВАЛИ

ПИСАТИ У ФОРМАТІ



    ,    //<---- НЕ ЗАБУДЬТЕ ПРО КОМУ 
    {
        selected: "",
        question: "../test1/images//1.png",
        answers: [
            {text: "Текст варіанту 1", correct: false},
            {text: "Текст варіанту 2", correct: true}, //<---- false = не правильне, true = правильне
            {text: "Текст варіанту 3", correct: false},
            {text: "Текст варіанту 4" , correct: false}, 
        ]
    }



КІЛЬКІСТЬ ВІДПОВІДЕЙ    НЕ     ОБОВ'ЯЗКОВО МАЄ БУТИ 4, просто скопіюйте останній рядок {text: "Текст варіанту" , correct: false}, і натисніть Enter та вставте його
*/


const questions1 = [
    {
        selected: "",
        question: "../test1/images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/6.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/8.png",
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
        question: "../test1/images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/12.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/19.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/23.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/25.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/26.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/27.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/28.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/31.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/34.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/35.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/36.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/38.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/39.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/47.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/54.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/55.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/56.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/58.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/63.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/64.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/66.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/68.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/69.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/70.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/72.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/76.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/79.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/80.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/82.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/84.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/85.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/87.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/91.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/93.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/94.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/99.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/101.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/103.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/104.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/105.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/106.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/108.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/109.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/110.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/111.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/112.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/113.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/114.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/115.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/116.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/117.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/118.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/119.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/120.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/121.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/122.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/123.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/124.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/125.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/126.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/127.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/128.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/129.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/130.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/131.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/132.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/133.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/134.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/135.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/136.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/137.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г" , correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/138.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/139.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/140.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/141.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г" , correct: false},
        ]
    },
    {
        selected: "",
        question: "../test1/images/142.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test1/images/143.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    }
]
const vidpovidnist_questions1 = [
    {
        question: "../test1/images/1-1.png",
        selected: "",
        correct: "2431",
    },
    {
        question: "../test1/images/1-2.png",
        selected: "",
        correct: "3125",
    },
    {
        question: "../test1/images/1-3.png",
        selected: "",
        correct: "1423",
    },
    {
        question: "../test1/images/1-4.png",
        selected: "",
        correct: "3214",
    },
    {
        question: "../test1/images/1-5.png",
        selected: "",
        correct: "3215",
    },
    {
        question: "../test1/images/1-6.png",
        selected: "",
        correct: "4312",
    },
    {
        question: "../test1/images/1-7.png",
        selected: "",
        correct: "2531",
    }
]
const hronology_questions1 = [
    {
        question: "../test1/images/2-1.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "../test1/images/2-2.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "../test1/images/2-3.png",
        selected: "",
        correct: "ГВАБ",
    },
    {
        question: "../test1/images/2-4.png",
        selected: "",
        correct: "ГВАБ",
    },
    {
        question: "../test1/images/2-5.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "../test1/images/2-6.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test1/images/2-7.png",
        selected: "",
        correct: "БАГВ",
    },
    {
        question: "../test1/images/2-8.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "../test1/images/2-9.png",
        selected: "",
        correct: "АВГБ",
    }
]
const mul_ans_questions1 = [
    {
        question: "../test1/images/3-1.png",
        selected: "",
        correct: "247",
    },
    {
        question: "../test1/images/3-2.png",
        selected: "",
        correct: "234",
    },
    {
        question: "../test1/images/3-3.png",
        selected: "",
        correct: "357",
    },
    {
        question: "../test1/images/3-4.png",
        selected: "",
        correct: "145",
    },
    {
        question: "../test1/images/3-5.png",
        selected: "",
        correct: "146",
    },
    {
        question: "../test1/images/3-6.png",
        selected: "",
        correct: "136",
    },
    {
        question: "../test1/images/3-7.png",
        selected: "",
        correct: "345",
    },
    {
        question: "../test1/images/3-8.png",
        selected: "",
        correct: "127",
    },
    {
        question: "../test1/images/3-9.png",
        selected: "",
        correct: "145",
    },
    {
        question: "../test1/images/3-10.png",
        selected: "",
        correct: "135",
    },
    {
        question: "../test1/images/3-11.png",
        selected: "",
        correct: "156",
    },
    {
        question: "../test1/images/3-12.png",
        selected: "",
        correct: "136",
    },
    {
        question: "../test1/images/3-13.png",
        selected: "",
        correct: "146",
    },
    {
        question: "../test1/images/3-14.png",
        selected: "",
        correct: "245",
    },
    {
        question: "../test1/images/3-15.png",
        selected: "",
        correct: "126",
    }
]


const questions2 = [
    {
        selected: "",
        question: "../test2/images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/2.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/6.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "../test2/images/9.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/10.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/12.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/18.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/19.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/23.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/26.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/27.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/28.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/30.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/31.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/34.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/35.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/36.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/38.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/54.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/55.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/56.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/57.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/58.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/63.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/64.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/65.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/66.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/68.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/69.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/70.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/76.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/77.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/78.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/79.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/80.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/82.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/84.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/85.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/87.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/91.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test2/images/93.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/94.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test2/images/99.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    }
]
const vidpovidnist_questions2 = [
    {
        question: "../test2/images/1-1.png",
        selected: "",
        correct: "3124",
    },
    {
        question: "../test2/images/1-2.png",
        selected: "",
        correct: "3521",
    },
    {
        question: "../test2/images/1-3.png",
        selected: "",
        correct: "4123",
    },
    {
        question: "../test2/images/1-4.png",
        selected: "",
        correct: "5143",
    },
    {
        question: "../test2/images/1-5.png",
        selected: "",
        correct: "2431",
    },
    {
        question: "../test2/images/1-6.png",
        selected: "",
        correct: "4135",
    },
    {
        question: "../test2/images/1-7.png",
        selected: "",
        correct: "2431",
    },
    {
        question: "../test2/images/1-8.png",
        selected: "",
        correct: "1432",
    },
    {
        question: "../test2/images/1-9.png",
        selected: "",
        correct: "2431",
    },
    {
        question: "../test2/images/1-10.png",
        selected: "",
        correct: "5421",
    },
    {
        question: "../test2/images/1-11.png",
        selected: "",
        correct: "3425",
    },
    {
        question: "../test2/images/1-12.png",
        selected: "",
        correct: "2431",
    },
    {
        question: "../test2/images/1-13.png",
        selected: "",
        correct: "5243",
    },
    {
        question: "../test2/images/1-14.png",
        selected: "",
        correct: "4523",
    },
    {
        question: "../test2/images/1-15.png",
        selected: "",
        correct: "4321",
    },
    {
        question: "../test2/images/1-16.png",
        selected: "",
        correct: "4213",
    },
    {
        question: "../test2/images/1-17.png",
        selected: "",
        correct: "2431",
    },
    {
        question: "../test2/images/1-18.png",
        selected: "",
        correct: "3512",
    },
    {
        question: "../test2/images/1-19.png",
        selected: "",
        correct: "4235",
    }
]
const hronology_questions2 = [
    {
        question: "../test2/images/2-1.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "../test2/images/2-2.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "../test2/images/2-3.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "../test2/images/2-4.png",
        selected: "",
        correct: "ВГАБ",
    },
    {
        question: "../test2/images/2-5.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test2/images/2-6.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "../test2/images/2-7.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "../test2/images/2-8.png",
        selected: "",
        correct: "АВГБ",
    },
    {
        question: "../test2/images/2-9.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "../test2/images/2-10.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "../test2/images/2-11.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "../test2/images/2-12.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test2/images/2-13.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "../test2/images/2-14.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test2/images/2-15.png",
        selected: "",
        correct: "ГАБВ",
    }
]
const mul_ans_questions2 = [
    {
        question: "../test2/images/3-1.png",
        selected: "",
        correct: "246",
    },
    {
        question: "../test2/images/3-2.png",
        selected: "",
        correct: "135",
    },
    {
        question: "../test2/images/3-3.png",
        selected: "",
        correct: "123",
    },
    {
        question: "../test2/images/3-4.png",
        selected: "",
        correct: "146",
    },
    {
        question: "../test2/images/3-5.png",
        selected: "",
        correct: "246",
    },
    {
        question: "../test2/images/3-6.png",
        selected: "",
        correct: "346",
    },
    {
        question: "../test2/images/3-7.png",
        selected: "",
        correct: "345",
    },
    {
        question: "../test2/images/3-8.png",
        selected: "",
        correct: "146",
    },
    {
        question: "../test2/images/3-9.png",
        selected: "",
        correct: "235",
    },
    {
        question: "../test2/images/3-10.png",
        selected: "",
        correct: "126",
    },
    {
        question: "../test2/images/3-11.png",
        selected: "",
        correct: "245",
    },
    {
        question: "../test2/images/3-12.png",
        selected: "",
        correct: "156",
    },
    {
        question: "../test2/images/3-13.png",
        selected: "",
        correct: "357",
    },
    {
        question: "../test2/images/3-14.png",
        selected: "",
        correct: "124",
    },
    {
        question: "../test2/images/3-15.png",
        selected: "",
        correct: "136",
    },
    {
        question: "../test2/images/3-16.png",
        selected: "",
        correct: "136",
    },
    {
        question: "../test2/images/3-17.png",
        selected: "",
        correct: "234",
    },
    {
        question: "../test2/images/3-18.png",
        selected: "",
        correct: "145",
    },
    {
        question: "../test2/images/3-19.png",
        selected: "",
        correct: "127",
    },
    {
        question: "../test2/images/3-20.png",
        selected: "",
        correct: "235",
    },
    {
        question: "../test2/images/3-21.png",
        selected: "",
        correct: "134",
    },
    {
        question: "../test2/images/3-22.png",
        selected: "",
        correct: "246",
    },
    {
        question: "../test2/images/3-23.png",
        selected: "",
        correct: "357",
    }
]


const questions3 = [
    {
        selected: "",
        question: "../test3/images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/4.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/6.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "../test3/images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/12.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/17.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/19.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/20.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/23.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/26.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/27.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/28.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/31.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/33.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/34.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/35.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/36.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/38.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/54.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/55.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/56.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/58.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/63.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/64.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/66.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/68.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/69.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/70.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/76.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/79.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/80.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/82.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/84.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/85.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/86.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/87.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/88.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/91.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/93.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/94.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/99.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/101.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/103.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/104.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/105.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/106.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/108.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/109.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/110.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/111.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/112.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/113.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/114.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/115.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/116.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/117.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/118.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/119.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/120.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/121.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/122.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/123.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/124.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/125.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/126.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/127.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/128.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/129.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/130.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/131.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/132.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/133.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/134.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/135.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test3/images/136.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/137.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/138.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/139.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test3/images/140.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    }
]
const vidpovidnist_questions3 = [
    {
        question: "../test3/images/1-1.png",
        selected: "",
        correct: "1453",
    },
    {
        question: "../test3/images/1-2.png",
        selected: "",
        correct: "4123",
    },
    {
        question: "../test3/images/1-3.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "../test3/images/1-4.png",
        selected: "",
        correct: "1523",
    },
    {
        question: "../test3/images/1-5.png",
        selected: "",
        correct: "3542",
    },
    {
        question: "../test3/images/1-6.png",
        selected: "",
        correct: "3514",
    },
    {
        question: "../test3/images/1-7.png",
        selected: "",
        correct: "4152",
    },
    {
        question: "../test3/images/1-8.png",
        selected: "",
        correct: "5123",
    },
    {
        question: "../test3/images/1-9.png",
        selected: "",
        correct: "4315",
    },
    {
        question: "../test3/images/1-10.png",
        selected: "",
        correct: "2354",
    },
    {
        question: "../test3/images/1-11.png",
        selected: "",
        correct: "4521",
    },
    {
        question: "../test3/images/1-12.png",
        selected: "",
        correct: "3152",
    },
    {
        question: "../test3/images/1-13.png",
        selected: "",
        correct: "5431",
    },
    {
        question: "../test3/images/1-14.png",
        selected: "",
        correct: "5324",
    },
    {
        question: "../test3/images/1-15.png",
        selected: "",
        correct: "4213",
    },
    {
        question: "../test3/images/1-16.png",
        selected: "",
        correct: "3425",
    },
    {
        question: "../test3/images/1-17.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "../test3/images/1-18.png",
        selected: "",
        correct: "3514",
    },
    {
        question: "../test3/images/1-19.png",
        selected: "",
        correct: "2341",
    }
]
const hronology_questions3 = [
    {
        question: "../test3/images/2-1.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "../test3/images/2-2.png",
        selected: "",
        correct: "ГБВА",
    },
    {
        question: "../test3/images/2-3.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test3/images/2-4.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test3/images/2-5.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test3/images/2-6.png",
        selected: "",
        correct: "ГАВБ",
    },
    {
        question: "../test3/images/2-7.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "../test3/images/2-8.png",
        selected: "",
        correct: "АГБВ",
    },
    {
        question: "../test3/images/2-9.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test3/images/2-10.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "../test3/images/2-11.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "../test3/images/2-12.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test3/images/2-13.png",
        selected: "",
        correct: "ГБАВ",
    }
]
const mul_ans_questions3 = [
    {
        question: "../test3/images/3-1.png",
        selected: "",
        correct: "147",
    },
    {
        question: "../test3/images/3-2.png",
        selected: "",
        correct: "256",
    },
    {
        question: "../test3/images/3-3.png",
        selected: "",
        correct: "235",
    },
    {
        question: "../test3/images/3-4.png",
        selected: "",
        correct: "356",
    },
    {
        question: "../test3/images/3-5.png",
        selected: "",
        correct: "145",
    },
    {
        question: "../test3/images/3-6.png",
        selected: "",
        correct: "156",
    },
    {
        question: "../test3/images/3-7.png",
        selected: "",
        correct: "124",
    },
    {
        question: "../test3/images/3-8.png",
        selected: "",
        correct: "156",
    },
    {
        question: "../test3/images/3-9.png",
        selected: "",
        correct: "346",
    },
    {
        question: "../test3/images/3-10.png",
        selected: "",
        correct: "246",
    }
]


const questions4 = [
    {
        selected: "",
        question: "../test4/images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/6.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "../test4/images/9.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/12.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/14.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/15.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/16.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/19.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/21.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/22.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/23.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/26.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/27.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/28.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/31.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/32.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/34.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/35.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/36.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/38.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/49.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/50.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/54.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/55.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/56.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/58.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/60.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/63.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/64.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/66.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/68.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/69.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/70.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/73.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/76.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/79.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/80.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/82.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/84.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/85.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/87.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/91.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/93.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/94.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/99.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/101.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/103.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/104.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/105.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/106.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/108.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/109.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/110.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/111.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/112.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/113.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/114.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/115.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/116.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/117.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/118.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/119.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/120.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/121.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/122.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/123.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/124.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/125.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/126.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/127.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/128.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/129.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/130.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/131.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test4/images/132.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/133.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/134.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/135.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/136.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test4/images/137.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    }
]
const vidpovidnist_questions4 = [
    {
        question: "../test4/images/1-1.png",
        selected: "",
        correct: "3145",
    },
    {
        question: "../test4/images/1-2.png",
        selected: "",
        correct: "2415",
    },
    {
        question: "../test4/images/1-3.png",
        selected: "",
        correct: "3154",
    },
    {
        question: "../test4/images/1-4.png",
        selected: "",
        correct: "3512",
    },
    {
        question: "../test4/images/1-5.png",
        selected: "",
        correct: "4135",
    },
    {
        question: "../test4/images/1-6.png",
        selected: "",
        correct: "4213",
    },
    {
        question: "../test4/images/1-7.png",
        selected: "",
        correct: "4132",
    },
    {
        question: "../test4/images/1-8.png",
        selected: "",
        correct: "1524",
    },
    {
        question: "../test4/images/1-9.png",
        selected: "",
        correct: "2453",
    },
    {
        question: "../test4/images/1-10.png",
        selected: "",
        correct: "2351",
    },
    {
        question: "../test4/images/1-11.png",
        selected: "",
        correct: "3451",
    },
    {
        question: "../test4/images/1-12.png",
        selected: "",
        correct: "2514",
    },
    {
        question: "../test4/images/1-13.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "../test4/images/1-14.png",
        selected: "",
        correct: "2354",
    },
    {
        question: "../test4/images/1-15.png",
        selected: "",
        correct: "3125",
    },
    {
        question: "../test4/images/1-16.png",
        selected: "",
        correct: "1234",
    },
    {
        question: "../test4/images/1-17.png",
        selected: "",
        correct: "3541",
    },
    {
        question: "../test4/images/1-18.png",
        selected: "",
        correct: "2431",
    }
]
const hronology_questions4 = [
    {
        question: "../test4/images/2-1.png",
        selected: "",
        correct: "АБВГ",
    },
    {
        question: "../test4/images/2-2.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "../test4/images/2-3.png",
        selected: "",
        correct: "ВГАБ",
    },
    {
        question: "../test4/images/2-4.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "../test4/images/2-5.png",
        selected: "",
        correct: "ГБАВ",
    },
    {
        question: "../test4/images/2-6.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test4/images/2-7.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "../test4/images/2-8.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "../test4/images/2-9.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test4/images/2-10.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "../test4/images/2-11.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "../test4/images/2-12.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "../test4/images/2-13.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test4/images/2-14.png",
        selected: "",
        correct: "ГАВБ",
    },
    {
        question: "../test4/images/2-15.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test4/images/2-16.png",
        selected: "",
        correct: "ВБГА",
    }
]
const mul_ans_questions4 = [
    {
        question: "../test4/images/3-1.png",
        selected: "",
        correct: "256",
    },
    {
        question: "../test4/images/3-2.png",
        selected: "",
        correct: "236",
    },
    {
        question: "../test4/images/3-3.png",
        selected: "",
        correct: "235",
    },
    {
        question: "../test4/images/3-4.png",
        selected: "",
        correct: "156",
    },
    {
        question: "../test4/images/3-5.png",
        selected: "",
        correct: "457",
    },
    {
        question: "../test4/images/3-6.png",
        selected: "",
        correct: "347",
    },
    {
        question: "../test4/images/3-7.png",
        selected: "",
        correct: "357",
    },
    {
        question: "../test4/images/3-8.png",
        selected: "",
        correct: "245",
    },
    {
        question: "../test4/images/3-9.png",
        selected: "",
        correct: "246",
    },
    {
        question: "../test4/images/3-10.png",
        selected: "",
        correct: "235",
    },
    {
        question: "../test4/images/3-11.png",
        selected: "",
        correct: "126",
    },
    {
        question: "../test4/images/3-12.png",
        selected: "",
        correct: "345",
    },
    {
        question: "../test4/images/3-13.png",
        selected: "",
        correct: "246",
    },
    {
        question: "../test4/images/3-14.png",
        selected: "",
        correct: "134",
    },
    {
        question: "../test4/images/3-15.png",
        selected: "",
        correct: "123",
    },
    {
        question: "../test4/images/3-16.png",
        selected: "",
        correct: "124",
    },
    {
        question: "../test4/images/3-17.png",
        selected: "",
        correct: "134",
    }
]


const questions5 = [
    {
        selected: "",
        question: "../test5/images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/2.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/5.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/6.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/8.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "../test5/images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/12.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/16.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/19.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/23.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/26.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/27.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/28.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/31.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/34.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/35.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/36.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/38.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/40.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/41.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/46.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/48.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/51.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/52.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/54.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/55.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/56.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/57.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/58.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/59.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/63.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/64.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/66.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/68.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/69.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/70.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/74.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/76.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/79.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/80.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/81.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/82.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/84.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/85.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/87.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/91.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/93.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/94.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/95.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/96.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/99.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/101.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/103.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/104.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test5/images/105.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/106.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/108.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/109.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/110.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/111.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test5/images/112.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    }
]
const vidpovidnist_questions5 = [
    {
        question: "../test5/images/1-1.png",
        selected: "",
        correct: "3412",
    },
    {
        question: "../test5/images/1-2.png",
        selected: "",
        correct: "4512",
    },
    {
        question: "../test5/images/1-3.png",
        selected: "",
        correct: "3452",
    },
    {
        question: "../test5/images/1-4.png",
        selected: "",
        correct: "2154",
    },
    {
        question: "../test5/images/1-5.png",
        selected: "",
        correct: "3452",
    },
    {
        question: "../test5/images/1-6.png",
        selected: "",
        correct: "1324",
    },
    {
        question: "../test5/images/1-7.png",
        selected: "",
        correct: "4321",
    },
    {
        question: "../test5/images/1-8.png",
        selected: "",
        correct: "2153",
    },
    {
        question: "../test5/images/1-9.png",
        selected: "",
        correct: "1245",
    },
    {
        question: "../test5/images/1-10.png",
        selected: "",
        correct: "3214",
    },
    {
        question: "../test5/images/1-11.png",
        selected: "",
        correct: "1253",
    },
    {
        question: "../test5/images/1-12.png",
        selected: "",
        correct: "4312",
    },
    {
        question: "../test5/images/1-13.png",
        selected: "",
        correct: "4325",
    },
    {
        question: "../test5/images/1-14.png",
        selected: "",
        correct: "2153",
    },
    {
        question: "../test5/images/1-15.png",
        selected: "",
        correct: "3521",
    },
    {
        question: "../test5/images/1-16.png",
        selected: "",
        correct: "4215",
    }
]
const hronology_questions5 = [
    {
        question: "../test5/images/2-1.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "../test5/images/2-2.png",
        selected: "",
        correct: "АГБВ",
    },
    {
        question: "../test5/images/2-3.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test5/images/2-4.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "../test5/images/2-5.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "../test5/images/2-6.png",
        selected: "",
        correct: "АГБВ",
    },
    {
        question: "../test5/images/2-7.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test5/images/2-8.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "../test5/images/2-9.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "../test5/images/2-10.png",
        selected: "",
        correct: "АБГВ",
    },
    {
        question: "../test5/images/2-11.png",
        selected: "",
        correct: "АБВГ",
    },
    {
        question: "../test5/images/2-12.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "../test5/images/2-13.png",
        selected: "",
        correct: "БВГА",
    },
    {
        question: "../test5/images/2-14.png",
        selected: "",
        correct: "АВБГ",
    },
    {
        question: "../test5/images/2-15.png",
        selected: "",
        correct: "БАВГ",
    },
    {
        question: "../test5/images/2-16.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "../test5/images/2-17.png",
        selected: "",
        correct: "ВАБГ",
    },
    {
        question: "../test5/images/2-18.png",
        selected: "",
        correct: "АБГВ",
    },
    {
        question: "../test5/images/2-19.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "../test5/images/2-20.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "../test5/images/2-21.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "../test5/images/2-22.png",
        selected: "",
        correct: "ВГБА",
    },
    {
        question: "../test5/images/2-23.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "../test5/images/2-24.png",
        selected: "",
        correct: "ВБГА",
    },
    {
        question: "../test5/images/2-25.png",
        selected: "",
        correct: "ВГАБ",
    },
    {
        question: "../test5/images/2-26.png",
        selected: "",
        correct: "БАГВ",
    }
]
const mul_ans_questions5 = [
    {
        question: "../test5/images/3-1.png",
        selected: "",
        correct: "234",
    },
    {
        question: "../test5/images/3-2.png",
        selected: "",
        correct: "567",
    },
    {
        question: "../test5/images/3-3.png",
        selected: "",
        correct: "267",
    },
    {
        question: "../test5/images/3-4.png",
        selected: "",
        correct: "246",
    },
    {
        question: "../test5/images/3-5.png",
        selected: "",
        correct: "126",
    },
    {
        question: "../test5/images/3-6.png",
        selected: "",
        correct: "167",
    },
    {
        question: "../test5/images/3-7.png",
        selected: "",
        correct: "135",
    },
    {
        question: "../test5/images/3-8.png",
        selected: "",
        correct: "467",
    },
    {
        question: "../test5/images/3-9.png",
        selected: "",
        correct: "123",
    },
    {
        question: "../test5/images/3-10.png",
        selected: "",
        correct: "135",
    },
    {
        question: "../test5/images/3-11.png",
        selected: "",
        correct: "234",
    },
    {
        question: "../test5/images/3-12.png",
        selected: "",
        correct: "246",
    }
]


const questions6 = [
    {
        selected: "",
        question: "../test6/images/1.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/2.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/3.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/4.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/5.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/6.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/7.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/8.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
        {
        selected: "",
        question: "../test6/images/9.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/10.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/11.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/12.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/13.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/14.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/15.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/16.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/17.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/18.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/19.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/20.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/21.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/22.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/23.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/24.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/25.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/26.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/27.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/28.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/29.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/30.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/31.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/32.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/33.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/34.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/35.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/36.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/37.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/38.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/39.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/40.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/41.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/42.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/43.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/44.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/45.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/46.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/47.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/48.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/49.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/50.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/51.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/52.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/53.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/54.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/55.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/56.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/57.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/58.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/59.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/60.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/61.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/62.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/63.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/64.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/65.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/66.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/67.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/68.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/69.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/70.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/71.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/72.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/73.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/74.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/75.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/76.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/77.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/78.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/79.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/80.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/81.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/82.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/83.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/84.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/85.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/86.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/87.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/88.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/89.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/90.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/91.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/92.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/93.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/94.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/95.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/96.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/97.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/98.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/99.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/100.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/101.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/102.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/103.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/104.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/105.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/106.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/107.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/108.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/109.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/110.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/111.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/112.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/113.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/114.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/115.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/116.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/117.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/118.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/119.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/120.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: true},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/121.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: true},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/122.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/123.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/124.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/125.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/126.png",
        answers: [
            {text: "А", correct: false},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: true},
        ]
    },
    {
        selected: "",
        question: "../test6/images/127.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    },
    {
        selected: "",
        question: "../test6/images/128.png",
        answers: [
            {text: "А", correct: true},
            {text: "Б", correct: false},
            {text: "В", correct: false},
            {text: "Г", correct: false},
        ]
    }

]
const vidpovidnist_questions6 = [
    {
        question: "../test6/images/1-1.png",
        selected: "",
        correct: "2541",
    },
    {
        question: "../test6/images/1-2.png",
        selected: "",
        correct: "5413",
    },
    {
        question: "../test6/images/1-3.png",
        selected: "",
        correct: "2314",
    },
    {
        question: "../test6/images/1-4.png",
        selected: "",
        correct: "5312",
    },
    {
        question: "../test6/images/1-5.png",
        selected: "",
        correct: "3521",
    },
    {
        question: "../test6/images/1-6.png",
        selected: "",
        correct: "2514",
    },
    {
        question: "../test6/images/1-7.png",
        selected: "",
        correct: "3214",
    },
    {
        question: "../test6/images/1-8.png",
        selected: "",
        correct: "3214",
    },
    {
        question: "../test6/images/1-9.png",
        selected: "",
        correct: "3514",
    },
    {
        question: "../test6/images/1-10.png",
        selected: "",
        correct: "1452",
    },
    {
        question: "../test6/images/1-11.png",
        selected: "",
        correct: "3452",
    },
    {
        question: "../test6/images/1-12.png",
        selected: "",
        correct: "3124",
    },
    {
        question: "../test6/images/1-13.png",
        selected: "",
        correct: "4215",
    },
    {
        question: "../test6/images/1-14.png",
        selected: "",
        correct: "2415",
    },
    {
        question: "../test6/images/1-15.png",
        selected: "",
        correct: "1543",
    },
    {
        question: "../test6/images/1-16.png",
        selected: "",
        correct: "4312",
    },
    {
        question: "../test6/images/1-17.png",
        selected: "",
        correct: "5142",
    }
]
const hronology_questions6 = [
    {
        question: "../test6/images/2-1.png",
        selected: "",
        correct: "БГАВ",
    },
    {
        question: "../test6/images/2-2.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test6/images/2-3.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "../test6/images/2-4.png",
        selected: "",
        correct: "ВГАБ",
    },
    {
        question: "../test6/images/2-5.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test6/images/2-6.png",
        selected: "",
        correct: "ГВАБ",
    },
    {
        question: "../test6/images/2-7.png",
        selected: "",
        correct: "ГВАБ",
    },
    {
        question: "../test6/images/2-8.png",
        selected: "",
        correct: "ГБАВ",
    },
    {
        question: "../test6/images/2-9.png",
        selected: "",
        correct: "ГВБА",
    },
    {
        question: "../test6/images/2-10.png",
        selected: "",
        correct: "ГАВБ",
    },
    {
        question: "../test6/images/2-11.png",
        selected: "",
        correct: "АВБГ",
    },
    {
        question: "../test6/images/2-12.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test6/images/2-13.png",
        selected: "",
        correct: "ВБАГ",
    },
    {
        question: "../test6/images/2-14.png",
        selected: "",
        correct: "ВГАБ",
    },
    {
        question: "../test6/images/2-15.png",
        selected: "",
        correct: "ГАБВ",
    },
    {
        question: "../test6/images/2-16.png",
        selected: "",
        correct: "АВГБ",
    },
    {
        question: "../test6/images/2-17.png",
        selected: "",
        correct: "ВАГБ",
    },
    {
        question: "../test6/images/2-18.png",
        selected: "",
        correct: "БАГВ",
    },
    {
        question: "../test6/images/2-19.png",
        selected: "",
        correct: "БГВА",
    },
    {
        question: "../test6/images/2-20.png",
        selected: "",
        correct: "БВАГ",
    },
    {
        question: "../test6/images/2-21.png",
        selected: "",
        correct: "БГАВ",
    }
]
const mul_ans_questions6 = [
    {
        question: "../test6/images/3-1.png",
        selected: "",
        correct: "346",
    },
    {
        question: "../test6/images/3-2.png",
        selected: "",
        correct: "146",
    },
    {
        question: "../test6/images/3-3.png",
        selected: "",
        correct: "346",
    },
    {
        question: "../test6/images/3-4.png",
        selected: "",
        correct: "235",
    },
    {
        question: "../test6/images/3-5.png",
        selected: "",
        correct: "137",
    },
    {
        question: "../test6/images/3-6.png",
        selected: "",
        correct: "247",
    },
    {
        question: "../test6/images/3-7.png",
        selected: "",
        correct: "157",
    },
    {
        question: "../test6/images/3-8.png",
        selected: "",
        correct: "237",
    },
    {
        question: "../test6/images/3-9.png",
        selected: "",
        correct: "256",
    },
    {
        question: "../test6/images/3-10.png",
        selected: "",
        correct: "127",
    },
    {
        question: "../test6/images/3-11.png",
        selected: "",
        correct: "126",
    },
    {
        question: "../test6/images/3-12.png",
        selected: "",
        correct: "237",
    },
    {
        question: "../test6/images/3-13.png",
        selected: "",
        correct: "236",
    },
    {
        question: "../test6/images/3-14.png",
        selected: "",
        correct: "356",
    },
    {
        question: "../test6/images/3-15.png",
        selected: "",
        correct: "247",
    },
    {
        question: "../test6/images/3-16.png",
        selected: "",
        correct: "356",
    },
    {
        question: "../test6/images/3-17.png",
        selected: "",
        correct: "247",
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
questionCount = 30
let currentQuestionIndex = 0
let score = 0
var test_completed = false
let RND_question = 0

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
    block_answers.style.display = "none"
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
    if (currentQuestionIndex < 12) {
        let temp_list = [];
        if (0 <= currentQuestionIndex < 2) {
            temp_list = questions1;
        }
        else if (2 <= currentQuestionIndex < 4) {
            temp_list = questions2;
        }
        else if (4 <= currentQuestionIndex < 6) {
            temp_list = questions3;
        }
        else if (6 <= currentQuestionIndex < 8) {
            temp_list = questions4;
        }
        else if (8 <= currentQuestionIndex < 10) {
            temp_list = questions5;
        }
        else if (10 <= currentQuestionIndex < 12) {
            temp_list = questions6;
        }
        let randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
        let currentQuestion = temp_list[randomQuestionIndex]
        while (alreadyAsked.includes(currentQuestion)) {
            randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
            currentQuestion = temp_list[randomQuestionIndex]
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
        if (12 <= currentQuestionIndex && currentQuestionIndex < 18) {
            let temp_list = [];
            if (currentQuestionIndex == 12) {
                temp_list = vidpovidnist_questions1;
            }
            else if (currentQuestionIndex == 13) {
                temp_list = vidpovidnist_questions2;
            }
            else if (currentQuestionIndex == 14) {
                temp_list = vidpovidnist_questions3;
            }
            else if (currentQuestionIndex == 15) {
                temp_list = vidpovidnist_questions4;
            }
            else if (currentQuestionIndex == 16) {
                temp_list = vidpovidnist_questions5;
            }
            else if (currentQuestionIndex == 17) {
                temp_list = vidpovidnist_questions6;
            }
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти А-1 Б-2 В-3 Г-4, то впишіть 1234"
            let randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
            let currentQuestion = temp_list[randomQuestionIndex]
            while (vidpovidnist_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
                currentQuestion = temp_list[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        } else if (18 <= currentQuestionIndex && currentQuestionIndex < 24) {
            let temp_list = [];
            if (currentQuestionIndex == 18) {
                temp_list = hronology_questions1;
            }
            else if (currentQuestionIndex == 19) {
                temp_list = hronology_questions2;
            }
            else if (currentQuestionIndex == 20) {
                temp_list = hronology_questions3;
            }
            else if (currentQuestionIndex == 21) {
                temp_list = hronology_questions4;
            }
            else if (currentQuestionIndex == 22) {
                temp_list = hronology_questions5;
            }
            else if (currentQuestionIndex == 23) {
                temp_list = hronology_questions6;
            }
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти 1-А 2-Б 3-В 4-Г, то вкажіть АБВГ"
            let randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
            let currentQuestion = temp_list[randomQuestionIndex]
            while (hronology_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
                currentQuestion = temp_list[randomQuestionIndex]
            }
            RND_question = randomQuestionIndex
            let questionNo = currentQuestionIndex + 1
            h2_title.innerHTML = "Питання №"+questionNo

            document.getElementById("question").src = currentQuestion.question
            answer_field.style.display = "block"
        } else if (24 <= currentQuestionIndex && currentQuestionIndex < 30){
            let temp_list = [];
            if (currentQuestionIndex == 24) {
                temp_list = mul_ans_questions1;
            }
            else if (currentQuestionIndex == 25) {
                temp_list = mul_ans_questions2;
            }
            else if (currentQuestionIndex == 26) {
                temp_list = mul_ans_questions3;
            }
            else if (currentQuestionIndex == 27) {
                temp_list = mul_ans_questions4;
            }
            else if (currentQuestionIndex == 28) {
                temp_list = mul_ans_questions5;
            }
            else if (currentQuestionIndex == 29) {
                temp_list = mul_ans_questions6;
            }
            correct_answer.innerHTML = "У відповідях вказуйте лише числа.\n Наприклад: якщо ви хочете відповісти 3, 4, 5, то вкажіть 345"
            let randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
            let currentQuestion = temp_list[randomQuestionIndex]
            while (mul_ans_alreadyAsked.includes(currentQuestion)) {
                randomQuestionIndex = Math.floor(Math.random()*temp_list.length)
                currentQuestion = temp_list[randomQuestionIndex]
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
    const q_id = document.getElementById("q"+(currentQuestionIndex+1))
    let temp_list = [];
        if (0 <= currentQuestionIndex < 2) {
            temp_list = questions1;
        }
        else if (2 <= currentQuestionIndex < 4) {
            temp_list = questions2;
        }
        else if (4 <= currentQuestionIndex < 6) {
            temp_list = questions3;
        }
        else if (6 <= currentQuestionIndex < 8) {
            temp_list = questions4;
        }
        else if (8 <= currentQuestionIndex < 10) {
            temp_list = questions5;
        }
        else if (10 <= currentQuestionIndex < 12) {
            temp_list = questions6;
        }
    let currentQuestion = temp_list[RND_question]
    const selectedBtn = e.target
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove("selected")
        button.classList.remove("incorrect")
        button.classList.remove("correct")
    })
    q_id.classList.remove("incorrect")
    q_id.classList.remove("correct")
    if (alreadyAsked[currentQuestion] != null) {
        if (alreadyAsked[currentQuestionIndex].question == currentQuestion.question) {
            alreadyAsked.remove[currentQuestionIndex]
        }
    }
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect) {
        selectedBtn.classList.add("selected")
        selectedBtn.classList.add("correct")
        q_id.classList.add("correct")
        clicked_variant = selectedBtn
        score++
    } else {
        selectedBtn.classList.add("selected")
        selectedBtn.classList.add("incorrect")
        q_id.classList.add("incorrect")
        clicked_variant = selectedBtn
    }
    currentQuestion.selected = selectedBtn.innerHTML
    this_Q = currentQuestion
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    if (score < 5) {
        document.getElementById("question").src = "/siteHistoryTests/grades/very_bad.jpg"
    } else if (score < 10) {
        document.getElementById("question").src = "/siteHistoryTests/grades/bad.jpg"
    } else if (score < 14) {
        document.getElementById("question").src = "/siteHistoryTests/grades/average.jpg"
    } else if (score < 16) {
        document.getElementById("question").src = "/siteHistoryTests/grades/good.jpg"
    } else if (score >= 16) {
        document.getElementById("question").src = "/siteHistoryTests/grades/very_good.jpg"
    }
    clearInterval(timerInterval)
    h2_title.innerHTML =`Ви набрали ${score} з 21 балу!`
    nextButton. innerHTML = "Пройти знову"
    nextButton.style.display = "block"
    test_completed = true
    block_answers.style.display = "block"
    answer_field.style.display = "none"
}

function handleNextButton(){
    currentQuestionIndex++
    if (!test_completed){
        let currentQuestion
        if (currentQuestionIndex < 13) {
            selectedAnswers.push(clicked_variant)
            alreadyAsked.push(this_Q)
        }

        else if (13 <= currentQuestionIndex && currentQuestionIndex < 19) {
            let temp_list = [];
            if (currentQuestionIndex == 13) {
                temp_list = vidpovidnist_questions1;
            }
            else if (currentQuestionIndex == 14) {
                temp_list = vidpovidnist_questions2;
            }
            else if (currentQuestionIndex == 15) {
                temp_list = vidpovidnist_questions3;
            }
            else if (currentQuestionIndex == 16) {
                temp_list = vidpovidnist_questions4;
            }
            else if (currentQuestionIndex == 17) {
                temp_list = vidpovidnist_questions5;
            }
            else if (currentQuestionIndex == 18) {
                temp_list = vidpovidnist_questions6;
            }
            currentQuestion = temp_list[RND_question]
            const q_id = document.getElementById("q"+currentQuestionIndex)
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                q_id.classList.add("correct")
                selectedAnswers.push(answer_field)
                vidpovidnist_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                vidpovidnist_selectedAnswers.push(answer_field.value)
                q_id.classList.add("incorrect")
            }
            vidpovidnist_alreadyAsked.push(currentQuestion)
        }
        
        
        else if (19 <= currentQuestionIndex && currentQuestionIndex < 25) {
            let temp_list = [];
            if (currentQuestionIndex == 19) {
                temp_list = hronology_questions1;
            }
            else if (currentQuestionIndex == 20) {
                temp_list = hronology_questions2;
            }
            else if (currentQuestionIndex == 21) {
                temp_list = hronology_questions3;
            }
            else if (currentQuestionIndex == 22) {
                temp_list = hronology_questions4;
            }
            else if (currentQuestionIndex == 23) {
                temp_list = hronology_questions5;
            }
            else if (currentQuestionIndex == 24) {
                temp_list = hronology_questions6;
            }
            currentQuestion = temp_list[RND_question]
            const q_id = document.getElementById("q"+currentQuestionIndex)
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected.toLocaleUpperCase() == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                q_id.classList.add("correct")
                selectedAnswers.push(answer_field)
                hronology_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                hronology_selectedAnswers.push(answer_field.value)
                q_id.classList.add("incorrect")
            }
            hronology_alreadyAsked.push(currentQuestion)
        } 
        
        
        else if (25 <= currentQuestionIndex && currentQuestionIndex < 31) {
            let temp_list = [];
            if (currentQuestionIndex == 25) {
                temp_list = mul_ans_questions1;
            }
            else if (currentQuestionIndex == 26) {
                temp_list = mul_ans_questions2;
            }
            else if (currentQuestionIndex == 27) {
                temp_list = mul_ans_questions3;
            }
            else if (currentQuestionIndex == 28) {
                temp_list = mul_ans_questions4;
            }
            else if (currentQuestionIndex == 29) {
                temp_list = mul_ans_questions5;
            }
            else if (currentQuestionIndex == 30) {
                temp_list = mul_ans_questions6;
            }
            currentQuestion = temp_list[RND_question]
            const q_id = document.getElementById("q"+currentQuestionIndex)
            currentQuestion.selected = answer_field.value
            if(currentQuestion.selected == currentQuestion.correct) {
                answer_field.classList.add("correct")
                score = score +3
                q_id.classList.add("correct")
                selectedAnswers.push(answer_field)
                mul_selectedAnswers.push(answer_field.value)
            } else {
                answer_field.classList.add("incorrect")
                selectedAnswers.push(answer_field)
                mul_selectedAnswers.push(answer_field.value)
                q_id.classList.add("incorrect")
            }
            mul_ans_alreadyAsked.push(currentQuestion)
        }
        if (currentQuestionIndex == 30) {
            nextButton. innerHTML = "Завершити тест"
        }

        if(currentQuestionIndex < questionCount) {
            showQuestion()
        } else {
            showScore()
        }
    } else {
        startQuiz()
    }
    
}

nextButton.addEventListener("click", ()=>{
    handleNextButton()
})

function showCorrectAnswer(id) {
    resetState()
    nextButton.style.display = "block"
    if (id < 12) {
        alreadyAsked[id].answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        const isCorrect = button.dataset.correct === "true"
        if(alreadyAsked[id].selected.toLocaleUpperCase() === button.innerHTML) {
            button.classList.add("incorrect")
        } 
        if(isCorrect) {
            button.classList.add("correct")
        }
        button.disabled = true
        })
    } else if (12 <= id && id < 18) {
        answer_field.style.display = "block"
        answer_field.disabled = true
        if (vidpovidnist_alreadyAsked[0].selected == vidpovidnist_alreadyAsked[0].correct) {
            answer_field.classList.add("correct")
        } else {
            answer_field.classList.add("incorrect")
            correct_answer.style.display = "block"
            correct_answer.innerHTML = "Правильна відповідь: "+vidpovidnist_alreadyAsked[0].correct
        }
        answer_field.value = vidpovidnist_selectedAnswers[0]
    } else if (18 <= id && id < 24) {
        answer_field.style.display = "block"
        answer_field.disabled = true
        if (hronology_alreadyAsked[0].selected.toLocaleUpperCase() == hronology_alreadyAsked[0].correct) {
            answer_field.classList.add("correct")
        } else {
            answer_field.classList.add("incorrect")
            correct_answer.style.display = "block"
            correct_answer.innerHTML = "Правильна відповідь: "+hronology_alreadyAsked[0].correct
        }
        answer_field.value = hronology_selectedAnswers[0]
    } else if (24 <= id && id < 30) {
        answer_field.style.display = "block"
        answer_field.disabled = true
        if (mul_ans_alreadyAsked[0].selected == mul_ans_alreadyAsked[0].correct) {
            answer_field.classList.add("correct")
        } else {
            answer_field.classList.add("incorrect")
            correct_answer.style.display = "block"
            correct_answer.innerHTML = "Правильна відповідь: "+mul_ans_alreadyAsked[0].correct
        }
        answer_field.value = mul_selectedAnswers[0]
    }
    const q_info_str = document.getElementById("question").src
    const cut_q_info_str = q_info_str.slice(27, -4)
    const q_info_num = cut_q_info_str.match(/\d+/g)
    document.getElementById("q_info").innerHTML = ""+q_info_num
}

Array.from(document.getElementById("block_answers").children).forEach(item => {
    item.addEventListener("click", ()=> {
        var id = item.innerHTML -1;
        temp_list = [];
        if (id < 12) {temp_list = alreadyAsked}
        else if (12 <= id && id < 18) {temp_list = vidpovidnist_alreadyAsked}
        else if (18 <= id && id < 24) {temp_list = hronology_alreadyAsked}
        else if (24 <= id && id < 30) {temp_list = mul_ans_alreadyAsked}
        document.getElementById("question").src = temp_list[id].question
        showCorrectAnswer(id)
    })
})

startQuiz()