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

class RegisterForm extends Component {
  render() {
    return(
      <form className="card" onSubmit={e => e.preventDefault()}>
        <div className="row"><h4>Inscription {this.props.result}</h4></div>
        <div className="row 3 col">
          <span>Email</span>
          <input className="card w-100 " type="email" placeholder="email" required={true} />
        </div>
        <div className="row 6 col">
          <span>Pseudo</span>
          <input className="card w-100" type="text" placeholder="pseudo" required={true} />
        </div>
        <div className="row 6 col">
          <span>Prénom</span>
          <input className="card w-100" type="text" placeholder="prénom" required={true} />
        </div>
        <div className="row 6 col">
          <span>Nom</span>
          <input className="card w-100" type="text" placeholder="nom" required={true} />
        </div>
        <div className="row 6 col">
          <span>Mot de passe</span>
          <input className="card w-100" type="password" placeholder="mot de passe" required={true} />
        </div>
        <div className="row 6 col">
          <span>Confirmation mot de passe</span>
          <input className="card w-100" type="password" placeholder="confirmation" required={true} />
        </div>
        <div className="row">
          <input className="btn primary" type="submit" value="M'inscrire"/>
        </div>
        <Link to="/login">
          <a className="row thin"><u>J'ai déjà un compte</u></a>
        </Link>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);