// Palindromic Substring Ended
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7



function PalSubString(S){
    //write code here
    let n = S.length-1;
    let count = 0;
for (let j=0;j<=n;j++){
    let bag = "";
    for (let k=j;k<=n;k++){
        bag=bag+S[k];
        if(Check_rev(bag) && bag.length>count){
            count = bag.length;
        }
    }
} console.log(count);
}


function Check_rev(str){
let rev  = "";
for (let i=str.length-1;i>=0;i--){
    rev = rev + str[i];
}if (rev==str){
    return true;
}else{
    return false;
}
}