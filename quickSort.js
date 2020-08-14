function quickSort(arr, low, high) {
    if (low < high) {
        let partInd = partition(arr, low, high);

        quickSort(arr, 0, partInd-1);
        quickSort(arr, partInd + 1, high);
    }    
}

function partition(arr, low, high) {
    let pivot = arr[high];
    // let low = 0;
    // let high = arr.length - 1;

    let i = low-1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // swap
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
        }
        
    }
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;
}

const arr = [10, 20, 80, 90, 30, 60, 70];
quickSort(arr, 0, arr.length - 1);
console.log(arr)