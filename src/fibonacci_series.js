'use strict';

function fibonacci_series(n) {
    var num=[],k=0;
    for(var i=0;i<=1;i++)
      {
         num[k++]=i;
      }
     if(n!=1)
       {
         for(var j=2;j<=n;j++)
            {
               num[k++]=num[k-3]+num[k-2]; 
            }
       }
   return num;
}

module.exports = fibonacci_series;
