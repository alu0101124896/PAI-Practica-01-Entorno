/**
 * @author       F. de Sande
 * @since 27.01.2020
 * @requires     /home/fsande/doc/clases/PAI/JavaScript/nodejs-examples/node_modules/readline-sync
 * 
 * Compute PI 
 * Uses readlineSync and console.log for input/output
 */

const readlineSync = require('/home/fsande/.node_modules_global/lib/node_modules/readline-sync/');

let steps = 0;
function calculatePI() {
  let steps = readlineSync.question('Enter number of steps: ');
  if (steps > 0) {
    let Pi = 0;
    let n = 1;
    for (i = 0; i < steps; i++) {
      Pi = Pi + (4 / n) - (4 / (n + 2));
      n += 4;
			debugger;
    }
  console.log(Pi);
  }
  else {
    console.log("Canceled or Error in input: Input must be positive.");
		}
}

calculatePI();
