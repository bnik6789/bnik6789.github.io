var decks = {

    decksShuffled : 0, // total number of decks
    decksPerSecond : 0,
    cardMagicKnowledgePoint: 0,
    cardMagicKnowledgePointTotal : 0,
    cardMagicKnowledgePointBought : 0,
    numOfDeckShuffled : 1, //Number of decks shuffled per click

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

    setDecksPerSecond : function(num){
        this.decksPerSecond = num;
    },

    updateDecksPerSecond : function(){
        this.decksPerSecond = autoShuffle.getDecksPerTick();
    },

    setCardMagicKnowledgePointTotal : function(num){
        this.cardMagicKnowledgePointTotal = num;
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

    setNumOfDeckShuffled : function(num){
        this.numOfDeckShuffled = num;
    },

    addNumOfDeckShuffled : function(num){
        this.numOfDeckShuffled += num;
        this.updateDecksShuffled;
    },
    
    getCardMagicKnowledgePoint : function(){
        return this.cardMagicKnowledgePoint;
    },

    shuffleDeck : function(){
        this.setDeckShuffled(this.decksShuffled + this.numOfDeckShuffled);
        this.updateCardMagicKnowledgePointTotal();
        this.updateCardMagicKnowledgePoint();
        this.updateDecksShuffled();
    },

    loadStart : function(){
        decks.setDeckShuffled(0);
        decks.setCardMagicKnowledgePointBought(0);
        decks.setCardMagicKnowledgePointTotal(0);
    },
    
};
