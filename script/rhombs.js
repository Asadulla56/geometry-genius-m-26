// function rhomobusCalculator(){

//  const base = getRhomusCalculator();
//  console.log(base);
// }

// function getRhomusCalculator(){

//     const rhomusInput = document.getElementById('rhombus-base');
//     const baseinput = rhomusInput.value;
//     const base = parseFloat(baseinput);
//     return base
// }
function rhomobusCalculator() {
    const base = getInputValueById('rhombus-base')
    const height = getInputValueById('rhombus-height');
    const area = 0.5 * base * height;
    // console.log('get the rhombus area :', area)
    setInnerTextById('rhombus-area', area);

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputvalue = parseFloat(inputText);
    return inputvalue
}
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area
}
