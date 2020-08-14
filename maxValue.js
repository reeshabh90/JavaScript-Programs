function solution(n, arr, modulo) {
    const listSubArray = findSubArray(arr);
    let maxValue = 0;
    for (let arr of listSubArray) {
        const sum = arr.reduce((a, b) => a + b, 0);
        if (sum % modulo > maxValue) {
            maxValue = sum % modulo;
        }
    }

    return maxValue;
}

function findSubArray(arr) {
    let subs = [];
    for (let i = 0, n = Math.pow(2, arr.length); i < n; ++i) {
        let sub = [];
        for (let j = 0; j < arr.length; ++j) {
            if (((i >> j) & 1) == 1) {
                sub.push(arr[j]);
            }
        }
        if (sub.length !== 0) {
            subs.push(sub);
        }
    } return subs;

}

function allSubArray(arr) {
    const subs = [];
    const n = arr.length;    
    for (let i=0; i <n; i++) 
    {         
        for (let j=i; j<n; j++) 
        {              
            const sub = [];
            for (let k=i; k<=j; k++) {
                sub.push(arr[k]);                
            }
            subs.push(sub);
        } 
    } 
    return subs;
}

arr = [3, 4, 9, 8, 5];
solution(arr.length, arr, 7);