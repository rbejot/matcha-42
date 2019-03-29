import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { displayInfo } from '../actions/simpleActions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  info: state.mainReducer.info
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({displayInfo}, dispatch)
});

class AccountNavBar extends Component {
  render() {
    return(
      <div className="row">
        <div className="6 col">
          <Link className="col" to="/account">
            <a href="#">Détails</a>
          </Link>
          <Link className="col" to="/account/pictures">
            <a href="#">Photos</a>
          </Link>
          <Link className="col" to="/account/settings">
            <a href="#">Paramètres</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountNavBar);