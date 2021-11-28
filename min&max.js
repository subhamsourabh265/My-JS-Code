//Smallest Element 

function arrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  
  //Largest Element
  function arrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };
  
  //2nd Smallest elemenet
  
  function secondSmallest(arr) {
    let len = arr.length;
    let first = Infinity;
    let second = Infinity;
  
    //if there are less than 2 elements in the array
    if(len < 2) {
      console.log("Invalid Input");
      return;
    } 
  
    //If there are 2 elements in the array
    else if(len == 2) {
      //If 2 elements are equal
      if(arr[0] == arr[1]) {
        console.log("All elememts are equal");
        return;
      } 
      //if 2 elements are not equal
      else if(arr[0] < arr[1]) {
        first = arr[0];
        second = arr[1];
      } else {
        first = arr[1];
        second = arr[0];
      }
    } else {
      while(len--) {
        // If current element is smaller than first
        // then update both first and second 
        if(arr[len] < first) {
          second = first;
          first = arr[len];
        }
        //If current element is between first and second, then update second
        else if(arr[len] < second && arr[len] != first) {
          second = arr[len];
        }
      }
    }
    //If all elements are equal
    if(second == Infinity) {
      console.log("There is no 2nd smallest number, all elements are equal");
    } else {
      console.log(`the first smallest element is ${first} and The second smallest element is ${second}`);
    }
  }
  
  //2nd largest element
  
  function secondLargest(arr) {
    let len = arr.length;
    first = -Infinity;
    second = -Infinity;
    
    //If array size is less than 2
    if(len < 2) {
      console.log("Invalid Input!");
    }
    //If array size is equal to 2
    else if(len == 2) {
      //If all elements are equal
      if(arr[0] == arr[1]) {
        console.log("All elements are equal");
      }
      //If all elements are not equal
      else if(arr[0] > arr[1]) {
        first = arr[0];
        second = arr[1];
      }
      else {
        first = arr[1];
        second = arr[0];
      }
    }
    //If array size is greater tahn 2
    else {
      while(len--) {
        console.log("logging");
        if(arr[len] > first) {
          second = first;
          first = arr[len];
        }
        else if(arr[len] > second && arr[len] != first) {
          second = arr[len];
        }
      }
    }
  
    if(second == -Infinity) {
      console.log("All elements are equal");
    } else {
      console.log(`The largest element is ${first} and second largest element is ${second}`);
    }
  }