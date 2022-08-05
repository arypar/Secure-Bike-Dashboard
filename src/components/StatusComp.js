import { EditText, EditTextarea } from 'react-edit-text';
import React, { useEffect, useState } from 'react'
import 'react-edit-text/dist/index.css';

const axios = require('axios');

function StatusComp(props) {
  async function checkPhone() {   
    const editNumber = document.getElementById('phonevalue');
    var maybePhone = editNumber.innerHTML;
    editNumber.textContent = "Edit Phone"
    if(((maybePhone).toString().length == 11)) {
      var config = {
        method: 'post',
        url: 'https://cosmosfinal.herokuapp.com/updatephone',
        data : {"phoneNumber":maybePhone}
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })

    }

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