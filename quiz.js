const baseData = [{
    question : 'what is the financial capital of india',
    options : ['delhi', 'kolkata','mumbai','gujrat'],
    correct : 2
},

{
    question : 'select the largest state in india',
    options : ['madhya pradesh','uttar pradesh','gujrat','rajsthan'],
    correct : 3
},
{
    question:'which city is known as a pink city',
    options : ['jaipur','jesalmer','indore','ahmedabad'],
    correct: 0
} 
]

// code here

// get acces of eliments

// const [answer,questionA,op1,op2,op3,op4,submit] = document.querySelectorAll(".answer, .question, #op1, #op2, #op3, #op4, #submit")
const questionHeading = document.getElementById('question')
const op1 = document.getElementById('op1')
const op2 = document.getElementById('op2')
const op3 = document.getElementById('op3')
const op4 = document.getElementById('op4')
const submit = document.getElementById('submit')

 
let currenQuiz = 0
let score = 0

//stap 3

const loadQuiz = ()=>{
    const { question ,options} = baseData[currenQuiz]
    questionHeading.innerHTML= question

    options.forEach((e,index)=>{
     window[`op${index +1}`].innerText = e

    })
}

loadQuiz()

//stap 4
 

function findSelectOption(){
    const answer = document.querySelectorAll('.answer')

    var ans_index

    answer.forEach((e,index)=>{
        if(e.checked){
            ans_index = index 
        }
    })
 return  ans_index
}
findSelectOption()







submit.addEventListener('click',()=>{

    const getSelectedOption = findSelectOption()
    console.log(getSelectedOption);

    currenQuiz++;

    if(currenQuiz<baseData.length){
        loadQuiz()

    }
})


