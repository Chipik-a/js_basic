// //Numbers
//
// console.log(10 + 5) //15
// console.log(10 - 3) //7
// console.log(10 * 2) //20
// console.log(10 / 2) //5
// console.log(10 % 3) //1
//
// console.log(1 / 0) //Infinity
// console.log(-1 / 0) //-Infinity
// console.log(-0 === 0) //true
//
// console.log(1e308 * 2) //Infinity
// console.log(-1e308 * 2) //-Infinity
// console.log(1e308 > 2) //true
//
// console.log(Infinity + 1) //Infinity
// console.log(Infinity - 1) //Infinity
//
//
// console.log(0 / 0) //NaN
// console.log(Infinity - Infinity) //NaN
// console.log(Math.sqrt(-1)) //NaN
//
// console.log(NaN + 5) //NaN
// console.log(NaN * 10) //NaN
// console.log(NaN / 2) //NaN
//
// const a = 10
// const b = 2
// console.log(Math.pow(a, b)) //100
// console.log(Math.sqrt(16)) //4
// console.log(Math.random())
// console.log(isNaN(Math.PI)) //false
//
// console.log(typeof(a.toString())) //string
//
// console.log(parseFloat("123.45abc")) //123.45
// console.log(typeof(parseFloat("123.45abc"))) //number
// console.log(parseInt("123abc")) //123
//
//
// console.log(10 > 5) //true +
// console.log('apple' === 'Apple') //false +
// console.log(3 <= 2) //false +
// console.log(4 == '4') //true +
// console.log(0 === false) // false 0 - число, а false - булевый ттип
// console.log(NaN == NaN) // false NaN не равно самому себе
// console.log(15 !== '15') //true +
// console.log(true < 2) //true true=1 1<2
// console.log(undefined == null) // - true (не сравниваются типы)
// console.log(15 !== '15') //true +
// console.log([] == false) // - true массив преобраз в пустую строку и преобразуется в false
// console.log('zebra' > 'apple') //true используется порядок символов в Unicode
// console.log(Infinity > 100) //true +
// console.log(0 == false) //true 0 при приведении к булевому равно false
// console.log('5' > 3) //true строка преобразуется в число
// console.log([1, 2] == '1,2') //true + массив преобразуется в строку
//
// //String
//
// let string = 'Hello'
// let emoji = '😊'
// let empty = ''
// let one = '1'
// let word = 'World'
// let line = 'Some TEXT about JavaScript, hello, world'
//
//
// let first = string + ' ' + word
// console.log(first) //Hello World
// let second = `${string} ${word}` //Hello World
// console.log(second)
// let third = string.concat(' ', word)
// console.log(third)
//
// console.log(third.includes('world')) //false
// console.log(third.includes('World')) //true
//
// console.log(line.startsWith('Some')) //true
// console.log(line.startsWith('SOMe')) //false
// console.log(line.endsWith('Some')) //false
// console.log(line.endsWith('world')) //true
// console.log(line.endsWith('World')) //false
//
// console.log(line.indexOf('text')) //-1
// console.log(line.indexOf('TEXT')) //5
// console.log(line.indexOf('about')) //10
// console.log(line.indexOf('ABOUT')) //-1
//
// console.log(line.search(/JavaScript/)) //16
// console.log(line.search(/JAVASCRIPT/)) //-1
//
// console.log(string.length) //5
// console.log(typeof(string)) //string
// console.log(string.charAt(3)) //'l'
// console.log(string.charAt(4) + string.charAt(2)) //ol
// console.log(`${string} ${emoji}`) // Hello 😊
// console.log(emoji.length) //2
// console.log(typeof(emoji.length)) //number
// console.log(typeof(emoji)) //string
// console.log(empty.length) //0
// console.log(one.length) //1
//
// let lineToTrim = '   Some TEXT about JavaScript, hello, world    '
//
// console.log(line.toUpperCase()) //SOME TEXT ABOUT JAVASCRIPT, HELLO, WORLD
// console.log(line.toLowerCase()) //some text about javascript, hello, world
// console.log(lineToTrim.trim()) //Some TEXT about JavaScript, hello, world - удаляем пробелы
// console.log(lineToTrim.trimStart()) //Some TEXT about JavaScript, hello, world    '
// console.log(lineToTrim.trimEnd()) //   Some TEXT about JavaScript, hello, world
//
// let sliceLine = "Stumblin' In"
// console.log(sliceLine.slice(2, 5)) //umb
// console.log(sliceLine.slice(-4)) // ' In отсчет с конца идет
//
// let changeLine = 'Back to Black'
//
// console.log(changeLine.replace('Black', 'Red')) //Black to Red
// console.log(changeLine.replace(/a/g, 'AAAAA')) //BAAAAAck to BlAAAAAck
//
// console.log(changeLine.repeat(3)) //Back to BlackBack to BlackBack to Black
// console.log('HI! '.repeat(3)) //HI! HI! HI!
//
// let str = 'phone,headphones,watch'
// let newStr = str.split(',')
//
// console.log(str.split(',')) // [phone, headphones, watch}
// console.log(typeof(newStr)) //object
//
// console.log(string.concat(' ', emoji, ' ', word, '!'))
//
// let symbol = 'Prayer'
//
// console.log(symbol.charAt(3)) //y
// console.log(symbol.charCodeAt(3)) //121
//
// let updateNumber = 123
// let number = '123'
//
// //console.log(updateNumber.padStart(2, '0')) //Error isn't a string
// console.log(number.padEnd(5, '0')) //12300
// console.log(number.padStart(5, '0')) //00123
//
// let firstWord = 'patience'
// let lastWord = 'waning'
//
// console.log(`My ${firstWord} is ${lastWord}`)
//
// console.log(String.fromCharCode(189, 43, 190, 61))
//
// let lineA = 'abcd'
// let lineB = 'fcdt'
//
// console.log(lineA.localeCompare(lineB)) //-1
// console.log(lineB.localeCompare(lineA)) //1
// console.log(lineA.localeCompare(lineA)) //0
//
//
// const text = 'The quick brown fox jumps over the lazy dog.';
// const result = text.match(/quick/);
// const resultMore = text.match(/\b\w{4}\b/g)
// const noWord = text.match(/bird/) //null
//
// console.log(result)
// console.log(resultMore)
// console.log(noWord)
//
//
// console.log(10 >= '10'); //true +
// console.log(null == undefined); //true +
// console.log(null === undefined); //false +
// console.log(' ' == 0); //true +
// console.log('' == false); //true +
// console.log('' === false); //false +
// console.log(+'5' === 5); //true +перед строкой преобразует в число
// console.log('5' != 5); //false +
// console.log(NaN !== NaN); //true +
// console.log(Infinity === Infinity); //true +
// console.log(-Infinity < Infinity); //true +
// console.log(true == 1); //true +
// console.log(false === 0); //false +
// console.log([] === []); //false массивы - это объекты, которые сравниваются по ссылке в памяти
// console.log([] == ''); //true Пустой массив [] преобразуется в пустую строку '' (в этом случае [].toString() возвращает ''
// console.log(['a', 'b'] == 'a,b'); //true +
// console.log({} == {}); //false сравниваются по ссылке в памяти
// console.log({} === {}); //false
// console.log('20' > '100'); //true +
// console.log('abc' < 'abcd'); //true +

