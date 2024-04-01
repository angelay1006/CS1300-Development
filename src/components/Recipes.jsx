import ceviche from '../assets/ceviche.jpg';
import hongshaorou from '../assets/hongshaorou.jpeg';
import vegan_marinara from '../assets/vegan_marinara.jpeg';
import bolognese from '../assets/bolognese.jpeg';
import vegetarian_fr from '../assets/veg_friedrice.jpeg';
import papa from '../assets/papa.jpeg';
import arroz_con_pato from '../assets/arroz_con_pato.jpeg';
import chicken_vesuvio from '../assets/chicken_vesuvio.jpeg';
import gelato from '../assets/gelato.jpeg';
import tomato_egg from '../assets/tomato_egg.jpeg';
import veg_dumplings from '../assets/veg_dumplings.jpeg';
import vegan_charsiubao from '../assets/charsiubao.jpeg';

const recipes = [
    {
        id: 1,
        title: 'Ceviche',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Peruvian',
        prepTime: 30,
        imageUrl: ceviche,
    },
    {
        id: 2, 
        title: 'Hong Shao Rou',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Chinese',
        prepTime: 150,
        imageUrl: hongshaorou,
    },
    {
        id: 3,
        title: 'Vegan Marinara',
        dietaryPreference: ['Vegan', 'Vegetarian'],
        cuisine: 'Italian',
        prepTime: 45,
        imageUrl: vegan_marinara,
    },
    {
        id: 4,
        title: 'Bolognese',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Italian',
        prepTime: 40,
        imageUrl: bolognese,
    },
    {
        id: 5,
        title: 'Vegetarian Fried Rice',
        dietaryPreference: ['Vegetarian'],
        cuisine: 'Chinese',
        prepTime: 25,
        imageUrl: vegetarian_fr,
    },
    {
        id: 6,
        title: 'Papas a la Huaicana',
        dietaryPreference: ['Vegetarian'],
        cuisine: 'Peruvian',
        prepTime: 35,
        imageUrl: papa,
    }, 
    {
        id: 7, 
        title: 'Arroz con Pato',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Peruvian',
        prepTime: 50,
        imageUrl: arroz_con_pato,
    }, 
    {
        id: 8,
        title: 'Chicken Vesuvio',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Italian',
        prepTime: 80,
        imageUrl: chicken_vesuvio,
    }, 
    {
        id: 9,
        title: 'Gelato', 
        dietaryPreference: ['Vegetarian', 'Gluten-Free'],
        cuisine: 'Italian',
        prepTime: 60,
        imageUrl: gelato,
    },
    {
        id: 10,
        title: 'Tomato Egg',
        dietaryPreference: ['Vegetarian', 'Gluten-Free'],
        cuisine: 'Chinese',
        prepTime: 45, 
        imageUrl: tomato_egg,
    }, 
    {
        id: 11, 
        title: 'Vegetable Dumplings',
        dietaryPreference: ['Vegan', 'Vegetarian'],
        cuisine: 'Chinese', 
        prepTime: 90,
        imageUrl: veg_dumplings,
    }, 
    {
        id: 12, 
        title: 'Vegan Char Siu Bao',
        dietaryPreference: ['Vegan', 'Vegetarian'],
        cuisine: 'Chinese',
        prepTime: 130,
        imageUrl: vegan_charsiubao
    }
]

export default recipes;
