import { EditText, EditTextarea } from 'react-edit-text';
import React, { useEffect, useState } from 'react'
import 'react-edit-text/dist/index.css';


function StatusComp(props) {
  async function checkPhone() {
    const editNumber = document.getElementById('BRUHRBURABJRKS');
    console.log(String(editNumber.outerHTML) + "W");
  }
  useEffect(() => {
    checkPhone()
    const interval = setInterval(() => {
      checkPhone()
    }, 750)
    return () => clearInterval(interval)
  }, [])

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
           <h2>{props.type_time}</h2>
           <EditText id="BRUHRBURABJRKS" name="phone" type="phone" style={{width: '200px'}} defaultValue={props.default} inline/>
        </div>
    </div>
  )
}

export default StatusComp