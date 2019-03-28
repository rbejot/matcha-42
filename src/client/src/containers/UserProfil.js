import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { displayInfo } from '../actions/simpleActions';
import UserDetails from '../components/UserDetails';
import UserPictures from '../components/UserPictures';
import UserAccount from '../components/UserAccount';

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
        <div class="row card">
          <div class="4 col"><a href="#">Détails</a></div>
          <div class="4 col"><a href="#">Photos</a></div>
          <div class="4 col"><a href="#">Mon compte</a></div>
        </div>
        <UserAccount/>
        <UserPictures/>
        <UserDetails/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfil);