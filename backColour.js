
// first project 


// const cardA = document.getElementsByClassName('cardA')[0];
// const cardB = document.getElementsByClassName('cardB')[0];
// const cardC = document.getElementsByClassName('cardC')[0];
// const cardD = document.getElementsByClassName('cardD')[0];
// const container = document.getElementsByClassName('container')[0];

// cardA.addEventListener('mouseover', () => {
//     container.style.backgroundColor = 'rgb(82, 223, 216)';
// });
// cardB.addEventListener('mouseover', () => {
//     container.style.backgroundColor = 'rgb(111, 178, 240)'
// });
// cardC.addEventListener('mouseover', () => {
//     container.style.backgroundColor = 'rgb(105, 114, 245)';
// });
// cardD.addEventListener('mouseover', () => {
//     container.style.backgroundColor = 'blue';
// });

// project 2

//  how to get acces of form (we are not mention it yet)

// const form = document.querySelector('form')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

    // this is how we get value of input
    // document.querySelector('#id').value 

    // and how to store it if the input is number
    // const hight = parseInt(document.querySelector('#id').value)

// })


const form = document.querySelector('form')
const result = document.getElementById('result')

form.addEventListener('submit',(e)=>{
e.preventDefault()
   var  hight =parseInt(document.querySelector('#hight').value)
   var weight =parseInt(document.querySelector('#weight').value)
   if(hight == '' || isNaN(hight) || 0 > hight){
    result.innerHTML = 'please enter valid information'
   }else if(weight == '' || isNaN(weight) || 0 > weight){
    result.innerHTML = 'please enter valid information'
   }else{

    
    console.log(hight);
    console.log(weight);

    const bmi = (weight/((hight*hight) /10000).toFixed(2))
    result.innerHTML = `<span>${bmi}</span>`

   }

}
)
