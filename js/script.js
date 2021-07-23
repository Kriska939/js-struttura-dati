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

const deck = [
    {
        id: 1,
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

    },

    {
        id: 2,
        name: "Super Name",
        launchCost: ["2", "R", "R"],
        totalManaCost: 8,
        type: "Creature",
        subType: "Ninja",
        expansion: { // deve essere un oggetto perché ha più proprietà
            number: 2,
            color: "Black",
            editionName: "Second Edition"
        },
        abilities: { //come sopra
            text: "Weakest Ability Ever",
            priceToUse: ["W", "B"],
        },
        flavorText: "Descriptive Quote",
        illustrator: { // come sopra
            id: 1,
            illustratorName: "Leonardo Da Vinci"
        },
        collectionNum: "120/350",
        strenght: 19,
        constitution: 10,
        border: "#000",
        background: {
            cardColor: "green",
            image: "URL"
        }

    },

    {
        id: 3,
        name: "Dumb Name",
        launchCost: ["2", "W", "B"],
        totalManaCost: 2,
        type: "Creature",
        subType: "Giant",
        expansion: { // deve essere un oggetto perché ha più proprietà
            number: 3,
            color: "Black",
            editionName: "Third Edition"
        },
        abilities: { //come sopra
            text: "Most Boring Ability Ever",
            priceToUse: ["R", "W"],
        },
        flavorText: "Descriptive Quote",
        illustrator: { // come sopra
            id: 1,
            illustratorName: "Leonardo Da Vinci"
        },
        collectionNum: "12/250",
        strenght: 5,
        constitution: 5,
        border: "#000",
        background: {
            cardColor: "green",
            image: "URL"
        }

    }
];

// 3. STAMPA informazioni su HTML:

const display = document.getElementById("displayCard");

const createCard = (card) => {

    // SE il subtype non è presente, devo stampare null. Altrimenti, di default, si stampa undefined:
    const subType = card.subType ? ` - ${card.subType}` : "";

    // Template di stampa (stampo solo le info necessarie):

    const cardTemplate = `<div class="inline">
    <ul class="card">
<li><strong>Id:</strong> ${card.id}</li>
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
</ul></div>
`;

    return cardTemplate;
}


let deckTemplate = ""; // variabile di appoggio per stampare tutte le card e aggiungerle una ad una 

for (i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    deckTemplate += createCard(currentCard);
}


display.innerHTML = deckTemplate;


// ------- PARTE 2 ----
/*

Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
1. Creiamo un mazzo di carte
2. Stampiamo tutte  le carte su schermo
3. Aggiungiamo un piccolo form in HTML
4. Ragioniamo pian pianino sulla logica dei filtri

E' RICHIESTO:

1. filtrare prima le proprietà con valori semplici (stringhe o numeri)
2. Filtrare le proprietà il cui valore è un array di stringhe

-----------------------------------------------------
BONUS:
Far sì che se filtro una proprietà con valore stringa, riesca a mostrare la carta anche se non scrivo il suo testo interamente (es: cerco il nome digitando "creat" e riesco a trovare nei risultati le carte che hanno nel nome "creatura")
Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti)
*/