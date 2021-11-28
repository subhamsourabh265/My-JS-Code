const getMinimumInvalid = (s) => {
    if(!s || typeof s != "string" || s.length < 2) {
        return "Invalid input"
    }
    const stackArr = [];
    for (const i of s) {
        if (i == "(") {
            stackArr.push(i);
        } else if (i == ")") {
            if (stackArr.length > 0 && stackArr[stackArr.length-1] == "(") {
                stackArr.pop();
            } else {
                stackArr.push(i);
            }
        }
    }
    return stackArr.length;
}