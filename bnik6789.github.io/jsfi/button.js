var button = {

    start : false,
       
    showLearnButton : function(cl){
        this.learnMagicTrickButton(cl);
        this.learnFundamentalButton(cl);
        this.learnShuffleButton(cl);
    },

    hideButton : function(id){
        $("#"+id).css("visibility", "invisible");
    },

    cantBuy : function (id){
        $("#"+id+"Button").css("opacity", "0.6");
    },

    getIds : function(idG){
        var ids = [];
		for (var idName in idG){
			ids.push(idName);
		}
		return ids;
    },

    learnMagicTrickButton : function(cl){
        var m = magicTrick.getMagicTrick(); 
        var i;
        var tricks = this.getIds(m);
        var fundamentals = magicTrick.getFundamental();
        for (i = 0; i < tricks.length; i++){
            var id = m[tricks[i]];
            if (id.magicKnowledgeLearnGroup == cl){
                $("#"+id.idName+"Button").css("visibility", "visible");
                $("#"+id.idName+"Button").css("display", "block");
                $("#"+id.idName+"L").html("Learn " + id.label);
                $("#"+id.idName+"C").html( "<br><b>" +id.cost +" CMKP</b>");
                var preres = id.preres;
                if (preres.length != 0){
                    var resText = "Requires: ";
                    for (k = 0; k < preres.length; k++){
                        if (preres[k] != null){
                            resText = resText.concat("</br>-"+fundamentals[preres[k]].label);
                        }
                    }
                    $("#"+id.idName+"Requires").html("</br><i>" + resText +"</i>");
                }  
            }
        }
    },

    learnFundamentalButton : function(cl){s
        var f = magicTrick.getFundamental();
        var fundamentals = this.getIds(f);
        var i;
        for (i = 0; i < fundamentals.length; i++){
            var id = f[fundamentals[i]];
            if (id.magicKnowledgeLearnGroup == cl){
                $("#"+id.idName+"Button").css("visibility", "visible");
                $("#"+id.idName+"Button").css("display", "block");
                $("#"+id.idName+"L").html("Learn " + id.label);
                $("#"+id.idName+"C").html( "<br><b>" + id.cost + " CMKP</b>");
          }
        }
    },

    learnShuffleButton : function(cl){
        var s = magicTrick.getShuffle();
        var shuffles = this.getIds(s);
        var i;
        for (i = 0; i < shuffles.length; i++){
            var id = s[shuffles[i]];
            if (id.magicKnowledgeLearnGroup == cl){
                $("#"+id.idName+"Button").css("visibility", "visible");
                $("#"+id.idName+"Button").css("display", "block");
                $("#"+id.idName+"L").html("Learn " + id.label);
                $("#"+id.idName+"C").html( "<br><b>" + id.cost + " CMKP</b>");
          }
        }
    },

    showPerformButton : function(cl){
        var p = perform.getPerformance();
        var performance = this.getIds(p);
        var i;
        for (i = 0; i < performance.length; i++){
            var id = p[performance[i]];
            if (id.magicKnowledgePerformGroup == cl){
                $("#"+id.idName+"Button").css("visibility", "visible");
                $("#"+id.idName+"Button").css("display", "block");
                $("#"+id.idName+"L").html( "Perform " +id.label);
                $("#"+id.idName+"C").html( "<br><b>" +id.tricks +" Magic Tricks</b>");
          }
        }
    },
    
    showAutoShuffleButton : function(cl){
        var a = autoShuffle.getAutoShuffler();
        var auto = this.getIds(a);
        var i;
        for (i = 0; i < auto.length; i++){
            var id = a[auto[i]];
            if (id.hireGroup == cl){
                $("#"+auto[i]+"Button").css("visibility", "visible");
                $("#"+id.idName+"Button").css("display", "inline");
                $("#"+id.idName+"L").html("Hire " + id.label);
                $("#"+id.idName+"C").html( "<br><b> $" + id.cost + "</b>");
          }
        }
    },

    showDeckUpgradeButton : function(cl){
        var d = decks.getDeckUpgrades();
        var deck = this.getIds(d);
        var i;
        for (i = 0; i < deck.length; i++){
            var id = d[deck[i]];
            if (id.deckUpgradeGroup == cl){
                $("#"+id.idName).css("visibility", "visible");
                $("#"+id.idName).css("display", "block");
                $("#"+id.idName+"D").css("visibility", "visible");
                $("#"+id.idName+"L").html(id.label);
                $("#"+id.idName+"EL").css("visibility", "visible");
                $("#"+id.idName+"C").html("$" + (id.costFor1 * money.getTax()).toFixed(2));
                decks.showing(id.idName);
          }
        } 
    },

    openKnowledgeTab : function(event, tab){
        $(".knowledgeTabContent").css("display", "none");
        $(".knowledgeTabLink").removeClass("active").addClass("");
        $(".knowledgeTabLink").css("background-color", "#f1f1f1");
        $("#"+tab).css("display", "block");
        $("#"+tab+"Tab").css("background-color", "#ffffff");
        event.currentTarget.className += " active";
    },

    openKnowledgeTabAll : function(event){
        $(".knowledgeTabContent").css("display","block");
        $(".knowledgeTabLink").css("background-color", "#f1f1f1");
        $("#allTab").css("background-color", "#ffffff");
        event.currentTarget.className += " active";
    }

};