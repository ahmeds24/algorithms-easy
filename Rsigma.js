
//Rsigma function with a recusion
function rSigma(num)
{
    if(num < 1) { 
        return 0; 
    }
    return parseInt(num) + rSigma(num - 1)
    
}
//Rsigma function with a loop
function Rsigma(num){
  var sum = 0;
  for(i=1; i <= num; i++){
    sum += i;
  }
  return(sum);
}

Rsigma(6);