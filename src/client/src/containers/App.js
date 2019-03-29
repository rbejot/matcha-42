import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction, displayInfo, isLogged } from '../actions/simpleActions';
import '../static/stylesheets/main.scss';
//Component
import Header from '../components/Header';
import Home from '../components/Home';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import ForgetPassword from '../components/ForgetPassword';
import Warning from '../components/Warning';
import UserConnected from './UserConnected';


const mapStateToProps = state => ({
  info: state.mainReducer.info,
  isLogin: state.mainReducer.isLogin
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({simpleAction, displayInfo, isLogged}, dispatch),
})

class App extends Component {

  displayInfo = () => {
    this.props.actions.displayInfo('Info urgente');
  }

  simpleAction = () => {
    this.props.actions.simpleAction('test');
  }

  isLogged = () => {
    this.props.actions.isLogged();
  }

  render() {
    return (
      <div className="c">
        <Router>
          <Header/>
          <div>
            {this.props.isLogin ? (
              <div>
                <Route path="/" component={UserConnected}/>
              </div>
            ) : (
              <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/pass" component={ForgetPassword}/>
                <Route exact path="/register" component={RegisterForm}/>
                <Route exact path="/login" component={LoginForm}/>
              </div>
            )}
          </div>
          <h3>Test Route</h3>
          <Link to="/profil">
            <button>/profil</button>
          </Link>
          <Link to="/pass">
            <button>/pass</button>
          </Link>
          <Link to="/register">
            <button>/register</button>
          </Link>
          <Link to="/login">
            <button>/login</button>
          </Link>
          <Link to="/dumb_url">
            <button>/dumb_url should render Error404</button>
          </Link>
        </Router>
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