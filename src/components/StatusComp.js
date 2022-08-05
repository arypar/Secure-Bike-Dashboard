import { EditText, EditTextarea } from 'react-edit-text';
import React, { useEffect, useState } from 'react'
import 'react-edit-text/dist/index.css';
const axios = require('axios');

function StatusComp(props) {
  async function checkPhone() {
    const editNumber = document.getElementById('phonevalue');
    console.log(editNumber.innerHTML);
    if(((editNumber.innerHTML).toString().length == 11)) {
      var phonePayload = JSON.stringify({
        "phoneNumber": editNumber.innerHTML
      });
      
      var config = {
        method: 'post',
        url: 'https://cosmosfinal.herokuapp.com/updatephone',
        data : phonePayload
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })

    }

    editNumber.textContent = "Edit Phone"
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
           <EditText id={props.id} name="phone" type="phone" style={{width: '200px'}} defaultValue={props.default} inline/>
        </div>
    </div>
  )
}

export default StatusComp