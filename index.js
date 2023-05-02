//import { Configuration, OpenAIApi } from "openai";
const express = require('express')
const { Configuration, OpenAIApi } = require("openai");
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
const port = 3033

app.post('/', async (req, res) =>{
    //res.send('HHello world')
    //const completion = await openai.createChatCompletion({
    const completion = await openai.createCompletion({
        //model: "gpt-3.5-turbo",
        model: "text-davinci-003",
        //Messages: [{role: "user", content: "Hello world"}],
        prompt: "what is the most comomon food to eat in america",
        max_tokens: 70,
        temperature: 0,
    });
    //console.log(completion.data.choices[0].message);
    console.log(completion.data.choices[0].text);
    res.json({
        data: completion.data
    })
});
app.listen(port, () => {
    console.log(`app listing at http://localhost:${port}`)
});