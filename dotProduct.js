const dotProduct = (arr1, arr2) => {
    if (!arr1 || !arr2 || !(arr1.length && arr2.length)) {
        return "Invalid Input!"
    }
    const n = arr1.length > arr2.length ? arr1.length : arr2.length;
    let product = 0;
    for (let i = 0; i < n; i++) {
        product = product + arr1[i]?arr1[i]:1 * arr2[i]?arr2[i]:1;
    }

    return product;
}