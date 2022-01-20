const title = document.getElementById("input1");
const description = document.getElementById("input2");
const notes_box = document.getElementById("notes-box");

const addNote = () => {
    let section = document.createElement("section");
    section.classList = "col-lg-3 col-md-5 col-sm-12 animate__animated animate__fadeInDown"
    notes_box.appendChild(section);
    // console.log(section);
    // Creating h1 
    let h1 = document.createElement("h1");
    h1.innerHTML = title.value
    section.appendChild(h1)
    
    // Creating Description
    let p = document.createElement("p");
    p.innerHTML = description.value
    section.appendChild(p)

    // Create Delete Butn

    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("onclick", "deleteDiv(this)")
    deleteBtn.classList = "fas fa-trash-alt"
    section.appendChild(deleteBtn)
}

//  Delete All

const deleteAll = () => {
    title.value = ""
    description.value = ""
    notes_box.innerHTML = ""
}

// Delete Div

const deleteDiv = (e) => {
    e.parentNode.remove();
}