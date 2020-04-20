const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors())

app.use('/request/device_summary', (req, res) => {
  setTimeout(
    () => {
      res.status(200).send({
        iOS: 40,
        android: 60
      })
    }, 10000)


});

app.listen(port, host, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`your port and host is ${port} ${host}`)
  }
});

