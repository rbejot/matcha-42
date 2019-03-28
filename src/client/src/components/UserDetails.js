// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

class UserDetails extends Component {
  render() {
    return (
      <form className="row" onSubmit={e => e.preventDefault()}>
          <div className="row"><h5>Détails {this.props.result}</h5></div>
          <div className="row">
            <span className="3 col">Mon sexe</span>
            <select class="card">
              <option value="none"></option>
              <option value="men">Homme</option>
              <option value="women">Femme</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div className="row ">
            <span className="3 col">Mon orientation sexuelle</span>
            <select class="card">
              <option value="bi">Bi</option>
              <option value="hetero">Hétéro</option>
              <option value="homo">Homo</option>
            </select>
          </div>
          <div className="row 12 col">
            <span className="3 col">Petite bio</span>
            <textarea class="card row" placeholder="Présentez vous en quelques mots"></textarea>
          </div>
          <div className="row 12 col">
            <span className="3 col">Intérêts</span>
            <textarea class="card row" placeholder="#sport #musique #cinéma..."></textarea>
          </div>
          <div className="row">
            <input className="btn primary" type="submit" value="Sauvegarder"/>
          </div>
        </form>
    );
  }
}

export default UserDetails;