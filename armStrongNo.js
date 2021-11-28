function isArmstrongNumber(num) {
    const numArr = num.toString().split('');
    let anum = 0;
    for(const i of numArr) {
        anum = anum + i**3;
    }
    return anum == num;
}

isArmstrongNumber(371);