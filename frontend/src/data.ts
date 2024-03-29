import { Food } from "./app/shared/models/food";

export const sample_foods:Food[] = [
    {
        id:'1',
        name: 'Aloowadi',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/ALOOVADI.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:'2',
        name: 'Bedai',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/images/BEDAI.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:'3',
        name: 'Bread Pakoda',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/images/BREAD PAKODA.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id:'4',
        name: 'Chole Bhature',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/images/CHOLE BHATURE.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:'5',
        name: 'Dhahi vada',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/images/DAHI VADA.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:'6',
        name: 'Dhokla',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/images/DHOKLA.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
];