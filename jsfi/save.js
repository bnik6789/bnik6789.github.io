function saveFile(){
    var save = {
        "decksShuffled": decks.getDecksShuffled(),
        "cardMagicKnowledgePointTotal": decks.getCardMagicKnowledgePointTotal(),
        "cardMagicKnowledgePointBought": decks.getCardMagicKnowledgePointBought(),
        "numOfDecksShuffler": decks.getNumOfDecksShuffler(),
        "deckUpgrade" : {
            "personalDeck" : decks.getDeckUpgradeOwned("personalDeck"),
            "workerDeck" : decks.getDeckUpgradeOwned("workerDeck")
        }, 

        "learnMagic": magicTrick.getLearnMagic(),
        "useableLearnMagic": magicTrick.useableLearnMagic,
        "performedLearnMagic" :  magicTrick.performedLearnMagic,
        "totalLearnMagic":  magicTrick.totalLearnMagic,
        "magicTrickButtons" : {
            "trickBasicCardTrick": magicTrick.getMagicTrickOwned("trickBasicCardTrick"),
            "trickBasicMathCardTrick": magicTrick.getMagicTrickOwned("trickBasicMathCardTrick"),
            "trickBasicSnapCardTrick": magicTrick.getMagicTrickOwned("trickBasicSnapCardTrick"),
            "trickBasicColorChangeTrick": magicTrick.getMagicTrickOwned("trickBasicColorChangeTrick"),
            "trickBasicSpellingTrick": magicTrick.getMagicTrickOwned("trickBasicSpellingTrick"),
            "trickMediumCardTrick": magicTrick.getMagicTrickOwned("trickMediumCardTrick"),
            "trickMediumMathCardTrick": magicTrick.getMagicTrickOwned("trickMediumMathCardTrick"),
            "trickMediumSnapCardTrick": magicTrick.getMagicTrickOwned("trickMediumSnapCardTrick"),
            "trickMediumColorChangeTrick": magicTrick.getMagicTrickOwned("trickMediumColorChangeTrick"),
            "trickMediumSpellingTrick": magicTrick.getMagicTrickOwned("trickMediumSpellingTrick"),
        },
        "fundamentalButtons" : {

        },

        "balance": money.getBalance(),
    
        "magicKnowledgeGroup": main.magicKnowledgeGroup,
        "magicKnowledgeLearnGroup": main.magicKnowledgeLearnGroup,
        "magicKnowledgePerformGroup": main.magicKnowledgePerformGroup,
        "moneyGroup": main.moneyGroup,
        "hireGroup": main.hireGroup,
        "deckUpgradeGroup": main.deckUpgradeGroup,
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.decksShuffled !== "undefined") decks.setDeckShuffled(savegame.decksShuffled);
    if (typeof savegame.cardMagicKnowledgePointTotal !== "undefined") decks.setCardMagicKnowledgePointTotal(savegame.cardMagicKnowledgePointTotal);
    if (typeof savegame.setCardMagicKnowledgePointBought !== "undefined") decks.setCardMagicKnowledgePointBought(savegame.setCardMagicKnowledgePointBought);
    if (typeof savegame.balance !== "undefined") money.setBalance(savegame.balance);

    if (typeof savegame.magicKnowledgeGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.magicKnowledgeGroup); i++){main.magicKnowledgeGroup++;}
    }
    if (typeof savegame.magicKnowledgeLearnGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.magicKnowledgeLearnGroup); i++){main.magicKnowledgeLearnGroup++;}
    }
    if (typeof savegame.magicKnowledgePerformGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.magicKnowledgePerformGroup); i++){main.magicKnowledgePerformGroup++;}
    }
    if (typeof savegame.moneyGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.moneyGroup); i++){main.moneyGroup++;}
    }
    if (typeof savegame.hireGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.hireGroup); i++){main.hireGroup++;}
    }
    if (typeof savegame.hireGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.hireGroup); i++){main.hireGroup++;}
    }
    if (typeof savegame.deckUpgradeGroup !== "undefined"){
        var i;
        for (i = 0; i < parseInt(save.deckUpgradeGroup); i++){main.deckUpgradeGroup++;}
    }
}

function deleteSave(){
    localStorage.removeItem("save");
}

$("#save").click( function() {
    saveFile();
});

$("#load").click( function() {
    load();
});

