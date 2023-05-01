function palindrome(str) {
    let onlytext = /[a-z0-9]/i;

    str = str.split("").filter( char => onlytext.test(char)).join("").toLowerCase();

    if (str == str.split("").reverse().join("")){
        return true;
    }else{
        return false
    }
}  


palindrome("eye");