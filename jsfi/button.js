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

    learnMagicTrickButton : function(cl){
        var m = magicTrick.getMagicTrick(); 
        var i;
        var tricks = magicTrick.getMagicTrickIds();
        var fundamentals = magicTrick.getFundamental();
        for (i = 0; i < tricks.length; i++){
            var id = m[tricks[i]];
            if (id.magicKnowledgeLearnGroup == cl){
                $("#"+id.idName +"Button").css("visibility", "visible");
                $("#"+id.idName+ "Button").css("display", "block");
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

    learnFundamentalButton : function(cl){
        var f = magicTrick.getFundamental();
        var fundamentals = magicTrick.getFundamentalIds();
        var i;
        for (i = 0; i < fundamentals.length; i++){
            var id = f[fundamentals[i]];
            if (id.magicKnowledgeLearnGroup == cl){
                $("#"+id.idName +"Button").css("visibility", "visible");
                $("#"+id.idName+ "Button").css("display", "block");
                $("#"+id.idName+"L").html("Learn " + id.label);
                $("#"+id.idName+"C").html( "<br><b>" +id.cost +" CMKP</b>");
          }
        }
    },

    learnShuffleButton : function(cl){
        var s = magicTrick.getShuffle();
        var shuffles = magicTrick.getShuffleIds();
        var i;
        for (i = 0; i < shuffles.length; i++){
            var id = s[shuffles[i]];
            if (id.magicKnowledgeLearnGroup == cl){
                $("#"+id.idName +"Button").css("visibility", "visible");
                $("#"+id.idName+ "Button").css("display", "block");
                $("#"+id.idName+"L").html("Learn " + id.label);
                $("#"+id.idName+"C").html( "<br><b>" +id.cost +" CMKP</b>");
          }
        }
    },

    showPerformButton : function(cl){
        var p = perform.getPerformance();
        var performance = perform.getPerformanceIds();
        var i;
        for (i = 0; i < performance.length; i++){
            var id = p[performance[i]];
            if (id.magicKnowledgePerformGroup == cl){
                $("#"+id.idName +"Button").css("visibility", "visible");
                $("#"+id.idName+ "Button").css("display", "block");
                $("#"+id.idName+"L").html( "Perform " +id.label);
                $("#"+id.idName+"C").html( "<br><b>" +id.tricks +" Magic Tricks</b>");
          }
        }
    },
    
    showAutoShuffleButton : function(cl){
        var a = autoShuffle.getAutoShuffler();
        var auto = autoShuffle.getAutoShufflerIds();
        var i;
        for (i = 0; i < auto.length; i++){
            var id = a[auto[i]];
            if (id.hireGroup == cl){
                $("#"+auto[i] +"Button").css("visibility", "visible");
                $("#"+id.idName+ "Button").css("display", "inline");
                $("#"+id.idName+"L").html("Hire " + id.label);
                $("#"+id.idName+"C").html( "<br><b> $" +id.cost +"</b>");
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