const question = document.querySelectorAll(".question-item")


question.forEach(item => {
    item.addEventListener("click", ()=> {
        let selected = item.firstElementChild
        
        // 1. Every question remains closed    Just need a way to enforce closing everything before opening another one
         // perhaps another function that closes everything
        // 1a. then open the one that was clicked.
        // 2. If the open one is clicked again,  2 has been handled with class toggle
        // 2a. then close it

        question.forEach(each => {
            let arrow = each.firstElementChild
            if (each.lastElementChild.classList.contains("display") && each !== item){
                //console.log("Not a match, is open, and should be closed")
                arrow.firstElementChild.classList.remove("rotate")
                each.lastElementChild.classList.remove("display")
                each.firstElementChild.classList.remove("bolden")
            } else if (each.lastElementChild.classList.contains("display") && each === item){
                //console.log("Its a match, is open and should be closed")
                selected.firstElementChild.classList.remove("rotate")
                item.lastElementChild.classList.remove("display")
                item.firstElementChild.classList.remove("bolden")
            } else if (!each.lastElementChild.classList.contains("display") && each === item){
                //console.log("Its a match, is close and should be opened")
                selected.firstElementChild.classList.add("rotate")
                item.lastElementChild.classList.add("display")
                item.firstElementChild.classList.add("bolden")
            }  
        })

        // Did not need the toggle in other to clearly

        // selected.firstElementChild.classList.toggle("rotate")
        // item.lastElementChild.classList.toggle("display")
        // item.firstElementChild.classList.toggle("bolden")

        
    })
})

