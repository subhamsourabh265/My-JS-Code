function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
  
  let obj1 = {
      a: 10,
      b: 20,
      c: 30,
      d: 80
  }
  
  obj1[Symbol.iterator] = function() {
      let n = -1;
      let nArr = [];
      for (const i in this){
          if (this.hasOwnProperty) {
             nArr.push(this[i]) ;
          }
      }
      return {
          next() {
              n++;
              return n < nArr.length? {value: nArr[n], done: false}: {done: true}
          }
      }
  }
  
  
  //Using for..of loop and spread operator with string
  
  const str = "abc";
  
  console.log(...str)    // a b c
  
  for (const i of str) {
      console.log(i);   // a b c
  }
  
  //similar behavior with array
  
  const arr = [1, 2, 3, 4, 5];
  
  console.log(...arr);  // 1 2 3 4 5
  
  for (const i of arr) {
      console.log(i);   // 1 2 3 4 5
  }
  
  //with regular objects, for..of and spread operator will throw TypeError
  
  const obj = {
    a: 10,
    b: 20,
    c: 50,
    d: 100
  }
  
  // console.log(...obj);  // TypeError: Found non-callable @@iterator
  
  // for (const i of obj) {
  //     console.log(i);   // TypeError: obj is not iterable
  // }
  
  // So how to convert the object obj to an iterable so that with for...of and ...obj, it will not throw any error
  // Let's convert the object obj to an iterable using for..in loop and Symbol.iterator
  
  obj[Symbol.iterator] = function() {
      const tempArr = []
      let i = -1;
      for (const j in this){
          if (this.hasOwnProperty(j)) {
             tempArr.push(this[j]) ;
          }
      }
      return {
          next() {
              i++;
              return i < tempArr.length ? {value: tempArr[i], done: false} : {done: true};
          }
      }
  }
  
  console.log(...obj);  // 10 20 50 100
  
  for (const i of obj) {
      console.log(i);   // 10 20 50 100
  }
  
  
  
  
  