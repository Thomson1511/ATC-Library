const airplanes = [
    { type: 'JS32', wakeCategory: 'M', maxCruisingLevel: 210, 
    cruisingspeedlow: '170', cruisingspeedhigh: '220' , background: 'url(pictures/aircraft-performance/JS32.jpg)'},
    { type: 'F50', wakeCategory: 'M', maxCruisingLevel: 250, cruisingspeedlow: '215', cruisingspeedhigh: '220' , background: 'url(/pictures/aircraft-performance/F50.jpg)'},
    { type: 'AT72', wakeCategory: 'M', maxCruisingLevel: 250, cruisingspeedlow: '180', cruisingspeedhigh: '215' , background: 'url(/pictures/aircraft-performance/AT72.jpg)'},
    { type: 'DH8C', wakeCategory: 'M', maxCruisingLevel: 250, cruisingspeedlow: '210', cruisingspeedhigh: '250' , background: 'url(/pictures/aircraft-performance/DH8C.jpg)'},
    { type: 'DH8D', wakeCategory: 'M', maxCruisingLevel: 250, cruisingspeedlow: '240', cruisingspeedhigh: '270' , background: 'url(/pictures/aircraft-performance/DH8D.jpg)'},
    { type: 'SB20', wakeCategory: 'M', maxCruisingLevel: 250, cruisingspeedlow: '240', cruisingspeedhigh: '265' , background: 'url(/pictures/aircraft-performance/SB20.jpg)'},
    { type: 'BE40', wakeCategory: 'M', maxCruisingLevel: 450, cruisingspeedlow: '77', cruisingspeedhigh: '80' , background: 'url(/pictures/aircraft-performance/BE40.jpg)'},
    { type: 'F2TH', wakeCategory: 'M', maxCruisingLevel: 510, cruisingspeedlow: '78', cruisingspeedhigh: '81' , background: 'url(/pictures/aircraft-performance/F2TH.jpg)'},
    { type: 'FA20', wakeCategory: 'M', maxCruisingLevel: 450, cruisingspeedlow: '77', cruisingspeedhigh: '81' , background: 'url(/pictures/aircraft-performance/FA20.jpg)'},
    { type: 'LJ60', wakeCategory: 'M', maxCruisingLevel: 510, cruisingspeedlow: '73', cruisingspeedhigh: '78' , background: 'url(/pictures/aircraft-performance/LJ60.jpg)'},
    { type: 'H25B', wakeCategory: 'M', maxCruisingLevel: 510, cruisingspeedlow: '78', cruisingspeedhigh: '81' , background: 'url(/pictures/aircraft-performance/H25B.jpg)'},
    { type: 'GLF4', wakeCategory: 'M', maxCruisingLevel: 510, cruisingspeedlow: '82', cruisingspeedhigh: '88' , background: 'url(/pictures/aircraft-performance/GLF4.jpg)'},
    { type: 'E145', wakeCategory: 'M', maxCruisingLevel: 370, cruisingspeedlow: '73', cruisingspeedhigh: '75' , background: 'url(/pictures/aircraft-performance/E145.jpg)'},
    { type: 'E170', wakeCategory: 'M', maxCruisingLevel: 410, cruisingspeedlow: '75', cruisingspeedhigh: '78' , background: 'url(/pictures/aircraft-performance/E170.jpg)'},
    { type: 'E190', wakeCategory: 'M', maxCruisingLevel: 410, cruisingspeedlow: '75', cruisingspeedhigh: '78' , background: 'url(/pictures/aircraft-performance/E190.jpg)'},
    { type: 'CRJ2', wakeCategory: 'M', maxCruisingLevel: 410, cruisingspeedlow: '73', cruisingspeedhigh: '77' , background: 'url(/pictures/aircraft-performance/CRJ2.jpg)'},
    { type: 'CRJ7', wakeCategory: 'M', maxCruisingLevel: 410, cruisingspeedlow: '75', cruisingspeedhigh: '79' , background: 'url(/pictures/aircraft-performance/CRJ7.jpg)'},
    { type: 'B734', wakeCategory: 'M', maxCruisingLevel: 370, cruisingspeedlow: '73', cruisingspeedhigh: '75' , background: 'url(/pictures/aircraft-performance/B734.jpg)'},
    { type: 'B738', wakeCategory: 'M', maxCruisingLevel: 410, cruisingspeedlow: '76', cruisingspeedhigh: '79' , background: 'url(/pictures/aircraft-performance/B738.jpg)'},
    { type: 'B752', wakeCategory: 'M/H', maxCruisingLevel: 430, cruisingspeedlow: '80', cruisingspeedhigh: '81' , background: 'url(/pictures/aircraft-performance/B752.jpg)'},
    { type: 'B763', wakeCategory: 'H', maxCruisingLevel: 430, cruisingspeedlow: '80', cruisingspeedhigh: '81' , background: 'url(/pictures/aircraft-performance/B763.jpg)'},
    { type: 'B777', wakeCategory: 'H', maxCruisingLevel: 430, cruisingspeedlow: '83', cruisingspeedhigh: '85' , background: 'url(/pictures/aircraft-performance/B777.jpg)'},
    { type: 'B748', wakeCategory: 'H', maxCruisingLevel: 430, cruisingspeedlow: '84', cruisingspeedhigh: '86' , background: 'url(/pictures/aircraft-performance/B748.jpg)'},
    { type: 'B788', wakeCategory: 'H', maxCruisingLevel: 430, cruisingspeedlow: '84', cruisingspeedhigh: '86' , background: 'url(/pictures/aircraft-performance/B788.jpg)'},
    { type: 'A320', wakeCategory: 'M', maxCruisingLevel: 390, cruisingspeedlow: '76', cruisingspeedhigh: '79' , background: 'url(/pictures/aircraft-performance/A320.jpg)'},
    { type: 'A332', wakeCategory: 'M', maxCruisingLevel: 410, cruisingspeedlow: '79', cruisingspeedhigh: '82' , background: 'url(/pictures/aircraft-performance/A332.jpg)'},
    { type: 'A343', wakeCategory: 'M/H', maxCruisingLevel: 410, cruisingspeedlow: '79', cruisingspeedhigh: '82' , background: 'url(/pictures/aircraft-performance/A343.jpg)'},
    { type: 'A346', wakeCategory: 'H', maxCruisingLevel: 410, cruisingspeedlow: '81', cruisingspeedhigh: '84' , background: 'url(/pictures/aircraft-performance/A346.jpg)'},
    { type: 'A359', wakeCategory: 'H', maxCruisingLevel: 430, cruisingspeedlow: '82', cruisingspeedhigh: '85' , background: 'url(/pictures/aircraft-performance/A359.jpg)'},
    { type: 'A388', wakeCategory: 'J', maxCruisingLevel: 430, cruisingspeedlow: '83', cruisingspeedhigh: '86' , background: 'url(/pictures/aircraft-performance/A388.jpg)'},
    { type: 'DC10', wakeCategory: 'H', maxCruisingLevel: 410, cruisingspeedlow: '80', cruisingspeedhigh: '83' , background: 'url(/pictures/aircraft-performance/DC10.jpg)'},
    { type: 'MD11', wakeCategory: 'H', maxCruisingLevel: 410, cruisingspeedlow: '80', cruisingspeedhigh: '83' , background: 'url(/pictures/aircraft-performance/MD11.jpg)'},
];



