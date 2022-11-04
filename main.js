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
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
            break;
    }
}


//