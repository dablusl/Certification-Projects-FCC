function convertToRoman(num) {
    let romNum = "";
    let numerals =[
                    ["M"  , 1000],
                    ["CM" , 900],
                    ["D"  , 500],
                    ["CD" , 400],
                    ["C" , 100],
                    ["XC" , 90],
                    ["L" , 50],
                    ["XL" , 40],
                    ["X" , 10],
                    ["IX" , 9],
                    ["V" , 5],
                    ["IV" , 4],
                    ["I" , 1]
                  ]
  
    function repeat(str,num){
      if(num==0){
        return ""
      }else{
        return str + repeat(str,num-1)
      }
    }
  
    let i =0;
  
    while(num != 0){
      romNum += repeat(numerals[i][0],Math.floor(num/numerals[i][1]));
      num = num % numerals[i][1];
      i++;
    }
   
   
   
   return romNum;
  }
  
  convertToRoman(36);