const shuffledAirplanes = airplanes.sort(() => Math.random() - 0.5);

let currentAirplaneIndex = 0;
let airplaneCard, airplaneTypeText, answer1, answer2, answer3a, answer3b;
let mistake = 0;
let mistakess;
let mistakesList = [];

document.addEventListener('keydown', function (event) {
    // Az 13 a billentyűkódja az Enter billentyűnek
    if (event.key === 'Enter') {
        nextCard();
    }
    if (event.key === 'r'){
        resetGame();
    }
    if (event.key === 'i'){
        hint();
    }
    if (event.key === 'w') {
        // Fókuszba helyezzük az 'answer1' input mezőt
        document.getElementById('answer1').focus();
    }
    if (event.key === 'f') {
        // Fókuszba helyezzük az 'answer2' input mezőt
        document.getElementById('answer2').focus();
    }
    if (event.key === 's') {
        // Fókuszba helyezzük az 'answer3a' input mezőt
        document.getElementById('answer3a').focus();
    }
    if (event.key === 'd') {
        // Fókuszba helyezzük az 'answer3b' input mezőt
        document.getElementById('answer3b').focus();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Válaszokhoz tartozó elemek lekérése a DOM-ból
    airplaneCard = document.getElementById('airplane-card');
    airplaneTypeText = document.getElementById('airplane-type-text');
    answer1 = document.getElementById('answer1');
    answer2 = document.getElementById('answer2');
    answer3a = document.getElementById('answer3a');
    answer3b = document.getElementById('answer3b');
    mistakess = document.getElementById('mistakes');
    
    const popupContainer = document.getElementById('popup-container');
    const popupArrow = document.getElementById('popup-arrow');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.getElementById('popup-close');

    popupArrow.addEventListener('click', function() {
    popupArrow.style.display = 'none';
    popupContent.style.display = 'block';
    popupContent.style.width = '150px';
    popupContent.style.height = '200px';
    });

    popupClose.addEventListener('click', function() {
    popupArrow.style.display = 'flex';
    popupContent.style.display = 'none';
    });

    
    document.onkeydown = function(event) {
        switch (event.keyCode) {
        case 38:
            popupArrow.click();
        break;
        case 40:
            popupClose.click();
        break;
        }
    };

    displayCurrentAirplane();
});


function hint(){
    alert(  'WTC: ' + shuffledAirplanes[currentAirplaneIndex].wakeCategory + '\n' +
            'Max FL: ' + shuffledAirplanes[currentAirplaneIndex].maxCruisingLevel + '\n' +
            'Speed: ' + shuffledAirplanes[currentAirplaneIndex].cruisingspeedlow +
            '-' + shuffledAirplanes[currentAirplaneIndex].cruisingspeedhigh);
}


function resetGame() {
    currentAirplaneIndex = 0;
    mistake = 0;
    mistakess.innerHTML = 'Hibák: ' + mistake;
    shuffleAirplanes();
    displayCurrentAirplane();
    document.getElementById('counter').textContent = `1/${airplanes.length}`;
    document.getElementById('airplane-type').textContent = shuffledAirplanes[currentAirplaneIndex].type;
    resetInputFields();
    mistakesList = [];
  }

  function shuffleAirplanes() {
    shuffledAirplanes.sort(() => Math.random() - 0.5);
}
  
  function resetInputFields() {
    answer1.value = '';
    answer2.value = '';
    answer3a.value = '';
    answer3b.value = '';
  
    // Reset the border colors
    answer1.style.borderColor = '';
    answer2.style.borderColor = '';
    answer3a.style.borderColor = '';
    answer3b.style.borderColor = '';
  }


function displayCurrentAirplane() {
    const currentAirplane = airplanes[currentAirplaneIndex];
    airplaneTypeText.textContent = currentAirplane.type;
    
    document.body.style.backgroundImage = currentAirplane.background;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
}

function nextCard() {
    // Visszaállítjuk az összes input mező keretét normál állapotba
    answer1.style.borderColor = '';
    answer2.style.borderColor = '';
    answer3a.style.borderColor = '';
    answer3b.style.borderColor = '';

    // Válaszok lekérése a DOM-ból
    answer1 = document.getElementById('answer1');
    answer2 = document.getElementById('answer2');
    answer3a = document.getElementById('answer3a');
    answer3b = document.getElementById('answer3b');

    // Ellenőrzés a válaszokra
    if (
        answer1.value.toUpperCase() === airplanes[currentAirplaneIndex].wakeCategory &&
        parseInt(answer2.value) === airplanes[currentAirplaneIndex].maxCruisingLevel &&
        answer3a.value === airplanes[currentAirplaneIndex].cruisingspeedlow &&
        answer3b.value === airplanes[currentAirplaneIndex].cruisingspeedhigh
    ) {
        currentAirplaneIndex++;

        if (currentAirplaneIndex < airplanes.length) {
            // Következő kártya megjelenítése
            displayCurrentAirplane();
            const nextAirplane = airplanes[currentAirplaneIndex]; //${nextAirplane.type}
            airplaneCard.innerHTML = `
            <h1>Aircraft type:</h1>
            <div id="airplane-type">
            ${nextAirplane.type}
            </div>
            <div class="question-container">
              <div class="question">
                <p>WTC:</p>
                <input type="text" id="answer1" maxlength="3" placeholder="WTC">
              </div>
              <div class="question">
                <p>MAX FL:</p>
                <input type="number" id="answer2" placeholder="FL">
              </div>
              <div class="question">
                <p>Avg. Cruising speed:</p>
                <input type="text" id="answer3a" placeholder="Speed min">
                <input type="text" id="answer3b" placeholder="Speed max">
              </div>
            </div>
            <div id="controls-container">
            <div id="counter">${currentAirplaneIndex + 1}/${airplanes.length}</div>
            <button onclick="nextCard()">Next card</button>
            <button id="reset-button" onclick="resetGame()">Restart</button>
            <button id="reset-button" onclick="hint()">Help</button>
            </div>
            `;
        } else {
            let alertMessage = 'Hibás válaszok:\n';
            mistakesList.sort((a, b) => a.type.localeCompare(b.type));
            mistakesList.forEach(item => {
            alertMessage += `${item.type} x ${item.count}\n`;
        });
        alert(alertMessage);
            //alert('Gratulálok, minden repülőgépvel végeztél!');
        }
    } else {
        mistake ++;
        mistakess.innerHTML = 'Hibák: ' + mistake;
        // Helytelen válasz. Az érintett input mezőt pirossá változtatjuk
        if (answer1.value.toUpperCase() !== airplanes[currentAirplaneIndex].wakeCategory) {
            answer1.style.borderColor = 'red';
        }
        if (parseInt(answer2.value) !== airplanes[currentAirplaneIndex].maxCruisingLevel) {
            answer2.style.borderColor = 'red';
        }
        if (answer3a.value !== airplanes[currentAirplaneIndex].cruisingspeedlow) {
            answer3a.style.borderColor = 'red';
        }
        if (answer3b.value !== airplanes[currentAirplaneIndex].cruisingspeedhigh) {
            answer3b.style.borderColor = 'red';
        }

        const currentAirplaneType = airplanes[currentAirplaneIndex].type;
        const index = mistakesList.findIndex(item => item.type === currentAirplaneType);

        if (index !== -1) {
            mistakesList[index].count++;
        } else {
            mistakesList.push({ type: currentAirplaneType, count: 1 });
        }
    }


    
}
