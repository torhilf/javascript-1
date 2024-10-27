fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json)) // поэтому мы еще раз вызваем метод .then, этому параметру присваивается значение типа объект
.catch(error => console.log(error.message)); // если будет ошибка, она попадает в эту колбек функцию

// еще вариант, упрощенный

const getData = (url) => 
    new Promise((resolve, reject) => 
        fetch(url)
.then(response => response.json())
.then(json => resolve(json))
.catch(error => reject(error))
)

getData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.log(error.message))

/* async

const asyncFn = async () => {
    return 'Success'
} // здесь неявно создается промис, без объявления new promise

asyncFn()
    .then(value => console.log(value))
*/
    // с отловом ошибки 
    const asyncEr = async () => {
        throw new Error('There was an error!')
    }

    asyncEr() 
    .then(value => (console.log(valeu)))
    .catch(error => console.log(error.message))

    const timerPromise = () => 
        new Promise((resolve, reject) =>
       setTimeout(() => resolve(), 2000))

    const asyncFn = async () => {
        console.log('Timer starts')
        const startTime = performance.now()
        await timerPromise()
        const endTime = performance.now()
        console.log('Timer ended', endTime - startTime)

    }

    asyncFn()