
import {main} from "mocha/lib/cli/index.js";

const TimeStart = performance.now();
main()
const TimeEnd = performance.now();
console.log("Excution time " + (TimeEnd - TimeStart) + " ms");


