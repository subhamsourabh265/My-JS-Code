function checkDivisibleBy3(arr) {
    if(!arr || !arr.length) {
        return "Invalid Input";
    }
    
    let sum = 0;
    for (const i of arr) {
        sum = sum + i;
    }

    return sum % 3 == 0;
}