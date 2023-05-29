// function welcomeRemove() {
//     document.querySelector(".welcome").style.display = "none"
//     document.querySelector(".cat").style.display = "block"
// }

var cattype = document.querySelectorAll(".catListItem").forEach(function(e){
    e.addEventListener("click", function (){
        // console.log(this.getAttribute("data-cattype"))
    })
})



// Array for  Pipes and Cisterns
var quetions = [
    {
        quetion: "what is the capital of Himachal pradesh?",
        answers: [
            { ans: "Solan", correct: false },
            { ans: "Shimal", correct: true },
            { ans: "Mandi", correct: false },
            { ans: "Chamba", correct: false },
        ]
    },
    {
        quetion: "what is the capital of India",
        answers: [
            { ans: "Mumbai", correct: false },
            { ans: "Goa", correct: false },
            { ans: "dehli", correct: true },
            { ans: "Kochi", correct: false },
        ]
    },
    {
        quetion: "what is the capital of Punjab",
        answers: [
            { ans: "Shimla", correct: false },
            { ans: "Pind", correct: false },
            { ans: "Kochi", correct: false },
            { ans: "Chandighar", correct: true },
        ]
    },
    {
        quetion: "what is the capital of Jammu",
        answers: [
            { ans: "Shri Nagar", correct: true },
            { ans: "Shimla", correct: false },
            { ans: "Pind", correct: false },
            { ans: "Kochi", correct: false },

        ]
    },
]




function instructPage() {
    document.querySelector(".welcome").style.display = "none"
    document.querySelector(".cat").style.display = "none"
    document.querySelector(".instructions").style.display = "block"

    
}

let queEle = document.querySelector(".que");
let ansEle = document.querySelector(".ans");
let nxtBtn = document.querySelector(".nxtBtn");

let queIndex = 0;
let points = 0;


function quizStart () {
   
    document.querySelector(".instructions").style.display = "none"
    document.querySelector(".queAndAns").style.display = "flex"
    userName = document.querySelector(".userName").value
    queIndex = 0;
    points =0;
    nxtBtn.innerHTML = "Next"
    
    
    queReset()
    
    queStart()
    
}


function queStart () {
    queReset()
    
    let queCurrent = quetions[queIndex];
    
    let queNumber = queIndex + 1;
    queEle.innerHTML = queNumber + ". " + queCurrent.quetion;


    queCurrent.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.ans;
        button.classList.add("answers");
        ansEle.appendChild(button)
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function queReset () {
    nxtBtn.style.display = "none"
    while(ansEle.firstChild){
        ansEle.removeChild(ansEle.firstChild)
    }
}


function selectAnswer(e) {
    let selectedans = e.target;
    let isCorrect = selectedans.dataset.correct === "true"
    if (isCorrect){
        selectedans.classList.add("correct")
        points += 10
    }
    else {
        selectedans.classList.add("incorrect")
    }
    Array.from(ansEle.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nxtBtn.style.display = "block"
}

function showReslut() {
    queReset()
    queEle.innerHTML ="Your Performance Analysis"
    ansEle.innerHTML = `${userName} your Score is ${points} out of 100`
    nxtBtn.innerHTML = "Play Again"
    nxtBtn.style.display = "block"
}

function nxtBtnWork() {
    queIndex++
    if(queIndex < quetions.length){
        queStart()
    }else {
        showReslut()
    }
}
nxtBtn.addEventListener("click", ()=> {
    if(queIndex < quetions.length){
        nxtBtnWork()
    }
    else{
        quizStart()
    }
})
