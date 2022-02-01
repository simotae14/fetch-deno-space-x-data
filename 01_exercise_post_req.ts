async function examplePost() {
    const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            name: "Elon Musk",
            jpb: "billionaire"
        })
    });
    const serverResponse = await response.json();
    console.log("serverResponse", serverResponse);
}

examplePost();
// run with
// deno run --allow-net=reqres.in 01_exercise_post_req.ts

// first response
// serverResponse { id: "667", createdAt: "2022-02-01T14:56:35.609Z" }

// passing the header
/* headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
*/
/*
serverResponse {
  name: "Elon Musk",
  jpb: "billionaire",
  id: "994",
  createdAt: "2022-02-01T14:59:11.149Z"
}
*/