import React, { useEffect, useState } from 'react'
import StatusComp from './StatusComp'
const axios = require('axios');
var numTick = 0;
var respList = [];
function FetchComponents(props) {



  let [data, setData] = useState([])
  async function getNums() {
    axios.get('https://cosmosfinal.herokuapp.com').then(resp => {
      respList[0] = resp.data[0]
      respList[1] = resp.data[1]
      respList[2] = resp.data[2]
      respList[3] = resp.data[3]
    });
    data = [{
      "title": "X-Value",
      "default":"",
      "timeframes": {
        "weekly": {
          "current": respList[0]
        }
      }
    }, {
      "title": "Y-Value",
      "default":"",
      "timeframes": {

        "weekly": {
          "current": respList[1]
        }
      }
    }, {
      "title": "Misc Value",
      "default":"",
      "timeframes": {

        "weekly": {
          "current": respList[2]
        }
      }
    }, {
      "title": "Alert Phone Number",
      "default":"Edit Phone",
      "timeframes": {
        "weekly": {
          "current": respList[3]
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
    }, 100)
    return () => clearInterval(interval)
  }, [])
  let displayType = props.displayType
  let colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']

  return (
    <React.Fragment>
      {
        data.map((dataItem, index) => {
          return <StatusComp key={index} type={'Week'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.weekly.previous} type_time={dataItem.timeframes.weekly.current} bgcolor={colors.shift()} default={dataItem.default}/>

        })
      }
    </React.Fragment>
  )
}

export default FetchComponents