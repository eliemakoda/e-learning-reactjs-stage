import React from 'react'
import t1 from "../assets/images/team/2.jpg"
import t2 from "../assets/images/team/4.jpg"
import t3 from "../assets/images/team/3.jpg"
import t4 from "../assets/images/team/1.jpg"
export default function Teacher() {
	return (

		<section className="bg-03">
			<div className="container">
				<div className="row">
					<div className="heading">
						<h2>Nos enseignants</h2>
						<span></span>
					</div>

					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="team-main-box">
							<img src={ t1 } />
							<div className="team-content-box">
								<h3>James</h3>
								<b>Designer</b>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="team-main-box">
							<img src={ t2 } />
							<div className="team-content-box">
								<h3>Smith</h3>
								<b>Dveloper</b>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="team-main-box">
							<img src={ t3 } />
							<div className="team-content-box">
								<h3>Johnsy</h3>
								<b>SEO</b>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-4 col-sm-6 col-6">
						<div className="team-main-box">
							<img src={ t4 } />
							<div className="team-content-box">
								<h3>Albert</h3>
								<b>Art Designer</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
