/* 1st lesson
let isStudent

isStudent = true

console.log(isStudent)

isStudent = false

console.log(isStudent)

let a = 10;

let b = 20;

let result = a * b;

console.log(result)

const myNumber1 = 8;
const myNumber2 = 15;

const mult = myNumber1 * myNumber2;
console.log(mult)

1st lesson */ 

/* 2st lesson
const myName = 'sergei';
const mySurname = 'buneev';
const myJob = 'developer';

const myData = `my name is ${myName} ${mySurname} and i am ${myJob}`
console.log(myData)
*/ 

/* lesson3
const myString = '';
const myNumber = 5;
const myBoolean = true;
const myNull = null;
const myUndefined = undefined;
const myObject = {};
const myArray = [];

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof myObject);
console.log(typeof myArray);
*/

/* lesson4
function printMyName() {
    const myName = 'sergei'
    console.log(myName)
};

printMyName()
*/

/*name function
const hello = (name) => {
    return `hello ${name}`
}

console.log(hello('sergei'))

console.log(hello('anton'))
*/

/* явное возвращение значений
const helloWorld = () => {
    return 'hi, world'
}

console.log(helloWorld())

// неявное возврашение значений. Синтаксис используется, когда функция состоит из 1 выражения

const helWorld2 = () => 'wow'

console.log(helWorld2())
*/

/* Как добавлять описание для функций, JSdoc
/**
 * Возвращает разницу двух чисел
 * @param {number} first 
 * @param {number} second 
 * @returns {number} Разница чисел
 */

/*
const myMinus = (first, second) => {
    return first - second
}

console.log(myMinus(10, 2))
*/

/* callback функция с таймером

const myCallBack = () => {
    console.log('hello world')
}

setTimeout(myCallBack, 3000); // вызвал для 
*/

setTimeout(() => console.log('в одну строку'), 5000)
