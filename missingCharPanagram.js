function missingCharacters(str) {
    let alphabetList = {};
    let missingChar = [];
    for(let i = 65; i <= 90; i++){
        alphabetList[String.fromCharCode(i)] = 0;
    }
    for(let i = 0; i < str.length; i++){
        if(str[i].charCodeAt() == 32){

        } else if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            let character = String.fromCharCode(str.charCodeAt(i)-32);
            alphabetList[character] = alphabetList[character] + 1 || alphabetList[character];
        } else {
            alphabetList[str[i]] = alphabetList[str[i]] + 1 || alphabetList[str[i]];    
        }
        
    }

    for(let i in alphabetList) {
        if (alphabetList.hasOwnProperty(i) && alphabetList[i] == 0) {
            missingChar.push(i);
        }
    }

    if (missingChar.length) {
       return missingChar; 
    } else {
        return "The number is pangram";
    }
    
}