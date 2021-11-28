function add(num) {
    let result = 0;
    return {
        value: result + num,
        add: function(num1) {
            return  add(this.value + num1);
        }
    }; 
}

let multiply = (a, b) => {
    return a * b;
}

let multiplyBy2 = multiply.bind(this, 2);

function addRec(num1) {
    return function(num2){
        if(num2) {
            return addRec(num1 + num2);
        }
       return num1
    };
}

function addRec(num1) {
    return function(num2){
        if(num2) {
            return addRec(num1 + num2);
        }
       return num1
    };
}