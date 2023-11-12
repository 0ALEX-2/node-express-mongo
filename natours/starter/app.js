const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.status(200).json({ message:'Helo from the server side!',app:"Natures"})
})

app.listen(port, (err, data) => {
    console.log(`App is running on port ${port} ...`);
})
