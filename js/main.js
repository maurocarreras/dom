
const h2= document.getElementById("h2");

const parrafo= document.getElementsByTagName("p");

const parrafoClases=document.getElementsByClassName("parrafo");

const contenedor =document.getElementById("contenedor");

const lista = document.getElementById("lista")

const input =document.getElementById("ingreso");

const title = document.getElementById("titleInput");


const consolas = [
    { id: 1, nombre: "Nes", precio: 'Precio: 12000' },
  
    { id: 2, nombre: "Super Nintendo", precio: 'Precio: 18000' },
  
    { id: 3, nombre: "Sega Genesis", precio:"precio: 14000"  },
  
    { id: 4, nombre: "Play Station One", precio:"precio: 25000"  },
  
    { id: 5, nombre: "Nintendo 64", precio:"precio: 30000"  },
  
    { id: 6, nombre: "Sega Dreamcast", precio:"precio: 35000"  },
  
    { id: 7, nombre: "Nintendo Game Cube", precio:"precio:40000"  },
  
    { id: 8, nombre: "Play Station 2", precio:" precio: 37000" },
  
    { id: 9, nombre: " Xbox", precio:" precio: 32500" },
  
    { id: 10, nombre: "Nintendo Wii", precio:" precio:29700"  },
  
    { id: 11, nombre: "Game Boy ", precio:" precio:24999"  },
  
    { id: 12, nombre: "Nintendo DS", precio: " precio: 39800" },
  
    { id: 13, nombre: "Xbox 360", precio:" precio: 43200 " },
  
    { id: 14, nombre: "Play Station 3", precio:" precio: 51500 " },
    
  ];

  
  // const consolas=["Nes","Super Nintendo","Sega Genesis","Play Station One", "Nintendo 64","Dreamcast","Game Cube", "Play Station 2"," Xbox" ,"Nintendo Wii","Game Boy ",
  // "Nintendo DS", "Xbox 360", "Play Station 3"];
  
  
  h2.innerText="Estos son nuestros productos"
  
  h2.addEventListener("click",()=>{
      console.log("click sobre h2")
    })
    
    h2.addEventListener("mousemove",()=>{
        h2.style.color = "black";
    })
    
    console.log(consolas)

for (const productos of consolas) {

    let li = document.createElement("li")

    li.innerHTML=` 
    <h3>${productos.nombre}</h3>
    <h6>${productos.precio}</h6>`

    lista.append(li)
    
}

input.addEventListener('keydown', () => {
    title.innerText = input.value;
})



// for (const productos of consolas) {
//     let li = document.createElement( "li");
//     li.innerText = productos;
//     lista.append(li)

// }

for (const parrafo of parrafoClases) {
    console.log(parrafo.innerHTML)
    
}


parrafo[0].innerText="aprovecha nuestras ofertas"

parrafo[1].innerText="gran variedad de consolas retro y de las mas actuales"

parrafo[2].innerText=" no dudes en consultarnos"



const texto= document.createElement("p");

texto.innerText="Novedad del mes fifa23";

contenedor.append(texto)