const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT_BACKEND;
require('dotenv').config()

app.use(cors());

console.log(process.env.PRUEBA_VARIABLE);
console.log(process.env.PORT_BACKEND);

app.get('/', (req, res) => {
  res.json({ msg: 'mensaje desde el backend!!' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
