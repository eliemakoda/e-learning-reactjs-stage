import a from './assets/img/team/1.jpg'
import b from './assets/img/team/2.jpg'
import c from './assets/img/team/3.jpg'

function Team() {
	return (
		<section className="bg-light" id="team">
			<h1 className="text-center">Nos Enseignants</h1>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="team-member"><img className="rounded-circle mx-auto" src={ b } />
							<h4>Kay Garland</h4>
							<p className="text-muted"> Designer</p>
							<ul className="list-inline social-buttons">
								<li className="list-inline-item"><a href="#team"><i className="fa fa-twitter"></i></a></li>
								<li className="list-inline-item"><a href="#team"><i className="fa fa-facebook"></i></a></li>
								<li className="list-inline-item"><a href="#team"><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="team-member"><img className="rounded-circle mx-auto" src={ b } />
							<h4>Larry Parker</h4>
							<p className="text-muted">Frontend react js</p>
							<ul className="list-inline social-buttons">
								<li className="list-inline-item"><a href="#team"><i className="fa fa-twitter"></i></a></li>
								<li className="list-inline-item"><a href="#team"><i className="fa fa-facebook"></i></a></li>
								<li className="list-inline-item"><a href="#team"><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="team-member"><img className="rounded-circle mx-auto" src={ c } />
							<h4>Diana Pertersen</h4>
							<p className="text-muted"> Developer c#</p>
							<ul className="list-inline social-buttons">
								<li className="list-inline-item"><a href="#team"><i className="fa fa-twitter"></i></a></li>
								<li className="list-inline-item"><a href="#team"><i className="fa fa-facebook"></i></a></li>
								<li className="list-inline-item"><a href="#team"><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;