
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


// java script is loosely type

let a = prompt('enter number')
a = Number.parseInt(a)
let sum = 0
for (i = 0; i < a; i++) {
    sum += i + 1
}
console.log(sum);


let obj = {
    one: 'one',
    two: 'two',
    three: 'three',
    four: 'four',
    five: 'five'
}

for (let e of obj) {
    console.log(e + obj.e);
}

// add a costemaise number in arry 
let b = prompt('add numcer to aad in array')
b = Number.parseInt(b)

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arry.push(b)
console.log(arry);

// add number until 0 is come

let arry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let c;
do {
    c = prompt('enter a number')

    c = Number.parseInt(c)
    arry1.push(c)
    console.log(arry1);
} while (c != 0)

// filter all who devide by 10

let arry3 = [10, 20, 50, 4, 5, 15, 35, 87, 54, 319, 47, 5, 21, 5, 7, 96, 215, 45]

let n = arry3.filter((e) => {
    return e % 10 == 0 || e % 5 == 0;
})

console.log(n);

// filter all who devide by 10 and also with 3
let arry4 = [10, 20, 50, 4, 5, 15, 35, 87, 54, 319, 47, 5, 21, 5, 7, 96, 215, 45]

let nu = arry4.filter((e) => {
    return e % 10 == 0 && e % 4 == 0;
})

console.log(n);

// square of given arry

let arry5 = [10, 20, 50, 4, 5, 15, 35, 87, 54, 319, 47, 5, 21, 5, 7, 96, 215, 45]

let m = arry5.map((e) => {
    return e * e
})

console.log(m);

// reduce is retun ""value"" when map and filter return an ""arry""


let arry6 = [10, 20, 50, 4, 5, 15, 35, 87, 54, 319, 47, 5, 21, 5, 7, 96, 215, 45]

let r = arry6.reduce((a, b) => {
    return a + b
})
console.log(r);


//how to use conferm, it return true and false 

let confer = confirm('do you want to confer')

if (confer) {
    console.log('this is conferm');
} else {
    console.log('this is not conferm');
}

// DOM                                                               // BOM

// ducument                                                             window
// represent dom                                                        represent bom   

//in this if we have to change div,h1,css... then                       we are using bom if on click we wan't to open google or facebook or etc,
//                                                                      alert,prompt,conferm




let e = prompt('what is your age ')
e = Number.parseInt(e)

let con = confirm('do you want to see promp again ?')

if (con) {
    e = prompt('what is your age ')
}
alert(e > 18 ? 'you can drive' : "you can't drive")

// change background color with input prompt
let color = prompt('which color you want to set as a background')

document.body.style.background = color

function load(src) {
    let script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
}
const hello = () => {
    console.log(hello);
}
load('https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js', hello)

// what is the sybol type in js
//is usestate is use for state mangmnent


// onerror and onload is also event

// you can not reassingh const, let can be reassaingh like let a= 10, a = 20 this is true, but in const it's couse error


// in callback we give full power to callback and in promises we waiting for response

// promise.all()    if any one promises will reject then this mathod will not run

// let promise_all = promise.all([p1,p2,p3])
// promise_all.then((value)=>{
// console.log(value)
// })

// promise.allSettled()    if any one promises will reject then the other remaining promises will show

// let promise_all = promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
// console.log(value)
// })


// promise.race()     show only one, which is load first, if less time tacker will reject still it show that promises's eroro but show that only

// let promise_all = promise.race([p1,p2,p3])
// promise_all.then((value)=>{
// console.log(value)
// })



// promise.any()     show only one, which is load first, if leaa time tacker will reject then it show another less time tacker resolved but show only resolved 

// let promise_all = promise.any([p1,p2,p3])
// promise_all.then((value)=>{
// console.log(value)
// })


//      promises

let jay = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve('it is resolved state')
        } else {
            reject('this is reject')
        }
    }, 2000)

})

// jay.then((e)=>{
//     console.log(e);
// }).catch((e)=>{
//     console.log(e);
// })

// finaly is use with resolve and reject to close the fail, exit to loop,write to the file,notifai about status

// you can do this or do this also with asyn await and try and catch


async function ans() {
    try {
        let res = await jay
        console.log(res);
    } catch (error) {
        console.log(error);
    }

}

ans()

//        Promise.all


const run = async () => {
    let a1 = await function1  // if this fumctiom tackimg 10sec.
    let a2 = await function1  // if this fumctiom tackimg 20sec.
    let a3 = await function1  // if this fumctiom tackimg 30sec.
    console.log(a1, a2, a3);    // then the response you got on 60 sec. latter instiad you do promises.all

    let all = await Promise.all([a1, a2, a3])
    console.log(all);        // this function will tack 30sec. only, in this code all function run together 
}


//       fatch api
//  fatch api is 2 stage process  if there is problem in 1st stage then we can find issue there so that this is two stage process


// cookies usages in js
//In JavaScript, cookies are used to store small pieces of data on the client-side (in the user's browser). Cookies are primarily used for
// session management, tracking user behavior, and personalizing the user experience on websites.   document.cookie


// local storage
// keys and values both are should be string
localStorage.setItem('name' , 'jaydip')
localStorage.getItemItem('name')

//    classes in javascript


class railwayform{
    submit(){
        alert(this.nam  + ' your form is submit ' + this.train)
    }
    cancel(){
        alert(this.nam +' your form is cancled ' + this.train)
    }
    fill(nam,train){
     this.nam = nam
     this.train = train
    }
}

let harry = new railwayform
harry.fill('harry',2222)
let jd = new railwayform
jd.fill('jd',2222)

harry.submit()
jd.submit()
harry.cancel()



// constrecture method run automaticaly whenevar new objectcreaet in class object like in class you have 6 object then constrecture rub 6 time and you add new 7th then it run 7 time


// let x = new String("John");             
// let y = new String("John");
// (x == y) // is false because you cannot compare objects.
