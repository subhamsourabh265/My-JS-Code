function countVotes(arr) {
    if(!arr || !arr.length) {
        return "Invalid input!!";
    }

    const voteMap = {};
    const maxVotes = [];
    for (const i of arr) {
        voteMap[i] = voteMap[i] + 1 || 1;
    }

    let maxCount = Math.max(...Object.values(voteMap));

    for (const i in voteMap) {
        if(voteMap[i] == maxCount){
            maxVotes.push(i);
        }
    }

    return maxVotes.sort();
}