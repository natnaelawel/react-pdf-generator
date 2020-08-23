const express = require('express')
const cors = require('cors')
const app = express()
const pdf = require('html-pdf')

const pdfTemplate = require('./documents')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("my-cv.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    } else {
      res.send(Promise.resolve());
    }
    // res.json({message: "🙋‍♀️🙋‍♀️🙋‍♀️"})
  });
});

app.get('/fetch-pdf', (req, res)=>{
    res.sendFile(`${__dirname}/my-cv.pdf`);
})

app.listen(process.env.PORT || 5000)