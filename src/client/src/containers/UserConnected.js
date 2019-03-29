import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayInfo } from '../actions/simpleActions';
import { Route } from 'react-router-dom';
import UserProfil from './UserProfil';
import Matchez from './Matchez';

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class UserConnected extends Component {
  render() {
    return(
      <div>
        <Route path="/account" component={UserProfil}/>
        <Route path="/matchez" component={Matchez}/>
        <Route exact path="/" component={Matchez}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConnected);