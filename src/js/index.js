document.querySelectorAll("button[data-target]").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.target
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  })
})
