import React, {Component} from 'react';

class ContentProfile extends Component {

    render(){
        return (
            <div className="content-area p-5" id="content-area">
                <div className="row">
                    <div className="col-12">
                        <div className="accordion" id="accordionExample">
                            <div className="card box-shadow">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Información General
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="nombre">Nombres</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="John Donald" className="form-control" readOnly id="nombre"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-lock"></i></div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="apellido">Apellidos</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="Doe Smith" className="form-control" readOnly id="apellido"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-lock"></i></div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="documento">No. Documento</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="104567899" className="form-control" readOnly id="documento"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-lock"></i></div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="email">Email</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="email" value="john.doe@gmail.com" className="form-control" readOnly id="email"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-user-edit"></i></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="celular">Celular</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="3107659898" className="form-control" readOnly id="celular"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-user-edit"></i></div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="ciudad">Ciudad</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="Bogotá" className="form-control" readOnly id="ciudad"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-user-edit"></i></div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="direccion">Dirección</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="Av Calle 5 # 20 - 35" className="form-control" readOnly id="direccion"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-user-edit"></i></div>
                                                        </div> 
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="tel-fijo">Teléfono fijo</label>
                                                        <div className="d-flex flex-row">
                                                            <input type="text" value="3457859" className="form-control" readOnly id="tel-fijo"></input>
                                                            <div className="button-edit ml-3"><i class="fas fa-user-edit"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card box-shadow">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Seguridad
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default ContentProfile;