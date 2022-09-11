
const consolas = [
        "Nes", 

        "Super Nintendo",

        "Sega Genesis", 
  
        "Play Station One", 
  
        "Nintendo 64", 

        "Sega Dreamcast", 
  
        "Nintendo Game Cube", 
  
        "Play Station 2", 
  
        " Xbox", 

        "Nintendo Wii", 
  
        "Game Boy ", 

        "Nintendo DS",

    "Xbox 360",
  
        "Play Station 3" 
  ];





const h2= document.getElementById("h2");

const parrafo= document.getElementsByTagName("p");

const parrafoClases=document.getElementsByClassName("parrafo");

const contenedor =document.getElementById("contenedor");

const lista = document.getElementById("lista")

h2.innerText="Estos son nuestros productos"





for (const productos of consolas) {
    let li = document.createElement( "li");
    li.innerText = productos;
    lista.append(li)
}


for (const parrafo of parrafoClases) {
    console.log(parrafo.innerHTML)
    
}


parrafo[0].innerText="aprovecha nuestras ofertas"

parrafo[1].innerText="gran variedad de consolas retro y de las mas actuales"

parrafo[2].innerText=" no dudes en consultarnos"



const texto= document.createElement("p");

texto.innerText="Novedad del mes fifa23";

contenedor.append(texto)