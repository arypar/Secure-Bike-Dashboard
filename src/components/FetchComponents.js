import React, { useEffect, useState } from 'react'
import StatusComp from './StatusComp'

function FetchComponents(props) {

    let [data, setData] = useState([])

    useEffect(() => {
      fetch('data.json')
      .then(res =>  res.json())
      .then(data => { 
        setData(data)
      })  
    }, [])
    let displayType = props.displayType
  
    let colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)']

  return (
    <React.Fragment>
      {
        data.map((dataItem, index) => {
          if(displayType === 'weekly'){          
            return <StatusComp key={index} type={'Week'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.weekly.previous} type_time={dataItem.timeframes.weekly.current} bgcolor={colors.shift()}/>
          } else if (displayType === 'daily'){
            return <StatusComp key={index} type={'Day'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.daily.previous} type_time={dataItem.timeframes.daily.current} bgcolor={colors.shift()}/>
          } else {
            return <StatusComp key={index} type={'Month'} title={dataItem.title} image={dataItem.image} last={dataItem.timeframes.monthly.previous} type_time={dataItem.timeframes.monthly.current} bgcolor={colors.shift()}/>
          }
        })
      }
    </React.Fragment>
  )
}

export default FetchComponents