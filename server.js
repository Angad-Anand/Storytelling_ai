const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { OpenAIApi } = require('openai');

openai.apiKey = "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";

app.use(express.json())

app.use(bodyParser.json());

app.post('/search', (req, res) => {
    const { query } = req.body
    openai.completions.create({
      prompt: `search ${query}`,
      model: "text-davinci-002",
      temperature: 0.5
    }).then(response => {
      res.send(response.choices[0].text)
    });
  
  })


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
