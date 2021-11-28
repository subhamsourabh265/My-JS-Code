function countRepeatedChar(str) {
    const map = {};
    let outputStr = '';
    let prev = '';
    let count = 0;
    for(const i of str) {
        if (!map[i]) {
           map[i] = 1; 
           prev = i;
        } else {
            if (prev == i) {
               map[i] = map[i] + 1;
               prev = i;
            } else {                       
                if(prev != i + count)
                   count++;
    
                map[i + count] = map[i + count] + 1 || 1;
                prev = i + count;                
            }          
        } 
    }

    for (const i in map) {
        if (map.hasOwnProperty(i)) {
            outputStr = outputStr + i.slice(0,1) + map[i];
        }
    }

    return outputStr;
}

const countChar = (str) => {
    if (!str || !str.length || !(typeof str == "string")) {
        return "Invalid Input!!"
    }
    
    let prev = str[0];
    let count = 0;
    let outputStr = '';
    for (let i = 0; i <= str.length; i++) {
        if (prev == str[i]) {
           count++;           
        } else {
            outputStr = outputStr + prev + count;
            count = 1;
        }
        prev = str[i];
    }

    return outputStr;
}