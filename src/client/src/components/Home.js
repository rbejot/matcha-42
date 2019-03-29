import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../actions/simpleActions';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  result: state.mainReducer.result
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({simpleAction}, dispatch),
})

class Home extends Component {
  render() {
    return(
      <div className="home-text">
        <span>Bienvenur sur Matcha, rencontrez votre âme soeur, inscrivez vous !</span>
        <div className="row">
          <Link to="/register">
            <a className=" 4 col btn primary">S'inscrire</a>
          </Link>
          <Link to="/login">
            <a className="4 col btn">Se connecter</a>
          </Link>
        </div>
      </div>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);