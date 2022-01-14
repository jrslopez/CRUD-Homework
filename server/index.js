const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.listen(3000, () => {
    console.log("Server is up in port 3000");
})