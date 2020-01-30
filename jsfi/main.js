var main = {

	magicKnowledgeGroup : 1,
	magicKnowledgeLearnGroup : 1,
	magicKnowledgePerformGroup : 1,
	magicKnowledgeInputGroup : 1,
	moneyGroup : 1,
	hireGroup : 0,

	onload : function(){
		decks.loadStart();
		$(".shuffleStart").css("visibility", "visible");

		window.setInterval(this.checkIntervalTenth.bind(this), 10);
		window.setInterval(this.shuffleIntervalSec.bind(this), 1000);
	},


	checkIntervalTenth : function(){
		if (this.magicKnowledgeGroup == 1 && decks.getCardMagicKnowledgePoint() >= 5){
			$(".magicKnowledgeGroup1").css("visibility", "visible");
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
			$(".magicKnowledgeGroup2").css("visibility", "visible");
			$(".magicKnowledgeGroup2").css("display", "block");
			button.showPerformButton(2);
			this.magicKnowledgeGroup += 1;
			this.magicKnowledgePerformGroup += 1;
		}
		 
		if (this.magicKnowledgeLearnGroup == 1 && decks.getCardMagicKnowledgePoint() >= 10){
			button.showLearnButton(1);
			this.magicKnowledgeLearnGroup += 1;
		}
		if (this.magicKnowledgeLearnGroup == 2 && magicTrick.getMagicTrickOwned("trickBasicCardTrick") >= 1){
			button.showLearnButton(2);
			$(".magicKnowledgeLearnGroup2").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup2").css("display", "inline");
			this.magicKnowledgeLearnGroup += 1;
		}
		if (this.magicKnowledgeLearnGroup == 3 && magicTrick.getMagicTrickOwned("trickBasicMathCardTrick") >= 5){
			button.showLearnButton(3);
			$(".magicKnowledgeLearnGroup3").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup3").css("display", "block");
			this.magicKnowledgeLearnGroup += 1;
		}
		if (this.magicKnowledgeLearnGroup == 4 && magicTrick.getTotalLearnMagic() >= 10){
			button.showLearnButton(4);
			$(".magicKnowledgeLearnGroup4").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup4").css("display", "block");
			this.magicKnowledgeLearnGroup += 1;
		}
		if (this.magicKnowledgeLearnGroup == 5 && magicTrick.getTotalLearnMagic() >= 15 && magicTrick.getMagicTrickOwned("trickBasicSnapCardTrick") >= 2){
			button.showLearnButton(5);
			$(".magicKnowledgeLearnGroup5").css("visibility", "visible");
			$(".magicKnowledgeLearnGroup5").css("display", "block");
			this.magicKnowledgeLearnGroup += 1;
		}
		if (this.magicKnowledgeLearnGroup == 6 && magicTrick.getTotalLearnMagic() >= 20){
			button.showLearnButton(6);
			this.magicKnowledgeLearnGroup += 1;
		}

		if (money.getBalance() > 0 && this.moneyGroup == 1){
			$(".moneyGroup1").css("visibility", "visible");
			this.moneyGroup += 1;
			this.hireGroup += 1;
		}

		if(this.hireGroup == 1){
			button.showAutoShuffleButton(1);
			this.hireGroup += 1;
		}
		if (this.hireGroup == 2 && autoShuffle.getDecksPerTick() > 3){
			button.showAutoShuffleButton(2);
			this.hireGroup += 1;
		}
		decks.updateCardMagicKnowledgePoint();
		decks.updateDecksShuffled();
		money.updateMoney();
	},

	shuffleIntervalSec : function(){
		decks.updateDecksPerSecond();
		autoShuffle.autoShuffleDeck();

		perform.performCooldown();
		autoShuffle.aquiring();
	}
}
window.onload = main.onload.bind(main);
