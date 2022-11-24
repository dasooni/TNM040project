import react from 'react';

// import all the images here
import amoras from '../images/amoras.svg';
import apple from '../images/apple.svg';
import avocado from '../images/avocado.svg';
import banana from '../images/banana.svg';
import cacao from '../images/cacao.svg';
import cherry from '../images/cherry.svg';
import coconut from '../images/coconut.svg';
import grapes from '../images/grapes.svg';
import limon from '../images/limon.svg';
import mango from '../images/mango.svg';
import melon from '../images/melon.svg';
import orange from '../images/orange.svg';
import passionfruit from '../images/passion-fruit.svg';
import peach from '../images/peach.svg';
import pear from '../images/pear.svg';
import pineapple from '../images/pineapple.svg';
import plum from '../images/plum.svg';
import strawberry from '../images/strawberry.svg';
import watermelon from '../images/watermelon.svg';

/**
 * Shape array with all the images
 * @returns {string} - Image.
 * Example: <Shape id = "apple"/>
 */
export const shapes = [
    { id: "amoras", src: amoras, name: "Amoras"},
    { id: "apple", src: apple, name: "Apple"},
    { id: "avocado", src: avocado, name: "Avocado"},
    { id: "banana", src: banana, name: "Banana"},
    { id: "coconut", src: coconut, name: "Coconut"},
    { id: "cacao", src: cacao, name: "Cacao"},
    { id: "cherry", src: cherry, name: "Cherry"},
    { id: "grapes", src: grapes, name: "Grapes"},
    { id: "limon", src: limon, name: "Limon"},
    { id: "mango", src: mango, name: "Mango"},
    { id: "melon", src: melon, name: "Melon"},
    { id: "orange", src: orange, name: "Orange"},
    { id: "passionfruit", src: passionfruit, name: "Passion Fruit"},
    { id: "peach", src: peach, name: "Peach"},
    { id: "pear",src: pear, name: "Pear"},
    { id: "pineapple", src: pineapple,  name: "Pineapple"},
    { id: "plum", src: plum, name: "Plum"},
    { id: "strawberry", src: strawberry, name: "Strawberry"},
    { id: "watermelon", src: watermelon, name: "Watermelon"}
    
]

/**
 * Path array to all the images
 * @returns {string} - path to the image, example: "../images/apple.svg"
 */
const paths = [amoras, apple, avocado, 
    banana, coconut, cacao, cherry, 
    grapes, limon, mango, melon, orange, 
    passionfruit, peach, pear, pineapple, plum, 
    strawberry, watermelon];


/**
 * 
 * @param {shape} props 
 * @returns image. 
 * Example: <Shape id = "apple"/>
 * This is default export. 
 */
export default function Shapes(props) {
    const  shape = shapes[props.src];
    return <shape id={shape.id} src={shape.src} alt={shape.name} />;
}

/**
 * 
 * @returns {string} - random path to the image, changes on every refresh.
 * Example: "../images/apple.svg
 * Export lets you use this function in other components.
 */
export function RandomShape() {
    return paths[Math.floor(Math.random() * paths.length)];
}

