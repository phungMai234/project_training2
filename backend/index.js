const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
var _ = require('lodash');

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/request/device_summary', (req, res) => {
  setTimeout(
    () => {
      res.status(200).send({
        iOS: 40,
        android: 60
      })
    }, 0)
});
app.get("/request/ranking", (req, res) => {
  setTimeout(() => {
    res.status(200).send([20, 4, 5, 7, 2, 4, 8]
    )
  }, 0)
})
app.get("/request/device_hour", (req, res) => {
  setTimeout(() => {
    const listHour = _.map(
      ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      (day) => ({
        name: day,
        data: _.map(_.range(0, 24), time => ({
          x: `${time}:00`,
          y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
        }))
      })
    )
    res.status(200).send(listHour);
  }, 0)
})
app.listen(port, host, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`your port and host is ${port} ${host}`)
  }
});

