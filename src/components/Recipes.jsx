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
        altText: 'a plate of ceviche',
    },
    {
        id: 2, 
        title: 'Hong Shao Rou',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Chinese',
        prepTime: 150,
        imageUrl: hongshaorou,
        altText: 'a plate of hong shao rou',
    },
    {
        id: 3,
        title: 'Vegan Marinara',
        dietaryPreference: ['Vegan', 'Vegetarian'],
        cuisine: 'Italian',
        prepTime: 45,
        imageUrl: vegan_marinara,
        altText: 'a plate of vegan marinara',
    },
    {
        id: 4,
        title: 'Bolognese',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Italian',
        prepTime: 40,
        imageUrl: bolognese,
        altText: 'a plate of bolognese',
    },
    {
        id: 5,
        title: 'Vegetarian Fried Rice',
        dietaryPreference: ['Vegetarian'],
        cuisine: 'Chinese',
        prepTime: 25,
        imageUrl: vegetarian_fr,
        altText: 'a plate of vegetarian fried rice',
    },
    {
        id: 6,
        title: 'Papas a la Huaicana',
        dietaryPreference: ['Vegetarian'],
        cuisine: 'Peruvian',
        prepTime: 35,
        imageUrl: papa,
        altText: 'a plate of papas a la huaicana',
    }, 
    {
        id: 7, 
        title: 'Arroz con Pato',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Peruvian',
        prepTime: 50,
        imageUrl: arroz_con_pato,
        altText: 'a plate of arroz con pato',
    }, 
    {
        id: 8,
        title: 'Chicken Vesuvio',
        dietaryPreference: ['Gluten-Free'],
        cuisine: 'Italian',
        prepTime: 80,
        imageUrl: chicken_vesuvio,
        altText: 'a plate of chicken vesuvio',
    }, 
    {
        id: 9,
        title: 'Gelato', 
        dietaryPreference: ['Vegetarian', 'Gluten-Free'],
        cuisine: 'Italian',
        prepTime: 60,
        imageUrl: gelato,
        altText: 'a plate of gelato',
    },
    {
        id: 10,
        title: 'Tomato Egg',
        dietaryPreference: ['Vegetarian', 'Gluten-Free'],
        cuisine: 'Chinese',
        prepTime: 45, 
        imageUrl: tomato_egg,
        altText: 'a plate of tomato egg',
    }, 
    {
        id: 11, 
        title: 'Vegetable Dumplings',
        dietaryPreference: ['Vegan', 'Vegetarian'],
        cuisine: 'Chinese', 
        prepTime: 90,
        imageUrl: veg_dumplings,
        altText: 'a plate of vegetarian dumplings',
    }, 
    {
        id: 12, 
        title: 'Vegan Char Siu Bao',
        dietaryPreference: ['Vegan', 'Vegetarian'],
        cuisine: 'Chinese',
        prepTime: 130,
        imageUrl: vegan_charsiubao,
        altText: 'a plate of vegan charsiubao',
    }
]

export default recipes;
