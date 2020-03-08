var save = {
    decksShuffled: decks.getDecksShuffled(),
    cardMagicKnowledgePointTotal: decks.getCardMagicKnowledgePointTotal(),
    cardMagicKnowledgePointBought: decks.getCardMagicKnowledgePointBought(),
    balance: money.getBalance(),

    magicKnowledgeGroup: main.magicKnowledgeGroup,
	magicKnowledgeLearnGroup: main.magicKnowledgeLearnGroup,
	magicKnowledgePerformGroup: main.magicKnowledgePerformGroup,
	moneyGroup: main.moneyGroup,
	hireGroup: main.hireGroup,
	deckUpgradeGroup: main.deckUpgradeGroup,
}

function save(){
    localStorage.setItem("save",JSON.stringify(save));
}

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    alert("!" + savegame.decksShuffled);
    if (typeof savegame.decksShuffled !== "undefined") decks.setDeckShuffled(savegame.decksShuffled);
    if (typeof savegame.cardMagicKnowledgePointTotal !== "undefined") decks.setCardMagicKnowledgePointTotal(savegame.cardMagicKnowledgePointTotal);
    if (typeof savegame.setCardMagicKnowledgePointBought !== "undefined") decks.setCardMagicKnowledgePointBought(savegame.setCardMagicKnowledgePointBought);
    if (typeof savegame.balance !== "undefined") money.setBalance(savegame.balance);
}

function deleteSave(){
    localStorage.removeItem("save");
}

$("#save").click( function() {
    save();
});

$("#load").click( function() {
    load();
});

