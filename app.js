document.addEventListener("DOMContentLoaded", function () {
  // change logo based on screen size
  const logo = document.querySelector("#logo");
  // check on load
  if (window.innerWidth < 768) {
    logo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
  } else {
    logo.src =
      "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
  }
  // check on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      logo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
    } else {
      logo.src =
        "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
    }
  });

  // Variables for menu buttons
  const notification_button = document.querySelector(".notification");
  const notification_menu = document.querySelector(".notification_menu");
  const profile_button = document.querySelector(".profile");
  const profile_menu = document.querySelector(".profile_menu");

  // Menu toggler function
  const toggleMenu = (element) => {
    element.setAttribute("aria-expanded", "true");
    element.classList.toggle("show");
  };

  // apply menu toggler function to menu buttons on click
  notification_button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(notification_menu);
    if (profile_menu.classList.contains("show")) {
      profile_menu.classList.remove("show");
    }
  });
  profile_button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(profile_menu);
    if (notification_menu.classList.contains("show")) {
      notification_menu.classList.remove("show");
    }
  });
  // apply click event for keyboard users
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

  // close menu when clicking outside of menu
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

  // Variables for plan message close button
  const close = document.querySelector("#close");

  // close plan message event listeners
  close.addEventListener("click", () => {
    document.querySelector(".plan").setAttribute("style", "display:none;");
  });
  close.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      close.click();
    }
  });

  // Variables for setup guide accordion
  const switches = document.querySelectorAll(".setup_step_title");
  const setup_steps = document.querySelector(".setup_steps");
  const toggle_arrow = document.querySelector("#toggle_arrow");
  let incomplete_steps;

  // setup guide accordion function
  function toggleSwitch() {
    if (!this.nextElementSibling.classList.contains("active")) {
      for (let i = 0; i < switches.length; i++) {
        switches[i].nextElementSibling.classList.remove("active");
        switches[i].parentElement.classList.remove("selected");
      }
      this.nextElementSibling.classList.add("active");
    }
    this.parentElement.classList.add("selected");
  }

  // apply setup guide accordion function to switches
  for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", toggleSwitch);
    switches[i].addEventListener("keydown", (e) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        toggleSwitch.call(switches[i]);
      }
    });
  }

  // setup guide accordion toggle arrow switch
  toggle_arrow.addEventListener("click", () => {
    setup_steps.classList.toggle("active");
    if (setup_steps.classList.contains("active")) {
      toggle_arrow.src =
        "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
    } else {
      toggle_arrow.src =
        "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
    }
  });

  // setup guide accordion toggle arrow switch for keyboard users
  toggle_arrow.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      toggle_arrow.click();
    }
  });

  // Variables for the checkboxs
  const checkboxes = document.querySelectorAll("label input[type=checkbox]");

  // make checkboxes appear as svg
  const checks = document.querySelectorAll(".checkmark");
  for (let i = 0; i < checks.length; i++) {
    checks[i].innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
  }

  // apply checkbox function to checkboxes
  let completed = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", (e) => {
      e.stopPropagation();
      let checkbox = e.target;
      if (checkbox.checked) {
        checkbox.nextElementSibling.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"> <path d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        checkbox.nextElementSibling.firstElementChild.classList.add("spin");
        setTimeout(() => {
          checkbox.nextElementSibling.classList.remove("spin");
          checkbox.nextElementSibling.innerHTML =
            '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="10" fill="#303030"></circle> <path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#fff" ></path> </svg>';
        }, 1000);
        completed++;
        checkbox.closest(".setup_step").classList.remove("incomplete");
        // get all incomplete steps
      } else {
        checkbox.nextElementSibling.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
        completed--;
        checkbox.closest(".setup_step").classList.add("incomplete");
      }
      // toggle switch to next incomplete step
      incomplete_steps = document.querySelectorAll(".incomplete");

      if (incomplete_steps.length > 0) {
        incomplete_steps[0].firstElementChild.click();
      }

      // onboarding progress bar function
      const progress = document.querySelector(".progress");
      progress.style.width = `${(completed / checkboxes.length) * 100}%`;
      // pass completed count to html
      document.querySelector("#completed").innerHTML = completed;
    });
  }
  // clear event listeners on checkboxes when all steps are completed
  if (completed === checkboxes.length) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].removeEventListener("click", () => {});
    }
  }
});
