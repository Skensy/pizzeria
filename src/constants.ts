
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    nome: 'Margherita D.O.P.',
    description: 'Pomodoro San Marzano, Mozzarella di Bufala, Olio EVO, Basilico fresco.',
    price: 9.50,
    category: 'pizze',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },
  {
    id: '2',
    nome: 'Diavola Speciale',
    description: 'Pomodoro, Mozzarella, Salame piccante calabrese, Nduja, Peperoncino.',
    price: 11.00,
    category: 'pizze',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    isSpicy: true
  },
  {
    id: '3',
    nome: 'Pistacchiosa',
    description: 'Base bianca con Pesto di Pistacchio, Provola affumicata, Mortadella Bologna I.G.P., Granella di pistacchio.',
    price: 13.50,
    category: 'pizze',
    image: 'https://images.unsplash.com/photo-1593560708920-63984dc01ae9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    nome: 'Cuoppo Napoletano',
    description: 'Frittura mista di zeppoline, panzarotti, arancini e fiori di zucca.',
    price: 8.00,
    category: 'sfizi',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    nome: 'Tiramisù Artigianale',
    description: 'Savoiardi sardi, Mascarpone fresco, Caffè espresso e cacao amaro.',
    price: 6.50,
    category: 'dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true
  },
  {
    id: '6',
    nome: 'Birra Artigianale 33cl',
    description: 'Bionda non filtrata prodotta localmente.',
    price: 5.00,
    category: 'bevande',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80'
  }
];

export const CONTACT_INFO = {
  address: "Via Toledo, 12, 80134 Napoli NA, Italia",
  phone: "+39 081 123 4567",
  email: "info@bellanapoliristorante.it",
  hours: [
    { days: "Lun - Ven", time: "12:00 - 15:00, 19:00 - 23:30" },
    { days: "Sab - Dom", time: "12:00 - 00:00" }
  ]
};
