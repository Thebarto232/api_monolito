// fetch("http://localhost:3000/posts").then((datos) => {
//   const posts = datos.json().then((posts) => {
//     console.log(posts);
//   });
// });

const guardar = () => {
  fetch(`http://localhost:3000/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "ADSO2894667",
      body: "johan",
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  // fetch("http://localhost:3000/comments", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     body: "juan",
  //     postId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // fetch("http://localhost:3000/profile", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     body: "carlos",
  //     postId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
};

guardar();
