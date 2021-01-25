// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.
// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 
// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade
class Patient {
    constructor(nom, maladie, argent, poche, etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
    //     this.traitement = traitement;
    //     this.goTo = goTo;
    //     this.takeCare = takeCare;
    //     this.paye = paye
    }
}

let Marcus = new Patient("Marcus", "mal indenté", 100, [], "malade")
let Optimus = new Patient("optimus", "unsave", 200, [] , "malade")
let Sangoku = new Patient("Sangoku", "404", 80 , [], "malade")
let DarthVader = new Patient("DarthVader", "azmatique", 110, [], "malade")
let Semicolon = new Patient("Semicolon", "SyntaxError", 60, [], "malade")
// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

// |nom|argent|cabinet|diagnostique|patientIn| patientOut|
// |---|---|---|---|---|---|
let doctor = {
    nom: "doctor",
    argent: 0,
    cabinet: [],
    patientIn(a) {
        this.cabinet.push(a);
        console.log(`le patient ${a.nom} est  rentré`);
    },
    patientOut(a){
        pharmacie.caisse.push(a);
        this.cabinet.splice(this.cabinet.indexOf(a), 1);
        console.log(`le patient ${a.nom} est sorti`);
    },
    diagnostique(a){
           console.log(`La maladie de ${a.nom} est ${a.maladie}`);
           a.argent -= 50
           console.log(a.argent);  //
       },
    traitement(a){
        switch (a.maladie) {
            case :
                
                break;
        
            default:
                break;
        }
    }
    // else{
    //        a.
    //    }
    
}

// |Debugger|0|[chat]

// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|

// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€

let pharmacie = {
    nom: "pharmacie",
    caisse: [],


}

doctor.patientIn(Marcus);
console.log(doctor.cabinet);
doctor.patientOut(Marcus);
console.log(doctor.cabinet);
doctor.diagnostique(Marcus)
// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.