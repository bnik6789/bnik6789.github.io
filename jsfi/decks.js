var decks = {

    decksShuffled: 0, //total number of decks shuffled after a click
    cardMagicKnowledgePoint: 0,
    cardMagicKnowledgePointTotal: 0,
    cardMagicKnowledgePointBought: 0,
    numOfDecksShuffler: 1, //Number of decks shuffled per click after shuffled bought

    deckUpgradeButtons : {
        "personalDeck" : {
            "idName": "personalDeck",
            "label" : "Personal Deck",
            "addedDeck": 1,
            "owned": 1,
            "costFor1" : 7.33,
            "shown": false,
            "deckUpgradeGroup": 1
        },
        "workerDeck" : {
            "idName": "workerDeck",
            "label" : "Worker Decks",
            "addedDeck": 1,
            "owned": 1,
            "costFor1" : 7.33,
            "shown": false,
            "deckUpgradeGroup": 2
        },
    },

    getDeckUpgrades : function(){
		return this.deckUpgradeButtons;
    },

    setDeckShuffled : function(num){
        this.decksShuffled = num;
    },

    getDecksShuffled : function(){
        return this.decksShuffled;
    },
    
    addDecksShuffled : function(num){
        this.decksShuffled += num;
        this.updateDecksShuffled();
    },

    getDeckUpgradeOwned : function(id){
        return this.deckUpgradeButtons[id].owned;
    },

    getNumOfDecks : function(){
        return this.deckUpgradeButtons["personalDeck"].owned;
    },

    setNumOfDecks : function(num){
        this.deckUpgradeButtons["personalDeck"].owned = num;
    },

    addNumOfDecks : function(num){
        this.deckUpgradeButtons["personalDeck"].owned += num;
    },

    getNumOfDecksShuffler : function(){
        return this.numOfDecksShuffler;
    },

    setNumOfDecksShuffler : function(num){
        this.numOfDecksShuffler = num;
    },

    addNumOfDecksShuffler : function(num){
        this.numOfDecksShuffler += num;
    },
    
    getCardMagicKnowledgePoint : function(){
        return this.cardMagicKnowledgePoint;
    },

    setCardMagicKnowledgePointTotal : function(num){
        this.cardMagicKnowledgePointTotal = num;
    },

    getCardMagicKnowledgePointTotal : function(){
        return this.getCardMagicKnowledgePointTotal;
    },

    setCardMagicKnowledgePointBought : function(num){
        this.cardMagicKnowledgePointBought = num;
    },

    getCardMagicKnowledgePointBought : function(){
        return this.cardMagicKnowledgePointBought;
    },

    setCardMagicKnowledgeMagicPoint : function(num){
        this.cardMagicKnowledgePoint = num;        
    },

    updateDecksPerSecond : function(){
        this.decksPerSecond = autoShuffle.getDecksPerTick();
    },

    updateDecksShuffled : function(){
        $("#decksShuffled").html(Math.floor(this.decksShuffled));
    },
    
    updateCardMagicKnowledgePoint : function(){
        this.setCardMagicKnowledgeMagicPoint(Math.abs(this.cardMagicKnowledgePointTotal - this.cardMagicKnowledgePointBought));
        $("#cardMagicKnowledgePoint").html(this.cardMagicKnowledgePoint);
    },
    updateCardMagicKnowledgePointTotal : function(){
        this.setCardMagicKnowledgePointTotal(Math.floor(this.decksShuffled/12));
    },

    showing : function(id){
        this.deckUpgradeButtons[id].shown = true;
    },

    shuffleDeck : function(){
        this.setDeckShuffled(this.decksShuffled + (this.deckUpgradeButtons["personalDeck"].owned * this.numOfDecksShuffler));
        this.updateCardMagicKnowledgePointTotal();
        this.updateCardMagicKnowledgePoint();
        this.updateDecksShuffled();
    },

    updateDeckUpgradeCost : function(){
        this.updatePersonalDeckUpgradeCost();
        this.updateWorkerDeckUpgradeCost();
    },

    updatePersonalDeckUpgradeCost : function(){
        var amount = parseInt($("#personalDeckInput").val());
        if (this.deckUpgradeButtons["personalDeck"].shown == true && (amount >= 0)){
            $("#personalDeckC").html("$" + (amount * this.deckUpgradeButtons["personalDeck"].costFor1 * money.getTax()).toFixed(2));
        }
    },

    updateWorkerDeckUpgradeCost : function(){
        var amount = parseInt($("#workerDeckInput").val());
        var deckAmount = amount * autoShuffle.getNumOfWorker(); 
        if (this.deckUpgradeButtons["workerDeck"].shown == true && (amount >= 0)){
            $("#workerDeckC").html("$" + (deckAmount * this.deckUpgradeButtons["workerDeck"].costFor1 * money.getTax()).toFixed(2));
        }
    },

    buyPersonalDeckUpgrade : function(){
        var amount = parseInt($("#personalDeckInput").val());
        var cost = (this.deckUpgradeButtons["personalDeck"].costFor1 * amount * money.getTax()).toFixed(2);
        if(money.getBalance() >= cost && amount > 0){
            this.addNumOfDecks(amount);
            money.widthdrawBalance(cost);
            $("#numOfDecks").html(this.deckUpgradeButtons["personalDeck"].owned);
        }
    },

    buyWorkerDeckUpgrade : function(){
        var amount = parseInt($("#workerDeckInput").val());
        var deckAmount = amount * autoShuffle.getNumOfWorker(); 
        var cost = (this.deckUpgradeButtons["workerDeck"].costFor1 * deckAmount * money.getTax()).toFixed(2);
        if(money.getBalance() >= cost && amount > 0){
            autoShuffle.addTotalWorkerDecks(deckAmount);
            money.widthdrawBalance(cost);
            this.deckUpgradeButtons["workerDeck"].owned += amount;
            $("#numOfWorkerDecks").html(this.deckUpgradeButtons["workerDeck"].owned);
            autoShuffle.addWorkerDecks(1);
        }
    },

    loadStart : function(){
        decks.setDeckShuffled(0);
        decks.setCardMagicKnowledgePointBought(0);
        decks.setCardMagicKnowledgePointTotal(0);
        $(".deckUpgrade").css("visibility","hidden");
        $(".deckUpgrade").css("display","none");
        $(".deckUpgradeGroup1").css("visibility","hidden");
        $(".deckUpgradeGroup1").css("display","none");
        $(".deckUpgradeGroup2").css("visibility","hidden");
        $(".deckUpgradeGroup2").css("display","none");
    },
    
};