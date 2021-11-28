function videoWatchRates(videoList) {
    if (!videoList || !videoList.length) {
       return "Invalid Input";
    }

    const mapObj = {};
    const mapArr = [];
    const output = [];

    for (const i of videoList) {
        mapObj[i[0]] = mapObj[i[0]] + i[1] || i[1];
    }

    for (const k in mapObj) {
         if (mapObj.hasOwnProperty(k)) {
             mapArr[mapObj[k]] = k;
         }        
    }
    
    for (let i = mapArr.length - 1; i > 0; i--) {
        if (mapArr[i]) {
            output.push(mapArr[i]);
        }
        if (output.length == 10) {
            return {output, mapObj, mapArr};
        }
    }

    return {mapObj, mapArr};
}