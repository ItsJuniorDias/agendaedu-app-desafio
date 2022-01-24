import { Event } from '../components/EventCard/types';
import { Options } from '../components/OptionsCard/types';

interface User {
  name: string;
  image_url: string;
}

const user: User = {
  name: 'Agenda Edu',
  image_url:
    'https://blush.design/api/download?shareUri=q_Ap_5y_i&s=0%7Ed4a181&w=800&h=800&fm=png',
};

const events: Event[] = [
  {
    id: '1',
    image_url:
      'https://brasil.estadao.com.br/blogs/vencer-limites/wp-content/uploads/sites/189/2018/12/DanteGEN_Explorum01_20dezembro2018_blogVencerLimites.jpeg',
    category: 'Eventos',
    title: 'Mostra Científica',
    info: '25 de Janeiro às 07:30',
  },
  {
    id: '2',
    image_url:
      'https://brstatic.guiainfantil.com/uploads/Esportes_e_artes/crianas-seguras-na-piscina_A.jpg',
    category: 'Eventos',
    title: 'XVII Olimpíadas escolares',
    info: '26 de Janeiro às 14:00',
  },
  {
    id: '3',
    image_url:
      'https://www.vozdobico.com.br/wp-content/uploads/2017/09/Palestra-para-crian%C3%A7as-9.jpeg',
    category: 'Eventos',
    title: 'Palestra',
    info: '27 de Janeiro às 15:00',
  },
];

const options: Options[] = [
  {
    icon: { lib: 'MaterialCommunityIcons', name: 'pencil-outline' },
    counter: 1,
    title: 'Atividades',
  },
  {
    icon: { lib: 'Ionicons', name: 'megaphone-outline' },
    counter: 0,
    title: 'Comunicados',
  },
  {
    icon: { lib: 'Feather', name: 'calendar' },
    counter: 3,
    title: 'Eventos',
  },
];

const shortcuts: String[] = [
  'https://play-lh.googleusercontent.com/FjV_riF_YbneamJX2NM5u994lV8de9ufxlzJNv5xCaa1dUofWeXeo-Fyt5TdU9B-PRg=s180-rw',
  'https://play-lh.googleusercontent.com/d85SyM3_rjiym7bad_vP2_AA3J0WV4PnnzF0Pm_zU7S5CseZ7XVkI83ibRlEY-NCsvP4=s180-rw',
];

export { user, events, options, shortcuts };
