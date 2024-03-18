const baseData = [
    {
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
},
{
    question:'which city is known as a golden city',
    options : ['surat','amritsar','Jaisalmer','ahmedabad'],
    correct: 2
},
{
    question:'demo',
    options : ['op1','op2','op3','op4'],
    correct: 0
}    
]

const [questionHeading, op1, op2, op3, op4] = document.querySelectorAll('#question, #op1, #op2, #op3, #op4');

const answer = document.querySelectorAll('.answer')
const box = document.getElementById('box')
const submitButton=document.getElementById('submit')
var currentQuiz = 0
var score = 0
var index = 1
function loadQuiz(){
const {question,options} = baseData[currentQuiz]

questionHeading.innerHTML = `${index} : ${question}`

options.forEach((e,index)=>{
    window[`op${index+1}`].innerHTML=e
})

}

loadQuiz()

// step 2


function findSelectedOption(){
var ansIndex
    answer.forEach((e,index)=>{
        if(e.checked){
            ansIndex = index
        }
    })
    return ansIndex
}
findSelectedOption()

const removeSelecter = () =>{

   return answer.forEach((e)=> e.checked=false)
}


submitButton.addEventListener('click',()=>{
    const getSelectedOption = findSelectedOption()

    if(currentQuiz < baseData.length){
       if(getSelectedOption == baseData[currentQuiz].correct){
        
        score = score + 1
    }
    console.log(currentQuiz);
    console.log(score);
    index++
    currentQuiz++
    loadQuiz()
    removeSelecter()
    let percentage = score/(baseData.length-1)*100

    if(currentQuiz+1  == baseData.length  ){
        box.innerHTML=`<div class="result"><h1> congratulations your quiz is complete</h1>
        <h1 class='score'>your score is ${score}/${baseData.length-1}</h1> <h2 class='score'> your percentage is ${percentage}% </h2>
        </div>` 
        console.log(baseData.length-1);
      }

    } 
    // e 
}
)


