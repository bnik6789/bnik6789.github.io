var perform = {
    
    performances : { 
        "friendsAndFamily" : {
            "idName" : "friendsAndFamily",
            "label" : "Friends and Family Show",
            "tricks" : 5,
            "costFactor" : 1,
            "moneyFactor" : .3, 
            "startCooldownTime" : 10,
            "cooldownFactor" : 1.1,
            "cooldownTime" : 0,
            "magicKnowledgePerformGroup" : 1
        },
        "partyTrick" : {
           "idName" : "partyTrick",
           "label" : "Party Trick",
           "tricks" : 6,
           "costFactor" : 1,
            "moneyFactor" : .75, 
            "startCooldownTime" : 10,
            "cooldownFactor" : 1.11,
            "cooldownTime" : 0,
            "magicKnowledgePerformGroup" : 1
        },
        "streetMagic" : {
            "idName" : "streetMagic",
            "label" : "Street Magic",
            "tricks" : 10,
            "costFactor" : 1.5,
            "moneyFactor" : 1.25,
            "startCooldownTime" : 10,
            "cooldownFactor" : 1.13,
            "cooldownTime" : 0,
            "magicKnowledgePerformGroup" : 2
        },
        "moreStreetMagic" : {
            "idName" : "moreStreetMagic",
            "label" : "More Street Magic",
            "tricks" : 20,
            "costFactor" : 1.75,
            "moneyFactor" : 1.9,
            "startCooldownTime" : 14,
            "cooldownFactor" : 1.25,
            "cooldownTime" : 0,
            "magicKnowledgePerformGroup" : 3
        }
    },

    getPerformance : function(){
        return this.performances;
    },

    perform : function(id){
        if (magicTrick.getLearnMagic() >= this.performances[id].tricks && this.performances[id].cooldownTime == 0){  
            var moneyMade = (Math.random() * 10) * this.performances[id].moneyFactor;
            money.depositBalance(moneyMade);
            this.performances[id].cooldownTime = Math.floor(this.performances[id].startCooldownTime);
            $("#"+id+"Cooldown").css("visibility", "visible");
            $("#"+id+"CooldownTime").html(this.performances[id].cooldownTime - 1);
            magicTrick.setLearnMagic(magicTrick.getLearnMagic() - this.performances[id].tricks);
        }
    },

    performCooldown: function(){
        for (var id in this.performances){
            this.performSingleCooldown(id);
        }
    },

    performSingleCooldown : function(id){
        if (this.performances[id].cooldownTime > 0){
            $("#"+id+"CooldownTime").html(this.performances[id].cooldownTime - 1);
            this.performances[id].cooldownTime -= 1;
            if (this.performances[id].cooldownTime <= 0){
                this.performances[id].startCooldownTime *= this.performances[id].cooldownFactor;
                $("#"+id+"Cooldown").css("visibility", "hidden");
            }
        }
    }

}