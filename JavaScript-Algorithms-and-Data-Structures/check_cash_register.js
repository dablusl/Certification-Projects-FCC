function checkCashRegister(price, cash, cid) {
    let statusVal = "";
    let changeArr = [];
    let due = 0;

    let values = {
        "ONE HUNDRED" :   { val : 100.00,    amount : 0.0},
        TWENTY        :   { val : 20.00,     amount : 0.0},
        TEN           :   { val : 10.00,     amount : 0.0},
        FIVE          :   { val : 5.00,      amount : 0.0},
        ONE           :   { val : 1.00,      amount : 0.0},
        QUARTER       :   { val : 0.25,      amount : 0.0},
        DIME          :   { val : 0.1,       amount : 0.0},
        NICKEL        :   { val : 0.05,      amount : 0.0},
        PENNY         :   { val : 0.01,      amount : 0.0}
    }

    //update values
    for(let item in values){
        values[item].amount = cid.filter(val => val[0]==item).map( val => (Math.round(val[1]/values[item].val*100)/100))[0];
    }
  
    //current total
    function current_total(){
        let total = 0.00;
        for (let item in values){
            total+= values[item].val*values[item].amount;
        }
        return total
    }

    due = cash - price;

    if(due == current_total()){
      //giving whole register
      for (let unity in values){
        changeArr.push([unity, values[unity].val*values[unity].amount])
      }
      changeArr.reverse()
      return {status :"CLOSED", change : changeArr}
    }else{
      //distributing the money
      for (let unity in values){
        //is it possible to you the value
        let howMuch = values[unity].val;
        let quantity = values[unity].amount;

        if ( due >= howMuch && quantity > 0){
            //due - min between the best reduction value & the actual amount in the register

            let howMany = 0.00;
            howMany = Math.min(Math.floor(due/howMuch),quantity);
            due = Math.round((due*100 - howMany*howMuch*100))/100;
            
            //pushing  the change given
            changeArr.push([unity, howMany*howMuch]);

            //updatingregister
            values[unity].amount -= howMany;
        }
      }
    }

    //left in drawer
    if (due == 0){
        statusVal ="OPEN";
    }else{
        statusVal = "INSUFFICIENT_FUNDS";
        changeArr = [];
    }
    
    return {status :statusVal, change : changeArr}
}
  

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));