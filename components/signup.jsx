import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  password2Error: ""
};

class Signup extends Component {
  state = initialState;
  validate = () => {
    let nameError = "";
    let passwordError = "";
    let emailError = "";
    let password2Error = "";

    if (!this.state.password) {
      passwordError = "password cannot be blank!!";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid Email!!";
    }
    if (!(this.state.password == this.state.password2)) {
      password2Error = "password doesnt match!!";
    }
    if (emailError || password2Error || passwordError) {
      this.setState({ emailError, password2Error, passwordError });
      return false;
    }
    return true;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="display-5">
        <div className="col-md-6 col-sm-12 mx-auto">
          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <div id="legend">
                <legend className="">Register</legend>
              </div>
              <div className="control-group ">
                <label className="control-label" htmlfor="username">
                  Username
                </label>
                <div className="controls">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className="input-xlarge"
                    value={this.state.name}
                  />
                  <div style={{ color: "red" }}>{this.state.nameError}</div>
                  <p className="help-block">
                    Username can contain any letters or numbers.
                  </p>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" htmlfor="email">
                  E-mail
                </label>
                <div className="controls">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    className="input-xlarge"
                    value={this.state.email}
                  />
                  <div style={{ color: "red" }}>{this.state.emailError}</div>
                  <p className="help-block">Please provide your E-mail</p>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" for="password">
                  Password
                </label>
                <div className="controls">
                  <input
                    onChange={this.handleChange}
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    className="input-xlarge"
                    value={this.state.password}
                  />
                  <div style={{ color: "red" }}>{this.state.passwordError}</div>
                  <p className="help-block">
                    Password should be at least 4 characters
                  </p>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" for="password_confirm">
                  Password (Confirm)
                </label>
                <div className="controls">
                  <input
                    onChange={this.handleChange}
                    type="password"
                    id="password2"
                    name="password2"
                    placeholder=""
                    className="input-xlarge"
                    value={this.state.password2}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.password2Error}
                  </div>

                  <p className="help-block">Please confirm password</p>
                </div>
              </div>

              <div className="control-group">
                <div className="controls">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </fieldset>
          </form>{" "}
        </div>
      </div>
    );
  }
}

export default Signup;
