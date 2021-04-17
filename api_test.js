//Uses fetch to get data from the github web API.
//displays information using console.log command.
//created by Paris Klein


const nodeFetch = require("node-fetch");

nodeFetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((res) => console.log(res));
