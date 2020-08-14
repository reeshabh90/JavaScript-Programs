function minimumAbsoluteDifference(arr) {
    let minValue;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diffVal = Math.abs(arr[i] - arr[j]);
            if(minValue) {
                if(diffVal < minValue) {
                    minValue = diffVal;
                }
            } else {
                minValue = diffVal;
            }
            
        }
    }
    return minValue;

}

arr = [-2, 2, 4];
minimumAbsoluteDifference(arr);