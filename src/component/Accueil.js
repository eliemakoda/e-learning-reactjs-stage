import React from "react";
import { Link } from "react-router-dom";
import img from './assets/img/study-group-african-people.jpg';
import Service from "./Service";
import Offres from "./Offres";
import Team from "./Team";
import Footer from "./Footer";
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome.min.css';
//import './assets/js/agency';
//import './assets/js/script.min';
//import './assets/js/agency';
//import './assets/js/script.min';
import './assets/css/Article-List.css';
import './assets/css/Pricing-Grid.css';
import './assets/css/Roboto.css';
import './assets/css/Shopping-Grid.css';
function Accueil() {

	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
				<div className="container"><a className="navbar-brand" href="#page-top"><strong>Nohellef&nbsp;</strong><br /></a><button
					data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right"
					type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i
						className="fa fa-bars"></i></button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ms-auto text-uppercase">
							<li className="nav-item"><a className="nav-link" href="#services">Accueil</a></li>
							<li className="nav-item"><a className="nav-link" href="#cours">Nos Cours </a></li>
							<li className="nav-item"><a className="nav-link" href="#about">nos offres</a></li>
							<li className="nav-item"><a className="nav-link" href="#team">NOS ENSEIGNANTS<br /><br /></a></li>
							<li className="nav-item"><a className="nav-link" href="#page-top">connexion</a></li>
							<li className="nav-item"><a className="nav-link" href="#page-top">Inscription</a></li>

						</ul>
					</div>
				</div>
			</nav>
			<header className="masthead"
				style={ {
					backgroundImage: `url(${img})`,
					paddingBottom: "0%",
					marginBottom: "0%"

				} }>
				<div className="container">
					<div className="intro-text">
						<div className="intro-lead-in"><span className="text-center">Bienvenue
							sur&nbsp;<br /><strong>Nohellef&nbsp;</strong><br /><br /></span></div>
						<div className="intro-heading text-uppercase"><span className="text-center">Ravie de vous savoir parmis
							nous</span></div><a className="btn btn-primary link-light btn-xl text-uppercase" role="button"
								href="#services">En savoir plus</a>
					</div>
				</div>
			</header>
			<Service />
			<Offres />
			<Team />
			<Footer />
		</>
	);
}

export default Accueil;