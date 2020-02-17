var money ={
    balance : 0,
    tax : 1.02,

    getBalance : function(){
        return this.balance;
    },

    setBalance : function(num){
        this.balance = num;
    },
    
    getTax : function(){
        return this.tax;
    },

    setTax : function(num){
        this.tax = num;
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
    
    loadStart : function(){
        $(".moneyGroup1").css("visibility","hidden");
    },
    
}