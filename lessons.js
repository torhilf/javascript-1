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
const myminus = (first, second) => {
    return first - second
}

console.log(myminus(10, 2))
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

changeArray.forEach((key    ) => {
    console.log(key )
});

// еще вариант

const myArray = ['abc', true, 200]

myArray.forEach((key    ) => console.log(key    ))

*/

/* добавление элемента в массив при помощи push (добавляет в конец массива)

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
// let i = 1 // <-- переменную в глобальной области видимости

// const messageIntervalId = setInterval(() => { // <-- переменная, чтобы затем использовать ее аргументом в clearInterval
//     console.log('сообщение номер  ' + i) // <-- теперь у нас есть к ней доступ
//     i = i + 1 // <-- здесь показываем, с каким шагом увеличивать i
// }, 2000)

// setTimeout(() => clearInterval(messageIntervalId), 11000) // <-- в setTimeout первым аргументом передаем clearInterval, вторым время

// добавление элементов в начало массива

// const myArray = [true, null]

// console.log(myArray.unshift(100, 'hello')) // <-- unshift добавляет в начало элементы, здесь сразу выводим длину

// console.log(myArray)

// // добавление элемента по определенному индексу. лучше так НЕ делать

// const myArray = [1, 2]

// myArray[10] = 'abc' // <-- просто добавляешь номер индекса, по которому вводишь новый элемент

// console.log(myArray)

// console.log(myArray.length)



// создание объектов внутри массива, добавление объектов в массив

// const cars = [ // <-- синтаксис для объектов внутри массива
// {
//     carBrand: 'bmw',
//     carPrice: 15,
//     isAvailableForSale: true,
// },

// {
//     carBrand: 'honda',
//     carPrice: 15,
//     isAvailableForSale: true,
// },

// {
//     carBrand: 'toyota',
//     carPrice: 800,
//     isAvailableForSale: false,
// },

// ]

// const newCar = { // <-- присваиваем переменной новый объект
//     carBrand: 'mercedes',
//     carPrice: 89000,
//     isAvailableForSale: false, 
// }

// cars.push(newCar) // <-- добавление нового объекта в массив

// console.log(cars[1].carBrand) //<-- обращение к элементу в массиве по индексу

// console.log(cars)

// // итерация по свойствам объекта
// const myObject = { // <-- присваиваем объект переменной
//     key1: true,
//     key2: 10,
//     key3: 'abc',
//     key4: null,
//     key10: NaN
// }

// const objectKeys = Object.keys(myObject) // <-- конвертировали все свойства в объект, присвоили его значение переменной

// objectKeys.forEach((key ) => { // <-- уже в массиве используем forEach для перебора всех элементов
//     if (key  === 'key1' || key  === 'key3' || key === 'key10') // <-- колбэк функция с инструкцией
//         console.log(myObject[key]) // <-- если условия выполнены, вывести это
// } )


// // Получение случайного целого числа в заданном интервале (мое решение)

// const min = 1000;
// const max = 9999;

// const myNumbers = [2355, 7235, 8135, 1768, 2361, 8351];

// // Функция для генерации случайного числа в заданном диапазоне
// const getRandomNumber = (min, max) => {
//     min = Math.ceil(min); // Выражение min = Math.ceil(min); округляет значение переменной min до ближайшего целого числа в сторону увеличения
//     max = Math.floor(max); // max = Math.floor(max); округляет значение переменной max до ближайшего целого числа в сторону уменьшения
//     return Math.floor(Math.random() * (max -min) + min);

// }

// console.log(getRandomNumber(min, max));

// // Функция для генерации уникального случайного числа
// const getUnicNumber = (min, max, existingNumbers) => { 
//     let randomNumber;
//     do {
//         randomNumber = getRandomNumber(min, max);
//     } while (existingNumbers.includes(randomNumber)); // Повторять, пока число уже существует в массиве
//     return randomNumber;
// }

// // Генерируем уникальное число
// const uniqueNumber = getUnicNumber(min, max, myNumbers);
// console.log(uniqueNumber);


// Получение случайного целого числа в заданном интервале (решение учителя)

// const MIN = 1000;
// const MAX = 9999;

// const myNumbers = [2355, 7235, 8135, 1768, 2361, 8351];

// // const myNumbers = [1, 3, 5, 7, 10]

// // функция генерирует случайное число в заданном диапазоне
// const randomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// };

// // функция добавляет рандомное число в массив
// const addRandomNumberToArray = (arr, min, max) => {
// let newRandomNumber // <-- объявляем переменную при помощи let
// const updatedArr = [...arr ]; // <-- создаем копию массива

// do { // <-- добавляем цикл, выходим из него, как только находим число, которого нет в массиве
//     newRandomNumber = randomNumber(min, max);  // <-- генерируем новое число внутри цикла
//     console.log(newRandomNumber) // <-- показывает, сколько раз генерировалось число
// } while(updatedArr.includes(newRandomNumber)) // <-- проверяем, есть ли такое число в массиве при помощи includes

// updatedArr.push(newRandomNumber); // <-- добавляем новое уникальное число в новый массив

// return updatedArr
// };

// const updatedArray = addRandomNumberToArray(myNumbers, MIN, MAX)
// console.log('NEW ARRAY', updatedArray);
// console.log('ORIGINAL ARRAY', myNumbers);


// проверка того, что свойство является собственным свойством объекта
// const myObject = {
//     name: 'Kosta',
//     age: 30,
//     city: 'London',
// };

// Object.prototype.country = 'England'

// for (let key in myObject) { // <-- в переменной key уже содержатся все названия собственных свойств объекта. цикл for in перебирает все свойства объекта, в том числе унаследованные
//    if (myObject.hasOwnProperty(key)) //<-- если ключ (key) является не унаследованным свойством объекта myObject
//     console.log(myObject[key]) // <-- то мы выводим значение key
// };

// тернарный оператор

// я переписал эту функцию с if else на просто if

// function isArrayEmpty(inputArray) {
//     if (inputArray.length > 0) {
//         return 'Array is not empty'
//     } else {
//         return 'Array is empty'
//     }
// }

// console.log(isArrayEmpty([1, 3]))

// на эту
// const isArrayEmpty = (inputArray) => {
//     if (inputArray.length > 0) {
//         return 'Array is not empty'
//     }

//     // if (inputArray.length <= 0) { // второй if тут не нужен. 
//         return 'Array is empty' // эта строка сработает, если все предыдущие инструкции ложны
// }
// console.log(isArrayEmpty([1, 3]))

// console.log(isArrayEmpty([ ]))

/** правильное решение с тернарным оператором
 * выражение ниже вернет сразу результат либо __^___      либо ___^____
 *  return inputArray.length > 0 ? 'Array is not empty' : 'Array is empty'
}
 */

