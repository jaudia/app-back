const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
require('dotenv').config()

app.use(cors());

console.log(process.env.PRUEBA_VARIABLE);

app.get('/', (req, res) => {
  res.json({ msg: 'mensaje desde el backend!!' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
