// Number.prototype.add = function(num) {
//     return this + num;
// }
let obj2 = {a: 10, b: 20 };

// let obj = obj2[Symbol.iterator]();
obj2[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next: function () {
      let returnedObj;
      if(this.iteration === 1) {
        returnedObj = {
          value: this.a,
          done: false
        };
      } else if(this.iteration === 2) {
        returnedObj = {
          value: this.b,
          done: false
        };
      } else {
        returnedObj = {
          value: 'last',
          done: true
        };
      }
      this.iteration++;
//       debugger;
      return returnedObj;
    },
    a: 10,
    b: 20,
    iteration: 1
  };
};
// obj2 = Object.entries(obj2).map(k => k[1]);
// for (const prop of obj2) {
//     console.log(prop); 
// }

Object.prototype[Symbol.iterator] = function() {

    const objToArray = (obj) => {
        if (!obj || typeof obj != "object") {
            throw new Error("Invalid input!!")
        }

        const tempArr = [];

        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (typeof obj[i] == "object") {
                    tempArr.push(...objToArray(obj[i]));
                } else {
                    tempArr.push(obj[i]);    
                }            
            }        
        }

        return [...tempArr];
    }

    const objArr = objToArray(this);
    let i = -1;
    return {
        next() {
            i++;
            return i < objArr.length ? {value: objArr[i], done: false} : {done: true};
        }
    }
}

