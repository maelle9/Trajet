
import {main} from "mocha/lib/cli/index.js";

// Permet de calculer le temps d'excution du programme

const TimeStart = performance.now();
main()
const TimeEnd = performance.now();
console.log("Excution time " + (TimeEnd - TimeStart) + " ms");


