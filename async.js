/* fetch('todo1.json').then((response) => {
console.log('resolved', response);
return response.json();
}).then(data => {
  console.log(data);
}).catch((err)=> {
  console.log('rejected', err);
}); */

const getTodo = async() => {

  const response = await fetch('todo1.json');

  if(response.status !== 200){
    throw new Error("can not fetch the data");
  }
  
  const data = await response.json();
  
  return data;
};

getTodo()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));