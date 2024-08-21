// MARK: animations

const animatedElements = document.querySelectorAll("[data-animation]");

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const {
      animation,
      duration = "500ms",
      timing = "ease-in",
      delay = "500ms",
      iteration = "1",
      direction = "normal",
      fill = "backwards",
    } = entry.target.dataset;
    if (entry.isIntersecting) {
      entry.target.style.animation = `${animation} ${duration} ${timing} ${delay} ${iteration} ${direction} ${fill}`;
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});

//MARK: navigation
const menuPanelDiv = document.getElementById("menu-items");

document.getElementById("menu-open").addEventListener("click", () => {
  menuPanelDiv.classList.replace("-left-full", "left-0");
  menuPanelDiv.setAttribute("aria-expanded", true);
});

document.getElementById("menu-close").addEventListener("click", () => {
  menuPanelDiv.classList.replace("left-0", "-left-full");
  menuPanelDiv.setAttribute("aria-expanded", false);
});

// MARK: accordion
document.querySelectorAll("[data-accordionbutton]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetBody =
      "[data-accordionbody='" + button.dataset.accordionbutton + "']";
    document.querySelector(targetBody).classList.toggle("open");
    button.children[1].classList.toggle("rotate-180");
  });
});
