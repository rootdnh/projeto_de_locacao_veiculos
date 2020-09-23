import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/menu.css'


class Menu extends Component {
  render() {
    return (
      <div className='menu_all'>
         <div className="space-but">
         <Link to='requisicoes'>
         <button>Locações</button>
         </Link>
        </div>
        <div className="space-but">
         <Link to='locacao'>
         <button>Cadastro de locação</button>
         </Link>
        </div>
         <div className="space-but">
         <Link to='#'>
         <button>Pesquisar</button>
         </Link>
         </div>
      </div>
    );
  }
}

export default Menu;
