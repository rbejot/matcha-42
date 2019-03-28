// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deleteInfo } from '../actions/simpleActions';
import React, { Component } from 'react';

class UserPass extends Component {
  render() {
    return(
      <form className="row" onSubmit={e => e.preventDefault()}>
        <hr/>
        <div className="row"><h5>Changer mon mot de passe</h5></div>
        <div className="row">
          <div className="3 col">Ancien mot de passe</div>
          <input className="card" type="password" required={true}/>
        </div>
        <div className="row">
          <div className="3 col">Nouveau mot de passe</div>
          <input className="card" type="password" required={true}/>
        </div>
        <div className="row">
          <input className="btn primary" type="submit" value="Changer mon mot de passe"/>
        </div>
      </form>
    );
  }
}

export default UserPass;