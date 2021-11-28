function minDistance(s, w1, w2) {
    if(!s || !s.length || !w1 || !w1.length || !w2 || !w2.length) {
        return "Invalid input!";
    }

    let strList = s.split(" ");
    let indexArrW1 = [];
    let indexArrW2 = [];
    let wordsDistArr = [];
    let minDist = s.length;
    const midWordLength = Math.round(w1.length/2) + Math.round(w2.length/2);

    for (let i = 0; i < strList.length; i++) {
        if (strList[i] == w1) 
            indexArrW1.push(i);

        if (strList[i] == w2)
            indexArrW2.push(i);
    }

    for (let i = 0; i < indexArrW1.length; i++) {
        for (let j = 0; j < indexArrW2.length; j++) {
            let [k1, k2] = indexArrW1[i] < indexArrW2[j] ? [indexArrW1[i] + 1, indexArrW2[j] - 1] : [indexArrW2[j] + 1, indexArrW1[i] - 1];
            let dist = midWordLength + Math.abs(indexArrW2[j] - indexArrW1[i]);//For characters including spaces
            for (let k = k1; k <= k2; k++)  {
                dist = dist + strList[k].length;
            }
            if (dist < minDist) {
                minDist = dist;
            }
            wordsDistArr.push(dist);                   
        }
    }

    return {minDist, wordsDistArr, indexArrW1, indexArrW2};
}