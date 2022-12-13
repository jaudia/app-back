const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors());

const port = process.env.PORT_BACKEND;

console.log(process.env.PRUEBA_VARIABLE);
console.log(port);

app.get('/', (req, res) => {
  res.json({ msg: 'mensaje desde el backend!!' });
  // res.send('PRUEBA DESDE EL BACK!!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
