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

class LoginForm extends Component {
  render() {
    return(
      <form className="card" onSubmit={e => e.preventDefault()}> 
        <div className="row"><h4>Se connecter {this.props.result}</h4></div>
        <div className="row 3 col">
          <span>Email</span>
          <input className="card w-100 " type="email" placeholder="email" required={true} />
        </div>
        <div className="row 6 col">
          <span>Mot de passe</span>
          <input className="card w-100" type="password" placeholder="mot de passe" required={true} />
        </div>
        <div className="row">
          <input className="btn primary" type="submit" value="Me connecter"/>
        </div>
        <Link to="/register">
          <a className="row thin"><u>Je n'ai pas de compte</u></a>
        </Link>
        <Link to="/pass">
          <a className="row thin"><u>Mot de passe oublié ?</u></a>
        </Link>
      </form>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);