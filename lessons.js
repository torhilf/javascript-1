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
const mySurname = 'andreev';
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

setTimeout(myCallBack, 3000);  
*/

/* вызов callback функции в одну строку. 
setTimeout(() => console.log('в одну строку'), 5000)
*/

/* еще вариант вызова колбек-функции
const anotherCallback = () => console.log('greeitngs')

setTimeout(anotherCallback, 3000)
*/

/* создание объекта и вывод с шаблонной строкой
const person = {
    myName: 'sergei',
    surname: 'buneev',
    favoriteNumber: 5
};

const personInfo = `my name is ${person.myName} ${person.surname} and my favorite number is ${person.favoriteNumber}`
console.log(personInfo)

*/

/* вспоминал про колбек
setTimeout(() => console.log('привет мир'), 2000)
*/

/*
const myHello = () => {
    console.log('hello')
}

setTimeout(myHello, 2000)
*/

/* вывод длины строки
const myString = 'robot'

console.log(myString.length)
*/

/*еще вариант

const myFavoriteSport = 'boxing'

const stringLength = myFavoriteSport.length

console.log(stringLength)
*/

/* перевод строки в апперкейс и проверка типа строка
const anyString = 'the string'


console.log(anyString instanceof String)

console.log(typeof anyString)

const toUpperCase = anyString.toUpperCase()

console.log(toUpperCase)

*/

/* создание экземпляра string
const myString = new String('sergei')

console.log(myString instanceof String)

console.log(typeof myString)

const testString = 'theory'

// но ведь я сразу могу получить доступ как к объекту?!
console.log(testString.toUpperCase())

*/

/* замена части строки при помощи метода replace

const newDay = 'Good morning'

const updatedDay = newDay.replace('morning', 'Evening')

console.log(updatedDay)

*/

/*  создание массива

const myArray = [
    myString = 'sergei',
    myBoolean = true,
    myNumber = 5
]

console.log(myArray[0])

console.log(myArray.length)

// еще вариант
const myNewArray = [false, 17, null]

console.log(myNewArray[0])

*/

/* замена элемента в массиве

const firstArray = [true, 13, null, 'abc']

console.log(firstArray)

firstArray[1] = 125 // синтаксис замены элемента в массиве

console.log(firstArray)

*/

/* перебор элементов массива с методом forEach

const changeArray = ['abc', 12, null, false]

changeArray.forEach((element) => {
    console.log(element)
});

// еще вариант

const myArray = ['abc', true, 200]

myArray.forEach((element) => console.log(element))

*/

/* добавление элемента в массив при помощи push

const plusArray = [12, 'abc', null]

plusArray.push(11, true)

console.log(plusArray)
console.log(plusArray.length)

*/

/* вывод текущего времени в миллисекундах

const currentDate = new Date() // создание новой даты в JavaScript

const currentDateInMs = currentDate.getTime()

console.log(currentDateInMs)

*/



// конвертация строки в число, сравнение переменных

// let myVariable1 = 10
// let myVariable2 = '5'

// console.log(parseInt(myVariable2))
// console.log(typeof parseInt(myVariable2))

// второй вариант с оператором +

// let myVariable1 = 10
// let myVariable2 = '5'

// console.log(+myVariable2)
// console.log(typeof +myVariable2)




// сравнить 2 переменных, вывести в консоль true, 
// если значение 1 больше или равно 2

// let myVariable1 = 10
// let myVariable2 = '5'

// console.log(parseInt(myVariable1) <= parseInt(myVariable2)) // логическое значение false

// myVariable1 = '20';
// myVariable2 = 100

// console.log(parseInt(myVariable1) <= parseInt(myVariable2)) // true

// остаток от деления

// const myNumber1 = 10
// const myNumber2 = 3

// const result = myNumber1 % myNumber2

// console.log(result)

// /**
//  * приоритетность оператора % 12 (выше чем + и _)
//  * Ассоциативность оператора % - left-to rigth
//  * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence
//  */

// console.log(100 % 23 % 5 % 3)

