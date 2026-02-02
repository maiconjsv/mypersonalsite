document.querySelectorAll("button[data-target]").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.target
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  })
})



// Lazy loading section
document.addEventListener("DOMContentLoaded", () => {
  const lazySections = document.querySelectorAll(".lazy-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.classList.add("loaded");
        observer.unobserve(section);
      }
    });
  }, { rootMargin: "150px" });

  lazySections.forEach(section => observer.observe(section));
});