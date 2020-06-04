import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTimer } from '../actions'
import './new-timer.css';

class NewTimer extends Component {

  constructor(props) {
    super(props)
    this.state = { name: "" }
  }


  render() {
    return (
      <div className='new-timer'>
        <input
          className='new-timer__input'
          type='text'
          placeholder="New Timer Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}/>
        <button
          className='new-timer__button'
          onClick={(e) => {
            this.props.addTimer(this.state.name)
          }}>Save</button>
      </div>
    )
  }


}
  
// Not needed for this component
const mapStateToProps = (state) => {
  return {}
}

// Use 'mapDispatchToProps' to connect the 'newTimer' action creator to this component. Here is a stub for the component:
const mapDispatchToProps = () => {
  return { addTimer }
}


export default connect(mapStateToProps, mapDispatchToProps())(NewTimer)