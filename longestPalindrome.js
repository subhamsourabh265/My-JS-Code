function longestPalindrome(str) {
    if (!str || !str.length || !(typeof str == "string")) {
        throw new Error('Not a valid Input');
    }
     const n = str.length;
     const tableArr = new Array(n);
     tableArr.fill(new Array(n));

     let maxLength = 1;

     // All substrings of length 1 are palindrome
     for (let i = 0; i < n; ++i) {
         tableArr[i][i] = true;
     }

     //check for substring of length 2
     let start = 0;
     for (let i = 0; i < n - 1; ++i) {
         if (str[i] == str[i + 1]) {
             tableArr[i][i+1] = true;
             start = i;
             maxLength = 2;
         }
     }

     //check for lengths greater than 2
     for (let k = 3; k <= n; ++k) {
         for (let i = 0; i < n - k + 1; ++i) {
             let j = i + k - 1;
             if (tableArr[i + 1][j - 1] && str[i] == str[j]) {
                 tableArr[i][j] = true;
                 if (k > maxLength) {
                     start = i;
                     maxLength = k;
                 }
             }
         }
     }

     return {start, maxLength};

}