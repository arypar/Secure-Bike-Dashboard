import React, { Component } from 'react'
import pfp from '../../public/assets/image-jeremy.png'

class ProfileComp extends Component {

  constructor(props){
    super(props)
    this.state = {
      displayType: 'weekly'
    }
  }

  handleClick = (daily) => {
    this.setState({
      displayType: daily.target.innerHTML
    })
    this.props.displayType(this.state.displayType)
   }

  render() {
    return (
      <div className='profile__card'>
        <div className='profile__card--info'>
          <img src={pfp} alt={pfp}/>
          <div className='profile__card--info-text'>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <div className='profile__card--type'>
          <ul>
            <li onClick={(val) => this.props.displayType('daily')}>Daily</li>
            <li onClick={(val) => this.props.displayType('weekly')}>Weekly</li>
            <li onClick={(val) => this.props.displayType('monthly')}>Monthly</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ProfileComp