//Déroulement partie
$(function() {
    //Effet scroll vers les sections
    $('.scroll').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    //click sur 'nouvelle partie'
    $('#newMap').click(function() {
        location.reload();
    });

    //Bloque les boutons de combat
    boutonCombat(true, true);

    //cache fight et you win 
    $('#fight').hide();
    $('#youWin').hide();

    //Génération de la carte
    generationCarte();

    //Deplacement des joueurs
    $('table td').click(function() {
        caseClick = parseInt($(this).attr('id'));
        if (tour % 2 === 0 && $('#' + caseClick).hasClass('green')) {
            joueur1.deplacement();
            if (joueur1.case === arme1.case) {
                joueur1.gestionArme(joueur1, arme1, '#arme1');
            } else if (joueur1.case === arme2.case) {
                joueur1.gestionArme(joueur1, arme2, '#arme2');
            } else if (joueur1.case === arme3.case) {
                joueur1.gestionArme(joueur1, arme3, '#arme3');
            } else if (joueur1.case === arme4.case) {
                joueur1.gestionArme(joueur1, arme4, '#arme4');
            }
            hideArme(joueur1.case);
            $('#joueur1Att').empty();
            $('#joueur1Att').append(joueur1.attaque);
            tour++;
            greenCase(joueur2.case);
        } else if (tour % 2 === 1 && $('#' + caseClick).hasClass('green')) {
            joueur2.deplacement();
            if (joueur2.case === arme1.case) {
                joueur2.gestionArme(joueur2, arme1, '#arme1');
            } else if (joueur2.case === arme2.case) {
                joueur2.gestionArme(joueur2, arme2, '#arme2');
            } else if (joueur2.case === arme3.case) {
                joueur2.gestionArme(joueur2, arme3, '#arme3');
            } else if (joueur2.case === arme4.case) {
                joueur2.gestionArme(joueur2, arme4, '#arme4');
            }
            hideArme(joueur2.case);
            $('#joueur2Att').empty();
            $('#joueur2Att').append(joueur2.attaque);
            tour++;
            greenCase(joueur1.case);
        }

        //lancement combat
        if (conditionsCombat()) {
            fight();
            $('#vieJoueur1').append(joueur1.vie);
            $('#vieJoueur1').hide();
            $('#vieJoueur1').fadeIn();
            $('#vieJoueur2').append(joueur2.vie);
            $('#vieJoueur2').hide();
            $('#vieJoueur2').fadeIn();
            if (tour % 2 === 0) {
                boutonCombat(true, false);
                removeGreenCase(joueur1.case);
            } else {
                boutonCombat(false, true);
                removeGreenCase(joueur2.case);
            }
        }
    });

    //Execution de l'attaque et de l'animation en cas de victoire 
    $('#attaquerJ1').click(function() {
        joueur1.attaquer(joueur1, joueur2);
        $('#vieJoueur2').empty();
        $('#vieJoueur2').append(joueur2.vie);
        couleurVie(joueur2, '#vieJoueur2');
        boutonCombat(true, false);
        if (joueur2.vie < 1) {
            youWin();
        }
    });

    $('#attaquerJ2').click(function() {
        joueur2.attaquer(joueur2, joueur1);
        $('#vieJoueur1').empty();
        $('#vieJoueur1').append(joueur1.vie);
        couleurVie(joueur1, '#vieJoueur1');
        boutonCombat(false, true);
        if (joueur1.vie < 1) {
            youWin();
        }
    });

    //Execution de la defense 
    $('#defendreJ1').click(function() {
        joueur1.defendre();
        boutonCombat(true, false);
    });

    $('#defendreJ2').click(function() {
        joueur2.defendre();
        boutonCombat(false, true);
    });
});