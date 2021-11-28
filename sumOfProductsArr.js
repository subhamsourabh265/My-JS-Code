function sumPairs(arr) {
    if(!arr || arr.length < 2) {
        return "Invalid input!!"
    }

    const pairs = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            sum = sum + arr[i] * arr [j];
            pairs.push([arr[i],arr[j]]);
        }
    }

    return {sum,pairs};
}