
/*
    The event loop is a fundamental concept in Node.js that allows it to handle asynchronous operations. Node.js is single-threaded, meaning it has a single main thread to execute JavaScript code. However, it can handle multiple operations concurrently thanks to the event loop.

    How the Event Loop Works
       1.Call Stack: This is where function calls are added when they are invoked. The stack follows the Last In, First Out (LIFO) principle.
       2.Event Queue: When asynchronous operations like setTimeout, I/O operations, or HTTP requests are completed, their callbacks are pushed into the event queue.
       3.Event Loop: The event loop constantly checks the call stack and the event queue. If the call stack is empty, it will take the first event from the event queue and push its callback onto the call stack.

       Phases of the Event Loop
      1. Timers: Executes callbacks scheduled by setTimeout() and setInterval()
      2.Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.
      3.Check: Executes callbacks from setImmediate().
      4.Close callbacks: Executes close event callbacks,

*/

//eg
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

setImmediate(() => {
  console.log('Immediate');
});

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

/* explanation
1.Synchronous Code: The first thing that happens is that console.log('Start') is executed, and "Start" is logged to the console. Then, setTimeout is called, which schedules the callback to run after 0 milliseconds but doesn't execute it immediately. Next, setImmediate schedules its callback to run after I/O events. The Promise.resolve().then schedules its callback as a microtask, which will run after the current synchronous code but before setTimeout and setImmediate. Finally, console.log('End') is executed.

2.Microtask Queue: Once the synchronous code is complete, the event loop checks the microtask queue, which contains the resolved promise callback. Thus, "Promise" is logged next.

3.Event Queue: Now, the event loop looks at the event queue. Since setTimeout is a macrotask and has a delay of 0ms, its callback is moved to the event queue and executed before setImmediate. "Timeout" is logged next.

4.Check Phase: Finally, setImmediate's callback is executed, logging "Immediate".


*/