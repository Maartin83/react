import React, {useEffect, useState} from 'react';
import {isAuthenticated, cerrarSesion, obtenerusername, isRoleAdmin, isRoleUser, getUser} from './Config/auth';
import logo from './assets/logo.png';

const Menu = () => {
    const logeado = isAuthenticated();
    const admin=isRoleAdmin();
    const user=isRoleUser();

    // botoncito
    const [showToTopButton, setShowToTopButton] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowToTopButton(true);
        } else {
            setShowToTopButton(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, );
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // fin de botoncit


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="navbar-nav">
                        <img src={logo} alt="" style={{ maxWidth: 200 }} />
                        <a className="navbar-brand mt-3 "  style={{ fontSize: 22, marginLeft: 30 }}>

                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav" style={{marginRight:100}}>
                            <li className="nav-item">
                                <a className="nav-link" href="#Inicio" style={{ fontSize: 20 }}>
                                    <strong>Inicio</strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Nosotros" style={{ fontSize: 20, marginLeft: 30 }}>
                                    <strong>Nosotros</strong>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contacto" style={{ fontSize: 20, marginLeft: 30 }}>
                                    <strong>Contacto</strong>
                                </a>
                            </li>
                        </ul>
                        {/*Es Admin?*/}
                        {!admin ? null : (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin" style={{ fontSize: 20 }}>
                                        <strong>Gestion Administracion</strong>
                                    </a>
                                </li>
                            </ul>
                        )}
                        {/*Es Usuario normal?*/}
                        {!user ? null : (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/user/citas" style={{ fontSize: 20 }}>
                                        <strong>Citas</strong>
                                    </a>
                                </li>
                            </ul>
                        )}
                        {!user ? null : (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/user/edit" style={{ fontSize: 20 }}>
                                        <strong>Editar Datos</strong>
                                    </a>
                                </li>
                            </ul>
                        )}
                        {/*Esta Logeado?*/}
                        {logeado ? (

                            <ul className="navbar-nav ml-auto-custom">
                                <li className="nav-item">
                                    <button className="btn btn-outline-danger" onClick={cerrarSesion}>
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ml-auto-custom">
                                <li className="nav-item">
                                    <a className="nav-link" href="/login" style={{ fontSize: 20 }}>
                                        <strong>Logearse</strong>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>

            <div>
                {/* Sección de Inicio */}
                <section className="bg-light p-5 text-center" id={"Inicio"}>
                    <div className="container"  style={{ marginTop: "150px" }}>
                        <h1>Bienvenidos a la Clínica Dental Sonrisa Perfecta</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.v
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.



                        </p>
                    </div>
                </section>

                {/* Sección de Nosotros */}
                <section className="py-5 text-center" id={"Nosotros"}>
                    <div className="container"  style={{ marginTop: "100px" }}>
                        <h2>Nuestra Misión</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.


                        </p>
                        <h2>Nuestra Visión</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.


                        </p>
                    </div>
                </section>

                {/* Sección de Contacto */}
                <section className="bg-light p-5 text-center" id={"Contacto"}>
                    <div className="container"  style={{ marginTop: "100px" }}>
                        <h2>Contáctanos</h2>
                        <p>
                            Puedes contactarnos a través del siguiente formulario o visitarnos
                            en nuestra ubicación.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
                            eget felis dictum cursus vel a odio.
                        </p>
                        {/* Agregar un formulario de contacto aquí si es necesario */}
                    </div>
                </section>

                {/* Sección de Ubicación */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h2>Ubicación</h2>
                        <p>
                            Dirección de la clínica dental: <br />
                            123 Calle Principal, Ciudad, País
                        </p>
                        {/* Agregar un mapa de Google aquí si es necesario */}
                    </div>
                </section>
            </div>


            <button
                className={`btn btn-outline to-top-button ${showToTopButton ? "show" : ""}`}
                onClick={scrollToTop}>Ir arriba</button>

        </div>

        //Body

    );
};

export default Menu;