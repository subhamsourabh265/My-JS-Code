const checkPasswordStrength = (str) => {
    if (!str || typeof str != 'string' || str.length < 2) {
        return "Invalid Input";
    }

    let hasLower = false, hasUpper = false, hasSpecialChar = false,  hasDigit = false;
    if (str.match(/[a-z]/)) {
        hasLower = true;
    }
    if (str.match(/[A-Z]/)) {
        hasUpper = true;
    }
    if (str.match(/[!@#$%^&*(]/)) {
        hasSpecialChar = true;
    }
    if (str.match(/[0-9]/)) {
        hasDigit = true;
    }

    if(hasLower && hasUpper && hasSpecialChar && hasDigit && str.length >= 8) {
        return "strong";
    } else if (hasLower && hasUpper && hasSpecialChar && str.length >= 6) {
        return "moderate";
    } else {
        return "weak";
    }


}