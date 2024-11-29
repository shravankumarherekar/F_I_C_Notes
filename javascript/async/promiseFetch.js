function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function promiseFetchdata(){
    return new Promise((resolve,reject)=>{
        fetch('jsonplaceholder')
        .then(response=>{
            if(!response.ok){
                throw new error(error,'this is calling failed')
            }
            return response.json();
        })
        .then(data=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error)
        })
    })
 }   

 promiseFetchdata()
 .then(data=>{
    console.log('data',data);
 })
 .catch(error=>{
    console.log('error ',error)
 })

// Example usage with Promises
fetchDataWithPromise()
    .then(data => {
        console.log('Data fetched with Promises:', data);
    })
    .catch(error => {
        console.error('Error fetching data with Promises:', error);
    });

