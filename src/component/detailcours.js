import img from './assets/img/study-group-african-people.jpg';
import video from './assets/img/emako exercice.mp4'
import './detail.css';
export default function detailcours() {
	return (
		<>
			<div className="container">
				<h1 className="my-4">developpement javasript</h1>
				<div className="row">
					<div className="col-md-8"><img className="img-fluid" src={ img } alt="Alt Text" /></div>
					<div className="col-md-4">
						<h3 className="my-3">Description du cours</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
						<h3 className="my-3">Prerequis cours</h3>
						<ul className="list-unstyled">
							<li>Lorem Ipsum</li>
							<li>Consectetur</li>
							<li>Dolor Sit Amet</li>
							<li>Adipiscing Elit</li>
						</ul>
					</div>
				</div>
				<h3 className="my-4" id="video">Videos</h3>
				<div className="row">
					<div className="col-sm-6 col-md-3 mb-4 video"><a href="#video">
						<video width="320" height="240" controls>
							<source src={ video } type="video/mp4" />
						</video>
					</a>chapitre x les classes	</div>
					<div className="col-sm-6 col-md-3 mb-4 video"><a href="#video">
						<video width="320" height="240" controls>
							<source src={ video } type="video/mp4" />
						</video>
					</a>chapitre x les espaces de noms</div>
					<div className="col-sm-6 col-md-3 mb-4 video"><a href="#video">
						<video width="320" height="240" controls>
							<source src={ video } type="video/mp4" />
						</video>
					</a>chapitre x les variables</div>
					<div className="col-sm-6 col-md-3 mb-4 video"><a href="#video">
						<video width="320" height="240" controls>
							<source src={ video } type="video/mp4" />

						</video>
					</a>
						chapitre x les fonctions
					</div>
				</div>
			</div>
		</>
	);
}
