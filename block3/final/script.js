const h2_title = document.getElementById("h2")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const block_answers = document.getElementById("block_answers")
const answer_field = document.getElementById("text_input")
const correct_answer = document.getElementById("correct_answer")



let questions1 = []
let vidpovidnist_questions1 = []
let hronology_questions1 = []
let mul_ans_questions1 = []


let questions2 = []
let vidpovidnist_questions2 = []
let hronology_questions2 = []
let mul_ans_questions2 = []


let questions3 = []
let vidpovidnist_questions3 = []
let hronology_questions3 = []
let mul_ans_questions3 = []


let questions4 = []
let vidpovidnist_questions4 = []
let hronology_questions4 = []
let mul_ans_questions4 = []


let questions5 = []
let vidpovidnist_questions5 = []
let hronology_questions5 = []
let mul_ans_questions5 = []


let questions6 = []
let vidpovidnist_questions6 = []
let hronology_questions6 = []
let mul_ans_questions6 = []

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

let promises = [
    fetchJsonData("../test1/questions.json").then(
        function (data) {
            questions1 = data;
        }
    ),
    fetchJsonData("../test1/vidpovidnist_questions.json").then(
        function (data) {
            vidpovidnist_questions1 = data;
        }
    ),
    fetchJsonData("../test1/hronology_questions.json").then(
        function (data) {
            hronology_questions1 = data;
        }
    ),
    fetchJsonData("../test1/mul_ans_questions.json").then(
        function (data) {
            mul_ans_questions1 = data;
        }
    ),

    
    fetchJsonData("../test2/questions.json").then(
        function (data) {
            questions2 = data;
        }
    ),
    fetchJsonData("../test2/vidpovidnist_questions.json").then(
        function (data) {
            vidpovidnist_questions2 = data;
        }
    ),
    fetchJsonData("../test2/hronology_questions.json").then(
        function (data) {
            hronology_questions2 = data;
        }
    ),
    fetchJsonData("../test2/mul_ans_questions.json").then(
        function (data) {
            mul_ans_questions2 = data;
        }
    ),

    
    fetchJsonData("../test3/questions.json").then(
        function (data) {
            questions3 = data;
        }
    ),
    fetchJsonData("../test3/vidpovidnist_questions.json").then(
        function (data) {
            vidpovidnist_questions3 = data;
        }
    ),
    fetchJsonData("../test3/hronology_questions.json").then(
        function (data) {
            hronology_questions3 = data;
        }
    ),
    fetchJsonData("../test3/mul_ans_questions.json").then(
        function (data) {
            mul_ans_questions3 = data;
        }
    ),

    
    fetchJsonData("../test4/questions.json").then(
        function (data) {
            questions4 = data;
        }
    ),
    fetchJsonData("../test4/vidpovidnist_questions.json").then(
        function (data) {
            vidpovidnist_questions4 = data;
        }
    ),
    fetchJsonData("../test4/hronology_questions.json").then(
        function (data) {
            hronology_questions4 = data;
        }
    ),
    fetchJsonData("../test4/mul_ans_questions.json").then(
        function (data) {
            mul_ans_questions4 = data;
        }
    ),

    
    fetchJsonData("../test5/questions.json").then(
        function (data) {
            questions5 = data;
        }
    ),
    fetchJsonData("../test5/vidpovidnist_questions.json").then(
        function (data) {
            vidpovidnist_questions5 = data;
        }
    ),
    fetchJsonData("../test5/hronology_questions.json").then(
        function (data) {
            hronology_questions5 = data;
        }
    ),
    fetchJsonData("../test5/mul_ans_questions.json").then(
        function (data) {
            mul_ans_questions5 = data;
        }
    ),

    
    fetchJsonData("../test6/questions.json").then(
        function (data) {
            questions6 = data;
        }
    ),
    fetchJsonData("../test6/vidpovidnist_questions.json").then(
        function (data) {
            vidpovidnist_questions6 = data;
        }
    ),
    fetchJsonData("../test6/hronology_questions.json").then(
        function (data) {
            hronology_questions6 = data;
        }
    ),
    fetchJsonData("../test6/mul_ans_questions.json").then(
        function (data) {
            mul_ans_questions6 = data;
        }
    ),
];

Promise.all(promises)
    .then(function () {
        startQuiz();
    })
    .catch(function (error) {
        console.error(error);
    });

