var fga = "floodgate";
function inputFga(x){
      for(i = 0; i<x.length; i++){
	  if(x[i] < 0){
	   x[i] = fga;
	   }
	  }
	  console.log(x);
	}
	
	var x = [-9,-7,-6,1,2,3];
	inputFga(x);
