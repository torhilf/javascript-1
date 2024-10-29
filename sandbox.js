/* создание объекта с вложенным объектом

const personInfo = {
    age: 25,
    name: 'sergei',
    city: 'moscow',
    userProfile: {
        commentsQty: 20,
        followers: 150
    }
};
// функция, изменяющая количество комментариев
const commentUpdate = (person) => {
    const newValue = {
        ...person,
        userProfile: {
            ...person.userProfile,
            commentsQty: 0
        }
    };

    return newValue
}

const userInfo = (person) => {
    return `User ${person.name} has ${person.userProfile.commentsQty} comments`
};

const updatedComment = commentUpdate(personInfo)
console.log(userInfo(personInfo)) // Выводим информацию о текущем пользователе
console.log(updatedComment) // Выводим обновленный объект
*/

/* конструкция с if
let val = 10

if (val < 5) {
    val += 20
} else {
    val -=20
};

console.log(val)
*/

/* с конструкцией if else
const age = 7

if (age > 18) {
    console.log('is adult')
} else if (age >= 12) {
    console.log('is a teenager')
} else {
    console.log('is a child')
};

*/

// здесь просто с if и оператором && (и)

const age = 25

if (age >= 18) {
    console.log('is adult')
}

if (age >=12 && age < 18) {
    console.log('is a teenageer')
}

if (age < 12) {
    console.log('is a child')
}

// проверка чисел при помощи if
const sumPositiveNumbers = (a, b) => {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'One of the argument is not a number'
};

if (a <= 0 || b <= 0) {
    return 'Numbers are not positive'
};

return a + b

};

console.log(sumPositiveNumbers(9, 0))

/* пример инструкции switch

const month = 5

switch(month) {
    case 12:
        console.log('December')
        break
    case 1:
        console.log('january')
        break
    case 2:
        console.log('february')
        break
    default: 
        console.log('it is not a winter month')    
    
}
*/

// выбор месяца при помощи switch, завернуто в функцию
const getMonthName = (month) => {
    switch (month) {
    case 12:
        return 'December';
    case 1:
        return 'January';
    case 2: 
         return 'February';   
    case 3:
        return 'March';
    case 4:
         return 'April';
    case 5:
         return 'May';
    case 6:
         return 'June';
    case 7:
         return 'July';
    case 8:
         return 'August';
    case 9:
         return 'September';
    case 10:
         return 'October';
    case 11:
         return 'November';
    default:
        return 'Invalid month';
    }                
};

console.log(getMonthName(11))


// сколько комментариев написал

const personProfile = {
    age: 25,
    name: 'sergei',
    city: 'moscow',
      personInfo: {
        commentsQty: 3,
        followers: 0
      } 
};

const checkCommentStatus = (profile) => {
    const commentsQty = profile.personInfo.commentsQty
    if (typeof commentsQty !== 'number' || commentsQty < 0) {
    return 'It is just bullshiet'
}

if (commentsQty > 0) {
    return `There is ${commentsQty} comments`;
}

return 'No comments'

};

console.log(checkCommentStatus(personProfile))

/* пример с тернарным оператором
const value = 0

value 
  ? console.log('истина')
  : console.log('ложь')

  */ 

/* присваивание выражения с тернарным оператором переменной

value = -5

const res = value >= 0 
? value 
: -value 
console.log(res)

// цикл for

for (let i = 0; i < 4; i++) {
    console.log(i)
}
*/

/* доступ к элементу и индексу массива при помощи метода forEach

const myArray = ['first', 'second', 'third'] 

myArray.forEach((element, index) => {
    console.log(element, index)
})
*/


/* пример цикла while
let i = 0 
while (i < 5) {
    console.log(i)
    i++
}
*/

/* пример с циклом do while
let i = 0

do {
    console.log(i)
    i++
} while (i < 3)

*/ 

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}


/* forEach для объектов

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject).forEach(key => { // Object.keys(myObject) получает все ключи объекта в виде массива. Затем forEach перебирает элементы этого массива
    console.log(key, myObject[key])
});
*/
/* for in для массивов
const myArray = [false, 15, 'bcd', null]

for(const key in myArray) {
    console.log(myArray[key])
}
*/

// for of для строк выведет каждый символ в строке отдельно

const myString = 'hey'

for (const letter of myString) {
    console.log(letter)
}

// for of для массивов выведет каждый элемент массива

const arrayNew = [true, 'abc', 10, null]

for (const element of arrayNew) {
    console.log(element)
}

// для массивов лучше использовать for each
const myArray = [true, 'abc', 10, null]

myArray.forEach(element => {
    console.log(element)
})

