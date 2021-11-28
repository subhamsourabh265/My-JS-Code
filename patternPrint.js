function printPattern(n) {
    console.time("pt");
    const arr = [];
    for (let i = 0; i < n; i++) {
        const arr1 = [];
        for (let j = 0; j <= i; j++) {
            arr1.push(j+1);
        }
        arr[i] = arr1;
        
    }
    console.table(arr);
    console.timeEnd("pt");
}
const printPatternStr = (n) => {
    console.time("ptsr");
    let str = "";
    str = `${str}
        `;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if((n - j) <= i) {
                str = `${str} ${j}`;
            } else {
                str = `${str}  `;
            }
            
        }
        str = `${str}
        `;
    }
    console.log(str);
    console.timeEnd("ptsr");
}
printPattern(10);