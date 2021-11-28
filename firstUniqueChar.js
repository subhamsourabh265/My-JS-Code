function firstUniqueChar(str) {
    const strObj = {};
    for(let i of str) {
        strObj[i] = strObj[i]+1 || 1;
    }
    for(let i in strObj) {
        if(strObj.hasOwnProperty(i)) {
            if(strObj[i] == 1){
                return i;
            }        
        }
    }
}