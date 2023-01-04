var toDoList = [];

function addToDoItem(){
    var input = document.getElementById("input-box").value;
    if(input == ""){
        alert("input something!");
    } 
    document.getElementById("input-box").value = "";

    toDoList.push(input);
    refreshToDoList();
}

function deleteThisItem(index) {
    toDoList.splice(index, 1);
    refreshToDoList();    
}

function refreshToDoList() {
    var items = "";
    for(var index = 0; index < toDoList.length; index ++){
        var li = "<li>" + toDoList[index] + "<span class=\"delete-button\""
        li += "onclick=\"deleteThisItem(" + index + ")\">x</span></li>"
        items += li;
    }
    document.getElementById("Lists").innerHTML = items;
}