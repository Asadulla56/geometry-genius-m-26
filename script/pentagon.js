function pentagonCalculatorArea() {
    const parameter = getInputValueById('pentagon-para');
    const apothem = getInputValueById('pentagon-apothem');

    const area = 0.5 * parameter * apothem;
    setInnerTextById('pentagon-area', area)

}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area
}