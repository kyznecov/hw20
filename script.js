//"use strict"

let factorNum1 = prompt('Циклом считаеть факториал');
let total = 1;

for (i = 0; i < factorNum1; i++){
    total = total * (factorNum1 - i);
}

console.log(factorNum1 + '! = ' + total);

///////////////////////////////////

let factorNum2 = prompt('Рекурсивно считать факториал');

function factorial(factorNum2) {
    if (factorNum2 === 0) {
        return 1;
    } else {
        return factorNum2 * factorial(factorNum2-1);
    }
}

let total2 = factorial(factorNum2);

console.log(factorNum2 + '! = ' + total2);

//////////////////// FIBONACHI ////////////////

let fibNum1 = prompt('Циклом считать число фибоначи');

function forFibonachi(fibNum1) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= fibNum1; i++) {
        [a,b] = [b,a + b];
    }
    return b;
}

console.log(fibNum1 + ' = ' + forFibonachi(fibNum1));

//////////////////// FIBONACHI ////////////////////

function recFibonachi(num) {
    if(num < 2) {
        return num;
    }

    return recFibonachi(num - 1) + recFibonachi(num - 2);
}

console.log(recFibonachi(10));