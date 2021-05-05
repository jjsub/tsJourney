const apples: number = 5; 

const verdad: boolean = true; 

let speed: string = 'fast';
let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects 
let now: Date = new Date();

// Array 
let colors: string[] = ['red', 'blue','green', '44' , null, undefined, ['33'],];
let myNumbers: number[] = [1,2,3, null, undefined , 3];
let truths: boolean[] = [true, false, true];



// Class
class Car {
}

let car: Car = new Car();

//  Object literal
let point: {x: number; y: number;} =  {
    x: 10,
    y: 20
}

//  Function
const longNumber: (i: number) => void = (i) => {
    console.log(i)
}

// When to use annotations

//  1) Function that returns the 'any type 

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for ( let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

//  3) Variable whose type cannot be inferred correclty
let numberAboveZero: boolean | number = false