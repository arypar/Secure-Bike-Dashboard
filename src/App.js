import React, { Component } from 'react';
import FetchComponents from './components/FetchComponents'
import ProfileComp from './components/ProfileComp'
import './index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      displayType: 'weekly'
    }
  }

  handleDataFromChild(val) {
    this.setState({
      displayType: val
    })
  }
  
  render() {
    return (
      <div className='container'>
          <ProfileComp displayType={(val) => this.handleDataFromChild(val)}/>
          <FetchComponents displayType={this.state.displayType}/>
        </div>
    )
  }
}

export default App