// console.log(1 + '2' == '12'); //true
// console.log(1 + +'2' === 3); //true
// console.log('10' - '5' == 5); //true
// console.log(true + true == 2); //true
// console.log(false - true === -1); //true
// console.log('10px' > 5); // false '10px'->NaN
// console.log(null >= 0);  // true
// console.log(undefined >= 0);  // false
// console.log([] + [] === ''); //true
// console.log([] + {} === '[object Object]'); //true
// console.log({} + [] === 0) //true

// console.log(10 > 5) //true
// console.log('abc' < 'abd') //true
// console.log(null == undefined) //false
// console.log('5' === 5) //false
// console.log(false == 0) //true

// console.log('10' > 5) //true
// console.log('10px' > 5) //false
// console.log('' == 0) //true
// console.log(' ' == 0) //true
// console.log('5' - 2 == 3) //true

// console.log([] == 0) //true
// console.log([1, 2] == '1,2') //true
// console.log({} == '[object Object]') //true
// console.log({} === {}) //false
// console.log({} + [] == 0) //false

// console.log(NaN == NaN) //false
// console.log(Infinity > 1000000) //true
// console.log(Infinity == Infinity) //true
// console.log(-Infinity < 0) //true
// console.log(null >= 0)//true
// console.log(undefined >= 0)//false

// console.log(true + false == 1) //true
// console.log(true > false) // true
// console.log(false == 0) // true
// console.log('' == false) //true
// console.log(' ' == false) //true

// console.log('5' - '2' == 3) //true
// console.log('5' + 2 == '52') // true
// console.log('5' * 2 == 10) // true
// console.log('10' / '2' == 5) // true
// console.log(+'10' == 10) // true

