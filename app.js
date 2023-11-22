document.addEventListener("DOMContentLoaded", function () {
  const notification_button = document.querySelector(".notification");
  const notification_menu = document.querySelector(".notification_menu");
  const profile_button = document.querySelector(".profile");
  const profile_menu = document.querySelector(".profile_menu");
  const toggleMenu = (element) => {
    element.setAttribute("aria-expanded", "true");
    element.classList.toggle("show");
  };
  notification_button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(notification_menu);
    if(profile_menu.classList.contains("show")){
      profile_menu.classList.remove("show");
    }
  });
  profile_button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(profile_menu);
    if(notification_menu.classList.contains("show")){
      notification_menu.classList.remove("show");
    }
  });
  notification_button.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      notification_button.click();
    }
  });
  profile_button.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      profile_button.click();
    }
  });
  document.documentElement.addEventListener("click", (e) => {
    if (!notification_menu.contains(e.target)) {
      notification_menu.classList.remove("show");
    }
  });
  document.documentElement.addEventListener("click", (e) => {
    if (!profile_menu.contains(e.target)) {
      profile_menu.classList.remove("show");
    }
  });
  const switches = document.querySelectorAll(".setup_step_title");
  function toggleSwitch(e) {
    e.preventDefault();
    if (!this.nextElementSibling.classList.contains("active")) {
      for (let i = 0; i < switches.length; i++) {
        switches[i].nextElementSibling.classList.remove("active");
        switches[i].parentElement.classList.remove("selected");
      }
      this.nextElementSibling.classList.add("active");
    }
    this.parentElement.classList.add("selected");
  }
  for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", toggleSwitch);
  }

  const setup_steps = document.querySelector(".setup_steps");
  const toggle_arrow = document.querySelector("#toggle_arrow");
  toggle_arrow.addEventListener("click", () => {
    setup_steps.classList.toggle("active");
    if (setup_steps.classList.contains("active")) {
      toggle_arrow.src = "./assets/arrow-up-icon.svg";
    } else {
      toggle_arrow.src = "./assets/arrow-down-icon.svg";
    }
  });
  toggle_arrow.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      toggle_arrow.click();
    }
  });
  const close = document.querySelector("#close");
  close.addEventListener("click", () => {
    document.querySelector(".plan").setAttribute("style", "display:none;");
  });
  close.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      close.click();
    }
  });
  const logo = document.querySelector("#logo");
  if (window.innerWidth < 768) {
    logo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
  } else {
    logo.src =
      "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
  }
});
