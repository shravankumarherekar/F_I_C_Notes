function throttle(func, delay) {
    let throttled = false;
    return function(...args) {
        if (!throttled) {
            func.apply(this, args);
            throttled = true;
            setTimeout(() => {
                throttled = false;
            }, delay);
        }
    };
}

// Example usage:
const throttledFunction = throttle(() => {
    console.log('Scroll event throttled');
    // Perform actions related to scroll event here
}, 1000); // Throttle time of 1000 milliseconds

// Simulate scroll event firing multiple times
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        throttledFunction();
    }, i * 200); // Simulating multiple scroll events with 200 milliseconds interval
}
