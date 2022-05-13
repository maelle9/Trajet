
// PAS FINI

import {main} from "mocha/lib/cli/index.js";

var TimeStart = performance.now();
main()
var TimeEnd = performance.now();
console.log("Excution time " + (TimeEnd - TimeStart) + " ms");

TimeStart = performance.now();
main()
TimeEnd = performance.now();
console.log("Excution time " + (TimeEnd - TimeStart) + " ms");


