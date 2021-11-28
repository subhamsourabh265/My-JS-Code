const gcd = (a,b) => {
    if (a == 0) {
        return b;
    } else {
        return gcd(b % a, a);
    }
}

const lowest = (den3, num3) => {
    let cf = gcd(num3, den3);

    den3 = parseInt(den3 / cf);
    num3 = parseInt(num3 / cf);
    return `${num3}/${den3}`;
}

const addFraction = (num1, den1, num2, den2) => {
    let den3 = gcd(den1, den2);
    den3 = (den1 * den2) /  den3;   
    let num3 = ((num1) * (den3 / den1) + (num2) * den3/den2);
    return lowest(den3, num3);
}