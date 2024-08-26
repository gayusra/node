

/*Debugging in Node.js is the process of finding and fixing issues or bugs in your code. Node.js provides several tools and techniques for debugging, including using the built-in debugger, console statements, and external debugging tools like the Chrome DevTools.
*/






// app.js
/*function add(a, b) {
    return a + b;
}

console.log('hello')


function main() {
    const x = 5;
    const z = 10;
    const w = x+z;
    console.log(w)
    debugger;
    const y = 3;

    const xy = w+y;
    console.log(xy)
    
    debugger; // Pauses execution here
    
    const sum = add(x, y);
    console.log(`Sum: ${sum}`);
}

main();
*/

console.log('debug testing')
function add(a,b){
    return a+b
}
 debugger;

console.log("debug test")

add(2,2)

// app.js
/*function add(a, b) {
    console.log("Values of a and b:", a, b); // This will print the values of a and b
    return a + b;
}

const result = add(5, 3);
console.log("Result:", result); // This will print the result of the addition*/


// app.js
/*function add(a, b) {
    debugger; // Execution will pause here
    return a + b;
}

const result = add(5, 3);
console.log("Result:", result);
*/
