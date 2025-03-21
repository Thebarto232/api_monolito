// fetch("http://localhost:3000/posts").then((datos)=>{
//   const posts=datos.json().then((posts)=>{
//     console.log(posts);
    
//   });
  
// });

  

const guardar=()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method: 'POST',
    body: JSON.stringify({
      title: 'ADSO2894667',
      body: 'johan',
      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

guardar();