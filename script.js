
const questions = [
    {
      question: "What type of language is JavaScript?",
      options: ["Programming", "Markup", "Styling", "None of the above"],
      answer: 0
    },
    {
      question: "Which method is used to print to the Console?",
      options: ["print()", "echo()", "console.log()", "log.console()"],
      answer: 2
    },
    {
      question: "Which keyword is used to declare a changeable variable in JavaScript?",
      options: ["const", "let", "define", "static"],
      answer: 1
    },
    {
      question: "What is the output of typeof '123'?",
      options: ["number", "string", "object", "undefined"],
      answer: 1
    },
    {
      question: "Which operator is used to compare both value and type?",
      options: ["==", "===", "!=", "="],
      answer: 1
    },
    {
      question: "Which function is used to convert a string to an integer?",
      options: ["parseInt()", "parseFloat()", "toString()", "Number.toInt()"],
      answer: 0
    },
    {
      question: "Which of these is considered a falsy value in JavaScript?",
      options: ["true", "1", "0", "[]"],
      answer: 2
    },
    {
      question: "Which loop executes at least once, even if the condition is false?",
      options: ["for", "while", "do...while", "foreach"],
      answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion(){
    const q = questions[currentQuestion];
    document.getElementById("question").innerHTML = q.question;
    const optionsForm = document.getElementById("options");
    optionsForm.innerHTML = "";

    q.options.forEach((opt, index) => {   
        const label = document.createElement("label");
        const radio = document.createElement("input"); 
        radio.type = "radio";
        radio.name = "option";
        radio.value = index;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement("br"));
    });
}

document.getElementById("nextBtn").onclick = function (e) {
    e.preventDefault();

    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected){
        alert("please choose an answer!");
        return;
    }

    if (parseInt(selected.value) === questions[currentQuestion].answer) { 
        score++;
    }
    
    currentQuestion++; 
    
    if (currentQuestion < questions.length) { 
        showQuestion();
    }
    else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("score").innerText = `Your score : ${score} from ${questions.length}`;
    }
};

showQuestion();

// function showQuestion (){
//     const q = questions[currentQuestion];
//     document.getElementById("question").innerHTML = q;

// }

// showQuestion();