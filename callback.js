let x = function () {
    console.log('I am a callback function');
}

let y = function (callback) {
    console.log('inside function Y');
    callback(); // x();
}

y(x);

/**********************/

let add = function (a, b) {
    return a + b;
}

let calc = function (num1, num2, callback) {
    return callback(num1, num2);
}

calc(3, 4, add);
calc(9, 8, (a, b) => a - b);