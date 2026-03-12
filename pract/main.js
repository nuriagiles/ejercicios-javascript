var noticias = [
	{
		titulo: 'Nueva misión espacial llega a Marte',
		contenido:
			'Una nueva misión internacional ha logrado aterrizar con éxito en Marte para estudiar la atmósfera del planeta rojo durante los próximos dos años.',
		fecha: '2026-03-10',
		autor: 'Laura Martínez',
		comentarios: [
			{
				usuario: 'Carlos',
				fecha: '2026-03-10',
				comentario: 'Increíble avance para la exploración espacial.',
			},
			{
				usuario: 'Ana',
				fecha: '2026-03-10',
				comentario: 'Ojalá algún día podamos viajar allí.',
			},
		],
	},
	{
		titulo: 'Nuevo récord en el maratón de Barcelona',
		contenido:
			'El atleta keniano David Kiptoo ha batido el récord del maratón de Barcelona con un tiempo impresionante.',
		fecha: '2026-03-09',
		autor: 'Miguel Torres',
		comentarios: [
			{
				usuario: 'Runner92',
				fecha: '2026-03-09',
				comentario: '¡Qué barbaridad de tiempo!',
			},
		],
	},
	{
		titulo: 'Descubren una nueva especie de pez en el Pacífico',
		contenido:
			'Investigadores marinos han encontrado una nueva especie de pez a más de 3.000 metros de profundidad.',
		fecha: '2026-03-08',
		autor: 'Sara López',
		comentarios: [],
	},
	{
		titulo: 'Avances en inteligencia artificial médica',
		contenido:
			'Un nuevo sistema de inteligencia artificial ayuda a detectar enfermedades pulmonares con mayor precisión que métodos tradicionales.',
		fecha: '2026-03-07',
		autor: 'Daniel Ruiz',
		comentarios: [
			{
				usuario: 'TechFan',
				fecha: '2026-03-07',
				comentario: 'La IA está cambiando la medicina.',
			},
			{
				usuario: 'Marta',
				fecha: '2026-03-07',
				comentario: 'Esto podría salvar muchas vidas.',
			},
			{
				usuario: 'Luis',
				fecha: '2026-03-08',
				comentario: 'Espero que pronto se use en todos los hospitales.',
			},
		],
	},
];
function cargarNoticias() {
	let html = ``;
	for (let i = 0; i < noticias.length; i++) {
		const n = noticias[i];
		html += `
        <article class="noticia">
            <h3>${n.titulo}</h3>
            <p>${n.autor} | ${n.fecha}</p>
            <p>${n.contenido}</p>
        `;
		if (n.comentarios.length) {
			html += '<ul>';
			for (let j = 0; j < n.comentarios.length; j++) {
				const m = n.comentarios[j];
				html += `
                <li>@${m.usuario} | ${m.fecha}: ${m.comentario}</li>`;
			}
			html += `
            <button class="addComment${i}">Añadir comentario</button>
            </ul>`;
		}
		html += `</article>`;
	}
	document.querySelector('#divNoticias').innerHTML = html;
}
let cont = 1;
document
	.querySelector('#btnFormAddComment')
	.addEventListener('click', function () {
		document.querySelector('#divComentariosForm').innerHTML += `
        <form action="" class="formsComentarios">
        <h3>Comentario ${cont}</h3>
        <div>
            <label for="autor${cont}">Autor</label>
            <input type="text" id="autor${cont}">
        </div>
        <div>
            <label for="fecha${cont}">Fecha</label>
            <input type="text" id="fecha${cont}">
        </div>
        <div>
            <label for="comentario${cont}">Comentario</label>
            <input type="text" id="comentario${cont}">
        </div>
        </form>
        `;
		cont++;
		document
			.querySelector('.formsComentarios')
			.addEventListener('submit', function (e) {
				e.preventDefault();
			});
	});

cargarNoticias();
