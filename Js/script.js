const slider = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const paragrafo = document.querySelectorAll("p");
const subtitulo = document.querySelectorAll("h2");

slider.onclick = function (event) {
  if (event.target.checked){
    document.body.style.background = "white";
    titulo.style.color = "black";
    paragrafo.forEach(i => i.style.color = "black"); 
    subtitulo.forEach(i => i.style.color = "black");
  }              
  else{
    document.body.style.background = "#2f3238"; 
    titulo.style.color = "white";
    paragrafo.forEach(i => i.style.color = "white"); 
    subtitulo.forEach(i => i.style.color = "white");    
  } 
}