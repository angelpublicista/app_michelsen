import React, {Component} from 'react';


class Header extends Component {

    toggleSubmenu(e){
        e.preventDefault();
        const elemento = e.target;

        const submenus = document.querySelectorAll('.submenu');
        for (const submenu of submenus) {
            submenu.style.display = 'none';
        }
        const hash = elemento.dataset.target;
        document.getElementById(hash).style.display = 'block';
    }
  
    render(){
      return (
          <header className="app-header">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h2 id="nameSection"><i className="far fa-credit-card mr-2"></i> Mis créditos</h2>

              <nav>
                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link"><i className="fas fa-search"></i></a></li>
                    <li className="nav-item position-relative">
                      <a href="#" className="nav-link position-relative" data-target="notifications" onClick={this.toggleSubmenu}>
                        <i className="far fa-bell" data-target="notifications" onClick={this.toggleSubmenu}></i>
                        <span className="number-notify d-flex justify-content-center align-items-center position-absolute rounded-circle text-light">3</span>
                      </a>
                      <div className="submenu box-shadow position-absolute p-3 notifications" id="notifications">
                          <div className="d-flex justify-content-between align-items-center">
                              <h5 className="m-0">Notificaciones</h5>
                              <a href="#" className="nav-link p-0">Marcar todo como leído</a>
                          </div>
                          <hr></hr>
                          <a href="#" className="nav-link p-0">
                            <p><span className="text-danger text-bold">Pago atrasado</span>. Tienes un pago pendiente del crédito <strong>SLDASFJN109</strong></p>
                          </a>
                          <hr></hr>
                          <a href="#" className="nav-link p-0">
                            <p><span className="text-principal text-bold">Todo al día</span>. Tus pagos se encuentran al día, ¡Muy bien!</p>
                          </a>
                          <hr></hr>
                          <a href="#" className="nav-link p-0">
                            <p><span className="text-warning text-bold">Verificación pendiente</span>. Tu correo no ha sido verificado. Dirígete a <strong>Mi Perfil</strong> para hacerlo</p>
                          </a>
                      </div>
                    </li>
                    <li className="nav-item position-relative">
                      <a href="#" className="nav-link" data-target="profile" onClick={this.toggleSubmenu}>
                        <i className="far fa-user mr-2"></i> {this.props.user}
                      </a>
                      <div className="submenu box-shadow position-absolute p-3 profile" id="profile">
                          <a href="#" className="nav-link p-0">
                            <i className="far fa-user mr-2"></i> Mi perfil
                          </a>
                          <hr></hr>
                          <a href="#" className="nav-link p-0">
                          <i className="fas fa-sign-out-alt mr-2"></i> Salir
                          </a>
                      </div>
                    </li>
                </ul>
              </nav>
            </div>            
          </header>
      );
    }
  }
  
  export default Header;