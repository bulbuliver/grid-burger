let mobileMenu = document.querySelector(".burger_menu");
console.log(mobileMenu);

function toggleClass() {
  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
}

toggleClass();
