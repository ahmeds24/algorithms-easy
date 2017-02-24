function myavg(inputarray){
var sum = 0;

for(i = 1; i <= inputarray.length; i++){

                   sum += inputarray[i];
				   
}
				   var avg = (sum/inputarray.length);

				   
				   console.log("here is the " + avg);
				   
				   
}   
				   myavg([1,2,3,4]);
				   
				   
				   
				   