function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    function shift(val){
      if(val <13){
        return val + 13;
      }
      return val - 13;
    }
  
    function recode(char){
      return abc[shift(abc.indexOf(char))];
    }
  
    return str
              .split("")
              .map( val => {if (/[A-Z]/.test(val)){
                              return recode(val);
                            } return val
                            })
              .join("");
}

rot13("SERR PBQR PNZC");
