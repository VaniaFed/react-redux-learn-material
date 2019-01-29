{
    const name = "Ivan"
    let age = 18
    const Person = {
        name,
        age,
        surname: 'Fedyakov',
        country: 'Russia'
    }

    // деструктивное присваивание
    let { surname, country } = Person

    country = 'USA'
    surname = 'No Fedyakov'

    console.log(surname, country) // Fedyakov USA
    // при изменении локальной переменной значение в объекте не изменяется
    console.log(Person.surname, Person.country) // Fedyakov Russia

    // деструктурировать поступающий в аргументы объект
    const printBye = ({ name }, greeting = 'Bye,') => `${greeting} ${name}`
    console.log(printBye(Person)) // Bye, Ivan
}

// деструризация значений из массивов
{
    const [firstArray] = ['first', 'second', 'third']
    console.log(firstArray) // first
}

{
    const [,firstArray] = ['first', 'second', 'third']
    console.log(firstArray) // second
}

{
    const [,,firstArray] = ['first', 'second', 'third']
    console.log(firstArray) // third
}

// расширение объектных литералов
{
    const name = 'Ivan'
    let age = 18
    let list = { name, age }
    console.log(list) // {name: "Ivan", age: 18}
    console.log(typeof list) // object
}

// оператор распространения (...)
{
    const animals = ['Wolf', 'Fox', 'Dog', 'Duck']
    const fruit = ['Apple', 'Orange']

    const result = [...animals, ...fruit, 'Human']
    console.log (result.join(', ') )

    // другой пример: берем последний айтем в last, а все остальное кладем в rest
    const [last, ...rest] = [...animals].reverse();
    console.log(last)
    console.log(rest)

    // преобразование аргументов функции в массив
    const f = (...args) => {
        const arr = args.map((item) => {
            const min = 0
            const max = 100
            return item *= Math.round( min - 0.5 + Math.random() * (max - min + 1) )
        })
        console.log(arr);
    }
    f(1, 2, 3, 4, ...[1, 2, 3, 4])

}

// оператор распространения для объектов

{
    let someField = 'Some value'
    const Book = {
        name: 'React и Redux - функциональная разработка',
        pages: 335,
        starts: 5,
    }

    const newBook = {
        ...Book,
        someField,
    }
    console.log(newBook)
}

// промисы
{
    const getFakeMembers = count => new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`
        const request = new XMLHttpRequest()
        request.open('GET', api)
        request.onload = () =>
            (request.status === 200) ?
            resolves(JSON.parse(request.response).results) :
            rejects(Error(request.statusText))
        request.onerror = (err) => rejects(err)
        request.send()
    })
    getFakeMembers(55).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuser.me"))
    )
    .then(
        console.log()
    )
}