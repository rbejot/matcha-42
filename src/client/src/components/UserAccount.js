// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deleteInfo } from '../actions/simpleActions';
import React, { Component } from 'react';
import UserId from './UserId';
import UserPass from './UserPass';

class UserAccount extends Component {
  render() {
    return(
      <div>
        <UserId/>
        <UserPass/>
      </div>
    );
  }
}

export default UserAccount;