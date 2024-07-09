function toggleMode() {

  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://ronierlima.github.io/atlas/assets/profiles/perfil.jpg")
  } else {
    img.setAttribute("src", "https://ronierlima.github.io/atlas/assets/profiles/ronierlima.png")
  }
}
