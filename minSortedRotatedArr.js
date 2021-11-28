function findMinInSortedRotatedArr(arr,low,high) {
    //When array is not rotated at all
    if(high < low) {
        return arr[0];
    }
    
    //If there is only one element left
    if(high == low) {
        return arr[low];
    }

    //Find mid
    let mid = low + Math.floor((high-low)/2);

    //check if (mid+1) is the minimum element
    if(mid < high && arr[mid+1] < arr[mid]) {
        return arr[mid+1];
    }

    //check if mid itself is the minimum element
    if(mid > low && arr[mid]  < arr[mid-1]) {
            return arr[mid];
    }

    //Decide whether we meed to go  to left half or right half
    if(arr[high] > arr[mid]) {
            return findMinInSortedRotatedArr(arr, low, mid-1);
    }

    return findMinInSortedRotatedArr(arr, mid+1, high);
}

findMinInSortedRotatedArr([10,8,6,3,2,3,4],0,6);//Worst case - O(n) 

//Another Approach
function findMinSorted(arr,low,high) {
    while(low < high) {
        let mid = Math.floor(low + (high-low)/2);
        if(arr[mid] == arr[high]) {
            high--;
        } else if(arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return arr[high+1];
}


const findSecondMin = (arr) => {
    let low = 0, high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor(low + (high - low)/2);
        if(arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] < arr[high]) {
            high--;
        } else {
            high = mid;
        }
    }

    return arr[low+1] ? arr[low+1] : arr[0];
}

const findSecMin = (arr) => {
    let low = 0; high = arr.length - 1;
    while (low < high) {
        let mid = Math.floor(low + (high - low)/2);
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] < arr[high]) {
            high--;
        } else {
            high = mid;
        }
    }
    
    if (arr[arr.length - 1] != arr[low]) {
        for (let i = low; i < arr.length; i++) {
            if (arr[i] != arr[low]) {
                return arr[i];
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != arr[low]) {
                return arr[i];
            }
        }
    }

    return "All elements are equal";
    
}