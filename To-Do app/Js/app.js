let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");

btn.addEventListener("click", () =>{
    let text = input.value;
    if(text === ""){
        alert("You must enter a to-do")
    }else{
        let li = document.createElement("li");
        li.innerHTML = text;
        list.insertBefore(li, list.childNodes[0]);
        input.value = ""
    }
})

list.addEventListener("click", e =>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
})

addBtn.addEventListener("keypress", function (event){
    if(event.target.tagName === "INPUT" && event.target.type=== "text" && event.key=== "Enter"){
        updateToDo();
    } 
});
