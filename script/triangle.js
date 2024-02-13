function triangleCalculetor(){
    //triangle base
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBase =triangleBaseInput.value;
    const base =parseFloat(triangleBase);
    console.log(base)


    // triangle height
    const triangleHeightInput= document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);
    console.log(height)


    // calaulator triangle area
    const area = 0.5*base*height;
    console.log('The triangle area value ',area)

    //display triangle value
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area; 
}