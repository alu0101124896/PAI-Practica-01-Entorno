/**
   @author       F. de Sande
   @since 30.ene.2020
   
   https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/ 
  
   Example of usage of command line arguments

   Passing in arguments via the command line is an extremely basic programming task, and a necessity 
   for anyone trying to write a simple Command-Line Interface (CLI). 
   In Node.js, as in C and many related environments, all command-line arguments received by the shell 
   are given to the process in an array called argv (short for 'argument values').

   Execute this program as: node commandLineArguments.js A B C 1 2 3 4
   and check the program output to understand it

   Take into account that the elements in process.argv array are strings
 */

console.log(process.argv);
for (let i = 2; i < process.argv.length; i++) {
  console.log(`param ${i - 1} is: ` + process.argv[i] + ' ' + typeof process.argv[i]);
}