//String


// const str = "Hello World!"
// const fun = 'JavaScript is fun!'
// const like = 'He like JavaScript'
// const space = '    Someone tell me    '
// const fruit = 'apple, orange, banana'
//
// console.log(str.toUpperCase()) //HELLO WORLD!
// console.log(str.toLowerCase()) //hello world!
// console.log(fun.slice(0, 10)) //JavaScript
// console.log(fun.slice(0, -5)) //JavaScript is
// console.log(fun.includes('fun')) // true
// console.log(like.search(/like/)) //3
// console.log(str.indexOf('o')) //4
// console.log(space.trimStart()) //'Someone tell me    '
// console.log(space.trimEnd()) //'    Someone tell me'
// console.log(fun.startsWith('Java')) //true
// console.log(fun.endsWith('Java')) //false
//
// const newFruit = fruit.split(',')
// console.log(newFruit) //[ 'apple', ' orange', ' banana' ]
// console.log(newFruit.join(' -')) //apple - orange - banana
//
// const animals = 'The cat is sleeping'
// console.log(animals.replace(/cat/, 'dog')) //The dog is sleeping
//
// const small = 'javascript'
// const medium = 'JavaScript'
//
// console.log(small.toLowerCase() === medium.toLowerCase()) //true
//
// const strNum = '123'
// console.log(typeof strNum) // string
// const num = Number(strNum)
// if (!isNaN(num) && typeof num === 'number') {
//     console.log("it's a number")
// } else {
//     console.log("it's not a number")
// }
//
// const word = 'Programming'
// console.log(word.at(4))
//
// const name = 'Alex'
// const surname = 'Smith'
//
// const fullName = name.concat(' ', surname)
// const fullName2 = name + ' ' + surname
// const fullName3 = `${name} ${surname}`
//
// console.log(fullName)
// console.log(fullName2)
// console.log(fullName3)

// const num1 = 100;
// const formattedNum = num1.toFixed(2);
// let res = parseFloat(formattedNum)
//
// console.log(typeof(formattedNum));
// console.log(formattedNum);
// console.log(typeof res);
// console.log(res);
// console.log(res.toFixed(2));
//
//
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(val => val * 2);
//
// console.log(newArr);
//
// let arrFruit = ["apple", "banana", "cherry", "date"]
// let newFruit = arrFruit.map(fruit => fruit.toUpperCase())

// console.log(newFruit);

// let fruits = ["apple", "banana", "kiwi", "watermelon"];
// let newFruits = fruits.map(val => val.length);
//
// console.log(newFruits);

//Functions

// function sum (a, b) {
//     const result = a + b;
//     return result;
// }
//
// console.log(sum (5, 3))
// console.log(sum (-2, 7))
// console.log(sum (10, 20))
//
//
// function isEven (i){
//     if  (i % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(4));
// console.log(isEven(7));
// console.log(isEven(0));
//
// function isEven (i){
//     return  i % 2 === 0
// }
// console.log(isEven(10));
// console.log(isEven(5));
// console.log(isEven(195));
//
// function celsiusToFahrenheit (celsius) {
//     return celsius * 9 / 5 + 32;
// }
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));
// console.log(celsiusToFahrenheit(-40));
//
// function isPrime (number) {
//     return number > 1 && number % 2 === 0;
// }
// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(1));
//
// function factorial (i) {
//     return i ? i * factorial(i - 1) : 1;
// }
//
// console.log(factorial(5));
//
// function findLongestWord (line) {
//     let arrWords = line.split(' ');
//     return arrWords.reduce((longest, currentWord) => {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, '');
// }
//
// console.log(findLongestWord('Ababagalamaga salon apple current, simple words'));
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
// console.log(findLongestWord("JavaScript is amazing"));
// console.log(findLongestWord("I love coding"));
//
// function reverseArray(arr) {
//     return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
//
// function reverseArray1(arr) {
//     return arr.toReversed()
// }
// console.log(reverseArray1([1, 2, 3, 4, 5, 6]));
//
// function revArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         return arr[i];
//     }
// }
// console.log(reverseArray1([1, 2, 3, 4, 5, 6, 9, 45,,,,,,]));
//
// //Array
//
// arrProd = [1, 'bread', [45, 23, 'egg']]
//
// console.log(arrProd[2][1], arrProd[2][2])
// //
// var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// var myArr = myData.split(',');
// console.log(myArr);
//
// var newMyArr = myArr.join(', ')
// console.log(newMyArr);
//
// var newSplice = myArr.splice(0, 3);
// console.log(newSplice);

