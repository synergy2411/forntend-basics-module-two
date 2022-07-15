export function fetchData() {
    return new Promise(function(resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(function (response) { return response.json() })
            .then(function (data) {
                console.log("DATA : ", data)
                resolve(data)
                
            })
            .catch(console.log)
    })
}

