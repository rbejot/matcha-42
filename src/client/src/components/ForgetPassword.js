import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../actions/simpleActions';
import React, { Component } from 'react';

const mapStateToProps = state => ({
  result: state.mainReducer.result
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({simpleAction}, dispatch),
})

class ForgetPassword extends Component {
  render() {
    return(
      <form className="row card" onSubmit={e => e.preventDefault()}>
        <div className="row"><h4>Récuperez votre mot de passe {this.props.result}</h4></div>
        <div className="row">
          <p className="thin">Vous recevrez un mail pour réinitialiser votre mot de passe (il peut se trouver dans vos spams)</p>
        </div>
        <div className="row 3 col">
          <span>Email</span>
          <input className="card w-100 " type="email" placeholder="email" required={true} />
        </div>
        <div className="row">
          <input className="btn primary" type="submit" value="Réinitialiser mon mot de passe"/>
        </div>
      </form>
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);