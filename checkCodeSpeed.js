let a = 0;
console.time("ss");
do {
    a = a + 1;
}
while (a < 1000000000);

console.timeEnd("ss");