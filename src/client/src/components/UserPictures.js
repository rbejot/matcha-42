// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { deleteInfo } from '../actions/simpleActions';
import React, { Component } from 'react';

class UserPictures extends Component {
  render() {
    return(
      <div className="row">
        <div className="row"><h5>Photos {this.props.result}</h5></div>
        <div className="row">
          <div className="col card">
            <img className="picture"/>
            <button className="btn">Choisir comme photo de profil</button>
            <button className="btn primary bc-black">Supprimer</button>
          </div>
          <div className="col card">
            <img className="picture"/>
            <button className="btn">Choisir comme photo de profil</button>
            <button className="btn primary bc-black">Supprimer</button>
          </div>
          <div className="col card">
            <img className="picture"/>
            <button className="btn">Choisir comme photo de profil</button>
            <button className="btn primary bc-black">Supprimer</button>
          </div>
        </div>
        <div className="row">
          <form className="card" onSubmit={e => e.preventDefault()}>
            <div className="col"><h6>Ajouter une photo</h6></div>
            <input className="col" type="file" required={true}/>
            <input className="col btn primary" type="submit" value="Ajouter"/>
          </form>
        </div>
      </div>
    );
  }
}

export default UserPictures;