// императивный стиль
{
    var string = 'This is the midday show with Cheryl Waters';
    var urlFriendly = '';

    for (let i=0; i<string.length; i++) {
        if (string[i] === ' ') {
            urlFriendly += '-';
        } else {
            urlFriendly += string[i];
        }
    }

    console.log(urlFriendly);
}


// декларативный стиль
{
    var string = 'This is the midday show with Cheryl Waters';
    var urlFriendly = string.replace(/ /g, '-');

    console.log(urlFriendly);
}


// императивный стиль
{
    const target = document.getElementById('target');
    const wrapper = document.createElement('div');
    const headline = document.createElement('h1');

    // wrapper.id = 'welcome';
    // headline.innerText = 'Hello World';

    // wrapper.appendChild(headline);
    // target.appendChild(wrapper);
}

// декларативный стиль
{
    // const { render } = ReactDOM;

    // const Welcome = () => (
    //     <div id="welcome">
    //         <h1>Hello World</h1> 
    //     </div>
    // );

    // render(
    //     <Welcome />,
    //     document.getElementById('target')
    // );
}

// Функциональные концепции


// 1. Неизменяемость
{
    let colorLawn = {
        title: 'Grey',
        color: '#333',
        rating: 0
    };

    // bad
    {
        const rateColor = (color, rating) => {
            color.rating = rating;
            return color;
        };

        console.log(rateColor(colorLawn, 5)); // 5
        console.log(colorLawn.rating); // 5

    }

    // good
    {
        const rateColor = (color, rating) =>
            Object.assign({}, color, { rating: rating });

        colorLawn = rateColor(colorLawn, 3);

        console.log(rateColor(colorLawn, 5)); // 5
        console.log(colorLawn.rating); // 3

    }

    // excellent
    {
        const rateColor = (color, rating) =>
        ({
            ...color,
            rating
        });

        colorLawn = rateColor(colorLawn, 3);

        console.log(rateColor(colorLawn, 5)); // 5
        console.log(colorLawn.rating); // 3

    }
}
// еще один пример неизменяемости
{
    let list = [
        { title: 'hello' },
        { title: 'hello' },
        { title: 'hello' },
    ];

    // bad
    {
        const addColor = (title, colors) => {
            colors.push(title); // это изменяет исходный массив
            return colors;
        };

        console.log( addColor('1', list) );
        console.log(list)
    }

    // good
    {
        const addColor = (title, colors) => colors.concat({ 'title': title })
        console.log( addColor('syka', list) );
        list = addColor('Green', list);
        console.log(list)
    }

    // excellent
    {
        const addColor = (title, colors) => [...colors, { title }]
        console.log( addColor('syka', list) );
        list = addColor('Green', list);
        console.log(list)
    }

}

// 1. Чистые функции
{
    const frederick = {
        name: 'Ivan',
        canRead: false,
        canWrite: false
    };

    // функция с побочным эффектом. Она не принимает аргументов и не возвращает значений и изменяет global value
    {
        //bad
        const selfEducate = () => {
            frederick.canRead = true;
            frederick.canWrite = true;
            return frederick;
        }

        console.log( selfEducate() );
        console.log( frederick );
    }

    //good
    {
        const selfEducate = person =>
        ({
            ...person,
            canRead: false,
            canWrite: false
        });
        console.log( selfEducate(frederick) );
        console.log( frederick );
    }
}

// еще один пример чистых функций. А теперь поработаем с DOM
{
    // bad
    {
        const header = title => {
            const h1 = createElement('h1');
            h1.innerText = title;
            document.body.appendChild(h1);
        };
    }

    //good
    {
        // const header = props => <h1>{ props.title }</h1>;
    }
}

// преобразование данных
{
    const colleges = [
        'Konyaev',
        'TTK',
        'MB',
        'Kkk',
        'K1',
        'm2'
    ];

    // получить список с разделителем
    console.log( colleges.join(' | ') );


    // получить все колледжи начианющиеся с буквы k (K)
    let collegesStartedWithK = colleges.filter(college => college[0].toLocaleLowerCase() === 'k'.toLocaleLowerCase())
    console.log(collegesStartedWithK)

    // для удаления из массива используем filter, а не splice или pop, т.к. они изменяют исходный массив
    const deleteCollege = (cut, colleges) => 
        colleges.filter(college => college !== cut);

    // красивый вывод, wow
    console.log (deleteCollege('MB', colleges).join('\n') );


    // Array.map для изменения каждого элемента
    const theBestColleges = colleges.map((college) => `${college} is the best college in the world`);
    console.log(theBestColleges.join('\n'))

    // сделаем из колледжей объекты
    const objTheBestColleges = theBestColleges.map((college) => ({ name: college }))

    console.log(objTheBestColleges)
    // исходный массив не был изменен
    console.log(theBestColleges)

    const objColleges = colleges.map((college) => ({ name: college }))

    // изменить название колледжа 
    // const changeName = (oldName, name, colleges) => 
    //     colleges.map(college => {
    //         if (college.name === oldName) {
    //             return {
    //                 ...college,
    //                 name
    //             };
    //         } else {
    //             return college;
    //         }
    //     });

    // сокращенная запись
    const changeName = (oldName, name, colleges) => 
        colleges.map(college => college.name === oldName ?
            { ...college, name } :
            college
        );

    console.log(objColleges)
    console.log( changeName('MB', 'engineering college', objColleges) );


    // преобразовать объект в массив можно воспользоваться Object.keys
    const frederick = {
        name: 'Ivan',
        canRead: false,
        canWrite: false
    };
    console.log(frederick)
    const collegesNew = Object.keys(frederick);
    console.log(collegesNew);

    // преобразовать массив в объект можно воспользоваться Array.map и Object.keys
    let arr = Object.keys(collegesNew).map(key =>
            ({
                name: key,
                wins: collegesNew[key]
            }) 
        )
    console.log(arr)

    // найти макс. возраст при помощи Array.reduce(f)
    const ages = [21, 15, 64, 24, 23, 11];
    const maxAge = ages.reduce((max, age) => {
        if (age > max) {
            return age;
        }
        else {
            return max;
        }
    });
    console.log(`Максимальный возраст: ${maxAge}`)

    // найти сумму возрастов
    const sumOfAges = ages.reduce((sum, current) => sum += current)
    console.log(`Сумма возрастов: ${sumOfAges}`)

    // преобразовать 
    const colors = ['green', 'red', 'green', 'red'];
    const distinctColors = colors.reduce(
        (distinct, color) => 
            (distinct.indexOf(color) !== -1)
    )

    // композиция - для того, чтобы организовать вызов функций
    const compose = (...fns) =>
        (arg) => 
            fns.reduce(
                (composed, f) => f(composed),
                arg
            )
}