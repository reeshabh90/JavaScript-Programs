function mergeSort(arr){


    const midpoint = arr.length/2;
    // step 1 : find left part of the array
    const left = arr.slice(0, midpoint);
    // step 2: find right part of the array
    const right = arr.slice(midpoint, arr.length);
    // merger left and right part by sorting them
    merge(mergeSort(left), mergeSort(right));

}

function merge(arr1, arr2){
    const res = [];
    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0]){
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());
        }
    }
    return [...res,...arr1,...arr2];
}

arr = [19, 33, 12, 10, 78, 9, 54];
console.log(mergeSort(arr)) ;