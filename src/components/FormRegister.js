import React, {Component} from 'react';

class FormRegister extends Component {

    render(){
        return (
            <form className="form-register bg-dark text-light p-5">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" className="form-control"></input>
                </div>
    
                <div className="form-group">
                    <label htmlFor="correo">Email</label>
                    <input type="email" name="correo" id="correo" className="form-control"></input>
                </div>
    
                <div className="form-group">
                    <label htmlFor="clave">Clave</label>
                    <input type="password" name="clave" id="clave" className="form-control"></input>
                </div>
    
                <button type="submit" className="btn btn-primary">REGISTRARME</button>
            </form>
        );
    }
  }
  
  export default FormRegister;