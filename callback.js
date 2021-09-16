
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource');
            }
        });
        
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved', data);
    return getTodos('todos/benjamin.json');
}).then(data => {
    console.log('promise 3 resolved', data);
}).catch(err => {
    console.log('promise rejected', err);
});



/************** Example of promise  *************/
//promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data'); //resolve something or...
//         reject('some error'); //reject something
//     });

// };

// getSomething().then((data) => { //first function (resolve)
//     console.log(data);
// }, (err) => {                      //second function (reject)
//     console.log(err);
// });

//another way to write --^
//better because is easiest to do chaining promises
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => { //reject
//     console.log(err);
// }) 
 