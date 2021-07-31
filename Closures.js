

function outerFun() {
    let outVar = 100;
    function innerFun() {
        let innVar = 200;
        console.log('outvar- '+ outVar + ' ' + 'innvar -'+ innVar)
        innVar++;
        outVar++;
    }

    return innerFun;
}

let platformA = outerFun();
let platformB = outerFun();

platformA();
platformA();
platformA();

platformB();
platformB();