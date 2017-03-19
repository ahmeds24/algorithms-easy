// JavaScript Document

function reverseArray(arr){
  for(var idx = arr.length - 1; idx >= arr.length/2; idx --){
  var temp = arr[idx];
  arr[idx] = arr[arr.length - idx - 1];
  arr[arr.length - idx - 1] = temp;
  }
 }