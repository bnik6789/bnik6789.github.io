var money ={
    balance : 0,

    getBalance : function(){
        return this.balance;
    },

    setBalance : function(num){
        this.balance = num;
    },

    depositBalance : function(num){
        this.balance += num;
    },

    widthdrawBalance : function(num){
        this.balance -= num;
    },

    updateMoney : function(){
        $("#balance").html(Number(this.balance).toFixed(2));
    },
    
    
}