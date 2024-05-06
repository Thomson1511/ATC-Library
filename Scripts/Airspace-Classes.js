const classes = [
    { class: 'A-IFR', Separation: 'All', Service: 'ATC', Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'No'},
    { class: 'B-IFR', Separation: 'All', Service: 'ATC', Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'No'},
    { class: 'C-IFR', Separation: ['IFR-from-IFR', 'IFR-from-VFR'], Service: 'ATC', Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'No'},
    { class: 'D-IFR', Separation: 'IFR-from-VFR', Service: ['ATC', 'TIaVFR', 'TAor'], Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'Yes'},
    { class: 'E-IFR', Separation: 'IFR-from-VFR', Service: ['ATC', 'TIafap'], Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'Yes'},
    { class: 'F-IFR', Separation: 'Not-provided', Service: ['ADVS', 'FIS'], Radio: 'Continuous air-ground communications if participationg in ADVS, all IFR flights capable of estabilishing air-ground voice communications', Clearence: 'false',
    Speed: 'Yes'},
    { class: 'G-IFR', Separation: 'Not-provided', Service: 'FIS', Radio: 'Capable of estabilishing air-ground voice communications', Clearence: 'false',
    Speed: 'Yes'},

    { class: 'B-VFR', Separation: 'All', Service: 'ATC', Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'No'},
    { class: 'C-VFR', Separation: 'IFR-from-VFR', Service: ['ATC', 'TIaVFR', 'TAor'], Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'Yes'},
    { class: 'D-VFR', Separation: 'Not-provided', Service: ['ATC', 'TIaAF', 'TAor'], Radio: 'Continuous air-ground', Clearence: 'true',
    Speed: 'Yes'},
    { class: 'E-VFR', Separation: 'Not-provided', Service: 'TIafap', Radio: 'Not required', Clearence: 'false',
    Speed: 'Yes'},
    { class: 'F-VFR', Separation: 'Not-provided', Service: 'FIS', Radio: 'Not required', Clearence: 'false',
    Speed: 'Yes'},
    { class: 'G-VFR', Separation: 'Not-provided', Service: 'FIS', Radio: 'Not required', Clearence: 'false',
    Speed: 'Yes'},
];


let currentClassIndex = 0;
let ClassText;

function displayCurrentClass() {
    const currentClass = classes[currentClassIndex];
    ClassText.textContent = currentClass.class;
}

document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code goes here
    ClassText = document.getElementById('current-class');

    displayCurrentClass();
  });


function nextClass(){

    //Konstansok:
    let isSeparationGood;
    let isServiceGood;
    let isRadioGood;
    let isClearenceGood;
    let isSpeedGood;
    const currentClass = classes[currentClassIndex];
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Separation check
    var checkedSeparation = [];
    var checkboxes = document.querySelectorAll('.sepcheck');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedSeparation.push(checkbox.value);
        }
    });
    // Konvertáljuk a currentClass.Separation értéket listává
    const currentSeparationList = Array.isArray(currentClass.Separation) ? currentClass.Separation : [currentClass.Separation];
    // Ellenőrizd, hogy az értékek megegyeznek-e
    if (checkedSeparation.length === currentSeparationList.length && checkedSeparation.every((value, index) => value === currentSeparationList[index])) {
        isSeparationGood = true;
    } else {
        isSeparationGood = false;
    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Service check
    var checkedService = [];
    var serviceCheckboxes = document.querySelectorAll('.servcheck');
    serviceCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedService.push(checkbox.value);
        }
    });
    // Konvertáljuk a currentClass.Service értéket listává
    const currentServiceList = Array.isArray(currentClass.Service) ? currentClass.Service : [currentClass.Service];
    // Ellenőrizd, hogy az értékek megegyeznek-e
    if (checkedService.length === currentServiceList.length && checkedService.every((value, index) => value === currentServiceList[index])) {
        isServiceGood = true;
    } else {
        isServiceGood = false;
    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Radio check
    const selectedRadio = document.getElementById('radio-select').value;
    const currentRadio = currentClass.Radio;
    if (selectedRadio == currentRadio){
        isRadioGood = true;
    } else {
        isRadioGood = false;
    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Clearence check
    /*const selectedClearence = document.querySelector('input[name="atc-clearance"]:checked').value;
    const currentClearence = currentClass.Clearence;
    if (selectedClearence == currentClearence){
        isClearenceGood = true;
    } else {
        isClearenceGood = false;
    }*/
    const selectedValueClearence = document.querySelector('input[name="atc-clearance"]:checked');
    const currentClearence = currentClass.Clearence;
    if(selectedValueClearence){
        var selectedClearence = selectedValueClearence.value;
    } else {
        alert("Válassz Clearencet!");
    }
    if (selectedClearence == currentClearence){
        isClearenceGood = true;
    } else {
        isClearenceGood = false;
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Speed check
    /*const selectedSpeed = document.querySelector('input[name="atc-speed"]:checked').value;
    const currentSpeed = currentClass.Speed;
    if (selectedSpeed == currentSpeed){
        isSpeedGood = true;
    } else {
        isSpeedGood = false;
    }*/

    const selectedValueSpeed = document.querySelector('input[name="atc-speed"]:checked');
    const currentSpeed = currentClass.Speed;
    if(selectedValueSpeed){
        var selectedSpeed = selectedValueSpeed.value;
    } else {
        alert("Válassz Speedet!");
    }
    if (selectedSpeed == currentSpeed){
        isSpeedGood = true;
    } else {
        isSpeedGood = false;
    }

    const isAllCorrect = isSeparationGood && isServiceGood && isRadioGood && isClearenceGood && isSpeedGood;

    //Ellenőrzések:

    /*console.log(checkedSeparation)
    console.log(currentClass.Separation)
    console.log('Separation:')
    console.log(isSeparationGood);
    console.log('Service:')
    console.log(isServiceGood);
    console.log('Radio:')
    console.log(isRadioGood);
    console.log(selectedRadio)
    console.log(currentRadio)
    console.log('Clearence:')
    console.log(selectedClearence)
    console.log(currentClearence)
    console.log(isClearenceGood)
    console.log('Speed:')
    console.log(selectedSpeed)
    console.log(currentSpeed)
    console.log(isSpeedGood)
    console.log(isAllCorrect);*/

    function resetThings(){
        var radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.checked = false;
            });
        var checks = document.querySelectorAll('input[type="checkbox"]');
        checks.forEach(check => {
            check.checked = false;
        });
        var selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0; // Alapértelmezett (első) érték kiválasztása
  });
    }

    if (isAllCorrect){
        resetThings();
        currentClassIndex += 1;
        displayCurrentClass();
    } else {
        alert('Hibáztál!')
        resetThings();
    }
    
}




