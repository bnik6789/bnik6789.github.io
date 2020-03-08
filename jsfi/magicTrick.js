var magicTrick = {

	learnMagic : 0,
	useableLearnMagic : 0,
	performedLearnMagic : 0,
	totalLearnMagic: 0,
	maxTricks : 20,

	magicTrickButtons: {
		"trickBasicCardTrick": {
			"idName": "trickBasicCardTrick",
			"label": "Basic Card Trick",
			"cost": 6,
			"decksShuffled": 20,
			"owned": 0,
			"preres": [],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 1,
			"maxTrick": 30
		},
		"trickBasicMathCardTrick": {
			"idName": "trickBasicMathCardTrick",
			"label": "Basic Card Math Trick",
			"cost": 8,
			"decksShuffled": 20,
			"owned": 0,
			"preres": [],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 2,
			"maxTrick": 25
		},
		"trickBasicSnapCardTrick": {
			"idName": "trickBasicSnapCardTrick",
			"label": "Basic Snap Card Trick",
			"cost": 11,
			"decksShuffled": 20,
			"owned": 0,
			"preres":  ["fundaCardForce"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 4,
			"maxTrick": 40
		},
		"trickBasicColorChangeTrick": {
			"idName": "trickBasicColorChangeTrick",
			"label": "Basic Color Change Trick",
			"cost": 11,
			"decksShuffled": 20,
			"owned": 0,
			"preres": ["fundaCardForce"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 4,
			"maxTrick": 40
		},
		"trickBasicSpellingTrick": {
			"idName": "trickBasicSpellingTrick",
			"label": "Basic Spelling Trick",
			"cost": 20,
			"decksShuffled": 20,
			"owned": 0,
			"preres": ["fundaFalseShuffle", "fundaCardForce"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 5,
			"maxTrick": 55
		},
		"trickMediumCardTrick": {
			"idName": "trickMediumCardTrick",
			"label": "Medium Card Trick",
			"cost": 34,
			"decksShuffled": 20,
			"owned": 0,
			"preres": ["fundaCardForce","fundaPalming"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 6,
			"maxTrick": 30
		},
		"trickMediumMathCardTrick": {
			"idName": "trickMediumMathCardTrick",
			"label": "Medium Card Math Trick",
			"cost": 45,
			"decksShuffled": 20,
			"owned": 0,
			"preres": [],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 7,
			"maxTrick": 30
		},
		"trickMediumSnapCardTrick": {
			"idName": "trickMediumSnapCardTrick",
			"label": "Medium Snap Card Trick",
			"cost": 52,
			"decksShuffled": 20,
			"owned": 0,
			"preres":  ["fundaCardForce", "fundaDoubleLift"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 7,
			"maxTrick": 20
		},
		"trickMediumColorChangeTrick": {
			"idName": "trickMediumColorChangeTrick",
			"label": "Medium Color Change Trick",
			"cost": 52,
			"decksShuffled": 20,
			"owned": 0,
			"preres": ["fundaCardForce", "fundaDoubleLift"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 7,
			"maxTrick": 20
		},
		"trickMediumSpellingTrick": {
			"idName": "trickMediumSpellingTrick",
			"label": "Medium Spelling Trick",
			"cost": 73,
			"decksShuffled": 20,
			"owned": 0,
			"preres": ["fundaFalseShuffle", "fundaSpreadCull"],
			"performLife": 0,
			"magicKnowledgeLearnGroup": 8,
			"maxTrick": 55
		},
	},

	fundamentalButtons : {
		"fundaCardFlourish": {
			"idName": "fundaCardFlourish",
			"label": "Card Flourish",
			"cost": 8,
			"owned": false,
			"magicKnowledgeLearnGroup": 3
		},
		"fundaFalseShuffle": {
			"idName": "fundaFalseShuffle",
			"label": "False Shuffle",
			"cost": 12,
			"owned": false,
			"magicKnowledgeLearnGroup": 3
		},
		"fundaCardForce": {
			"idName": "fundaCardForce",
			"label": "Card Force",
			"cost": 15,
			"owned": false,
			"magicKnowledgeLearnGroup": 4
		},
		"fundaPalming": {
			"idName": "fundaPalming",
			"label": "Palming",
			"cost": 27,
			"owned": false,
			"magicKnowledgeLearnGroup": 5
		},
		"fundaDoubleLift": {
			"idName": "fundaDoubleLift",
			"label": "Double Lift",
			"cost": 35,
			"owned": false,
			"magicKnowledgeLearnGroup": 5
		},
		"fundaSpreadCull": {
			"idName": "fundaSpreadCull",
			"label": "Spread Cull",
			"cost": 48,
			"owned": false,
			"magicKnowledgeLearnGroup": 6
		},
	},

	shuffleButtons : {
		"shuffleBasicRiffle" : {
			"idName" : "shuffleBasicRiffle",
			"label": "Basic Riffle Shuffle",
			"cost": 15,
			"numOfDecks" : 1,
			"owned": 0,
			"magicKnowledgeLearnGroup" : 3
		},
		"shuffleBasicCut" : { 
			"idName" : "shuffleBasicCut",
			"label": "Basic Card Shuffle",
			"cost": 25,
			"numOfDecks" : 1.5,
			"owned": 0,
			"magicKnowledgeLearnGroup" : 4		
		},
		"shuffleBasicSwap" : { 
			"idName" : "shuffleBasicSwap",
			"label": "Basic Swap Shuffle",
			"cost": 30,
			"numOfDecks" : 2,
			"owned": 0,
			"magicKnowledgeLearnGroup" : 4
		},
		"shuffleBasicFlourishShuffle" : { 
			"idName" : "shuffleBasicFlourishShuffle",
			"label": "Basic Swap Shuffle",
			"cost": 45,
			"numOfDecks" : 3,
			"owned": 0,
			"magicKnowledgeLearnGroup" : 4
		},
		"shuffleBasicPileShuffle" : { 
			"idName" : "shuffleBasicPileShuffle",
			"label": "Basic Swap Shuffle",
			"cost": 65,
			"numOfDecks" : 5,
			"owned": 0,
			"magicKnowledgeLearnGroup" : 4
		},
	},

	getMagicTrick : function(){
		return this.magicTrickButtons;
	},

	getFundamental : function(){
		return this.fundamentalButtons;
	},

	getShuffle : function(){
		return this.shuffleButtons;
	},
	

	addOwned : function(id){
		this.magicTrickButtons[id].owned += 1;
	},

	getMagicTrickOwned : function(id){
		return this.magicTrickButtons[id].owned;
	},

	getFundaOwned : function(id){
		return this.fundamentalButtons[id].owned;
	},

	setLearnMagic : function(num){
		this.learnMagic = num;
		$("#learnMagic").html(this.learnMagic);
		this.totalLearnMagic = num;
	},

	addLearnMagic : function(){
		this.learnMagic += 1;
		$("#learnMagic").html(this.learnMagic);
		this.totalLearnMagic += 1;
	},

	getLearnMagic : function(){
		return this.learnMagic;
	},

	getTotalLearnMagic : function(){
		return this.totalLearnMagic;
	},

	buyTrick: function(id){
		var CMKP = decks.getCardMagicKnowledgePoint();
		if (this.magicTrickButtons[id].owned < this.magicTrickButtons[id].maxTrick){
			if (CMKP >= this.magicTrickButtons[id].cost && this.preresCheck(this.magicTrickButtons[id].preres)){
				this.magicTrickButtons[id].owned += 1;
				decks.setCardMagicKnowledgePointBought(decks.getCardMagicKnowledgePointBought() + this.magicTrickButtons[id].cost);
				$("#" +id).html(this.magicTrickButtons[id].owned);
				decks.updateCardMagicKnowledgePoint();
				this.addLearnMagic();
			}
		}
		if (this.magicTrickButtons[id].owned >= this.magicTrickButtons[id].maxTrick) {
			button.cantBuy(id);
		}
		
	},

	buyFunda : function(id){
		var CMKP = decks.getCardMagicKnowledgePoint();
		if (CMKP >= this.fundamentalButtons[id].cost && this.fundamentalButtons[id].owned == false){
			this.fundamentalButtons[id].owned = true;
			decks.setCardMagicKnowledgePointBought(decks.getCardMagicKnowledgePointBought() + this.fundamentalButtons[id].cost);
			decks.updateCardMagicKnowledgePoint();
			button.cantBuy(id);
		}
	},

	buyShuffle : function(id){
		var CMKP = decks.getCardMagicKnowledgePoint();
		if (CMKP >= this.shuffleButtons[id].cost && this.preresCheck(this.shuffleButtons[id].preres)){
			this.shuffleButtons[id].owned += 1;
			decks.setCardMagicKnowledgePointBought(decks.getCardMagicKnowledgePointBought() + this.shuffleButtons[id].cost);
			$("#" +id).html(this.shuffleButtons[id].owned);
			decks.updateCardMagicKnowledgePoint();

			decks.addNumOfDecksShuffler(this.shuffleButtons[id].numOfDecks);
		}
	},

	preresCheck : function(idList){
		var pre = true;
		var i;
		if (idList == null){ 
			return true;
		}
		else {
			for (i = 0; i < idList.length; i++){
				pre = pre && this.fundamentalButtons[idList[i]].owned;
			};
		};
		return pre;
	}

}