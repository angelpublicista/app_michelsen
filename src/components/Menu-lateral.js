import React, { Component } from 'react';
import logo_blanco from '../img/logo_blanco.svg';

class Menu_lateral extends Component {

    changeSection(e){

        e.preventDefault();

        const elemento = e.target;
        const area = document.getElementById('nameSection');
        area.innerHTML = elemento.innerHTML;

        const links = document.querySelectorAll('.app-aside .nav-link');

        for (const link of links) {
            link.classList.remove('disabled');
        }

        elemento.className += ' disabled';
    }

    render(){
        return (
            <aside className="app-aside p-4">
                <div className="cont-brand mb-4">
                    <img src={logo_blanco} className="img-fluid"></img>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link disabled" href="#mis-creditos" onClick={this.changeSection}><i className="far fa-credit-card mr-2"></i> Mis créditos</a></li>
                    <hr className="divider"></hr>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.changeSection}><i className="far fa-user mr-2"></i> Mi perfil</a></li>
                    <hr className="divider"></hr>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.changeSection}><i className="far fa-question-circle mr-2"></i> Información</a></li>
                    <hr className="divider"></hr>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.changeSection}><i className="far fa-comment mr-2"></i> Ayuda</a></li>
                    <hr className="divider"></hr>
                    <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-sign-out-alt mr-2"></i> Salir</a></li>
                </ul>
            </aside>
        );
    }

  }
  
  export default Menu_lateral;