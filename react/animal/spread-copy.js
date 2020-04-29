console.log("--------------------------------------")
console.log("------------ COPIE OBJETS ------------")
console.log("--------------------------------------")

let chaise = {
    pieds : 4,
    hauteur : 120,
    dossier: true,
};

console.log("------------ COPIE REF OBJETS ------------")
const newChaiseRef = chaise;

console.log("newChaiseRef ::", newChaiseRef);
console.log("chaise ::", chaise);
chaise.pouet = "zesdcsdc";
console.log("newChaiseRef ::", newChaiseRef);
console.log("chaise ::", chaise);
newChaiseRef.coucou = "chouette";
console.log("newChaiseRef ::", newChaiseRef);
console.log("chaise ::", chaise);

chaise = {
    pieds : 4,
    hauteur : 120,
    dossier: true,
};

console.log("------------ COPIE VALEURS OBJETS ------------")
const newChaiseVal = {...chaise};

console.log("newChaiseVal ::", newChaiseVal);
console.log("chaise ::", chaise);
chaise.pouet = "zesdcsdc";
console.log("newChaiseVal ::", newChaiseVal);
console.log("chaise ::", chaise);
newChaiseVal.coucou = "chouette";
console.log("newChaiseVal ::", newChaiseVal);
console.log("chaise ::", chaise);