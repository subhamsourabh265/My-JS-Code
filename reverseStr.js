function reverseWords(str) {
    if(!str || str.length < 2 || typeof str != 'string') {
        return "not a valid input"; 
    }
    
    let rev = '';
    let strArr = str.split(' ');
    let len = strArr.length;

    while(len--) {
        rev = rev + strArr[len] + ' ';
    }

    return rev;

}