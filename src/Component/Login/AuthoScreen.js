import React, { Component } from 'react';
import { cUserName, cPassWord } from "./../../en";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
class AuthoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      passWord: "",
    };
  }
  handleChangeEmail(e) {
      const { name, value } = e.target;
      this.setState({
        userName: value,
      });
  }
  handleChangePassword(e) {
      const { name, value } = e.target;
      this.setState({
        passWord: value,
      });
  }
    handleSubmit() {
    
        const { passWord, userName } = this.state
        if (passWord === cPassWord && userName === cUserName) {
            debugger
            console.log(this);
            // history.push("/user");
        } else {
            this.setState({
               error:"noUserdetails"
            })
        }
}
  renderUI() {
    return (
      <div>
        email :{" "}
        <input
          type="text"
          onChange={(e) => {
            this.handleChangeEmail(e);
          }}
          required
        ></input>
        password :{" "}
        <input
          type="password"
          onChange={(e) => {
            this.handleChangePassword(e);
          }}
          required
        ></input>
        <button type="submit" onClick={(e) => this.handleSubmit(e)}>
          Submit
        </button>
      </div>
    );
  }

  render() {
      return (
        <div>
          kumattr {this.renderUI()}
          {this.state.error}
        </div>
      );
  }
}
export default AuthoScreen;
