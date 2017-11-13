const fetch = require("node-fetch");
const obg = {
	"name": "Spongebob & Patric",
	"product": [
			{
				"id": 1,
				"fullName": "Spongebob",
				"bio": "Hey i'm Spongebob",
				"twitterUsername": "@Spongebob",
				"githubUsername": "Spongebob",
				"website": "www.Spongebob.co.uk"
			},
			{
				"id": 2,
				"fullName": "Patric",
				"bio": "Hey i'm Patric",
				"twitterUsername": "@Patric",
				"githubUsername": "Patric",
				"website": "www.Patric.co.uk"
			}
		]
}

const createTodo = () => {
  return fetch("http://localhost:3000/content", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obg)
  }).then(res => res.json()).catch(function(err) {
        console.log(err);
  });
};

// createTodo()