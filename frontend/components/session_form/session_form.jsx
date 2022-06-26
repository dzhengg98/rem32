import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  showHeader() {
    return this.props.formType === "login" ? (
      <h2 className="auth-header">Log in to REM32</h2>
    ) : (
      <div>
        <h2 className="auth-header">Join REM32</h2>
        <p className="auth-description">Discover and share incredible photos, gain global exposure, and get paid for your work.</p>
      </div>
    );
  }

  renderLink() {
    return this.props.formType === "login" ? (
      <p className="form-statement">Don't have an account? <Link to="/signup">Sign Up</Link></p>
    ) : (
      <p className="form-statement">Already have an account? <Link to="/login">Log in</Link></p>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = {
      username: "demoUser",
      password: "demouser",
    }
    this.props.demoUserLogin(demoUser);
  }

  renderDemoLogin() {
    return (
      <input 
        type="submit"
        className="button"
        onClick={this.demoLogin}
        value="Demo User"
      />
    )
  }

  render(){
    return (
      <div className="session_form">
        <form onSubmit={this.handleSubmit}>
          {this.showHeader()}


          <label className="auth-label">Username 
            <input
              className="auth-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              // required
              />
          </label>

          <label className="auth-label">Password 
            <input
              className="auth-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              // required
              />
          </label>

          <div>
            {this.props.errors.map((error, i) => (
              <p className="errors" key={i}>{error}</p>
            ))}
          </div>

          <input
            type="submit"
            className = "button"
            value={this.props.formType === "login" ? "Log in" : "Sign up"}
          />
          
          {this.props.formType === "login" ? this.renderDemoLogin() : " "}
          {this.renderLink()}
        </form>
      </div>
    );
  }
}
export default SessionForm; 