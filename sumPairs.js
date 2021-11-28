function getPairsCount(arr, sum) {
    let map = {};
    const pairs = [];

    for(let i = 0; i < arr.length; i++) {
        let rem = sum - arr[i];

        if(map.hasOwnProperty(rem)) {
            let count = map[rem];

            for (let j = 0; j < count; j++) {
                pairs.push([rem,arr[i]]);
            }
        }
        
        map[arr[i]] = map[arr[i]] + 1 || 1;
    }

    return {pairs, count: pairs.length};

}

function getSumPairs(arr, sum) {
    if(!arr || arr.length < 2 || !sum) {
        return "Invalid Input!";
    }
    const m = {};
    const pairs = [];

    for (const i of arr) {
        let rem = sum - i;
        if(m.hasOwnProperty(rem)) {
//             let count = map[rem];
            pairs.push([rem,i]);

        }

        m[i] = m[i] + 1 || 1;
    }

    return pairs;
}