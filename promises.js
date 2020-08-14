let cleanRoom = function () {
    return new Promise((resolve, reject) => {
        if(1 === 1 ){
            resolve('Cleaned Room')
        } else {
            reject('rejected')
        }
    });
}
let removeGarbage = function () {
    return new Promise((resolve, reject) => resolve('Removed Garbage'));
}
let winIcecream = function () {
    return new Promise((resolve, reject) => resolve('Won Icecream'));
}

cleanRoom().then((fromClean) => {
    console.log(fromClean); // Cleaned room
    return removeGarbage();
}).catch(fromRejClean => {
    console.log(fromRejClean);
})
.then((fromGarbage) => {
    console.log(fromGarbage);
    return winIcecream();
}).then((fromIce) => {
    console.log(fromIce);
}).finally(() => console.log('All finished'));


Promise.all([cleanRoom(), removeGarbage(),winIcecream()]).then(() => console.log('All resolved'));