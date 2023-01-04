var todoList = [];

function generateTodoList(){
    var html = "";
    var elm = document.getElementById("Lists");

    for (var index = 0; index < todoList.length; index++) {
        var item = todoList[index];
        html += "<li>" + item + "<span class=\"delete-button\">x</span></li>"
    }
    elm.innerHTML = html;
    var dltBtns = document.getElementsByClassName("delete-button");//[]

    for (let index = 0; index < dltBtns.length; index++) {
        const element = dltBtns[index];
        element.addEventListener("click", deleteItem, false);
    }
}

function addToDoItem() {
    var input = document.getElementById("input-box");

    if(input.value == ""){
        alert("Please insert value");
        return;
    }
    
    todoList.push(input.value);
    generateTodoList();
    input.value = "";
}
function deleteItem(event) {
    console.log(event.target);
}