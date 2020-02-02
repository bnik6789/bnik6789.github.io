var autoShuffle ={

    decksPerTick : 0,
    shufflersDecks : 0,
    workerDecks : 1,
    totalWorkerDeck : 0,
    aquireDeckTimer : 0,
    numOfWorkers : 0, //some changes 

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
        "amatureMagician":{
            "idName": "amatureMagician",
            "label" : "Amature Magician",
            "decksPerTick": 26,
            "owned": 0,
            "cost" : 45,
            "hireGroup": 3
        },
        "stageMagician":{
            "idName": "stageMagician",
            "label" : "Amature Magician",
            "decksPerTick": 52,
            "owned": 0,
            "cost" : 73,
            "hireGroup": 3
        },
    },

    getAutoShuffler : function(){
        return this.autoShufflers;
    },

    setWorkerDecks : function(num){
        this.workerDecks = num;
    },

    getWorkerDecks : function(){
        return this.workerDecks;
    },

    addWorkerDecks : function(num){
        this.workerDecks += num;
    },

    setTotalWorkerDecks : function(num){
        this.totalWorkerDeck = num;
    },

    getTotalWorkerDecks : function(){
        return this.totalWorkerDeck;
    },

    addTotalWorkerDecks : function(num){
        this.totalWorkerDeck += num;
    },

    getDecksPerTick : function(){
        return this.decksPerTick;
    },

    setDecksShuffled : function(num){
        this.shufflersDecks = num;
    },
    
    addDecksShuffled : function(num){
        this.shufflersDecks += num;
    },


    setAquireTimer : function(num){
        this.aquireDeckTimer = num;
    },

    autoShuffleDeck : function(){
        if (this.aquireDeckTimer <= 0){
            this.addDecksShuffled((this.decksPerTick * this.workerDecks) );
            $("#workerDecks").html(this.shufflersDecks);
        }
    },
 
    buyShuffler : function(id){
        if(money.getBalance() >= this.autoShufflers[id].cost){
            this.decksPerTick += this.autoShufflers[id].decksPerTick;
            money.widthdrawBalance(this.autoShufflers[id].cost);
            this.autoShufflers[id].owned += 1;
            $("#" + this.autoShufflers[id].idName).html(this.autoShufflers[id].owned);
            this.addTotalWorkerDecks(1);
        }
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