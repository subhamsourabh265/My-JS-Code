const sortString = (str) => {
    if(!str || typeof str != "string" || str.length < 2) {
        return "Not a valid input!";
    }
     str = str.toLowerCase();
     const MAX_CHAR = 26;
     let outputStr = '';
     const charCount = new Array(MAX_CHAR);
     charCount.fill(0);

     for (let i = 0; i < str.length; i++) {
         charCount[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
     }

     for (let i = MAX_CHAR - 1; i >= 0; i--) {
          for (let j = 0; j < charCount[i]; j++) {
              outputStr = outputStr + String.fromCharCode('a'.charCodeAt(0) + i);
          }
     }

     return {outputStr, charCount};
}