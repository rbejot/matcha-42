// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deleteInfo } from '../actions/simpleActions';
import React, { Component } from 'react';

class UserId extends Component {
  render() {
    return(
      <form className="row" onSubmit={e => e.preventDefault()}>
        <div className="row"><h5>Mon compte</h5></div>
        <div className="row">
          <div className="2 col">Email</div>
          <input className="card" type="email" placeholder="mon email state"/>
        </div>
        <div className="row">
          <div className="2 col">Prénom</div>
          <input className="card" type="text" placeholder="mon prenom state"/>
        </div>
        <div className="row">
          <div className="2 col">Nom</div>
          <input className="card" type="text" placeholder="mon nom state"/>
        </div>
        <div className="row">
          <div className="2 col">Pseudo</div>
          <input className="card" type="text" placeholder="mon pseudo state"/>
        </div>
        <div className="row">
          <input className="btn primary" type="submit" value="Modifier mon compte"/>
        </div>
      </form>
    );
  }
}

export default UserId;