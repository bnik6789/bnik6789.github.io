var perform = {
    
    performances : { 
        "friendsAndFamily" : {
            "idName" : "friendsAndFamily",
            "label" : "Friends and Family Show",
            "tricks" : 5,
            "trickType" : "any",
            "costFactor" : 1,
            "moneyFactor" : .3, 
            "startCooldownTime" : 10,
            "cooldownFactor" : 1.1,
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
            "cooldownFactor" : 1.3,
            "cooldownTime" : 0,
            "trickType" : "any",
            "magicKnowledgePerformGroup" : 1
        },
        "moreStreetMagic" : {
            "idName" : "moreStreetMagic",
            "label" : "More Street Magic",
            "tricks" : 20,
            "costFactor" : 1.75,
            "moneyFactor" : 1.9,
            "startCooldownTime" : 14,
            "cooldownFactor" : 1.6,
            "cooldownTime" : 0,
            "trickType" : "medium",
            "magicKnowledgePerformGroup" : 2
        }
    },

    getPerformance : function(){
        return this.performances;
    },

    getPerformanceIds : function(){
        var performIds = [];
		for (var idName in this.performances){
			performIds.push(idName);
		}
		return performIds;
    },

    perform : function(id){
        if (magicTrick.getLearnMagic() >= this.performances[id].tricks && this.performances[id].cooldownTime == 0){  
            var moneyMade = (Math.random() * 10) * this.performances[id].moneyFactor;
            money.depositBalance(moneyMade);
            this.performances[id].cooldownTime = Math.floor(this.performances[id].startCooldownTime);
            $("#" + id + "Cooldown").css("visibility", "visible");
            $("#" + id + "CooldownTime").html(this.performances[id].cooldownTime - 1);
            $("#" + id + "Button").css({transition : 'all' + this.performances[id].cooldownTime- 1 + "s"});
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
            $("#" + id + "CooldownTime").html(this.performances[id].cooldownTime - 1);
            this.performances[id].cooldownTime -= 1;
            if (this.performances[id].cooldownTime <= 0){
                this.performances[id].startCooldownTime *= this.performances[id].cooldownFactor;
                $("#" + id + "Cooldown").css("visibility", "hidden");
            }
        }
    }

}