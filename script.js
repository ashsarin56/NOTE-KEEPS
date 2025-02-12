let btn = document.querySelector(".btn"), 
notes = document.querySelector(".notes");
window.addEventListener("load",()=>{
    JSON.parse(localStorage.getItem("notes"))?.forEach(noteText => createnote(noteText));
});
function createnote(content="") {
    let box = document.createElement("div");
    box.className = "box poppins-regular";
    box.setAttribute("contenteditable", "true");
    box.innerText = content;
    notes.appendChild(box);
    box.addEventListener("input", savenotes);
    box.addEventListener("dblclick",()=>{
    box.remove();savenotes();
    console.log("debug");
    });
}
function savenotes(){
    localStorage.setItem("notes",JSON.stringify([...document.querySelectorAll(".box")].map(box => box.innerText)));
}
btn.addEventListener("click",()=>
    createnote());
