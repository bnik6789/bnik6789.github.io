var main = {

	magicKnowledgeGroup : 1,
	magicKnowledgeLearnGroup : 1,
	magicKnowledgePerformGroup : 1,
	moneyGroup : 1,
	hireGroup : 0,
	deckUpgradeGroup : 0,

	onload : function(){
		this.loadStart();
		button.loadStart();
		autoShuffle.loadStart();
		money.loadStart();
		decks.loadStart();
		
		$(".shuffleStart").css("visibility", "visible");

		window.setInterval(this.checkIntervalTenth.bind(this), 10);
		window.setInterval(this.shuffleIntervalSec.bind(this), 1000);
	},


	checkIntervalTenth : function(){
		if (this.magicKnowledgeGroup == 1 && decks.getCardMagicKnowledgePoint() >= 5){
			$(".magicKnowledgeGroup1").css("visibility", "visible");
			$(".magicKnowledgeGroup1").css("display", "block");
			$("#cardMagicKnowledgePoint").css("display", "inline");
			money.depositBalance(5);
			this.magicKnowledgeGroup += 1;
		}
		if (this.magicKnowledgeGroup == 2  && magicTrick.getTotalLearnMagic() >= 20 && this.magicKnowledgePerformGroup == 1){ 
			$(".magicKnowledgeGroup2").css("visibility", "visible");
			$(".magicKnowledgeGroup2").css("display", "block");
			button.showPerformButton(1);
			this.magicKnowledgeGroup += 1;
			this.magicKnowledgePerformGroup += 1;
		}
		if (magicTrick.getTotalLearnMagic() >= 30 && this.magicKnowledgePerformGroup == 2){ 
			button.showPerformButton(2);
			this.magicKnowledgeGroup += 1;
			this.magicKnowledgePerformGroup += 1;
		}
		 
		if (this.magicKnowledgeLearnGroup == 1 && decks.getCardMagicKnowledgePoint() >= 10){
			button.showLearnButton(1);
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 2 && magicTrick.getMagicTrickOwned("trickBasicCardTrick") >= 1){
			button.showLearnButton(2);
			$(".magicKnowledgeLearnGroup2").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup2").css("display", "block");
			$("#learnMagic").css("display","inline");
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 3 && (magicTrick.getMagicTrickOwned("trickBasicMathCardTrick") >= 3 || magicTrick.getTotalLearnMagic() >= 5)){
			button.showLearnButton(3);
			$(".magicKnowledgeLearnGroup3").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup3").css("display", "inline");
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 4 && magicTrick.getTotalLearnMagic() >= 10){
			button.showLearnButton(4);
			$(".magicKnowledgeLearnGroup4").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup4").css("display", "inline");
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 5 && magicTrick.getTotalLearnMagic() >= 15 && magicTrick.getMagicTrickOwned("trickBasicSnapCardTrick") >= 2){
			button.showLearnButton(5);
			$(".magicKnowledgeLearnGroup5").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup5").css("display", "inline");
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 6 && magicTrick.getTotalLearnMagic() >= 20){
			button.showLearnButton(6);
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 7 && magicTrick.getTotalLearnMagic() >= 40 && magicTrick.getMagicTrickOwned("trickMediumCardTrick") >= 2){
			button.showLearnButton(7);
			this.magicKnowledgeLearnGroup += 1;
		}
		else if (this.magicKnowledgeLearnGroup == 8 && magicTrick.getTotalLearnMagic() >= 65 ){
			button.showLearnButton(8);
			//this.magicKnowledgeLearnGroup += 1;
		}

		if (money.getBalance() > 0 && this.moneyGroup == 1){
			$(".moneyGroup1").css("visibility", "visible");
			this.moneyGroup += 1;
			this.hireGroup += 1;
		}

		if(this.hireGroup == 1){
			button.showAutoShuffleButton(1);
			$(".hireGroup1").css("visibility", "visible");
			this.hireGroup += 1;
		}
		else if (this.hireGroup == 2 && autoShuffle.getDecksPerTick() > 3){
			button.showAutoShuffleButton(2);
			this.hireGroup += 1;
			this.deckUpgradeGroup += 1;
		}
		else if (this.hireGroup == 3 && autoShuffle.getDecksPerTick() >= 15){
			button.showAutoShuffleButton(3);
		}

		if (this.deckUpgradeGroup == 1){
			button.showDeckUpgradeButton(1);
			$(".deckUpgradeGroup1").css("visibility", "visible");
			$(".deckUpgradeGroup1").css("display", "block");
			this.deckUpgradeGroup += 1;
		}
		else if(this.deckUpgradeGroup == 2 && decks.getNumOfDecks() >= 8){
			$(".deckUpgradeGroup2").css("visibility", "visible");
			$(".deckUpgradeGroup2").css("display", "block");
			button.showDeckUpgradeButton(2);
		}


		decks.updateCardMagicKnowledgePoint();
		decks.updateDecksShuffled();
		decks.updateDeckUpgradeCost();
		money.updateMoney();
	},

	shuffleIntervalSec : function(){
		decks.updateDecksPerSecond();
		autoShuffle.autoShuffleDeck();

		perform.performCooldown();
		autoShuffle.aquiring();
	},

	loadStart : function(){
		$(".magicKnowledgeGroup1").css("visibility", "hidden");
		$(".magicKnowledgeGroup1").css("display", "none");
		$(".magicKnowledgeGroup2").css("visibility", "hidden");
		$(".magicKnowledgeGroup2").css("display", "none");
		$(".magicKnowledgeLearnGroup1").css("visibility", "hidden");
		$(".magicKnowledgeLearnGroup1").css("display", "none");
		$(".magicKnowledgeLearnGroup2").css("visibility", "hidden");
		$(".magicKnowledgeLearnGroup2").css("display", "none");
		$(".magicKnowledgeLearnGroup3").css("visibility", "hidden");
		$(".magicKnowledgeLearnGroup3").css("display", "none");
		$(".magicKnowledgeLearnGroup4").css("visibility", "hidden");
		$(".magicKnowledgeLearnGroup4").css("display", "none");
	}

}
window.onload = main.onload.bind(main);
