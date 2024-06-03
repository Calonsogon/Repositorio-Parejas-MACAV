import { displayPoints } from "./uiControl.js";

let points = 0;

function addPoints() {
    points += 20;
    displayPoints(points);
    return points;
}

function resetPoints(){
    points = 0;
}


export { addPoints, resetPoints };