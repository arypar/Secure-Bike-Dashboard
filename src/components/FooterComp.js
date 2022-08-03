import React, { Component } from 'react'
class FooterComp extends Component {

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
        
      <div className='footer_credits'>
By Aryan Parekh, Yash Chhatre and Adrian Bahar
      </div>
    )
  }
}

export default FooterComp