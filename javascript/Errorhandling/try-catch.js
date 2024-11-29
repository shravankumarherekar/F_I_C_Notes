// Function to divide two numbers and handle errors
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        // Handle the error
        console.error("Error occurred:", error.message);
        throw error; // Propagate the error to the calling code
    }
}

// Example usage
try {
    const result = divideNumbers(10, 0); // Attempting to divide by zero
    console.log("Result:", result); // This line will not be executed
} catch (error) {
    // Catching and handling the propagated error
    console.error("Error caught in main code:", error.message);
}
