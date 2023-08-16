const largometrajesDefault = [
  {
    title: 'OVNIS EN ZACAPA',
    genre: 'Ficción, 90',
    director: 'Marcos Machado',
    production: 'Vilma Lopez / Domingo Lemus',
    publisher: 'Best Picture System / Aberracion Optica',
    country: 'Mexico',
    year: '2015',
    description: 'Supuestos avistamientos de OVNIS son reportados en el nororiente de Guatemala. Rober Daneri un frustrado profesor universitario junto al equipo de producción de un programa sensacionalista para televisión emprenden un viaje a Zacapa en búsqueda de una explicación lógica a estos extraños acontecimientos.',
    promotional: 'https://www.youtube.com/watch?v=WFmdDmutu8I',
    trailer: 'https://www.youtube.com/watch?v=WFmdDmutu8I',
    prizes: [
      'Selección Oficial de Chicago Latino Film Festival 2015',
      'Selección Oficial Festival de Cine Latinoamericano y Caribeño, Margarita Venezuela, 2015',
      'Selección Oficial Mórbido Fest de Puebla, México 2015',
      'Selección Oficial Zinema Zombie, Bogotá Colombia, 2015',
      'Selección Oficial FKMCine de Coruña, España 2015',
      'Selección MEDIANOCHE Festival Del Nuevo Cine Latinoamericano de La Habana Cuba, 2015',
      'Película Inaugural Festival Ícaro Guatemala, 2014 y Festival Ícaro Puerto Rico 2015',
      'Ganador del premio de Haciendo Industria del Festival Ícaro, Guatemala 2013'
    ],
    scenes: [],
    behind_scenes: []
  },
  {
    title: 'RECETA NO INCLUIDA',
    genre: 'Ficción, 81',
    director: 'Juliana Maite',
    production: 'Vilma Lopez',
    publisher: 'Rojo Chiringa / Filmes Casa / Aberracion Optica',
    country: 'Puerto Rico / México',
    year: '2021',
    description: 'Es Nochebuena en Puerto Rico y Olivia comienza a sentir síntomas del TOC, una condición que creía tener controlada. En medio de las festividades recurre a David, un chico que puede conseguirle las pastillas de manera ilegal. Una vez Olivia llega al apartamento de David, enfrentan circunstancias inesperadas y reconocen que comparten más de lo que se atreven a admitir.',
    promotional: 'https://www.youtube.com/watch?v=4DsnamvKe7E',
    trailer: 'https://www.youtube.com/watch?v=4DsnamvKe7E',
    prizes: [
      'Colón de Plata a la Mejor Interpretación Conjunta, Festival de Huelva de Cine Iberoamericano 2022',
      'Premio del público, SXSW Film Festival, EUA, 2022',
      'Selección Oficial en LALIFF Los Angeles Latino film Festival, EUA, 2022',
      'Selección Oficial en TTFF Trinidad & Tobago Film Festival, EUA, 2022',
      'Selección Oficial en AFI Latin America Film Festival, EUA, 2022',
      'Selección Oficial en NYLFF New York Latino Film Festival, EUA, 2022',
      'Programa Ibermedia para la Coproducción, España, 2019',
      'Department of Economic Development and Commerce, Puerto Rico, 2019',
      'National Endowment for the Arts, Puerto Rico, 2019',
      'Instituto de Cultura Puertorriqueña, Puerto Rico, 2019'
    ],
    scenes: [],
    behind_scenes: []
  },
  {
    title: 'ERGONOMÍA PARA DIANA',
    genre: 'Documental, 52',
    director: 'Marcos Machado',
    production: 'Vilma Lopez',
    publisher: 'Best Picture System / Candy Caramels / Aberracion Optica',
    country: 'Costa Rica',
    year: '2012',
    description: 'Diana tiene 10 años y se entera de que tiene hipoacusia. Ella emprende un viaje a través de su caracol genealógico para buscar una manera de adaptarse a la pérdida de audición y con ayuda de sus familiares encontrar su propia ergonomía sonora.',
    promotional: 'https://www.youtube.com/watch?v=vUkS4lmfqKE',
    trailer: 'https://www.youtube.com/watch?v=vUkS4lmfqKE',
    prizes: [
      'Ganador del programa de fomento a la producción y teledifusión del documental latinoamericano DOCTV III Costa Rica, 2012',
      'Parte del catálogo permanente de distribución Internacional RED DocTV Latinoamérica, 2012',
      'Selección Oficial, ICARO Festival Internacional de Cine en Centroamérica, Guatemala, 2013',
      'Mención especial del jurado, Habana Film Festival NY, EUA, 2013',
      'Mejor Dirección, Mejor Película, Mejor Montaje y Mejor Banda Sonora, Festival de Cine de Costa Rica, 2013',
      'Selección MEDIANOCHE Festival Del Nuevo Cine Latinoamericano de La Habana Cuba, 2015',
      'Mención especial del jurado, RDOC Festival Internacional de Cine Documental de República Dominicana y el Caribe, 2014',
    ],
    scenes: [],
    behind_scenes: []
  }
]

const cortometrajesDefault = [

]

// variables
const largometrajes = localStorage.getItem('largometrajes') ? JSON.parse(localStorage.getItem('largometrajes')) : largometrajesDefault;
const cortometrajes = localStorage.getItem('cortometrajes') ? JSON.parse(localStorage.getItem('cortometrajes')) : cortometrajesDefault;

// Update local storage
const updateLocalStorage = () => {
  localStorage.setItem('largometrajes', JSON.stringify(largometrajes));
  localStorage.setItem('cortometrajes', JSON.stringify(cortometrajes));
};

document.querySelectorAll('thead').forEach(thead => {
  thead.innerHTML = `
  <tr>
    <th>Titulo</th>
    <th>Genero</th>
    <th>Dirección</th>
    <th>Producción</th>
    <th>Casa Productora</th>
    <th>País</th>
    <th>Año</th>
    <th>Sinopsis</th>
    <th>Enlace promocional</th>
    <th>Enlace trailer</th>
  </tr>`
});

const tbodyLargometraje = document.getElementById('largometraje');
const tbodyCortometraje = document.getElementById('cortometraje');

largometrajes.forEach(element => {
  tbodyLargometraje.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${element.title}</td>
      <td>${element.genre}</td>
      <td>${element.director}</td>
      <td>${element.production}</td>
      <td>${element.publisher}</td>
      <td>${element.country}</td>
      <td>${element.year}</td>
      <td class="desc-td">${element.description}</td>
      <td>${element.promotional}</td>
      <td>${element.trailer}</td>
    </tr>
  `);
});

cortometrajes.forEach(element => {
  tbodyCortometraje.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${element.title}</td>
      <td>${element.genre}</td>
      <td>${element.director}</td>
      <td>${element.production}</td>
      <td>${element.publisher}</td>
      <td>${element.country}</td>
      <td>${element.year}</td>
      <td class="desc-td">${element.description}</td>
      <td>${element.promotional}</td>
      <td>${element.trailer}</td>
    </tr>
  `);
});
