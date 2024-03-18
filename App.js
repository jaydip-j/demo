function change(){
    var rap = document.getElementById("rep")
    rap.innerHTML="i am changed"
    rap.style.color='red'
    
}
var rendome = Math.floor(Math.random() * 100 + 1)
document.write(rendome);

var addrParas =
document.getElementById("address").getElementsByTagName("p");
for (var i = 0; i < addrParas.length; i++) {
addrParas[i].style.backgroundColor = "yellow";
}

var addHeadTag = document.createElement("h2")
addHeadTag.innerHTML="this is new headTag"
addHeadTag.style.color='green'

document.body.appendChild(addHeadTag);




function removeFailLi() {
    var fail = document.getElementsByTagName("li");

    for (var i = 0; i < fail.length; i++) {
        if (fail[i].innerHTML.indexOf("fail") >= 0) {
            fail[i].parentNode.removeChild(fail[i]);
        }
    }
}

removeFailLi()

document.getElementById("alert").onclick= click;

function click(){
     alert('are you ok')

}




var btn = document.getElementById("count-btn").onclick = increase;

function increase(){
    var p = document.getElementById("count")

    p.textContent = parseInt(p.textContent) + 1;
}


var taskBtn = document.getElementById("task-btn").onclick = taskItem;

function taskItem(){
    var taskInput = document.getElementById("input-task").value.trim()
    var newTask = document.createElement("li")
    newTask.textContent = taskInput
    
    
}

taskBtn()