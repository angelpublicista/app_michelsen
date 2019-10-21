import React, {Component} from 'react';

class Content extends Component {

    render(){
        return (
            <div className="content-area p-5" id="content-area">
                <div className="row">
                    <div className="col-12 col-md-4">
                    <div className="card box-shadow text-center">
                        <h5 className="card-title p-3">PRÓXIMO PAGO</h5>
                        <div className="card-body">
                            <span className="card-number text-danger text-semibold d-block">$350.000</span>
                            <span className="card-date text-bold d-block mb-4">24 Oct. 2019</span>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-4">
                    <div className="card box-shadow text-center">
                        <h5 className="card-title p-3">ÚLTIMO PAGO REALIZADO</h5>
                        <div className="card-body">
                            <span className="card-number text-principal text-semibold d-block">$350.000</span>
                            <span className="card-date text-bold d-block mb-4">24 Oct. 2019</span>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-4">
                    <div className="card box-shadow text-center">
                        <h5 className="card-title p-3">DEUDA ACTUAL</h5>
                        <div className="card-body">
                            <span className="card-number text-danger text-semibold d-block mb-5">$2.350.000</span>
                        </div>
                    </div>
                    </div>

                    <div className="col-12">
                        <div className="card box-shadow mt-4" id="table-all-credits">
                            <h5 className="card-title p-3 text-center">TODOS MIS CRÉDITOS</h5>
                            <div className="card-body">
                                <div className="cont-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">CÓDIGO</th>
                                            <th scope="col">VALOR APROBADO</th>
                                            <th scope="col">ESTADO</th>
                                            <th scope="col">FECHA VENCIMIENTO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="#" className="text-link">1423DJBSJVDSB</a></td>
                                                <td>$2.300.000</td>
                                                <td><span className="text-center bg-principal label-state">Activo</span></td>
                                                <td>25 Nov. 2020</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-link">1423DJBSJVDSB</a></td>
                                                <td>$5.500.000</td>
                                                <td><span className="text-center bg-disabled label-state">Inactivo</span></td>
                                                <td>02 Feb 2006</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-link">1423DJBSJVDSB</a></td>
                                                <td>Larry</td>
                                                <td><span className="text-center bg-danger label-state">En mora</span></td>
                                                <td>30 Mar. 2016</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-link">1423DJBSJVDSB</a></td>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-link">1423DJBSJVDSB</a></td>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Content;