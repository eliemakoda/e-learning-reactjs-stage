import React from 'react'

export default function Nav() {
	return (
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
	)
}
