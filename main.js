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



//multiplicación sencilla

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

//Sum of positive

function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(positiveSum(a))

//Shortest Word

// let str = 'hola adios nelsol angel ivan el de y'
// function findShort(s){
//     s.split(' ')
//     arr.forEach(element => {
//     });
// }

// findShort(str)

//volume of a cuboid

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

/////////////

let string = 'angel'

function removeChar(str) {
    let arr = 0
    arr = str.split('')
    arr.pop()
    arr.shift()
    return arr.join('');

}

removeChar(string)



//How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    let average
    classPoints.forEach(e => {
        sum += e
    });
    average = sum / classPoints.length

    if (average < yourPoints) {
        return true
    } else {
        return false

    }

}

///////L1: Set Alarm


function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true
    } else {
        return false
    }
}

//Return Negative

function makeNegative(num) {
    if (num > 0) {
        return num * -1
    }
}


//Are the numbers in order?

function inAscOrder(arr) {
    let arrCopy = [...arr]
    arrCopy.sort((a, b) => a - b)
    if (arr.join('') === arrCopy.join('')) {
        return true
    } else {
        return false
    }

}

//Who likes it?

function likes(names) {
    switch (names.length) {
        case 0:
            return `no one likes this`
            break;
        case 1:
            return `${names[0]} likes this`
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
            break;
    }
}


//invert values

// function invert(array) {
//     let newArr = [];
//     for(var i = 0; i < array.length; i++){
//       newArr.push(-array[i]);
//     }
//      return newArr;
//   }

const invert = array => array.map(e => e * -1);

console.log(invert(a));


///Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        for (let i = 0; i < args.length; i++) {
            Math.min(args[i])
        }
        return args
    }
}

///Returning Strings

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

////Function 1 - hello world

function greet() {
    return "hello world!"
}

//Opposites Attract

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
        return true;
    } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
        return true;
    } else return false;
}
console.warn('leageofkata hoy');
//Multiples of 3 or 5

function solution(number) {
    let sum = 0
    if (number <= 0) {
        return 0
    }
    for (let i = 0; i < number; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i
        }
    }

    return sum


}


console.log(solution(10));

//Square Every Digit

function squareDigits(num) {
    let numArr = num.toString().split('')
    let result = ''
    numArr.forEach(e => {
        result += `${e ** 2}`
    })
    return result * 1
}

//Number of People in the Bus

function number(busStops) {
    let montan = 0
    let exit = 0
    busStops.forEach(e => {
        montan += e[0]
        exit += e[1]
    })
    let result = montan - exit
    return result

}

number()

//A Needle in the Haystack

function findNeedle(haystack) {
    let needle = haystack.indexOf("needle")
    return `found the needle at position ${needle}`
}


//Calculate average

function findAverage(array) {
    
    let sum = array.reduce ((previous,current) => current += previous)
    let avg = sum /array.length
    if (avg===[]) {
        return 0
    }else {return avg}
    
}

//