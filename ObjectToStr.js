const objToArray = (obj) => {
    if (!obj || typeof obj != "object") {
        throw new Error("Invalid input!!")
    }

    const tempArr = [];

    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (typeof obj[i] == "object") {
                tempArr.push(...objToArray(obj[i]));
            } else {
                tempArr.push(obj[i]);    
            }            
        }        
    }

    return [...tempArr];
}