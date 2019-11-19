// Line Analyzer
'use strict';
// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);
    

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x , pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x ,pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x ,pt2y);
    document.getElementById('equation').innerHTML = getEquation(pt1x ,pt1y , pt2x , pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}


function getSlope(pt1x, pt1y, pt2x, pt2y) {
    let rise = pt2y - pt1y;
    let run = pt2x - pt1x;
    let slope = rise/run
    return slope;
}


function getDescription(x1,y1,x2,y2) {

    let theSlope = getSlope(x1,y1,x2,y2);
    if (theSlope == "Infinity") {
        return "vertical";

    }else if  (slope > 0 ) {
        return "up";


    }else if (slope < 0 ) {
        return "down";


    }else if (slope == 0) {
        return "horizontal";

    }else {
        return "No slope";
    }

}



function getPointLocation (x , y ) {
    if ( x == 0 && y == 0) {
        return "origin";

    } else if (x == 0 ) {
        return "xaxis";

    } else if (y == 0) {
        return "yaxis";

    } else if (x > 0 && y > 0) {
        return "quadrant1";

    } else if (x < 0 && y > 0) {
        return "quadrant2";

    } else if (x < 0 && y < 0 ) {
        return "quadrant3";

    } else if (x > 0 && y < 0) {
        return "quadrant4";
    }






}


function getEquation( x, x1 , y, y1) {
    
    let slope = getSlope(x, x1 , y, y1);

    if(getDescription(x, x1 , y, y1) == 'vertical') {
        return 'x = ' + x1;

    }
    if (getDescription(x, x1 , y, y1) == 'horizontal') {
        return 'y = ' + y1;

    }else {
        let val = y - (slope * x);
        return 'y' +  ' = ' +  slope + 'x' + ' + ' +  val ;

    }


    


    



}






