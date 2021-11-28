//Merge Sort

const mergeSort = (arr) => {
    if (!arr || !arr.length) {
        return "Invalid Input!!";
    }

    if (arr.length == 1 ) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0,middle);
    const right  = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result. push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

//     return result;

    return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];

}

//Bubble Sort

const bubbleSort = (arr) => {
    if (!arr || !arr.length) {
       return "Invalid input!" ;
    }
    const n = arr.length;
    let temp;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
    }

    return arr;
}