// ИЛИ (||) и И (&&) операторы

// console.log(3 || (true && null) || false); // <-- результат 3

/** ШАГ 1
 * выполняем (true && null)
 * получаем null <-- оператор && возвращает первое же ложное значение выражения
 */

/** ШАГ 2
 *  3 || null || false
 *  3 <-- потому что оператор || возвращает первое истинное значение
 */

// console.log(true && null && 10) // <-- null, поскольку это оператор замыкания и до 10 выражение не дойдет
// console.log(true && 'abc' && 10) // <-- 10, выведет последний элемент вырвженмя

// console.log(10 || false)

// замена двух операторов бинарными. Лучше использовать все же двойные, они читабельнее

// let a = 10

// a += 1 // было a = a + 1

// console.log(a)

// a *= 2 // a = a * 2

// console.log(a)

// a -= 5 // a = a - 5

// console.log(a)

// a /= 2 // a = a / 2

// console.log(a)

/** Определить выражение или инструкция
 *  - выражение (expression)
 * - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// выражение — часть кода, которая вернет определенное значение
// инструкция — выполняет определенные действия
// выражение-инструкция — на отдельной строчке кода

// expression statement
// 15 

// statement
// const myObject = { // <-- сам объект это expression
//     x: 10,
//     y: true,
// }

// // expression statement
// myObject.z = 'abc' // <-- expression

// // expression statement
// delete myObject.x

// // statement
// let newVariable

// // expression statement
// newVariable = 30 + 5 // <-- expression

// // expression statement
// console.log(newVariable) 
// /**             ^
//  *          expression        
//  */

// // statement
// if (newVariable > 10) {
//     /**   ^
//      *   expression
//      */

//     // expression statement
//     console.log(`${newVariable} more than 10`) // <-- newVariable is expression too
//      /**        _____________________________
//       *                        ^
//      *                     expression
//      */
// }

// здесь вызываются на самом деле две функции
// function fn() {
//     console.log('привет из функции fn') // <-- первая

//     return function (a) { //   < -- вторая анонимная вызывается в первой уже с параметром
//         console.log(a)
//     }
// }

// fn()(true) // <-- вызываются обе функции, вторая с аргументом

// // сначала в выводе видим результат первой функции, затем второй
// fn()('abc') // <-- передать можно любой аргумент

// let arr = [1, 2] 

// arr.push(3)

// console.log(arr)

// arr = [1, 2, 3, 4]

// console.log(arr)

// let myFavoritAnimal = 'Monkey'

// console.log(myFavoritAnimal)

// myFavoritAnimal = 'cat'

// console.log(myFavoritAnimal)

// строгий режим 'use strict'


// 'use strict'
// function myFunction() {
//    let a = 2
//    console.log(a) // <-- добавил эту строчку для вывода в консоль
//     return a
    // }

// myFunction()

// колбэк функция

// setTimeout(function myFn() { // <-- здесь ошибка в том, что имя функции, myFn,  не нужно
//     console.log('greetings from myFn')
// }, 2000)

// myFn() // <-- такой вызов ошибка, поскольку функция объявлялась внутри функции

// как исправить задачу выше ^. Просто убираем имя, myFn, и вывод вне колбэк функции 
// setTimeout(function () { // <-- убрали myFn
//     console.log('greetings from myFn')
// }, 2000)
// // <-- здесь убрали вот это myFn()

// интервалы и Таймауты

// в этой части мы выводим сообщение + 1 в консоль с интервалом
let i = 1 // <-- переменную в глобальной области видимости

const messageIntervalId = setInterval(() => { // <-- переменная, чтобы затем использовать ее аргументом в clearInterval
    console.log('сообщение номер  ' + i) // <-- теперь у нас есть к ней доступ
    i = i + 1 // <-- здесь показываем, с каким шагом увеличивать i
}, 2000)

setTimeout(() => clearInterval(messageIntervalId), 11000) // <-- в setTimeout первым аргументом передаем clearInterval, вторым время