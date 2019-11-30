import React, { Component } from "react";

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};

class Login extends Component {
  state = initialState;
  validate = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (!this.state.name.includes("@")) {
      nameError = "invalid Email";
    }
    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
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
      <div className="col-md-3 col-sm-12 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <link
              href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              rel="stylesheet"
              id="bootstrap-css"
            ></link>

            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              className="form-control"
              placeholder="Email"
              value={this.state.name}
            />
            <div style={{ color: "red" }}>{this.state.nameError}</div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
            />
            <div style={{ color: "red" }}>{this.state.passwordError}</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
