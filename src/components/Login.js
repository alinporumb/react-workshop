import React from "react";

class Login extends React.Component {
  state = {
    credentials : {}
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.credentials);
  }

  changeHandler = (field, value) => {
    this.setState({
      credentials : {
        ...this.state.credentials,
        [field] : value
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="User" onChange={e => this.changeHandler('user', e.target.value)}/>
          <input type="password" placeholder="Password" onChange={e => this.changeHandler('password', e.target.value)}/>

          <button type="submit">SignIn</button>
        </form>
      </div>
    );
  }
}

export default Login;