 let modal = document.querySelector(".modal");
 let contBtn = document.querySelector(".contact-btn");
 let sendBtn = document.querySelector(".modal-send_btn")

 function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
function showModal(){
    modal.classList.remove("hide");
    modal.classList.add("show");
}

contBtn.addEventListener("click", showModal);
sendBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
   if (e.target === modal) {
       closeModal();
    }
});

new Splide( '.splide' ).mount();

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
});
mainMenu.addEventListener("click", function(){
    mainMenu.classList.toggle("active-menu");
    mobileMenu.classList.toggle("active-menu");
});

