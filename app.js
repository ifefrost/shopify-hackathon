document.addEventListener("DOMContentLoaded", function () {
  const switches = document.querySelectorAll(".setup_step_title");
  function toggleSwitch(e) {
    e.preventDefault();
    if (!this.nextElementSibling.classList.contains("active")) {
      for (let i = 0; i < switches.length; i++) {
        switches[i].nextElementSibling.classList.remove("active");
      }
      this.nextElementSibling.classList.add("active");
    }
  }
  for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", toggleSwitch);
  }

  const setup_steps = document.querySelector(".setup_steps");
  const toggle_arrow = document.querySelector("#toggle_arrow");
  toggle_arrow.addEventListener("click", ()=> {
    setup_steps.classList.toggle("active");
    if (setup_steps.classList.contains("active")) {
      toggle_arrow.src="./assets/arrow-up-icon.svg"
    } else {
      toggle_arrow.src="./assets/arrow-down-icon.svg"
    }
  });
  const close = document.querySelector("#close");
  close.addEventListener("click", ()=> {
    document.querySelector(".plan").setAttribute("style","display:none;");
  });
});
