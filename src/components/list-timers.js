import React, { Component } from 'react';
import TimerView from '../timer-view';
import { connect } from 'react-redux';
import { selectTimer } from '../actions'


class ListTimers extends Component {


  render() {

    console.log(`STATE: ${this.state}`);

    return (
      <div>
        {this.props.timers.map((timer, i) => <TimerView key={i} timer={timer} index={i} />)}
      </div>
    )
  }
  
}


const mapStateToProps = (state) => {
  return { timers: state.timers }
}

const mapDispatchToProps = () => {
  return { selectTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(ListTimers)