import { displayPoints } from "./uiControl.js";

let points = 0;

function addPoints() {
    points += 20;
    displayPoints(points);
    console.log(points);
    return points;
}

function resetPoints(){
    points = 0;
}



export { addPoints, resetPoints };