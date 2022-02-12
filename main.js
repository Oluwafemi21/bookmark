let faq = document.getElementsByClassName("faq-page");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const email = document.getElementById("email");
const hamburger = document.getElementById("hamburger");
const emailInput = document.getElementById("email_input");
const validator = document.getElementById("validator");
const error = document.getElementById("error");
const errorIcon = document.getElementById("error-icon");
const errorMessage = document.getElementById("error-message");
const emailArea = document.getElementById('email-area');

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

closeBtn.addEventListener('click',()=>{
    hamburger.classList.add('hidden');
    console.log('close button clicked');
})


validator.addEventListener('click',()=>{
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
        console.log('success');
    } else{
        emailArea.style.alignItems = "start";
        emailInput.style.backgroundColor = "#fa5757";
        errorMessage.style.display = "block";
        errorIcon.style.display = "block";

        console.log(email.value);
        console.log('error');
    }
});



// Email Validation
// function emailValidator(email){
    
// }
