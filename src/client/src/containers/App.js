import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction, displayInfo, isLogged } from '../actions/simpleActions';
import React, { Component } from 'react';
import '../static/stylesheets/main.scss';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import ForgetPassword from '../components/ForgetPassword';
import Warning from '../components/Warning';
import UserProfil from './UserProfil';

const mapStateToProps = state => ({
  info: state.mainReducer.info
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({simpleAction, displayInfo, isLogged}, dispatch),
})

class App extends Component {

  displayInfo = (e) => {
    this.props.actions.displayInfo('Info urgente');
  }

  simpleAction = (e) => {
    this.props.actions.simpleAction('test');
  }

  isLogged = (e) => {
    this.props.actions.isLogged(true);
  }

  render() {
    return (
      <div className="c">
        <Header/>
        <UserProfil/>
        <ForgetPassword/>
        <RegisterForm/>
        <LoginForm/>
        <Warning/>
        <button onClick={this.simpleAction}>Test redux</button>
        <button onClick={this.displayInfo}>Test info</button>
        <button onClick={this.isLogged}>Test login success</button>
        <pre>
        {
          JSON.stringify(this.props)
        }
      </pre>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);