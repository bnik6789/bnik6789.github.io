var autoShuffle ={

    decksPerTick: 0,
    shufflersDecks: 0,
    aquireDeckTimer: 0,

    autoShufflers : {
        "friend":{
            "idName": "friend",
            "label" : "Friend",
            "decksPerTick": 1,
            "owned": 0,
            "cost" : 5,
            "hireGroup": 1
        },
        "randomPerson":{
            "idName": "randomPerson",
            "label" : "Random Person",
            "decksPerTick": 8,
            "owned": 0,
            "cost" : 25,
            "hireGroup": 2
        },
    },

    getDecksPerTick : function(){
        return this.decksPerTick;
    },

    setDecksShuffled : function(num){
        this.shufflersDecks = num;
    },

    autoShuffleDeck : function(){
        if (this.aquireDeckTimer <= 0){
            this.shufflersDecks = this.shufflersDecks + this.decksPerTick;
            $("#workerDecks").html(this.shufflersDecks);
        }
    },

    getAutoShuffler : function(){
        return this.autoShufflers;
    },

    getAutoShufflerIds : function(){
        var autoShufflerIds = [];
        for (var id in this.autoShufflers){
            autoShufflerIds.push(id);
        } 
        return autoShufflerIds;
    },
 
    addShuffle : function(id){
        if(money.getBalance() >= this.autoShufflers[id].cost){
            this.decksPerTick += this.autoShufflers[id].decksPerTick;
            money.widthdrawBalance(this.autoShufflers[id].cost);
        }
    },

    setAquireTimer : function(num){
        this.aquireDeckTimer = num;
    },

    aquiring : function(){
        if (this.aquireDeckTimer >= 0){
            $("#aquireC").html("(" + this.aquireDeckTimer + ")");
            this.setAquireTimer(this.aquireDeckTimer - 1);
        }   
        if (this.aquireDeckTimer == 0){
            decks.addDecksShuffled(this.shufflersDecks);
            this.shufflersDecks = 0;
            $("#workerDecks").html(this.shufflersDecks);
        }    
    },

    aquireDecks : function(){
        if (this.aquireDeckTimer <= 0){
            if (this.shufflersDecks <= 15){
                this.setAquireTimer((this.shufflersDecks/30) * 60);
            }
            else { 
                this.aquireStartTimer = 30;
                this.setAquireTimer(30);
            }
        }
    }
}