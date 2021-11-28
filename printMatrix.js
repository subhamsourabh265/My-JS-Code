function spiralOrder(matrix) {
    let ans = [];
    if(!matrix.length) {
        return ans;
    }

    let R = matrix.length;
    let C = matrix[0].length;
    let seen = new Array(R);

    for(let i=0; i<R; i++) {
        seen[i] = new Array(C);
        for(let j =0; j<C; j++) {
            seen[i][j] = false;
        }
    }

    let dr = [0, 1, 0, -1];
    let dc = [1, 0, -1, 0];
    let r = 0, c = 0, di = 0;

    for(let i=0; i<R*C-1; i++) {
        ans.push(matrix[r]);
        seen[r] = true;
        let cr = r + dr[di];
        let cc = c + dc[di];

        if(0 <= cr && cr < R && 0 <= cc && cc < c && !seen[cr][cc]) {
            r = cr;
            c = cc;
                
        } else {
            di = (di + 1) % 4;
            r += dr[di];
            c += dc[di];
        }
    }
    return ans;
}

//2nd approach

function spiralPrint(m,n,arr) {
    let i, k = 0, l = 0;

    while(k < m && l < n) {
        for (i = l; i < n; ++i) {
            console.log(arr[k][i] + '  ');
        }
        k++;

        for (i = k; i < m; ++i) {
            console.log(arr[i][n-1] + ' ');
        }
        n--;

        if(k < m) {
            for(i = n - 1; i >= l; --i ) {
                console.log(arr[m-1][i] + ' ');
            }
            m--;
        }

        if(l < n) {
            for(i = m  - 1; i >= k; --i) {
                console.log(arr[i][l] + ' ');
            }
            i++;
        }

    }
}