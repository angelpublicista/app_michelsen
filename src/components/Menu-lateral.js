import React, { Component } from 'react';
import logo_blanco from '../img/logo_blanco.svg';

class Menu_lateral extends Component {

    constructor(){
        super();
        this.state = {
            textSec : 'HOLAS'
        }
    }

    prueba(e){
        e.preventDefault();
        const texto = e.target.innerText;

        const area = document.getElementById('nameSection');

        area.innerHTML = texto;
    }

    render(){
        return (
            <aside className="app-aside p-4">
                <div className="cont-brand mb-4">
                    <img src={logo_blanco} className="img-fluid"></img>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href="#mis-creditos" onClick={this.prueba}><i class="far fa-credit-card mr-2"></i> Mis créditos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.prueba}><i class="far fa-user mr-2"></i> Mi perfil</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.prueba}><i class="far fa-question-circle mr-2"></i> Información</a></li>
                    <li className="nav-item"><a className="nav-link" href="#" onClick={this.prueba}><i class="far fa-comment mr-2"></i> Ayuda</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><i class="fas fa-sign-out-alt mr-2"></i> Salir</a></li>
                </ul>
            </aside>
        );
    }

  }
  
  export default Menu_lateral;