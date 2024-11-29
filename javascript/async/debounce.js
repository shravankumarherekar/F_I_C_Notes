function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
const debouncedFunction = debounce(searchQuery => {
    console.log('Search query:', searchQuery);
    // Perform search or update UI here
}, 300); // Debounce time of 300 milliseconds

// Simulate user input (e.g., search input)
debouncedFunction('apple');
debouncedFunction('orange');
debouncedFunction('banana');
