function rectabgleCalculator() {

    //lenth calculator
    const rectangleLenthInput = document.getElementById("lenth");
    const lenthInput = rectangleLenthInput.value;
    const lenth = parseFloat(lenthInput);
    console.log(lenth)


    //width calculator
    const rectangleWidthInput = document.getElementById('width')
    const widthInput = rectangleWidthInput.value;
    const width = parseFloat(widthInput);
    console.log(width);


    //calculator rectanglee Area
    area = width * lenth;
    console.log(' The rectangle area is', area);

    // display the rectangle value
    const recantagleAreaSpan = document.getElementById('recantagle-area');
    recantagleAreaSpan.innerText = area;
}