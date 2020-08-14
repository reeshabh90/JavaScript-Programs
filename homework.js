function lilysHomework(arr) {
    let orgArray = [...arr];
    let reverseArr = arr.reverse();
    let swapCount = swapCalc(orgArray);
    let swapReverse = swapCalc(reverseArr);
    return Math.min(swapCount, swapReverse);
}

function swapCalc(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }
    let swapCount = 0;
    let orgArray = [...arr];
    let sortedArra = arr.sort((a, b) => a - b);
    for(let i =0; i< orgArray.length; i++) {
        if(orgArray[i] != sortedArra[i]){
            swapCount++;

            let indSwap = map[sortedArra[i]];
            map[orgArray[i]] = map[sortedArra[i]];
            let temp = orgArray[i];
            orgArray[i] = sortedArra[i];
            orgArray[indSwap] = temp;
        }
    }

    return swapCount;
}

arr = [3, 4, 2, 5, 1];
lilysHomework(arr)