// var newSportClub = ['Manchester,London,Liverpool,Birmingham,Leeds,Carlisle']
// var clubArray = newSportClub[0].split(',');
// console.log(clubArray);
// var spliceDelAdd = clubArray.splice(1, 3, 'dinamo', 35, 44)
// console.log(spliceDelAdd);
// console.log(clubArray);

// var newSportClub = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']
// var spliceDelAdd = newSportClub.splice(1, 3, 'dinamo', 35, 44)
//
// console.log(spliceDelAdd);
// console.log(newSportClub);
//
// var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// var newDog = dogNames.toString()
//
// console.log(dogNames);
// console.log(newDog);
//
// var catNames = ["Rocket", "Flash", "Bella", "Slugger"]
// var newCatNames = catNames.push('Kleo', 'Tricksi')
//     delCatNames = catNames.pop()
//     catName = catNames.shift()
//     catNameAdd = catNames.unshift('Apach')
// console.log(newCatNames);
// console.log(catNames);

// var myMassive = [1, 2, 3, 4, 5, 6];
// console.log(myMassive.length);
// console.log(myMassive[0]);
// console.log(myMassive[6]);

// let words = ["apple", "banana", "cherry", "date"]
//     newWords = words.map(i => i.length)
//
// console.log(newWords);
//
// let numbers = [-1, 2, -3, 4, -5, 6, 0];
//     posNumbers = numbers.filter(numbers => numbers >= 0)
//     negNumbers = numbers.filter(numbers => numbers < 0)
//
// console.log(posNumbers);
// console.log(negNumbers);
//
// let word = ["apple", "banana", "cherry", "date"];
//     newWords = word.sort((a, b)=> a.length - b.length)
// console.log(newWords);
//
// let num = [1, 2, 3, 4, 5, 6];
//     newNum = num.includes(7)
// let fewNum = [3, 4, 8, 9]
//     result = fewNum.every(i => num.includes(i))
//     result2 = fewNum.filter(i => num.includes(i))
//     result3 = fewNum.some(i => num.includes(i))
//
// console.log(newNum);
//     console.log(result);
//     console.log(result2);
//     console.log(result3);
//
//
// let multNum = [1, 2, 3, 4];
//     multiplication = multNum.map(i => i * 2)
//
// console.log(multiplication);

//Objects

let book = {
    title: "Book",
    author: "John Doe",
    year: "2021",
    getSummary: function () {
        console.log(`${book.title} was written by ${book.author} in ${book.year} `);
    }
}
book.getSummary();

let books = {
    title: "Book",
    author: "John Doe",
    year: "2021",
    getSummary: function () {
        console.log(`${this.title} was written by ${this.author} in ${this.year} `);
    }
}
book.getSummary();

let person = {
    name: "John Doe",
    age: 37,
};
    person.city = 'New York';
    console.log(person);

let car = {
    brand: 'bmw',
    model: 'iX',
    year: '2021',
};
    delete car.year
console.log(car);

    let user = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        age: 32,
    };
    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user));

    let product = {
        name: "Apple",
        price: 100,
        category: 'Fruit',
        discount: 25,
    }; if ('discount' in product) {
        console.log('discount');
        } else {
        product.discount = 0;
        console.log(product.discount);
}
console.log(product);

    let settings = {
        theme: "dark",
        language: "en",
        notifications: true,
    }; console.log(Object.values(settings));

    let userDetails = {
        name: 'Alice',
        age: 25,
    };
    let userPreferences = {
        theme: "dark",
        language: "English",
    };
    const together = Object.assign(userDetails, userPreferences);
    console.log(together);

let original = {
    name: "Alice",
    age: 25,
}; let copy = Object.assign({}, original); //create copy
    copy.age = 26;

    let copySpread = {...original};
    copySpread.age = 47;

console.log(original);
console.log(copy);
console.log(copySpread);

let personData = new Map ([
    ['name', 'Bob'],
    ['age', 30],
    ['city', 'Paris']
]); let obj = Object.fromEntries(personData);
console.log(obj);


let calc = {
    add: function (a, b) {
        return a + b;
    },
    subtrack: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return Error;
        }
    }
};

console.log(calc.add(1, 2));
console.log(calc.subtrack(6,2));
console.log(calc.multiply(5,2));
console.log(calc.divide(10,2));
console.log(calc.divide(10,0));