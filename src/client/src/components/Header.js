import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteInfo, isLogged, logout } from '../actions/simpleActions';
import Warning from './Warning';
import notification from '../static/icons/notification.svg';
import off from '../static/icons/off.svg';
import { Link,  withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  info: state.mainReducer.info,
  isLogin: state.mainReducer.isLogin,
  logout: state.mainReducer.logout
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({deleteInfo, isLogged, logout}, dispatch),
})

class Header extends Component {

  logout = () => {
    this.props.actions.logout();
    this.props.history.push('/');
  }

  render() {
    return(
      <div className="row">
        <div className="row">
          <div className="2 col">
            <Link to="/">
              <h4 className="brand">Matcha</h4>
            </Link>
          </div>
          <div className="5 col"></div>
          <div className="row 5 col">
            {this.props.isLogin ? (
              <div>
                <Link className="col" to="/account">
                  <a href="#">Mon compte</a>
                </Link>
                <Link className="col" to="/match">
                  <a href="#">Mes Match</a>
                </Link>
                <Link className="col" to="/matchez">
                  <a href="#">Matchez !</a>
                </Link>
                <a href="#" className="col btn"><img className="icon" src={notification}/></a>
                <a onClick={this.logout} href="#" className="col"><img className="icon" src={off}/></a>
              </div>
            ) : ('')}
          </div>
        </div>
        <Warning/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));