// const isArrayEmpty = (inputArray) => {
//   return inputArray.length > 0 // явный возврат результата
//   ? 'Array is not empty' 
//   : 'Array is empty'
// }

//     console.log(isArrayEmpty([1, 3]))
//     console.log(isArrayEmpty([ ]))
// с неявным возвратом результата
// const isArrayEmpty = (inputArray) => 
//     inputArray.length > 0 // 
//     ? 'Array is not empty' 
//     : 'Array is empty'
  
// перебор элементов массива с forEach
// const myCities = ['London', 'new york', 'singapur']

// const cityInfo = (city, index) => 
//     `${city} is at the index ${index} in myCities array`

// myCities.forEach((city, index) => console.log(cityInfo(city, index)))

// const postsJSON = [
//     '{"postId": 1355, "commenstQuantity":5}',
//     '{"postId": 5131, "commenstQuantity":13}',
//     '{"postId": 6134, "commenstQuantity":2}',
//     '{"postId": 2351, "commenstQuantity":8}',
// ]

// /**
//  * конвертация массива объектов JSON
//  * в массив объектов JavaScript
//  * для каждого элемента вызвана колбек функция
//  * вот эта (post) => JSON.parse(post)
//  * в ней мы вызывали метод parse объекта JSON
//  * неявно возвращали объект JS в новый массив
//  * при помощи метода map?
//  * map не меняет массив, а возвращает новый
//  * после конвертации postsJS — массив объектов
//  * мы можем получать доступ к элементам и свойствам этого объекта
//  */

// // // OPTION 1
// // 
// const postsJS = postsJSON.map((post) => JSON.parse(post)) // конвертация JSON-объектов в JS-массив. Присваивание этого массива переменной. Дальше работаем уже с ней, как с массивом

// console.log(postsJS[1].postId) // выводит postId второго объекта в массиве
// console.log(postsJS[postsJS.length - 1].commenstQuantity) // везде работаем уже с массивом postsJS

// OPTION 2
// const postsJS = postsJSON.map(JSON.parse)
// console.log(postsJS)

// console.log(postsJS[1].postId) // выводит postsI второго объекта в массиве
// console.log(postsJS[postsJS.length - 2].commenstQuantity) // доступ к значению свойства commenstQuantity по его индексу в массиве

const posts = [
    { postId: 1355, commentsQuantity: 5},
    { postId: 5131, commentsQuantity: 13},
    { postId: 6134, commentsQuantity: 2},
]



// console.log(findPostById(6134, posts))

// console.log(findPostById(4511, posts))