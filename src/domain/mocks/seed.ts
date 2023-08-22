import { IPost, IPostMock } from '../entities/post.entity'
import { IUser, IUserID } from '../entities/user.entity'

//     password:  password1234
export const userMocks: IUserID[] = [
  {
    _id: '64e3f984cbf42ae403d892c1',
    name: 'Alexander Nova',
    email: 'alex@example.com',
    password: '$2b$10$6I00pWa01x9VyCHZFRvYZObazzC8o4YFx8SDDaA5Yncl7upSSIR66',
    createdAt: Date.now(),
  },
  {
    _id: '64e3f984cbf42ae403d892c2',
    name: 'Camila Garcias',
    email: 'camila@example.com',
    password: '$2b$10$6I00pWa01x9VyCHZFRvYZObazzC8o4YFx8SDDaA5Yncl7upSSIR66',
    createdAt: Date.now(),
  },
  {
    _id: '64e3f984cbf42ae403d892c3',
    name: 'Johana Nolan',
    email: 'johan@example.com',
    password: '$2b$10$6I00pWa01x9VyCHZFRvYZObazzC8o4YFx8SDDaA5Yncl7upSSIR66',
    createdAt: Date.now(),
  },
  {
    _id: '64e3f984cbf42ae403d892c4',
    name: 'Pedro Salfado',
    email: 'pedrosal@example.com',
    password: '$2b$10$6I00pWa01x9VyCHZFRvYZObazzC8o4YFx8SDDaA5Yncl7upSSIR66',
    createdAt: Date.now(),
  },
  {
    _id: '64e3f984cbf42ae403d892c5',
    name: 'Sasha Arevala',
    email: 'sacha@example.com',
    password: '$2b$10$6I00pWa01x9VyCHZFRvYZObazzC8o4YFx8SDDaA5Yncl7upSSIR66',
    createdAt: Date.now(),
  },
]

