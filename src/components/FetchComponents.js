import React, { useEffect, useState } from 'react'
import StatusComp from './StatusComp'
const axios = require('axios');
var numTick = 0;
var secondsLeft = 0;
var lastHit =  new Date().getTime();
var todayCheck;
var todayDate;
var countDownDate;
var respList = [0,0,0,0,"Connected",0];
function FetchComponents(props) {



  let [data, setData] = useState([])
  async function getNums() {

    todayCheck = new Date().getTime(); 
    var distanceCheck = todayCheck - lastHit;
    var secondsCheck = Math.floor((distanceCheck % (1000 * 60)) / 1000);
    console.log(secondsCheck)
    if(secondsCheck > 15) {
      respList[4] = "Disconnected";
    }
    
    axios.get('https://cosmosfinal.herokuapp.com').then(resp => {
      if((parseInt(respList[0]) != parseInt(resp.data[0])) || parseInt(respList[1]) != parseInt(resp.data[1])) {
        respList[4] = "Connected";
        var todayDatehit = new Date()
        lastHit = new Date(todayDatehit).getTime();
        todayDate = new Date()
        todayDate.setSeconds(todayDate.getSeconds() + 8);
        countDownDate = new Date(todayDate).getTime();
      }
      var todayNew = new Date().getTime(); 
      var distance = countDownDate - todayNew;
      secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
      if(secondsLeft < 0) {
        secondsLeft = 0;
      }
      respList[0] = resp.data[0]
      respList[1] = resp.data[1]
      respList[2] = resp.data[2]
      respList[3] = resp.data[3]
      respList[5] = resp.data[4]
    });
 
    data = [{
      "title": "X-Value",
      "id": "xvalue",
      "textbool":true,
      "default":"",
      "timeframes": {
        "weekly": {
          "current": respList[0]
        }
      }
    }, {
      "title": "Y-Value",
      "id": "yvalue",
      "textbool":true,
      "default":"",
      "timeframes": {

        "weekly": {
          "current": respList[1]
        }
      }
    }, {
      "title": "Bike Status",
      "id": "miscvalue",
      "textbool":true,
      "default":"",
      "timeframes": {

        "weekly": {
          "current": respList[2]
        }
      }
    }, {
      "title": "Alert Phone Number",
      "id": "phonevalue",
      "textbool":false,
      "default":"Edit Phone",
      "timeframes": {
        "weekly": {
          "current": respList[3]
        }
      }
    },{
      "title": "Next Update In",
      "default":"",
      "textbool":true,
      "timeframes": {
        "weekly": {
          "current": secondsLeft + " seconds"
        }
      }
    },{
      "title": "API Status",
      "default":"",
      "textbool":true,
      "timeframes": {
        "weekly": {
          "current": respList[4]
        }
      }
    },
    {
      "title": "Moved Count",
      "default":"",
      "textbool":true,
      "timeframes": {
        "weekly": {
          "current": respList[5]
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
  let colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)','hsl(95, 99%, 85%)']

  return (
    <React.Fragment>
      {
        data.map((dataItem, index) => {
          return <StatusComp key={index} type={'Week'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.weekly.previous} type_time={dataItem.timeframes.weekly.current} bgcolor={colors.shift()} default={dataItem.default} id={dataItem.id} textbool={dataItem.textbool}/>

        })
      }
    </React.Fragment>
  )
}

export default FetchComponents