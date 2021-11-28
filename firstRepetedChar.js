function firstRepeatedWord(str) {    
    if(!str || str.length < 2 || typeof str != 'string') {
        return "Invalid Input";
    }

    const strArr = str.split(' ');

    if(!strArr || strArr.length < 2){
        return "Invalid Input";
    }

    const strMap = {};

    for (const i of strArr) {
        strMap[i.toLowerCase()] =strMap[i.toLowerCase()] + 1 || 1;
    }
    
    for (const i in strMap) {
        if(strMap.hasOwnProperty(i) && strMap[i] >=2) {
            return `First repeated word is - ${i}`;
        }
    }
    return 'no words are repeated';
}