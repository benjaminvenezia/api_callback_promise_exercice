const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    })
    
    request.open('GET', resource);
    request.send();
};
/* Cela s'appelle un callback hell, c'est une mauvaise pratique, car le code et peu lisible et peu scalable. */
getTodos('todos/luigi.json', (err, data) => { //Il y a une fonction en paramètre ici
    console.log(data);
    getTodos('todos/mario.json',(err, data) => {
        console.log(data);
        getTodos('todos/benjamin.json', (err, data) => {
            console.log(data);
        });
    });
});



 