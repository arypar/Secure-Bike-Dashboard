import React, { useEffect, useState } from 'react'
import StatusComp from './StatusComp'
const axios = require('axios');
function FetchComponents(props) {
    let [data, setData] = useState([])
    async function getNums() {
      axios.get("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=12").then(resp => {
    console.log(resp.data);
    const randArray = resp.data
    data = [{
      "title": "Work",
      "timeframes": {
        "weekly": {
          "current": randArray[0],
          "previous": randArray[1]
        }
      }
    }, {
      "title": "Play",
      "timeframes": {
      
        "weekly": {
          "current": randArray[2],
          "previous": randArray[3]
        }
      }
    }, {
      "title": "Study",
      "timeframes": {
     
        "weekly": {
          "current": randArray[4],
          "previous": randArray[5]
        }
      }
    }, {
      "title": "Exercise",
      "timeframes": {
        "weekly": {
          "current": randArray[6],
          "previous": randArray[7]
        }
      }
    }, {
      "title": "Social",
      "timeframes": {
        "weekly": {
          "current": randArray[8],
          "previous": randArray[9]
        }
      }
    }, {
      "title": "Self Care",
      "timeframes": {
        "weekly": {
          "current": randArray[10],
          "previous": randArray[11]
        }
      }
    }]; 

});
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