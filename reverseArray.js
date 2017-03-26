// JavaScript Document


var holder = 0;

function sort(arr){
  var swapped;
    do {
        swapped = false;
        
 for(idx = 0; idx < arr.length; idx++){
   var nextIdx = [idx+1];
 if(arr[idx] > arr[nextIdx]){
    holder = arr[idx];
    arr[idx] = arr[nextIdx];
    arr[nextIdx] = holder;
    
    swapped = true;
            }
        }
    } while (swapped);
    
  return(test);
}
var test = [9,6,8,7,2,1];

sort(test);