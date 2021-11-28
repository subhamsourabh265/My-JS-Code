//Iterative Approach
function getFib(n) {
    let f = [];
    f[0] = 0;
    f[1] = 1;
        
    for (let i = 2; i <= n; i++ ) {
        f[i] = f[i-1] + f[i-2];
    }

    return f;
}


function getFibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return getFibonacci(n-1) + getFibonacci(n-2);
}

var fibMap = {};

function getFibMemo(n) {
 if(fibMap.hasOwnProperty(n)) {
     return fibMap[n];
 }

 fibMap[0] = 0;
 fibMap[1] = 1;
 fibMap[n] = getFibMemo(n-1) + getFibMemo(n-2);

 return fibMap[n];
}