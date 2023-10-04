const getTodo = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('Could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

console.log(1);
console.log(2);

getTodo('todo1.JSON', (err, data) => {
  console.log(data);
  getTodo('todo2.JSON', (err, data) => {
    console.log(data);
  })
});

console.log(3);
console.log(4);