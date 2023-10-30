let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-btn");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("change", function () {
    const windowWidth=window.innerWidth;
    console.log("innerwidth",windowWidth);
    if(windowWidth<=650){

      if (menuToggle.checked) {
          menu.style.display = "block";
      } else {
          menu.style.display = "none";
      }
    }
  });

  // Close the menu when a link is clicked (optional)
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        const windowWidth=window.innerWidth;
        if(windowWidth<=650){
          menuToggle.checked = false;
          menu.style.display = "none";
        }
        });
  });
});