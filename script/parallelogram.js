function parallelograCalculator(){
    // base
    const parallelograInput = document.getElementById('para-base')
    const parallelograBase = parallelograInput.value;
    const base = parseFloat(parallelograBase);
    console.log(base);

// height 
    const parallelograHeightInput = document.getElementById('para-height');
    const parallelograHeight = parallelograHeightInput.value;
    const height = parseFloat(parallelograHeight);
    console.log(height);


    //area 

    const area = base * height;
    console.log(area);


    // display value

    const ParallelogramAreaSpan = document.getElementById('Parallelogram-area');
    ParallelogramAreaSpan.innerText = area;
}