/* DESCRIZIONE:

Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)

*/

/* --------------STEPS----------------

1. Per rappresentare la carta mi serve un oggetto (creo)
2. Nell'oggetto mi serve mappare tutte le proprietà (struttura template)

-------------------------------!
N.B: mappatura da fare tenendo conto di necessità di filtri !
-------------------------------!

3. Stampo informazioni su HTML (brackets?)
*/

var card = {
    name: "Incredible Name",
    launchCost: ["2", "R", "R"],
    totalManaCost: 4,
    type: "Creature",
    subType: "Goblin",
    expansion: { // deve essere un oggetto perché ha più proprietà
        number: 9,
        color: "Golden",
        nome: "Ninth Edition"
    },
    abilities: { //come sopra
        text: "Strongest Ability Ever",
        priceToUse: ["R", "B"],
    },
    flavorText: "Descriptive Quote",
    illustrator: { // come sopra
        id: 1,
        name: "Leonardo Da Vinci"
    },
    collectionNum: "177/350",
    strenght: 23,
    constitution: 23,
    border: "#000",
    background: {
        cardColor: "green",
        image: "URL"
    }

};

console.log(card);
