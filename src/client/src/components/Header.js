import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteInfo } from '../actions/simpleActions';
import React, { Component } from 'react';
import UserPictures from './UserPictures';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  isLogin: state.mainReducer.isLogin
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({deleteInfo}, dispatch),
})

class Header extends Component {
  render() {
    return(
      <div className="row">
        <div className="row">
          <div className="2 col">
            <h4>Matcha</h4>
          </div>
          <div className="5 col"></div>
          <div className="row 5 col">
          {this.props.isLogin ? (
            <div>
              <a className="col">Profil</a>
              <a className="col">Match</a>
              <a className="col">Rechercher</a>
              <a className="col btn">Notifications</a>
            </div>
          ) : (
            <div>
              <a className="col btn primary">S'inscrire</a>
              <a className="col btn">Se connecter</a>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);