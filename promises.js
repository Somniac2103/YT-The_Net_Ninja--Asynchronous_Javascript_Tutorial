const getTodo = (resource) => {
  
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.responseText);
        resolve(data);
      } else if(request.readyState === 4){
        reject('error getting resources')
      }
    });
  
    request.open('GET', resource);
    request.send();
  });
};
 

getTodo('todo1.json').then(data => {
  console.log("Promise 1 resolved: ", data);
  return getTodo('todo2.json');
}).then (data => {
  console.log("Promise 2 resolved: ", data);
}).catch(err =>{
  console.log('Promise rejected:', err);
});