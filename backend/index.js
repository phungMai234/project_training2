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
  let {startDate, endDate} = req.query;
  if (!startDate || !endDate)
    throw new Error("Something missing");

  setTimeout(
    () => {
      let n1 = _.random(0, 100);
      let n2 = 100 - n1;
      res.status(200).send({
        iOS: n1,
        android: n2
      })
    }, 1000)
});
app.get("/request/ranking", (req, res) => {
  let {startDate, endDate} = req.query;
  if (!startDate || !endDate)
    throw new Error("Something missing");
  setTimeout(() => {
    let arr = []
    for (let i = 0; i < 7; i++) {
      arr.push(_.random(0, 20))
    }
    res.status(200).send(
      arr
    )
  }, 3000)
})
app.get("/request/device_hour", (req, res) => {
  let {startDate, endDate} = req.query;
  if (!startDate || !endDate)
    throw new Error("Something missing");

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
  }, 2000)
})
app.listen(port, host, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`your port and host is ${port} ${host}`)
  }
});

