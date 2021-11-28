//String.prototype.replaceAll

const str = "my name is subham and subham is my name";
str.replaceAll("my","name");

//Promise.any

Promise.all -// wait for all - abort on any failure
Promise.race //wait for all -  abort on first success or failue
Promise.allSettled //wait for all

Promise.any // wait for all - abort on first success

//Logical Assignment

let a = 4, b = 10;

a ||= b; // OR same as 
a || (a = b) //Same as above
 if(!a) { // Samw as above
     a = b;
 }

a &&= b; // AND
if(a) { //Same as above
    a = b;
}
a ??= b // Nullish coalescing
if(a == null || a == undefined) { //Same as above
    a = b;
}

//Numerical Separator
let billion = 1_000_000_000;

//Weak references

let wrf = new WeakRef({
    a: 2,
    B: "as",
    c: "Subham"
})