const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
let _ = require('lodash');

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/request/device_summary/', (req, res) => {

  let {startDate, endDate} = req.query;
  let arr = req.query.arrayOS.split(',');

  if (!startDate || !endDate) {
    return res.status(400).send(send({
      success: "fail",
      messages: "Complete end date and start date"
    }))
  }
  setTimeout(
    () => {
      res.status(200).send(
        {
          success: "true",
          data: _.map(arr, os => ({
            x: os,
            y: _.random(0, 100)
          }))
        })
    }, 2000)
});
app.get("/request/ranking", (req, res) => {
  let {startDate, endDate} = req.query;
  if (!startDate || !endDate) {
    return res.status(400).send({
      success: "fail",
      messages: "Complete end date and start date"
    })
  } else {
    setTimeout(() => {
      let arr = []
      for (let i = 0; i < 7; i++) {
        arr.push(_.random(0, 20))
      }
      res.status(200).send(
        arr
      )
    }, 3000)
  }

})
app.get("/request/device_hour", (req, res) => {
  let {startDate, endDate} = req.query;

  if (!startDate || !endDate)
    return res.status(400).send(send({
      success: "fail",
      messages: "Complete end date and start date"
    }))

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

