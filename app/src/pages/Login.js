import React, { Component, button } from 'react';
import '../styles/input_dados.css'
import Routes from '../routes_front'
import { Link, Redirect } from 'react-router-dom';

class login extends React.Component {
  render() {
    return (
        <div className="all">
        <div className="form_dados">
        <h1>Login</h1>
        <div className='form'>
        <div className='input-block'>
            <h3>Nome</h3>
          <input
            placeholder="Usuário"
            id="login-email"
          //  value={this.state.username}
            //onChange={this.changeValueName}
          />
        </div>
        <div className="input-block">
        <h3>Senha</h3>
          <input
            placeholder="Senha"
            type="password"
            id="login-password"
          //  value={this.state.password}
            //onChange={this.changeValuePassword}
          />
        </div>
        </div>
        <div className="spaceButton">
        <Link to="menu" >
              <button className="btn-login">Entrar</button>
              </Link>
            </div>
        </div>
    
        </div>
    );
  }
}

export default login;
