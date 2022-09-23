function metersToFeets(meters) {
    return (meters * 3.28084).toFixed(3);
}
function feetsToMeters(feets) {
    return (feets * 0.3048).toFixed(3);
}
function litersToGallons(liters) {
    return (liters * 0.264172).toFixed(3);
}
function gallonsTOLiters(gallons) {
    return (gallons * 3.78541).toFixed(3);
}
function kilogramsTOPounds(kilogram) {
    return (kilogram * 2.20462).toFixed(3);
}
function poundsToKilogram(pounds) {
    return (pounds * 0.453592).toFixed(3);
}
function converter() {
    let lengthEl = document.getElementById("length-el");
    let volumeEl = document.getElementById("volume-el");
    let massEl = document.getElementById("mass-el");
    let value = document.getElementById("values").value;
    if (value === " ") {
        value = 0;
    }
    lengthEl.innerHTML = `${value} meters=${metersToFeets(value)} feet 
        || ${value} feets=${feetsToMeters(value)} meters`;
    volumeEl.innerHTML = `${value} liters=${litersToGallons(value)} gallons 
        || ${value} gallons=${gallonsTOLiters(value)} liters`;
    massEl.innerHTML = `${value} kilograms=${kilogramsTOPounds(value)} pounds 
        || ${value} pounds=${poundsToKilogram(value)} kilograms`;

}
