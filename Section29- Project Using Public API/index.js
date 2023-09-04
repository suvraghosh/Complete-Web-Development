import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const API_URL = "https://newsapi.org/v2/top-headlines";
const yourAPIKey = "1333597e8e5042aa9f0a79556432ca07"


app.get("/", async (req,res)=>{
    try {
        const result1 = await axios.get(API_URL,{
            params:{
                sources: "bbc-news",
                apiKey : yourAPIKey,
            }
        })
        const result2 = await axios.get(API_URL,{
            params:{
                country: "us",
                apiKey : yourAPIKey,
            }
        })
        res.render("index.ejs",{
            articles: result1.data.articles,
            usArticles: result2.data.articles,
        })
    } catch (error) {
        res.status(404).send("Error")
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})