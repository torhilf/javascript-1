fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json)) // поэтому мы еще раз вызваем метод .then, этому параметру присваивается значение типа объект
.catch(error => console.log(error.message)); // если будет ошибка, она попадает в эту колбек функцию

/* еще вариант, упрощенный

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
       setTimeout(() => resolve(), 2000)) // 3 шаг, через 2 сек вызывается функция resolve()

    const asyncFn = async () => {
        console.log('Timer starts') // 1 шаг, вызыается эта строка
        const startTime = performance.now() // 2 шаг, засекаем время перед вызовом функции timerPromise()
        await timerPromise()
        const endTime = performance.now() // 4 шаг, засекаем снова время уже после выполнения функции await timerPromise()
        console.log('Timer ended', endTime - startTime)// 5 шаг, печатаем в консоль разницу между endTime и startTime

    }

    asyncFn()

    //async/await

    const getData = async (url) => {
        const res = await fetch(url)
        const json = await res.json()
        return json
    } // эта функция возвращает промис

   const url = 'https://jsonplaceholder.typicode.com/todos/1'
   
   try {
   const data = await getData(url)
   console.log(data)
   } catch (error) {
    console.log(error.message)
   }
