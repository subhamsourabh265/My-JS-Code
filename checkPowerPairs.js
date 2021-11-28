function countPairPower(X,Y) {
    let ans = 0;
    const pairs = [];
    for (let i = 0; i < X.length; i++) {
        for (j=0; j<Y.length; j++) {
             if(X[i]**Y[j] == Y[j]**X[i]){
                 pairs.push([X[i],Y[j]]);
                ans++;
            }   
        }
    }

    return {ans,pairs};
}