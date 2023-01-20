import './Home.css';

// Components
import { Footer } from '../../shared/Footer/Footer';

export function Home() {
    return (
        <>
            <section>
                <div className="banner"></div>
            </section>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-md-8">
                            <h2>GORILLAZ</h2>
                            <p>
                            Gorillaz es una banda británica creada en 1998 por Damon Albarn y Jamie Hewlett. La banda utiliza cuatro personajes ficticios los cuales son: 2-D, Noodle, Murdoc Niccals y Russel Hobbs. Su nombre tiene un motivo, se debe a que sus creadores nacieron, según el calendario chino, en el año del mono.
                            </p>
                            <figure>
                                <img className="img-fluid w-100" src='https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/imgp.jpeg?alt=media&token=6bb4d169-30d2-46d1-900c-3565c1a0be18' alt='' />
                            </figure>
                        </div>
                        <div className="col-12 col-md-4 bg-dark text-white">
                            <h2 className="text-center">Conciertos</h2>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Medellin</p>
                                    <p className="m-0">DEC 4</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Barranquilla</p>
                                    <p className="m-0">APRIL 21</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Cali</p>
                                    <p className="m-0">JUNE 8</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Pasto</p>
                                    <p className="m-0">JULY 29</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Cartagena</p>
                                    <p className="m-0">APRIL 10</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Guajira</p>
                                    <p className="m-0">MAY 22</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">San Andres</p>
                                    <p className="m-0">JANUARY 30</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Santa Marta</p>
                                    <p className="m-0">FEBRUARY 29</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Bucaramanga</p>
                                    <p className="m-0">SEPTEMBER 03</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-vinyl-fill fs-1"></i>
                                <div className="ms-2 d-flex flex-column">
                                    <p className="m-0">Pereira</p>
                                    <p className="m-0">DECEMBER 31</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1>
                                noticias
                            </h1>
                            <hr/>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/gor2.jpg?alt=media&token=d3e99e09-bddc-448a-bfe7-8856cb2d35f7' alt='ImageLeft' className="img-fluid w-100" />
                            <p>Buen concierto no lo dejes Pasar</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/IMGABA.jpeg?alt=media&token=394f6f27-4e6f-4b88-8ebc-f0a27658c3d3' alt='ImageCenter' className="img-fluid w-100" />
                            <p>Estamos a solo dos horas del sabado </p>
                        </div><div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotifyjdg-eff06.appspot.com/o/gorillaz-live-from-london_02.jpg?alt=media&token=68c77f9a-61a4-405f-968d-90f6d687310f' alt='ImageRight' className="img-fluid w-100" />
                            <p>No te lo pierdas Colombia</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}