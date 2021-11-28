function splitString(str, dl) {
    let word = "";
    str = str + dl;
    const subStrArr = [];

    for (const i of str) {
        if (i != dl) {
           word = word + i; 
        } else {
            if (word.length != 0) {
                subStrArr.push(word);
            }
            word = "";
        }
    }

    return subStrArr;
}