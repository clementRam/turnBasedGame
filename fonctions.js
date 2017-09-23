//creation aléatoire des cases bloquées 
function generationCarte(){
    for (var i = 0; i < 20; i++) {
        var briqueCase = Math.round(Math.random() * 90);
        $('td:eq(' + briqueCase + ')').addClass('brique');
    }
    
    //placement aléatoire du joueur1 et décalage au cas où il serait à côté du joueur2
    if (joueur1.case == joueur2.case){
        joueur1.case = joueur1.case + 2;
        }
    else if(joueur1.case == joueur2.case + 1 || joueur1.case == joueur2.case + 10 || joueur1.case== joueur2.case - 10){
        joueur1.case = joueur1.case + 1;
    }
    else if(joueur1.case == joueur2.case - 1){
        joueur1.case = joueur1.case - 1;
    }      

    $('#' + joueur1.case).removeClass('brique').append(joueur1.img);
    //affichage des cases accessible dès que le joueur est placé 
    greenCase(joueur1.case);

    //placement aléatoire du perso2 sur la carte     
    $('#' + joueur2.case).removeClass('brique').append(joueur2.img);

    //placement des armes
    while(arme1.case == joueur1.case || arme1.case == joueur2.case || arme1.case == arme2.case || arme1.case == arme3.case || arme1.case == arme4.case){
        arme1.case = arme1.case + 1;
    } 
    
    while(arme2.case == joueur1.case || arme2.case == joueur2.case || arme2.case == arme3.case || arme2.case == arme4.case){
        arme2.case = arme2.case + 1;
    }
    
    while(arme3.case == joueur1.case || arme3.case == joueur2.case || arme3.case == arme4.case){
        arme3.case = arme3.case + 1;
    }
    
    while(arme4.case == joueur1.case || arme4.case == joueur2.case){
        arme4.case = arme4.case + 1;
    }
    
    $('#' + arme1.case).removeClass('brique').append(arme1.img);
    $('#' + arme2.case).removeClass('brique').append(arme2.img);
    $('#' + arme3.case).removeClass('brique').append(arme3.img);
    $('#' + arme4.case).removeClass('brique').append(arme4.img);
}

//attribution de la class green aux cases accessibles
function greenCase(joueurCase){
    for(var j = 1; j < 4 && $('#' + joueurCase).parent('tr').attr('id') === $('#' + (joueurCase + j) ).parent('tr').attr('id') && !$('#' + (joueurCase + j)).hasClass('brique') && !$('#' + (joueurCase + j)).children('img').hasClass('perso'); j++){
        $('#' + (joueurCase + j)).addClass('green');
    }
    for(var k = 1; k < 4 && $('#' + joueurCase).parent('tr').attr('id') === $('#' + (joueurCase - k) ).parent('tr').attr('id') && !$('#' + (joueurCase - k)).hasClass('brique') && !$('#' + (joueurCase - k)).children('img').hasClass('perso'); k++){
        $('#' + (joueurCase - k)).addClass('green');
    }
    for(var l = 1; l < 4 && !$('#' + (joueurCase + (l*10))).hasClass('brique') && !$('#' + (joueurCase + (l*10))).children('img').hasClass('perso'); l++){
        $('#' + (joueurCase + (l*10))).addClass('green');
    }
    for(var m = 1; m < 4 && !$('#' + (joueurCase - (m*10))).hasClass('brique') && !$('#' + (joueurCase - (m*10))).children('img').hasClass('perso'); m++){
        $('#' + (joueurCase - (m*10))).addClass('green');
    }
}

//Efface toutes les cases vertes à la fin du tour 
function removeGreenCase(caseJoueur){
    $('#' + (caseJoueur + 1)).removeClass('green');
    $('#' + (caseJoueur + 2)).removeClass('green'); 
    $('#' + (caseJoueur + 3)).removeClass('green'); 
    $('#' + (caseJoueur - 1)).removeClass('green'); 
    $('#' + (caseJoueur - 2)).removeClass('green'); 
    $('#' + (caseJoueur - 3)).removeClass('green'); 
    $('#' + (caseJoueur + 10)).removeClass('green'); 
    $('#' + (caseJoueur + 20)).removeClass('green'); 
    $('#' + (caseJoueur + 30)).removeClass('green'); 
    $('#' + (caseJoueur - 10)).removeClass('green'); 
    $('#' + (caseJoueur - 20)).removeClass('green'); 
    $('#' + (caseJoueur - 30)).removeClass('green');
}

//Cache les armes pour la présence d'une arme et d'un joueur sur la meme case 
function hideArme(joueurCase){
    switch(joueurCase){
        case arme1.case:
            $('#arme1').hide();
            break;
        case arme2.case:
            $('#arme2').hide();
            break;
        case arme3.case:
            $('#arme3').hide();
            break;
        case arme4.case:
            $('#arme4').hide();
            break;
    }
}

//Affiche les armes une fois que le joueur a quitté la case 
function showArme(joueurCase){
    switch(joueurCase){
        case arme1.case:
            $('#arme1').show();
            break;
        case arme2.case:
            $('#arme2').show();
            break;
        case arme3.case:
            $('#arme3').show();
            break;
        case arme4.case:
            $('#arme4').show();
            break;
    }
}


//Coditions pour lancer un combat 
function conditionsCombat(){
    if($('#' + joueur1.case ).parent('tr').attr('id') === $('#' + joueur2.case).parent('tr').attr('id') && (joueur1.case === (joueur2.case + 1) || joueur1.case === (joueur2.case - 1))){
        return true;
    }
    else if(joueur1.case === (joueur2.case + 10) || joueur1.case === (joueur2.case - 10)){
        return true;
    }
    else{
        return false;
    }
}


//Gestion des boutons de combat 
function boutonCombat(val1, val2){
    $('#attaquerJ1').prop('disabled', val1);
    $('#defendreJ1').prop('disabled', val1);
    $('#attaquerJ2').prop('disabled', val2);
    $('#defendreJ2').prop('disabled', val2);
};

//Fonction attaque
function attaque(attaquant, defenseur, select){
    switch(defenseur.defense){
        case 0:
            defenseur.vie = defenseur.vie - attaquant.attaque;
            $(select).empty();
            $(select).append(defenseur.vie);
            break;
        case 1: 
            defenseur.vie = defenseur.vie - attaquant.attaque / 2;
            $(select).empty();
            $(select).append(defenseur.vie);
            defenseur.defense = 0;
            break;
    };
    if(defenseur.vie < 0){
        defenseur.vie = 0;
        $(select).empty();
        $(select).append(defenseur.vie);
    }
};

//change le couleur des points de vie selon les points restant 
function couleurVie(joueur, select){
    if(joueur.vie > 30 && joueur.vie < 70){
        $(select).removeClass('vert');
        $(select).addClass('orange');
    }
    else if(joueur.vie < 30){
        $(select).removeClass('orange');
        $(select).addClass('rouge');
    }
};

//animation fight
function fight(){
$('#fight').show();
        $( "#fight" ).animate({
            width: "80%",
            opacity: 1,
        }, 1000 );
};

//animation you win à la place de fight 
function youWin(){
    $('#fight').hide();
        $('#youWin').show();
        $('#youWin').animate({
            width: "100%",
            opacity: 1,
        }, 1000 );
};

