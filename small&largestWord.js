function smallestAndLargestWord(str) {

    let max = -Infinity, min  = Infinity, smallestWord = '', largestWord = '';
    
    if(!str || str.length < 2 || typeof str != 'string') {
        return "Invalid Input";
    }

    const strArr = str.split(' ');

    if(!strArr || strArr.length < 2){
        return "Invalid Input";
    }

    const strMap = {};

    for (const i of strArr) {
        strMap[i.toLowerCase()] = i.length;
    }

    for (let i in strMap) {
        if(strMap.hasOwnProperty(i)) {
            if(strMap[i] > max) {
                max = strMap[i];
                largestWord = i;
            }

            if(strMap[i] < min) {
                min = strMap[i];
                smallestWord = i;
            }
        }
    }

    return {strMap, smallestWord, largestWord};
}