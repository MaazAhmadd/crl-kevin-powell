let hamBtn = document.querySelector(".nav-toggle");
let nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (e) => {
  // nav.classList.toggle("nav--visible");
  nav.style.display = nav.style.display == "block" ? "none" : "block";
});