let alreadyAsked = []
let vidpovidnist_alreadyAsked = []
let hronology_alreadyAsked = []
let mul_ans_alreadyAsked = []
let selectedAnswers = []
let vidpovidnist_selectedAnswers = []
let hronology_selectedAnswers = []
let mul_selectedAnswers = []
questionCount = 36
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
for (var i = 1; i <= questionCount; i++) {
        var btn=document.createElement("button");
        btn.className += "q_id"
        btn.id = "q"+i;
        btn.innerHTML = i;
        block_answers.appendChild(btn);
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
    if (currentQuestionIndex < 18) {
        let temp_list = [];
        if (0 <= currentQuestionIndex < 3) {
            temp_list = questions1;
        }
        else if (3 <= currentQuestionIndex < 6) {
            temp_list = questions2;
        }
        else if (6 <= currentQuestionIndex < 9) {
            temp_list = questions3;
        }
        else if (9 <= currentQuestionIndex < 12) {
            temp_list = questions4;
        }
        else if (12 <= currentQuestionIndex < 15) {
            temp_list = questions5;
        }
        else if (15 <= currentQuestionIndex < 18) {
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
        if (18 <= currentQuestionIndex && currentQuestionIndex < 24) {
            let temp_list = [];
            if (currentQuestionIndex == 18) {
                temp_list = vidpovidnist_questions1;
            }
            else if (currentQuestionIndex == 19) {
                temp_list = vidpovidnist_questions2;
            }
            else if (currentQuestionIndex == 20) {
                temp_list = vidpovidnist_questions3;
            }
            else if (currentQuestionIndex == 21) {
                temp_list = vidpovidnist_questions4;
            }
            else if (currentQuestionIndex == 22) {
                temp_list = vidpovidnist_questions5;
            }
            else if (currentQuestionIndex == 23) {
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
        } else if (24 <= currentQuestionIndex && currentQuestionIndex < 30) {
            let temp_list = [];
            if (currentQuestionIndex == 24) {
                temp_list = hronology_questions1;
            }
            else if (currentQuestionIndex == 25) {
                temp_list = hronology_questions2;
            }
            else if (currentQuestionIndex == 26) {
                temp_list = hronology_questions3;
            }
            else if (currentQuestionIndex == 27) {
                temp_list = hronology_questions4;
            }
            else if (currentQuestionIndex == 28) {
                temp_list = hronology_questions5;
            }
            else if (currentQuestionIndex == 29) {
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
        } else if (30 <= currentQuestionIndex && currentQuestionIndex < 36){
            let temp_list = [];
            if (currentQuestionIndex == 30) {
                temp_list = mul_ans_questions1;
            }
            else if (currentQuestionIndex == 31) {
                temp_list = mul_ans_questions2;
            }
            else if (currentQuestionIndex == 32) {
                temp_list = mul_ans_questions3;
            }
            else if (currentQuestionIndex == 33) {
                temp_list = mul_ans_questions4;
            }
            else if (currentQuestionIndex == 34) {
                temp_list = mul_ans_questions5;
            }
            else if (currentQuestionIndex == 35) {
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
        if (0 <= currentQuestionIndex < 3) {
            temp_list = questions1;
        }
        else if (3 <= currentQuestionIndex < 6) {
            temp_list = questions2;
        }
        else if (6 <= currentQuestionIndex < 9) {
            temp_list = questions3;
        }
        else if (9 <= currentQuestionIndex < 12) {
            temp_list = questions4;
        }
        else if (12 <= currentQuestionIndex < 15) {
            temp_list = questions5;
        }
        else if (15 <= currentQuestionIndex < 18) {
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
    if (score < (18+18*3)/2) {
        document.getElementById("question").src = "../grades/hmelnytskiy.png"
    } else {
        document.getElementById("question").src = "../grades/skovoroda.png"
    }
    clearInterval(timerInterval)
    h2_title.innerHTML =`Ви набрали ${score} з ${18+18*3} балу!`
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
        if (currentQuestionIndex < 19) {
            selectedAnswers.push(clicked_variant)
            alreadyAsked.push(this_Q)
        }

        else if (19 <= currentQuestionIndex && currentQuestionIndex < 25) {
            let temp_list = [];
            if (currentQuestionIndex == 19) {
                temp_list = vidpovidnist_questions1;
            }
            else if (currentQuestionIndex == 20) {
                temp_list = vidpovidnist_questions2;
            }
            else if (currentQuestionIndex == 21) {
                temp_list = vidpovidnist_questions3;
            }
            else if (currentQuestionIndex == 22) {
                temp_list = vidpovidnist_questions4;
            }
            else if (currentQuestionIndex == 23) {
                temp_list = vidpovidnist_questions5;
            }
            else if (currentQuestionIndex == 24) {
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
        
        
        else if (25 <= currentQuestionIndex && currentQuestionIndex < 31) {
            let temp_list = [];
            if (currentQuestionIndex == 25) {
                temp_list = hronology_questions1;
            }
            else if (currentQuestionIndex == 26) {
                temp_list = hronology_questions2;
            }
            else if (currentQuestionIndex == 27) {
                temp_list = hronology_questions3;
            }
            else if (currentQuestionIndex == 28) {
                temp_list = hronology_questions4;
            }
            else if (currentQuestionIndex == 29) {
                temp_list = hronology_questions5;
            }
            else if (currentQuestionIndex == 30) {
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
        
        
        else if (31 <= currentQuestionIndex && currentQuestionIndex < 37) {
            let temp_list = [];
            if (currentQuestionIndex == 31) {
                temp_list = mul_ans_questions1;
            }
            else if (currentQuestionIndex == 32) {
                temp_list = mul_ans_questions2;
            }
            else if (currentQuestionIndex == 33) {
                temp_list = mul_ans_questions3;
            }
            else if (currentQuestionIndex == 34) {
                temp_list = mul_ans_questions4;
            }
            else if (currentQuestionIndex == 35) {
                temp_list = mul_ans_questions5;
            }
            else if (currentQuestionIndex == 36) {
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
        if (currentQuestionIndex == 36) {
            nextButton. innerHTML = "Завершити тест"
        }

        if(currentQuestionIndex < questionCount+1) {
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
    if (id < 18) {
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
    } else if (18 <= id && id < 24) {
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
    } else if (24 <= id && id < 30) {
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
    } else if (30 <= id && id < 36) {
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
        var qid = 0;
        temp_list = [];
        if (id < 18) {temp_list = alreadyAsked; qid = id}
        else if (18 <= id && id < 24) {temp_list = vidpovidnist_alreadyAsked; qid = id-18}
        else if (24 <= id && id < 30) {temp_list = hronology_alreadyAsked; qid = id-24}
        else if (30 <= id && id < 36) {temp_list = mul_ans_alreadyAsked; qid = id-30}
        document.getElementById("question").src = temp_list[qid].question
        showCorrectAnswer(id)
    })
})

function setCurrentQuestion(index) {
    currentQuestionIndex = index;
    showQuestion();
}