//You only need one - Beginner

const a = [2, 3, 3, 6, 54, 8, 6]


function check(a, x) {
    if (a.includes(x)) {
        return true
    } else {
        return false
    }
}


console.log(check(a, 3));



// //multiplicación sencilla

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8
//     } else {
//         return number * 9
//     }
// }

// //Sum of positive

// function positiveSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }
// console.log(positiveSum(a))

// //Shortest Word

// // let str = 'hola adios nelsol angel ivan el de y'
// // function findShort(s){
// //     s.split(' ')
// //     arr.forEach(element => {
// //     });
// // }

// // findShort(str)

// //volume of a cuboid

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height
//     }
// }

// /////////////

// let string = 'angel'

// function removeChar(str) {
//     let arr = 0
//     arr = str.split('')
//     arr.pop()
//     arr.shift()
//     return arr.join('');

// }

// removeChar(string)



// //How good are you really?

// function betterThanAverage(classPoints, yourPoints) {
//     let sum = 0
//     let average
//     classPoints.forEach(e => {
//         sum += e
//     });
//     average = sum / classPoints.length

//     if (average < yourPoints) {
//         return true
//     } else {
//         return false

//     }

// }

// ///////L1: Set Alarm


// function setAlarm(employed, vacation) {
//     if (employed && !vacation) {
//         return true
//     } else {
//         return false
//     }
// }

// //Return Negative

// function makeNegative(num) {
//     if (num > 0) {
//         return num * -1
//     }
// }


// //Are the numbers in order?

// function inAscOrder(arr) {
//     let arrCopy = [...arr]
//     arrCopy.sort((a, b) => a - b)
//     if (arr.join('') === arrCopy.join('')) {
//         return true
//     } else {
//         return false
//     }

// }

// //Who likes it?

// function likes(names) {
//     switch (names.length) {
//         case 0:
//             return `no one likes this`
//             break;
//         case 1:
//             return `${names[0]} likes this`
//             break;
//         case 2:
//             return `${names[0]} and ${names[1]} like this`
//             break;
//         case 3:
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`
//         default:
//             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//             break;
//     }
// }


// //invert values

// // function invert(array) {
// //     let newArr = [];
// //     for(var i = 0; i < array.length; i++){
// //       newArr.push(-array[i]);
// //     }
// //      return newArr;
// //   }

// const invert = array => array.map(e => e * -1);

// console.log(invert(a));


// ///Find the smallest integer in the array

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         for (let i = 0; i < args.length; i++) {
//             Math.min(args[i])
//         }
//         return args
//     }
// }

// ///Returning Strings

// function greet(name) {
//     return `Hello, ${name} how are you doing today?`
// }

// ////Function 1 - hello world

// function greet() {
//     return "hello world!"
// }

// //Opposites Attract

// function lovefunc(flower1, flower2) {
//     if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
//         return true;
//     } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
//         return true;
//     } else return false;
// }
// console.warn('leageofkata hoy');
// //Multiples of 3 or 5

// function solution(number) {
//     let sum = 0
//     if (number <= 0) {
//         return 0
//     }
//     for (let i = 0; i < number; i++) {
//         if (i % 5 === 0 || i % 3 === 0) {
//             sum += i
//         }
//     }

//     return sum


// }


// console.log(solution(10));

// //Square Every Digit

// function squareDigits(num) {
//     let numArr = num.toString().split('')
//     let result = ''
//     numArr.forEach(e => {
//         result += `${e ** 2}`
//     })
//     return result * 1
// }

// //Number of People in the Bus

// function number(busStops) {
//     let montan = 0
//     let exit = 0
//     busStops.forEach(e => {
//         montan += e[0]
//         exit += e[1]
//     })
//     let result = montan - exit
//     return result

// }

// number()

// //A Needle in the Haystack

// function findNeedle(haystack) {
//     let needle = haystack.indexOf("needle")
//     return `found the needle at position ${needle}`
// }


// //Calculate average

// function findAverage(array) {

//     let sum = array.reduce((previous, current) => current += previous)
//     let avg = sum / array.length
//     if (avg === []) {
//         return 0
//     } else {
//         return avg
//     }

// }

//Categorize New Member


let input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
let output = []
function openOrSenior(data) {

    data.forEach(e => {
        if (e[0] >= 55 && e[1] > 7) {
            output.push('Senior')
        } else {
            output.push('Open')
        }
    })
    return output
}



//Disemvowel Trolls

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
disemvowel("This website is for losers LOL!")

//Shortest Word

function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}

//Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
    if (string.split('')[string.length - 1] === '!') {
        return string.substr(0, string.length - 1)
    } else {
        return string
    }
}

//Grasshopper - Summation

// var summation = function (num) {
//     for (let i = 0; i <= num; i++) {
//         summation += i
//     }
//     return summation
// }


// //Regex validate PIN code

// function validatePIN(pin) {
//     //return true or false
//     const isCorrectLength = (pin.length === 4 || pin.length === 6);
//     const isCorrectNumber = pin.match(/^[0-9]+$/);
//     if (isCorrectLength && isCorrectNumber) {
//         return true;
//     }
//     return false;
// }

//otra opcion

// function validatePIN(pin) {
//     let pinArr = pin.split('')

//     let result = true

//     if (pin.length === 4 || pin.length === 6) {
//         result = true
//     } else {
//         return false
//     }
//     console.log('SIGUIENTE')

//     let comparative = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//     pinArr.forEach(e => {
//         if (!comparative.includes(e)) {
//             result = false
//         }
//     })
//     return result
// }

//Beginner - Lost Without a Map

function maps(x) {
    return x.map(n => n * 2);
}

//If you can't sleep, just count sheep!!
//python
// def count_sheep(n):
// result = "";
// count = 1;
// while count <= n:
//     result += str(count) + " sheep...";
// count += 1;
// return result;

//Remove string spaces

// function noSpace(x) {
//     return x.replaceAll(' ','')
// }

