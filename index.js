//import { Configuration, OpenAIApi } from "openai";
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors')

const configuration = new Configuration({
    organization: "org-Ba2LMYQtLcq1u7O1cbFpV4eB",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();



//const { Configuration, OpenAIApi } = require("openai");

//const configuration = new Configuration({
  //apiKey: process.env.OPENAI_API_KEY,
//});
//const openai = new OpenAIApi(configuration);


const app = express()
app.use(bodyParser.json())
app.use(cors())

//app.use(express.json())
//app.use(express.urlencoded({extended: true}))


const port = 3034

app.post('/', async (req, res) =>{
    const { message } = req.body;
    //console.log(message, "message")
    const response = await openai.createCompletion({
        //model: "gpt-3.5-turbo",
        model: "text-davinci-003",
        //Messages: [{role: "user", content: "Hello world"}],
        prompt: `${message}`,
        max_tokens: 70,
        temperature: 0.5,
    }); 
    //console.log(message)
    //console.log(completion.data.choices[0].text);

    //console.log(completion.data.choices[0].message);
    res.json({
        //data: completion.data
        message: response.data.choices[0].text,
    })
});
app.listen(port, () => {
    console.log(`app listing at http://localhost:${port}`)
});
