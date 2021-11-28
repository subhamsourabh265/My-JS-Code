const groupAnagrams = (list) => {
    const listMap = {};  // Object with sorted string as key and array of anagrams as value 

    for (const i of list) {
        // sort string in each iteration
        let sortedString = [...i].sort().join(''); 
        // Logical OR Assignment operator to check if sorted key is not present
        listMap[sortedString] ||= []; 
        // Logical AND Assignment operator to check if sorted key is present
        listMap[sortedString] &&= [...listMap[sortedString],i];
    }

    return Object.values(listMap);
}

const listOfWords = ['rat', 'jar', 'tar', 'raj','ram', 'arm', 'mar', 'art'];

console.log(groupAnagrams(listOfWords)); 

const sortString = (str) => {
    if(!str || typeof str != "string" || str.length < 2) {
        return "Invalid input!!";
    }

    str = str.toLowerCase();
    const charCount = new Array(26);
    charCount.fill(0);
    let outputString = '';

    for (let i = 0; i < str.length; i++) {
        charCount[str[i].charCodeAt(0)-"a".charCodeAt(0)]++;
    }

    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j < charCount[i]; j++) {
            outputString = outputString + String.fromCharCode("a".charCodeAt(0) + i)
        }
    }

    return outputString;

}