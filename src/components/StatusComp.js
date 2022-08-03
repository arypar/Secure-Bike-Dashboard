import React from 'react'

function StatusComp(props) {

  return (
    <div className='status__item' style={{
      backgroundColor: props.bgcolor
    }}>
        <div className='status__item--image' >
          <img src={props.image} alt={props.image} />
        </div>
        <div className='status__item--info'>
            <div className='status__item--info-title'>
                <h3>{props.title}</h3>
            </div>
            <h2>{props.type_time}hrs</h2>
            <p>Last {props.type} - {props.last}hrs</p>
        </div>
    </div>
  )
}

export default StatusComp