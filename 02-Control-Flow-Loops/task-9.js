

primenum:  for (var i = 2; i <=10; i++) {
   var primeNum =1;
    for(var j = 2; j <i; j++){
         if(i % j == 0){
            primeNum=0;
            continue primenum;
         }
     }
  

  if(primeNum==1){
     console.log(i);
  }
}
  
