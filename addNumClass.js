class Numberr {
    constructor(num1) {
        this.value = num1;
    }

    add(num1) {
        let num2 = new Numberr(this.value + num1);
        return this.value == num2.value ? num2 : num2.value;
    } 
}
