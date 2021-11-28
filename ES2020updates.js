//goblaThis

console.log(globalThis);
console.log(this === globalThis);
console.log(globalThis === window);

//Promise.allSettled

const p1 = new Promise((resolve, reject) => setTimeout(resolve, 200));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 200));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 200));

Promise.allSettled([p1,p2,p3]).then(results => console.log(results));

//Nullish Coalescing Operator(??)

let x = {
    name: "",
    age: null
}

// console.log(x.name || "Subham"); // "|| operator works for falsy values"
// console.log(x.age || 29);

console.log(x.name ?? "Subham"); // "|| operator works for null or undefined values"
console.log(x.age ?? 29);

//Optional Chaining Operator

console.log(x?.name1);