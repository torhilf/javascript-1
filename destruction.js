// деструктуризация в объектах
const newProfile = {
    name: 'sergei',
    commentsQty: 25,
    hasSigmentAgreement: false
}

const { name, commentsQty } = newProfile
const { hasSigmentAgreement } = newProfile

console.log(name)
console.log(hasSigmentAgreement)// вывод будет, как задано в hasSigmentAgreement
// здесь заканчивается

// деструктуризация в массивах
const fruts = [ 'apple', 'banana']
const [ frutOne, frutTwo ] = fruts

console.log(frutOne)// вывод будет первый объект массива, apple
// здесь заканчивается

//деструктуризация в функциях

const userProfile = {
    name: 'sergei',
    commentsQty: 20,
    hasSignedAgreement: false,
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
}

return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile)


console.log(userInfo(userProfile)) // User sergei has 20 comments
// здесь заканчивается деструктуризация в функциях

// условный оператор if. Функция проверяет, есть ли имя у пользователя

const personName = {
    name: 'sergei'
}

if (!personName.name) {
    console.log('имя не указано');
} else {
    console.log(personName.name);
}

console.log(personName.name)