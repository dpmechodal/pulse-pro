var owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 2,
    },
    475: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 3,
    },
  },
});
// class="owl-carousel owl-theme"
// class="item"

//password visible
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("exampleInputPassword1");
  var toggleBtn = document.querySelector(".toggle-btn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "👁️";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "👁️";
  }
}




