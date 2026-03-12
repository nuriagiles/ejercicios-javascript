var NoticiasArray = [{
    titulo: "¡¡¡Toby Fox confirma lanzamiento del capitulo 5!!!",
    etiqueta: ["#Deltarune", "#Anuncio"],
    autor: "Kris_0x",
    fecha: "10/2/2026",
    textoNoticia: "Tras años de espera, el famoso y talentoso Toby Fox anuncia el capitulo 5 de Deltarune.",
    comentario: [
        {
            user: "Big_shot",
            fecha: "10/2/2026",
            textoComentario: "Espero que se recupere pronto...Escuche que tiene problemas en las muñecas.",
        }
    ],
}, {
    titulo: "Mizi nunca fue la mala!!!",
    etiqueta: ["#Alienstage", "#Opinion"],
    autor: "Mizisua_FOREVER",
    fecha: "5/2/2026",
    textoNoticia: "Tras años siguiendo esta franquicia debo de mencionar algo que me cabrea...Mizi nunca ha sido un ser del diablo como muchos la pintan",
    comentario: [
        {
            user: "TillFan#1",
            fecha: "5/2/2026",
            textoComentario: "Opino lo mismo...no entendeis al personaje",
        }
    ],
}, {
    titulo: "¿Que anime deberia enseñarle a mis padres?",
    etiqueta: ["#Anime", "#Recomendación"],
    autor: "CalebPlaysMinecraft",
    fecha: "15/1/2026",
    textoNoticia: "Mi padres ultimamente se estan interesando por este tipo de genero multimedia, no sé que enseñarles aun...",
    comentario: [
        {
            user: "Brocacho019",
            fecha: "16/1/2026",
            textoComentario: "Público dificil, empieza enseñandoles Attack on Titan.",
        },{
            user: "Kitty_030",
            fecha: "17/1/2026",
            textoComentario: "Por alguna razón, ese anime siempre les va bien para principiantes LOL!!!",
        }
    ],
}]

let filas = ""

for(let i=0; i<NoticiasArray.length; i++){

    filas += `<div class="div-publicaciones">
    <h1>${NoticiasArray[i].titulo}</h1>
    <p>${NoticiasArray[i].etiqueta}</p>
    <p>${NoticiasArray[i].autor} | ${NoticiasArray[i].fecha}</p>
    <p>${NoticiasArray[i].textoNoticia}</p>

    <div class="container-comentarios" id="container-comentarios${i}">
    <ul>`

    for(let j=0; j<NoticiasArray[i].comentario.length; j++){
        filas += `<li>${NoticiasArray[i].comentario[j].user} | ${NoticiasArray[i].comentario[j].fecha}
        <p>${NoticiasArray[i].comentario[j].textoComentario}</p></li>`
    }

    filas += `</ul></div>

    <div class="div-AñadirComentario">
    <label>User <input type="text" id="Autor-comentario${i}"></label>
    <label>Fecha <input type="text" id="Fecha-Comentario${i}"></label>
    <textarea id="Texto-Comentario${i}"></textarea>
    <button onclick="añadirComentario(${i})">Añadir comentario</button>
    </div>

    </div>`
}

document.querySelector("#div-noticias").innerHTML = filas


const btnAñadir = document.querySelector("#btn-añadir")
btnAñadir.addEventListener("click", Añadir)


function Añadir(e){

    e.preventDefault()

    const NuevaNoticia = {
        titulo: document.querySelector("#Titulo").value,
        etiqueta: document.querySelector("#Etiqueta").value,
        autor: document.querySelector("#Autor").value,
        fecha: document.querySelector("#Fecha").value,
        textoNoticia: document.querySelector("#Texto").value,
        comentario: []
    }

    NoticiasArray.push(NuevaNoticia)

    let i = NoticiasArray.length - 1

    filas += `<div class="div-publicaciones">
    <h1>${NuevaNoticia.titulo}</h1>
    <p>${NuevaNoticia.etiqueta}</p>
    <p>${NuevaNoticia.autor} | ${NuevaNoticia.fecha}</p>
    <p>${NuevaNoticia.textoNoticia}</p>

    <div class="container-comentarios" id="container-comentarios${i}">
    <ul></ul>
    </div>

    <div class="div-AñadirComentario">
    <label>User <input type="text" id="Autor-comentario${i}"></label>
    <label>Fecha <input type="text" id="Fecha-Comentario${i}"></label>
    <textarea id="Texto-Comentario${i}"></textarea>
    <button onclick="añadirComentario(${i})">Añadir comentario</button>
    </div>

    </div>`

    document.querySelector("#div-noticias").innerHTML = filas
}



function añadirComentario(i){

    const NuevoComentario ={
        user: document.querySelector(`#Autor-comentario${i}`).value,
        fecha: document.querySelector(`#Fecha-Comentario${i}`).value,
        textoComentario: document.querySelector(`#Texto-Comentario${i}`).value
    }

    NoticiasArray[i].comentario.push(NuevoComentario)

    document.querySelector(`#container-comentarios${i} ul`).innerHTML +=
    `<li>${NuevoComentario.user} | ${NuevoComentario.fecha}
    <p>${NuevoComentario.textoComentario}</p></li>`
}