export const postMocks: IPostMock[] = [
  {
    title: 'Explorando los Misterios del Cosmos',
    content:
      'Los científicos están trabajando arduamente para desentrañar los secretos del universo. Desde agujeros negros hasta la expansión del espacio, cada día nos acerca a comprender la vastedad y complejidad del cosmos.',
    createAt: new Date('2022-01-22T00:25:54.648+00:00'),
    user: '64e3f984cbf42ae403d892c1',
  },
  {
    title: 'Aventuras en el Espacio Profundo',
    content:
      'Las misiones espaciales continúan revelando datos fascinantes sobre los planetas, lunas y asteroides del sistema solar. Cada exploración nos permite comprender mejor la formación y evolución de estos objetos celestes.',
    createAt: new Date('2022-02-22T00:25:54.648+00:00'),
    user: '64e3f984cbf42ae403d892c1',
  },
  {
    title: 'En Busca de Vida Extraterrestre',
    content:
      'Los científicos buscan signos de vida más allá de la Tierra. Lunas con océanos bajo la superficie, exoplanetas en la zona habitable y señales de radio misteriosas son algunos de los enigmas que podrían indicar la existencia de vida alienígena.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c1',
  },
  {
    title: 'El Viaje a Marte',
    content:
      'La humanidad ha fijado su mirada en Marte como próximo destino de exploración. Los planes para misiones tripuladas y la búsqueda de indicios de habitabilidad en el planeta rojo están en pleno apogeo.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c1',
  },
  {
    title: 'El Misterio de la Materia Oscura',
    content:
      'La materia oscura, invisible pero presente en todo el universo, sigue siendo uno de los mayores enigmas de la física moderna. Los científicos esperan entender su naturaleza y su papel en la formación de estructuras cósmicas.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c2',
  },
  {
    title: 'Agujeros Negros y Singularidades',
    content:
      'Los agujeros negros, donde la gravedad es tan intensa que ni la luz puede escapar, siguen siendo un tema de fascinación. Las teorías de la relatividad general y cuántica buscan unificar la física en estos lugares extremos.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c2',
  },
  {
    title: 'Colisiones Cósmicas y Ondas Gravitacionales',
    content:
      'La detección de ondas gravitacionales ha abierto una nueva ventana al cosmos. Colisiones de estrellas de neutrones y agujeros negros revelan energías inconcebibles y permiten a los científicos estudiar fenómenos extremos.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c2',
  },
  {
    title: 'El Futuro de la Exploración Espacial',
    content:
      'Las visiones futuristas de colonias en Marte, naves propulsadas por energía solar y turismo espacial están cada vez más cerca de convertirse en realidad. La colaboración global impulsa la expansión de nuestras fronteras cósmicas.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c2',
  },
  {
    title: 'Los Misterios de las Galaxias Lejanas',
    content:
      'Las observaciones de galaxias distantes nos retrotraen en el tiempo y nos ofrecen una visión del universo en sus primeras etapas. La expansión acelerada del universo y la formación de estructuras son desafíos en constante estudio.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c3',
  },
  {
    title: 'Explorando Lunas Alienígenas',
    content:
      'Saturno, Júpiter y otros planetas albergan lunas con características únicas. Mares subterráneos, volcanes y atmósferas extrañas nos brindan oportunidades de descubrimiento en estos mundos distantes.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c3',
  },
  {
    title: 'El Espacio-Tiempo y los Agujeros de Gusano',
    content:
      'Los agujeros de gusano, teóricamente pasajes a través del espacio-tiempo, capturan la imaginación de científicos y aficionados por igual. Su existencia podría permitir viajes interestelares, pero aún son puramente especulativos.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c3',
  },
  {
    title: 'Los Planetas Extrasolares',
    content:
      'La búsqueda de exoplanetas, mundos que orbitan otras estrellas, revela una diversidad asombrosa. Desde planetas gigantes gaseosos hasta supertierras en la zona habitable, cada hallazgo amplía nuestro entendimiento del universo.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c3',
  },
  {
    title: 'La Vida en las Profundidades del Océano Cósmico',
    content:
      'Los océanos de Europa y Encélado, lunas de Júpiter y Saturno, respectivamente, podrían albergar vida en sus océanos subterráneos. Las condiciones extremas de estos mundos helados desafían nuestra comprensión de la habitabilidad.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c3',
  },
  {
    title: 'Explorando las Nebulosas y Formación Estelar',
    content:
      'Las nebulosas, vastas nubes de gas y polvo, son viveros de nuevas estrellas. La formación estelar dentro de estas regiones cósmicas arroja luz sobre los procesos de nacimiento y evolución de las estrellas.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c4',
  },
  {
    title: 'La Carrera por Colonizar Marte',
    content:
      'Empresas privadas y agencias espaciales compiten por la colonización de Marte. La viabilidad de vivir en el planeta rojo plantea desafíos técnicos, de salud y de sostenibilidad que deben resolverse antes de convertirnos en una especie multiplanetaria.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c4',
  },
  {
    title: 'Los Cúmulos Estelares y Nuestro Lugar en la Galaxia',
    content:
      'Los cúmulos estelares, agrupaciones densas de estrellas, nos ayudan a comprender la evolución y dinámica de nuestra galaxia. Estos cúmulos son laboratorios cósmicos para estudiar cómo se forman y evolucionan las estrellas.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c4',
  },
  {
    title: 'La Materia Oscura y la Fuerza Invisible',
    content:
      'La materia oscura, aunque invisible, ejerce una influencia gravitacional significativa en el universo. Los científicos buscan entender su naturaleza y cómo interactúa con la materia visible para dar forma a la estructura cósmica.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c4',
  },
  {
    title: 'El Viaje Interestelar y la Nave Espacial Interestelar',
    content:
      'El concepto de naves interestelares capaces de viajar a otras estrellas es un tema de investigación y especulación. Los desafíos tecnológicos y las limitaciones de velocidad hacen que estas misiones sean más adecuadas para la ciencia ficción.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c5',
  },
  {
    title: 'La Evolución de las Galaxias y sus Estrellas',
    content:
      'El estudio de las galaxias nos revela su evolución a lo largo de miles de millones de años. La formación de estrellas, la fusión galáctica y la interacción con el entorno cósmico dan forma a la apariencia y comportamiento de las galaxias.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c5',
  },
  {
    title: 'La Maravilla de los Eclipses Solares',
    content:
      'Los eclipses solares, cuando la Luna cubre parcial o totalmente al Sol, son eventos asombrosos. Los astrónomos y entusiastas de todo el mundo se reúnen para presenciar estas maravillas celestes que ocurren ocasionalmente en diferentes regiones de la Tierra.',
    createAt: new Date(),
    user: '64e3f984cbf42ae403d892c5',
  },
]
