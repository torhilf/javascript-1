'use strict'
// этот блок кода определяет нового пользователя, функции изменения имени/возраста, добавление айди
let nextId = 1;

const personInfo = {
    id: nextId++,
    name: 'alice',
    age: 25,
    city: 'moscow'
};


const users = [personInfo]

const addUser = (newUser) => {
    const userWithId = { id: nextId++, ...newUser }
    users.push(userWithId)
};

const increasePersonAge = (person) => {
    const updatedPerson = { ...person, age: person.age + 1}
    return updatedPerson
};

const changePersonName = (person, newName) => {
   const updateName = {... person, name: newName}
   return updateName
};


const newUser = {
    name: 'Bob',
    age: 10,
    city: 'saint petersburg'
};

addUser(newUser)

users[1] = changePersonName(users[1], 'robert')
console.log(users[1]);


// здесь он заканчивается

// это блок кода, определяющий палиндром
const reverse = (s) => s.split('').reverse().join(''); // обрати внимание, каждый метод 
//вызывается через точку последовательно обрабатывая предыдущий

const isPalindrom = (word) => {
    const wordToLower = word.toLowerCase().replace(/\s/g, ''); // сначала в нижний регистр
    // следующий метод удаляет пробелы
    return wordToLower === reverse(wordToLower)
};

const isNotPalindrom = (word) => !isPalindrom(word)

console.log(isNotPalindrom('хлеб'))
console.log(isPalindrom('gjfjf'))
// здесь он заканчивается

//

