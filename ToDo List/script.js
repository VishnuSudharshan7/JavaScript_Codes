const input =document.getElementById("inptbx");
const list =document.getElementById("list");
function addTask(){
    if (input.value === ''){
        alert("Mention a Task before adding to the list");
    }
        else{
            let li = document.createElement("li");      // creates a list element and assigned to li
            li.innerHTML = input.value;                 // the value that we entered will be stored in li element as
            list.appendChild(li);                       // the list element is displayed/added as a child 
            let span = document.createElement("span");  // a new element is created in document and named as span 
            span.innerHTML = "\u00d7";                  // \u00d7 this code is for x mark and it is added to span by using innerHTML
            li.appendChild(span);                       // the x mark is displayed as we used the appendChild function 
        }
        input.value = "";
        saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function displayTask(){
    list.innerHTML = localStorage.getItem("data");
}
displayTask();