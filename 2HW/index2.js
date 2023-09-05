var width = 7; 
var height = 5; 
var rectangle = '';
for (var i = 0; i < height; i++) {
    var row = '';
    for (var j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            row += '*';
        } else if (j === width - 2) {
            row += '&nbsp;'; 
        } else {
            row += '&nbsp;&nbsp;'; 
        }
    }
    rectangle += row + '<br>';
}

document.getElementById('rectangle').innerHTML = rectangle;

var heightTriangle = 5; 

var triangle = '';
for (var i = 0; i < heightTriangle; i++) {
    var row = '';
    for (var j = 0; j <= i; j++) {
        if (j === 0 || j === i || i === heightTriangle - 1 && j !== 4) {
            row += '*';
        } else {
            row += '&nbsp;'; 
        }
    }
    triangle += row + '<br>';
}

document.getElementById('triangle').innerHTML = triangle;

var sideLength = 5; 

var equilateralTriangle = ''; 
for (var i = 0; i < sideLength; i++) {
    var row = '';
    for (var j = 0; j < 2 * sideLength - 1; j++) {
        if (i === sideLength - 1 || j === sideLength - 1 - i || j === sideLength - 1 + i) {
            row += '*';
        } else {
            row += '&nbsp;&nbsp;'; 
        }
    }
    equilateralTriangle += row + '<br>';
}

document.getElementById('equilateralTriangle').innerHTML = equilateralTriangle; 




var heightRomb = 5; 

var romb = '';
for (var i = 0; i < heightRomb; i++) {
    var row = '';
    for (var j = 0; j < heightRomb - i - 1; j++) {
        row += '&nbsp;'; 
    }
    for (var k = 0; k < 2 * i + 1; k++) {
        if (k === 0 || k === 2 * i) {
            row += '*';
        } else {
            row += '&nbsp;'; 
        }
    }
    romb += row + '<br>';
}

for (var i = heightRomb - 2; i >= 0; i--) {
    var row = '';
    for (var j = 0; j < heightRomb - i - 1; j++) {
        row += '&nbsp;'; 
    }
    for (var k = 0; k < 2 * i + 1; k++) {
        if (k === 0 || k === 2 * i) {
            row += '*';
        } else {
            row += '&nbsp;'; 
        }
    }
    romb += row + '<br>';
}

document.getElementById('romb').innerHTML = romb;
