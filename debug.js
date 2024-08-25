// app.js
function add(a, b) {
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
