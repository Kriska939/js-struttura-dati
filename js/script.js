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

//------------------------------------------


// 1-2: creo oggetto con tutte le proprietà mappate:

const card = {
    name: "Incredible Name",
    launchCost: ["2", "R", "R"],
    totalManaCost: 4,
    type: "Creature",
    subType: "Goblin",
    expansion: { // deve essere un oggetto perché ha più proprietà
        number: 9,
        color: "Golden",
        editionName: "Ninth Edition"
    },
    abilities: { //come sopra
        text: "Strongest Ability Ever",
        priceToUse: ["R", "B"],
    },
    flavorText: "Descriptive Quote",
    illustrator: { // come sopra
        id: 1,
        illustratorName: "Leonardo Da Vinci"
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

//check card:
// console.log(card);

// 3. STAMPA informazioni su HTML:

const display = document.getElementById("displayCard");


// SE il subtype non è presente, devo stampare null. Altrimenti, di default, si stampa undefined:
const subType = card.subType ? ` - ${card.subType}` : "";


// Template di stampa (stampo solo le info necessarie):


let cardTemplate = `<ul class="card">
<li><strong>Name:</strong> ${card.name}</li>
<li><strong>Launch Cost:</strong> ${card.launchCost.join(", ")}</li>
<li><strong>Type:</strong> ${card.type} ${subType}</li>

-----------------------
<ul> <strong>Expansion:</strong>
<li><strong>Number:</strong> ${card.expansion.number}</li>
<li><strong>Color:</strong> ${card.expansion.color}</li>
<li><strong>Name:</strong> ${card.expansion.editionName}</li>
</ul>

-----------------------
<ul> <strong>Abilities:</strong>
<li><strong>Description:</strong> ${card.abilities.text}</li>
<li><strong>Price To Use:</strong> ${card.abilities.priceToUse.join(", ")}</li>
</ul>
-----------------------
<li><strong>Flavor Text:</strong> ${card.flavorText}</li>
<li><strong>Illustrator:</strong> ${card.illustrator.illustratorName}</li>
<li><strong>Collection Number:</strong> ${card.collectionNum}</li>
<li><strong>Constitution:</strong> ${card.strenght}/${card.constitution}</li>
<li><strong>Border:</strong> ${card.border}</li>
-----------------------
<ul> <strong>Background:</strong>
<li><strong>Color:</strong> ${card.background.cardColor}</li>
<li><strong>Image:</strong> ${card.background.image}</li>
</ul>
</ul>`;

display.innerHTML = cardTemplate;