// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// MENU BURGER 
const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".nav-list-mobile");

icon.addEventListener("click", function(){
  console.log("pwet");
  list.classList.toggle("list-visible");
});


window.addEventListener('scroll', function(){
  let hauteur = this.document.documentElement.scrollTop;
  if(hauteur === 0){
    icon.style.display = "block";
  } else {icon.style.display = "none";}
})