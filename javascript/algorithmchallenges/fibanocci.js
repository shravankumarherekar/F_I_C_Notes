// Fibonacci sequence using recursion without memoization
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Fibonacci sequence using memoization
function fibonacciMemoization(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
    return memo[n];
}

// Example usage:
const n = 10;

// Using recursion without memoization
console.log("Fibonacci sequence using recursion:");
for (let i = 0; i <= n; i++) {
    console.log(`Fibonacci(${i}) = ${fibonacciRecursive(i)}`);
}

// Using memoization
console.log("\nFibonacci sequence using memoization:");
for (let i = 0; i <= n; i++) {
    console.log(`Fibonacci(${i}) = ${fibonacciMemoization(i)}`);
}


