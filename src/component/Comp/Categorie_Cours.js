import React from 'react'
import im1 from "../assets/images/icons/design.png"
import im2 from "../assets/images/icons/coin.png"
import im3 from "../assets/images/icons/budget.png"
import im4 from "../assets/images/icons/monitor.png"
import im5 from "../assets/images/icons/art.png"
import im6 from "../assets/images/icons/mail.png"
import im7 from "../assets/images/icons/photo.png"
import im8 from "../assets/images/icons/gym.png"
import im9 from "../assets/images/icons/account.png"
import { Link } from 'react-router-dom'
export default function Categorie_Cours() {
	return (
		<section className="bg-01" id='catcours'>
			<div className="container">
				<div className="row">
					<div className="heading">
						<h2>Categorie Populaire</h2>
						<span></span>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im1 } />
											<h3>DEVELOPPEMENT Personnel</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im2 } />
											<h3>business</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im3 } />
											<h3>Comptabilité</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im4 } />
											<h3>Genie Logiciel</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im5 } />
											<h3>arts & design</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im6 } />
											<h3>marketing</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im7 } />
											<h3>Photographie</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>


					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im8 } />
											<h3>Santé et bien être</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

						<Link to="/detail">
							<div className="category-box">
								<div className="my-card">
									<ul>
										<li>
											<img src={ im9 } />
											<h3>Sport</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?</p>

										</li>
									</ul>
								</div>
							</div>
						</Link>
					</div>

				</div>
			</div>
		</section>

	)
}
