const notescontainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelector(".input-box");

function showNotes(){
    notescontainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    img.setAttribute("contenteditable","false")
    inputBox.appendChild(img);
    notescontainer.appendChild(inputBox);
})

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(e => {
            e.onkeyup=function(){
                updateStorage();
            }
            
        });
    }
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})