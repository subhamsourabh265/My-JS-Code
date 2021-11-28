var personArr1 = [{
    name: "Subham", 
    surname: "Sourabh", 
    age: 29, 
    salary: 20
},
{
    name: "ubham", 
    surname: "bh", 
    age: 18, 
    salary: 19        
},
{
    name: "LLSubham", 
    surname: "LLS", 
    age: 25, 
    salary: 26
},
{
    name: "bham", 
    surname: "abh", 
    age: 39, 
    salary: 30
}];

var z = personArr1.map((x) => { 
const name = x.name, age = x.age;
return {name,age}; 
});

var y = personArr1.reduce((acc, curr) => acc + curr.age,0);