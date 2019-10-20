import React, { Component } from 'react';

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
            <aside className="app-aside">
                <ul>
                    <li><a href="#" onClick={this.prueba}>Mis créditos</a></li>
                    <li><a href="#" onClick={this.prueba}>Item 2</a></li>
                    <li><a href="#" onClick={this.prueba}>Item 3</a></li>
                </ul>
            </aside>
        );
    }

  }
  
  export default Menu_lateral;