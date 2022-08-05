import React, { useEffect, useState } from 'react'
import StatusComp from './StatusComp'
const axios = require('axios');
var numTick = 0;
var secondsLeft = 0;
var countDownDate;
var respList = [0,0,0,0];
function FetchComponents(props) {



  let [data, setData] = useState([])
  async function getNums() {
    axios.get('https://cosmosfinal.herokuapp.com').then(resp => {
      if((parseInt(respList[0]) != parseInt(resp.data[0])) || parseInt(respList[1]) != parseInt(resp.data[1])) {
        var todayDate = new Date()
        todayDate.setSeconds(todayDate.getSeconds() + 10);
        countDownDate = new Date(todayDate).getTime();
        var today = new Date().getTime();

        
      }
      var todayNew = new Date().getTime(); 
      var distance = countDownDate - todayNew;
      secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(secondsLeft)
      respList[0] = resp.data[0]
      respList[1] = resp.data[1]
      respList[2] = resp.data[2]
      respList[3] = resp.data[3]
    });
    data = [{
      "title": "X-Value",
      "id": "xvalue",
      "default":"",
      "timeframes": {
        "weekly": {
          "current": respList[0]
        }
      }
    }, {
      "title": "Y-Value",
      "id": "yvalue",
      "default":"",
      "timeframes": {

        "weekly": {
          "current": respList[1]
        }
      }
    }, {
      "title": "Bike Status",
      "id": "miscvalue",
      "default":"",
      "timeframes": {

        "weekly": {
          "current": respList[2]
        }
      }
    }, {
      "title": "Alert Phone Number",
      "id": "phonevalue",
      "default":"Edit Phone",
      "timeframes": {
        "weekly": {
          "current": respList[3]
        }
      }
    },{
      "title": "Next Update In",
      "default":"",
      "timeframes": {
        "weekly": {
          "current": secondsLeft + " seconds"
        }
      }
    },{
      "title": "Bike",
      "default":"",
      "timeframes": {
        "weekly": {
          "current": numTick
        }
      }
    }];

    setData(data);

  }
  useEffect(() => {
    getNums()
    const interval = setInterval(() => {
      getNums()
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  let displayType = props.displayType
  let colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']

  return (
    <React.Fragment>
      {
        data.map((dataItem, index) => {
          return <StatusComp key={index} type={'Week'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.weekly.previous} type_time={dataItem.timeframes.weekly.current} bgcolor={colors.shift()} default={dataItem.default} id={dataItem.id}/>

        })
      }
    </React.Fragment>
  )
}

export default FetchComponents