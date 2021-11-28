const reverseWords = (str) => {
    if (!str || typeof str != "string" || str.length < 2) {
        return "invalid input!";
    }

    const strArr = str.split(' ');
    const revStrArr = [];

    for (const i of strArr) {
        revStrArr.push(reverseStr(i));
    }

    return revStrArr.join(' ');

}

const reverseStr = (str) => {
    if(!str || str.length < 2 || typeof str != 'string') {
        return "not a valid input"; 
    }
    
    let rev = '';
    let len = str.length;

    while(len--) {
        rev = rev + str[len];
    }

    return rev;

}

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