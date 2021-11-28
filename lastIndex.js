const lastIndex = (str, x) => {
    if(!str || typeof str != 'string' || str.length < 2 || !x || typeof x != 'string') {
        return "Invalid Input!"
    }

    let index = -1;

    for (let i = 0; i < str.length; i++) {
        if(str[i] == x) {
            index = i;
        }
    }

    return index;
}