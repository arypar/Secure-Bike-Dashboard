import React, { Component } from 'react'
import pfp from '../../public/assets/main.jpeg'
class ProfileComp extends Component {

  constructor(props) {
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
          <img src={pfp} alt={pfp} />
          <div className='profile__card--info-text'>
            <p>Cosmos Final Project - Cluster 8</p>
            <h2>Bike 1</h2>
    
          </div>
        </div>
        <div className='profile__card--type'>
          <ul>
            <h2>
              Aryan Parekh, Yash Chhatre and Adrian Bahar
            </h2>
            
          </ul>
        </div>
      </div>

    )
  }
}

export default ProfileComp