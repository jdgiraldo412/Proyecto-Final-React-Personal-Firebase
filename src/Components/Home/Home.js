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
                            <h2>One Direction</h2>
                            <p>
                                El grupo comenzó en 2010 en "The X Factor" después de que Niall Horan, Zayn Malik, Liam Payne, Harry Styles y Louis Tomlinson se presentaran en las audiciones de este programa. Individualmente, no lograron pasar a la siguiente ronda, pero formaron una banda, que ahora es una de las más exitosas de la historia.
                            </p>
                            <figure>
                                <img className="img-fluid w-100" src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/532cd5e6dd0f2d9ae132270ba49c0d24.jpg?alt=media&token=07c96ac9-ace8-44f8-9946-3fa2d4c324d6' alt='' />
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
                            <img src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/000242640W.jpg?alt=media&token=1be6134d-ab0a-4298-9d8e-655560888541' alt='ImageLeft' className="img-fluid w-100" />
                            <p>Buen concierto no lo dejes Pasar</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/EWfEI8TWoAMrXRe.jpg?alt=media&token=fa2bcecb-d493-495b-bbbc-7be24d6b0b2c' alt='ImageCenter' className="img-fluid w-100" />
                            <p>Estamos a solo dos horas del sabado </p>
                        </div><div className="col-12 col-md-4">
                            <img src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/MFYzjH1BOe0G7okKcZ5fG1.webp?alt=media&token=52b31832-a6aa-45a3-9f39-ca9d93527948' alt='ImageRight' className="img-fluid w-100" />
                            <p>No te lo pierdas España</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}