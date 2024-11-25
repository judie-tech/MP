// Smooth Scrolling for Links
document.querySelectorAll("#header a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Animation on Scroll
const sections = document.querySelectorAll(".section");

function animateSections() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateSections);
animateSections(); // Trigger animations on load
