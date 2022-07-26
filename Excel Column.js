// Excel Column number Ended
// Description

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// it is guaranteed that string consists of characters from 'A' - 'Z'.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Input
// 1<=T<=10

// 1<= |Si| <= 10


// Output
// output a single integer for all test case , the solution to the problem


// Sample Input 1 

// 3
// A
// AB
// ZY
// Sample Output 1

// 1
// 28
// 701


// -------------Code---------



function excel(str){
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sheet=0;
    let n=str.length;
    let m=capital.length;
    for(let i=0;i<n;i++)
    {
        sheet=sheet*26;
        for(let j=0;j<m;j++)
        {
           if(str[i]===capital[j])
           {
               var ret=j;
           }
        }
        sheet+=ret+1
    }
    console.log(sheet);
}




// --------Input Taking Part-----------
function runProgram(input)
{
    input=input.trim().split("\n");
    let tc= +input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        
        let str= input[line++].split("")
        excel(str);
    }
    
    
}


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

