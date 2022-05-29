let mobileNavIcon = document.querySelector(".mobile-nav-icon")
console.log(mobileNavIcon);

let nav = document.querySelector(".nav-container")


mobileNavIcon.addEventListener("click", function(e){
    e.preventDefault();
    console.log("aaa");
    let paragraph = document.createElement("p")
    paragraph.innerHTML = nav.textContent
    document.querySelector("#from").appendChild(paragraph)
    paragraph.classList.add("class-paragraph")
})



