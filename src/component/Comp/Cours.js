import React from 'react'
import Nav from './Nav'
import im1 from "../assets/images/case/01.jpg"
import im2 from "../assets/images/case/02.jpg"
import im3 from "../assets/images/case/03.jpg"
import im4 from "../assets/images/case/04.jpg"
import "../assets/css/bootstrap.min.css";
import "../assets/css/all.min.css";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.carousel.css";
import "../assets/css/style.css";
export default function Cours() {
	return (
		<>
			<Nav />
			<section className="abt-01">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="seting">
								<h3>Cours</h3>
								<ol>
									<li>Accueil <i className="fas fa-chevron-double-right"></i></li>
									<li>Cours</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div id="services" className="our-services bg-white border-top big-padding container-fluid">
				<div className="container-xl p-0 max-1200">
					<div className="section-title row" style={ { alignContent: 'center', textAlign: 'center' } }>
						<h2 style={ { textAlign: 'center', marginLeft: '50%' } }>Nos Services</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
					</div>
					<div className="container-xl max-1200">
						<div className="row">
							<div className="col-md-4 mb-4">
								<div className="border rounded text-center p-4">
									<img src={ im1 } alt="" />
									<h4 className="fw-bolder my-3">Developpement javascript </h4>
									<i>by ing Elie </i>
									<p className="fs-6">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
								</div>
							</div>
							<div className="col-md-4 mb-4">
								<div className="border rounded text-center p-4">
									<img src={ im2 } alt="" />
									<h4 className="fw-bolder my-3">Developpement javascript </h4>
									<i>by ing Elie </i>
									<p className="fs-6">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
								</div>
							</div>
							<div className="col-md-4 mb-4">
								<div className="border rounded text-center p-4">
									<img src={ im3 } alt="" />
									<h4 className="fw-bolder my-3">Developpement javascript </h4>
									<i>by ing Elie </i>
									<p className="fs-6">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
								</div>
							</div>
							<div className="col-md-4 mb-4">
								<div className="border rounded text-center p-4">
									<img src={ im4 } alt="" />
									<h4 className="fw-bolder my-3">Developpement javascript </h4>
									<i>by ing Elie </i>
									<p className="fs-6">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
