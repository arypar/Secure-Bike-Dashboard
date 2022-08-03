import React, { useEffect, useState } from 'react'
import StatusComp from './StatusComp'
const axios = require('axios');
var numTick = 0;
function FetchComponents(props) {
    let [data, setData] = useState([])
    async function getNums() {
      numTick = numTick + 1
    data = [{
      "title": "Bike",
      "timeframes": {
        "weekly": {
          "current": numTick,
          "previous": numTick
        }
      }
    }, {
      "title": "Bike",
      "timeframes": {
      
        "weekly": {
          "current": numTick,
          "previous": numTick
        }
      }
    }, {
      "title": "Bike",
      "timeframes": {
     
        "weekly": {
          "current": numTick,
          "previous": numTick
        }
      }
    }, {
      "title": "Bike",
      "timeframes": {
        "weekly": {
          "current": numTick,
          "previous": numTick
        }
      }
    }, {
      "title": "Bike",
      "timeframes": {
        "weekly": {
          "current": numTick,
          "previous": numTick
        }
      }
    }, {
      "title": "Bike",
      "timeframes": {
        "weekly": {
          "current": numTick,
          "previous": numTick
        }
      }
    }]; 

setData(data);

    }
    useEffect(() => {
      getNums()
      const interval=setInterval(()=>{
        getNums()
       },1000)
       return()=>clearInterval(interval)
         }, [])
    let displayType = props.displayType
    let colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']
 
  return (
    <React.Fragment>
      {
        data.map((dataItem, index) => {
          return <StatusComp key={index} type={'Week'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.weekly.previous} type_time={dataItem.timeframes.weekly.current} bgcolor={colors.shift()}/>

        })
      }
    </React.Fragment>
  )
}

export default FetchComponents