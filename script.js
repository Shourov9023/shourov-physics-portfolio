const button = document.querySelector(".menu-button");
const nav = document.querySelector(".side-nav");
const links = document.querySelectorAll(".side-nav a");
const sections = document.querySelectorAll(".page-section");

button.addEventListener("click", () => {
  nav.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  let current = "about";

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});
