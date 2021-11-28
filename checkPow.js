function checkPower(x,y) {
    if ( y <= 0) {
        return x == 0 && y == 0 ? true : "negative integers not allowed";
    }else if (y == 1) {
        return (x != 0);
    } else if (x == 1) {
        return (y == 1);
    } else {
        let i = 0;
        while(i < y) {
            if((x ** i) == y) {
                return true;
            }
            i++;
        }
    }
    
    return false;
}