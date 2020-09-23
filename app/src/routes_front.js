import React from 'react'
//import Switch from 'react-bootstrap/esm/Switch'
import { BrowserRouter, Router , Switch , Redirect , Route } from 'react-router-dom'
import login from './pages/Login'
import App from './App'
import Menu from './pages/menu'
import Locacao from './pages/locacao'

const Routes = ()=>(
    <BrowserRouter>
    <Switch>
    <Route exact path="/"           component={login} />
    <Route path='/menu' component={Menu} />
    <Route path='/requisicoes' component={App} />
    <Route path='/locacao' component={Locacao} />
    
     </Switch>
 </BrowserRouter>
);

export default Routes;