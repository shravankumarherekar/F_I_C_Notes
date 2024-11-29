async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

// Example usage with async/await
(async () => {
    try {
        const data = await fetchDataWithAsyncAwait();
        console.log('Data fetched with async/await:', data);
    } catch (error) {
        console.error('Error fetching data with async/await:', error);
    }
})();
