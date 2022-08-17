$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky")
    }
    if(this.scrollY > 1000){
      $('.scrollupbtn').addClass("show");
    }else {
      $('.scrollupbtn').removeClass("show");
    }
  });

  // slide-up script
  $('.scrollupbtn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  const hamburger = document.querySelector(".hamburger")
  const menu = document.querySelector(".menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  })

  document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }))
});

// typing animation script

var typed = new Typed(".typing", {
  strings: ["Front-End Developer", "Web Designer", "Freelancer", "Hardworker", "Programmer"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true
});

var typed = new Typed(".typing2", {
  strings: ["Front-End Developer", "Web Designer", "Freelancer", "Hardworker", "Programmer"],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true
});




