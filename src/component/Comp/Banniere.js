import React from 'react'
import slider from "../assets/images/slider/1.png"
export default function Banniere() {
	return (
		<section className="banner">
			<div className="banner-wrapper-main"></div>
			<div className="container">
				<div className="row">
					<div className="slider-wrapper">
						<div className="box-01">
							<div className="content">
								<h1>BROADEN YOUR KNOWLEDGE WITH TUTORS</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi laborum deserunt necessitatibus. Earum excepturi nobis,
									reprehenderit deserunt minima, veniam omnis libero, debitis fugiat autem alias eos architecto? In, eos!</p>

								<div className="btn-001">
									<ul>
										<li><a href="#pricing-table">GET STARTED NOW</a></li>
										<li><a href="#catcours">VIEW COURSES</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="box-01">
							<div className="slider-image">
								<img src={ slider } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
