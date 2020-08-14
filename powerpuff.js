function getCount(ingReqdArr, quantityAvailableArr) {
    // const ingQuantMap = [];
    // for (let i = 0; i < ingReqdArr.length; i++) {
    //     ingQuantMap.push({
    //         name: i,
    //         ingRqd: ingReqdArr[i],
    //         quantityAvail: quantityAvailableArr[i]
    //     });
    // }
    let count = 0;
    let flag = false;

    while (!flag) {
        count++;
        for (let i = 0; i < ingReqdArr.length; i++) {
            if (quantityAvailableArr[i] < ingReqdArr[i]) {
                flag = true;
                count--;
                break;
            }
            quantityAvailableArr[i] = quantityAvailableArr[i] - ingReqdArr[i];
        }
        
    }

    console.log(count);

}

const ingReqdArr = [2, 5, 6, 3 ];
const quantityAvailableArr = [20, 40, 90, 50];
getCount(ingReqdArr, quantityAvailableArr);