// You have to sort it out!
// Description

// Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.


// Input
// Input Format :

// The first line of input consists of the size of the array

// The next line consists of the array of size m



// Constraints :

// 1<=m<=1000

// 0<=A[i]<=1000


// Output
// Output consists of a single line of integers


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3



//Enter code here

// Enter code here
function sortOut(N,array){
    //write code here
    let index=[];
    
    for(let i=0;i<N;i++){
        index.push(i)
    }
    
    for(let i=0;i<N;i++){
        for(let j=0;j<N-i-1;j++){
            if(array[j] >array[j+1]){
                swap(array,index,j,j+1);
        }
    }
}
    console.log(index.join(" "))
}
function swap(array,index,i,j){
    
    let temp=array[i];
    // let bag = i + " "
    array[i]=array[j];
    array[j]=temp
    temp=index[i]
    index[i]=index[j]
    index[j]=temp
}




function runProgram(input){
     //Input Taking Here
    let line=0
     input = input.trim().split("\n")
    let arr=input[line].trim().split(" ");
    let N= +arr[0]
    line++;
    let array=input[line].trim().split(" ").map(Number)
     sortOut(N,array);
 }
 
 
 if(process.env.USER===""){
     runProgram('');
 }else{
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read="";
     process.stdin.on("data",function(input){
         read+=input;
     });
     process.stdin.on("end",function(){
         read=read.replace(/\n$/,"");
         read=read.replace(/\n$/,'');
         runProgram(read);
     });
     process.on('SIGINT',function(){
         read=read.replace(/\n$/,"");
         runProgramm(read);
         process.et(0);
     });
 }

