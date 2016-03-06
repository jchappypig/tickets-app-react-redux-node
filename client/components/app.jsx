import React, { Component } from 'react'
import DeviceType from './deviceType'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class App extends Component {
  render() {
    let {ticket, actions} = this.props;
    return (
      <div>
        <DeviceType ticket={ticket} actions={actions}></DeviceType>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ticket: state.ticketReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)