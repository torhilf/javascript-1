
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('thirdComment')

console.log(firstComment)
console.log(secondComment)
console.log(thirdComment)

firstComment.upvote()
console.log(firstComment.votesQty)

secondComment.upvote()
console.log(secondComment.votesQty)

class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.postsQty = 0;
    }


setAge(newAge) {
    this.age = newAge
}

setEmail(newEmail) {
    this.email = newEmail
}

addPost() {
    this.postsQty +=1
}

}

const user1 = new Person('Jonh Doe', 25, 'john@gmail.com');
const user2 = new Person('Mary Jane', 23, 'jane@gmail.com')

console.log(user1)
console.log(user2)


class Worlds {
    constructor(text) {
        this.text = text
        this.votesQty = 0

    }
    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first.text} ${second.text}`
    }
}

const comment1 = new Worlds("Привет, это первый комментарий.");
const comment2 = new Worlds("А это второй комментарий.");

console.log(Worlds.mergeComments(comment1, comment2));

// расширение других классов

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc +=el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)


myArray.sum()
console.log(myArray)
// заканчивается про расширение

Comment.prototype === firstComment.__proto__