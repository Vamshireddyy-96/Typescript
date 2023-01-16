/* 3)Create an arrow function by which you will take input of string and
you check given string is palindrome or not.
*/
function checkAlphaNumeric(s) {
    return s.match(/^[A-Za-z0-9]+$/);
}
var isPalindrome = function (s) {
    var j = s.length - 1;
    for (var i = 0; i < j; i++, j--) {
        while (i < j && !checkAlphaNumeric(s[i])) {
            i++;
        }
        while (i < j && !checkAlphaNumeric(s[j])) {
            j--;
        }
        if (i < j && s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
};
if (isPalindrome("vamshi") == true) {
    console.log("String is Palindrome");
}
else {
    console.log("Not Palindrome");
}
