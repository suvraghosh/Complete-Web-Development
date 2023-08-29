import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "suvra";
const yourPassword = "hellosuvra";
const yourAPIKey = "f7d795f3-2040-4704-ad9f-fc847afb80d2";
const yourBearerToken = "312d020d-e72c-492b-9e03-e8b9413622ae";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}random`);
    const jsonData = JSON.stringify(response.data);
    res.render("index.ejs",{content: jsonData}); 
  } catch (error) {
    res.status(400).send("send:",error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get(`${API_URL}all`,{
      auth:{
        username: yourUsername,
        password: yourPassword,
      },
      params: {
        page: 2,
      }
    });
    res.render("index.ejs",{content: JSON.stringify(response.data)});    
  } catch (error) {
    res.status(400).send("send:",error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(`${API_URL}filter`,{
      params:{
        score: 7,
        apiKey: yourAPIKey,
      }
    });
    res.render("index.ejs",{
      content: JSON.stringify(response.data)
    });
  } catch (error) {
    res.status(400).send("Error:",error.message)
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get(`${API_URL}secrets/42`,{
      headers:{
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    res.render("index.ejs",{
      content: JSON.stringify(response.data)
    });
  } catch (error) {
    res.status(400).send("Error:",error.message)
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
