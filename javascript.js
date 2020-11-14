//Initiate event listeners
let colourPicker1 = document.getElementById('colourPicker1');
colourPicker1.addEventListener('input', changeColour);

let colourPicker2 = document.getElementById('colourPicker2');
colourPicker2.addEventListener('input', changeColour);

let colourText = document.getElementsByTagName('p')[0];
colourText.addEventListener('click', clipboardCopy);

let button = document.getElementById('randButton');
button.addEventListener('click', randColor);

//Change background gradient colours based on colours picked
function changeColour() {
    document.body.style.background = 'linear-gradient(to right,' + colourPicker1.value + ',' + colourPicker2.value + ')';
    colourText.textContent = document.body.style.background;
}

//Generate random colours for gradient
function randColor() {
    
    let randNums = [];

    //Create random RGB numbers
    for (let i = 0; i < 7; i++) {
        randNums.push(Math.floor(Math.random()*256));
    }

    //Assign RGB numbers to variable and update background
    let randColour = 'linear-gradient(to right, rgb(' + randNums[0] + ',' + randNums[1] + ',' + randNums[2] + '), rgb(' + randNums[3] + ',' + randNums[4] + ',' + randNums[5] + ')';
    document.body.style.background = randColour;
    colourText.textContent = document.body.style.background;

    //Update colour picker input to random colour
    colourPicker1.value = RGBToHex(randNums[0],randNums[1],randNums[2]);
    colourPicker2.value = RGBToHex(randNums[3],randNums[4],randNums[5]);
}

//Convert RBG to HEX value
function RGBToHex(r,g,b) {
    
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1) {
      r = '0' + r;
    };

    if (g.length == 1) {
        g = '0' + g;
    };

    if (b.length == 1) {
      b = '0' + b;
    };
  
    return '#' + r + g + b;

}

//Copy linear gradient to clipboard when clicked
function clipboardCopy() {

    let range = document.createRange();

    //Select linear gradient text
    range.selectNode(document.getElementById('copyCol'));

    //Remove ranges and add selected node to range and selection
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    //Copy selection
    document.execCommand('copy');

    window.getSelection().removeAllRanges();

}