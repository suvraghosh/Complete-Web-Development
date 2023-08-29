import express from "express"
import axios from "axios"

// Create an express app and set the port number.
const app = express();
const port = 3000;

const API_URL = "https://secrets-api.appbrewery.com/random";
// Use the public folder for static files.
app.use(express.static("public"));

//When the user goes to the home page it should render the index.ejs file.
app.get("/",async (req,res)=>{
    try {
        const response = await axios.get(API_URL);
        res.render("index.ejs", {
            secret: response.data.secret,
            user: response.data.username,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

//  axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// Listen on your predefined port and start the server.

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);   //Listening on localhost:8091
})