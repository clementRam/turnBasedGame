var tour = 0;
var caseClick = 0;

//Objets joueurs
var joueur = {
    nom: "",
    case: 0,
    vie: 100,
    attaque: 10,
    defense: 0,
    img: "",
    id: "",
    deplacement: function(){
        $(this.id).remove();
        showArme(this.case);
        removeGreenCase(this.case);
        $('#' + caseClick).append(this.img);
        $(this.id).hide();
        $(this.id).fadeIn();
        this.case = caseClick;
    },
    gestionArme: function(objJoueur, arme, idArme){
        $(idArme).remove();
        arme.case = null;
        switch(objJoueur.attaque){
            case 10: 
                objJoueur.attaque = arme.attaque;
                break;
            case 15:
                $('#' + objJoueur.case).append(arme1.img);
                arme1.case = objJoueur.case;
                objJoueur.attaque = arme.attaque;
                break;
            case 20:
                $('#' + objJoueur.case).append(arme2.img);
                arme2.case = objJoueur.case;
                objJoueur.attaque = arme.attaque;
                break;
            case 25:
                $('#' + objJoueur.case).append(arme3.img);
                arme3.case = objJoueur.case;
                objJoueur.attaque = arme.attaque;
                break;
            case 30:
                $('#' + objJoueur.case).append(arme4.img);
                arme4.case = objJoueur.case;
                objJoueur.attaque = arme.attaque;
                break;
        }
    },
    attaquer: function(attaquant, defenseur){
        switch(defenseur.defense){
            case 0:
                defenseur.vie = defenseur.vie - attaquant.attaque;
                break;
            case 1: 
                defenseur.vie = defenseur.vie - attaquant.attaque / 2;
                defenseur.defense = 0;
                break;
        };
        if(defenseur.vie < 0){
            defenseur.vie = 0;
        }
    },
    defendre: function(){
        this.defense = 1;
    }
}


var joueur1 = Object.create(joueur);
joueur1.nom = "joueur1";
joueur1.case = Math.round(Math.random() * 90);
joueur1.id = "#joueur1";
joueur1.img = "<img src='img/joueur1.png' class='perso' id='joueur1'>"; 

var joueur2 = Object.create(joueur);
joueur2.nom = "joueur2";
joueur2.case = Math.round(Math.random() * 90);
joueur2.id = "#joueur2"
joueur2.img = "<img src='img/joueur2.png' class='perso' id='joueur2'>";

//objet armes
var armes = {
    case: 0,
    attaque: 0,
    id: "",
    img: ""
}

var arme1 = Object.create(armes);
arme1.case = Math.round(Math.random() * 90);
arme1.attaque = 15;
arme1.id = "#arme1";
arme1.img =  "<img src='img/arme1.png' class='arme' id='arme1'>";

var arme2 = Object.create(armes);
arme2.case = Math.round(Math.random() * 90);
arme2.attaque = 20;
arme2.id = "#arme2";
arme2.img =  "<img src='img/arme2.png' class='arme' id='arme2'>";
    
var arme3 = Object.create(armes);
arme3.case = Math.round(Math.random() * 90);
arme3.attaque = 25;
arme3.id = "#arme3";
arme3.img =  "<img src='img/arme3.png' class='arme' id='arme3'>";
    
var arme4 = Object.create(armes);
arme4.case = Math.round(Math.random() * 90);
arme4.attaque = 30;
arme4.id = "#arme4";
arme4.img =  "<img src='img/arme4.png' class='arme' id='arme4'>";

