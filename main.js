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
const tabs = document.querySelectorAll(".features__tab p");
const contents = document.querySelectorAll(".tab__changer")

let i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("activefaq");
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
})

closeBtn.addEventListener('click',()=>{
    hamburger.classList.add('hidden');
})


validator.addEventListener('click',(e)=>{
    e.preventDefault();
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

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',()=> {
        // To remove active tab from previous tab
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        // To show content according to tab selected
        contents.forEach(content => content.classList.remove('tab__active'));
        contents[index].classList.add("tab__active");
    })
})