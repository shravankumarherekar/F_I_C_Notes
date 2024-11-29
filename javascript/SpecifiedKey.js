function groupBy(arr, key) {
    return arr.reduce((result, obj) => {
        const keyValue = obj[key];
        if (!result[keyValue]) {
            result[keyValue] = [];
        }
        result[keyValue].push(obj);
        return result;
    }, {});
}

// Example usage:
const data = [
    { id: 1, name: 'John', city: 'New York' },
    { id: 2, name: 'Jane', city: 'Los Angeles' },
    { id: 3, name: 'Doe', city: 'New York' },
    { id: 4, name: 'Smith', city: 'Chicago' },
];

const groupedData = groupBy(data, 'city');
console.log(groupedData);
