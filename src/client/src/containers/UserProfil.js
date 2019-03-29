import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { displayInfo } from '../actions/simpleActions';
import UserDetails from '../components/UserDetails';
import UserPictures from '../components/UserPictures';
import UserSettings from '../components/UserSettings';
import {Route, Link} from 'react-router-dom';
import AccountNavBar from '../components/AccountNavBar';

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class UserProfil extends Component {
  render() {
    return(
      <div>
        <AccountNavBar/>
        <Route exact path="/account" component={UserDetails}/>
        <Route path="/account/pictures" component={UserPictures}/>
        <Route path="/account/settings" component={UserSettings}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfil);