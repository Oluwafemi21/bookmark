let faq = document.getElementsByClassName("faq-page");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");


let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

menu.addEventListener('click',()=>{
    hamburger.classList.remove('hidden');
    console.log('menu button clicked');
})

close.addEventListener('click',()=>{
    hamburger.classList.add('hidden');
    console.log('close button clicked');
})