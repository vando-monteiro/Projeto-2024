function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  // if{html.classList.toggle("light")
  //  html.classList.remove("light")
 //  } else {
 //   html.classList.add("light")
   //}
  //subistituir a imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    // se tiver o light mode, adicionear a imagem light
    img.setAttribute("src", "./acesss/avatar-light.png")

  } else{
    //set tiver sem light mode, manter a imagem nomal
    img.setAttribute("src", "./acesss/avatar.png")
  }
    
}