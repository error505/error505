document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector("#dark-mode-toggle");

  darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
});

document.querySelector(".close-sidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("sidebar-closed");
});

document.querySelector(".open-sidebar").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("sidebar-closed");
});

document.getElementById("settings-btn").addEventListener("click", function () {
  const colorPanel = document.getElementById("color-options");
  if (colorPanel.style.left === "-300px") {
    colorPanel.style.left = "20px";
  } else {
    colorPanel.style.left = "-300px";
  }
});

const colorOptions = document.querySelectorAll(".color-option");
colorOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const chosenColor = this.getAttribute("data-color");
    document.documentElement.style.setProperty(
      "--main-theme-color",
      chosenColor
    );
  });
});

const menuButtons = document.querySelectorAll(".portfolio-menu button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.textContent.trim().toLowerCase();

    // Toggle active class
    menuButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter items based on id
    portfolioItems.forEach((item) => {
      item.style.display =
        item.id === category || category === "all" ? "block" : "none";
    });
  });
});

document
  .querySelector(".sidebar .portfolio-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#portfolio-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-header .portfolio-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#portfolio-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".sidebar .about-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#about-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-header .about-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#about-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".sidebar .contact-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#contact-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector(".mobile-header .contact-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#contact-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector(".sidebar .blog-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#blog-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-header .blog-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#blog-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector(".sidebar .service-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#service-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-header .service-button")
  .addEventListener("click", function () {
    const portfolioSection = document.querySelector("#service-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
// Get the button
let mybutton = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.querySelector(".open-sidebar1").addEventListener("click", function () {
  let sidebar = document.querySelector(".sidebar");
  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "250px";
  } else {
    sidebar.style.width = "0px";
  }
});
