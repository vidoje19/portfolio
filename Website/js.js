$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky")
    }
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
