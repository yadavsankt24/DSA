// Selection Sort Problem
// Description

// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500


// Output
// Output the numbers given after sorting it in increasing order


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9


function solve(N,arr){
    //write code here
    for(let i=0;i<N;i++){
        for(let j=0;j<N-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }console.log(arr.join(" "))
    // for(let i=0;i<N;i++){
    //     let min = i;
    //     for(let j=i+1;j<N;j++){
    //         if(arr[min]<arr[j]){
    //             min=j;
    //     }swap(min,i);
    //         }
    // }console.log(arr.join(" "))
}


function swap(arr,i,j){
    let temp= arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}