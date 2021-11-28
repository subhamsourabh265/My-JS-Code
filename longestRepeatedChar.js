function longestRepeatedStr(str) {
    if (!str || !str.length || !(typeof str == "string")) {
        return "Invalid Input!!"
    }

    const map = {};
    let maxCount = 0;
    let maxStr = '';

    for (const i of str) {
        map[i] = map[i] + 1 || 1;
    }
    
    for (const i in map) {
        if (map.hasOwnProperty(i)) {
            if (map[i] > maxCount) {
                maxCount = map[i];
                maxStr = i;
            }
        }
    }

    return [str.indexOf(maxStr), maxCount];
}