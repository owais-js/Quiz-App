var questions = [
    {
        title: 'What is HTML',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Markup Language'
    },
    {
        title: 'What is CSS',
        options: ['Styling Language', 'Gora Language', 'Kala Language', 'None of the above'],
        correctAnswer: 'Styling Language'
    },
    {
        title: 'What is JS',
        options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'Programming Language'
    },
    {
        title: 'What is React',
        options: ['JS Library', 'Scripting Language', 'Markup Language', 'None of the above'],
        correctAnswer: 'JS Library'
    }
]

  var currentquestion=0
  var mark=0 
  var st = 0
function startQuiz(){
    var startquiz=document.getElementById("btn")
    startquiz.className="hide"
    var questionContainer=document.getElementById("question-container")
    questionContainer.className=""
    st = 1
    // currentquestion = 1
    next();
}

function next(){
    currentquestion++
    if(currentquestion!=1){
        if (!document.querySelector('input[class="ques"]:checked')) {
            alert("please choose an option")
            restart()
        }
        var selectedOpt = document.querySelector('input[class="ques"]:checked').value
        if(selectedOpt == questions[currentquestion-2].correctAnswer){
            mark++
        }
    }
    if(currentquestion<=questions.length){
        renderQuestion()
    }else{
        var questionContainer=document.getElementById("question-container")
        questionContainer.className="hide"
        var resultElement=document.getElementById("result")
        resultElement.className=""
        document.getElementById("mrk").innerText=(mark/4)*100
    }
}
function renderQuestion(){
    var questionTitle=document.getElementById("title")
    questionTitle.innerHTML=questions[currentquestion-1].title
    
    var optionsElement=document.getElementById("options")
    optionsElement.innerHTML=""

    var options=questions[currentquestion-1].options
    for(var i=0; i<options.length; i++){
        var inputElement=document.createElement("input")
        inputElement.type="radio"
        inputElement.className="ques"
        inputElement.name="ques"
        inputElement.value=options[i]

        optionsElement.append(inputElement)
        optionsElement.append(options[i])
    }
}
function restart(){
    var hh=document.getElementById("result")
    hh.className="hide"
    currentquestion = 0
    mark = 0
    startQuiz()
}