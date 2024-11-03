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

console.log(parseInt(true))