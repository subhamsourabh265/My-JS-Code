function countElements(tagName){
    const articlesArray = document.getElementsByTagName(tagName);
    const noOfArticles = articlesArray.length;
    return noOfArticles;
}

countElements('article');
countElements('img');

const smallestEle = (arr) => {
    if (!arr || !arr.length || arr.length < 2) {
        throw new Error("Invalid Input");
    }
    let min = Infinity;
    for (const i of arr) {
        if (i < min) {
            min = i;
        }
    }

    return min;
}

const largestEle1 = (arr) => {
    if (!arr || !arr.length || arr.length < 2) {
        throw new Error("Invalid Input");
    }

    const mapArr = [];
    for (const i of arr) {
        mapArr[i] = i;
    }

    return mapArr[mapArr.length-1];
}