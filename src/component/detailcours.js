import img from './assets/img/study-group-african-people.jpg';
import video from './assets/img/emako exercice.mp4';
import './coursBoots/css/bootstrap.min.css';
//import './coursBoots/js/bootstrap.min';
import './detail.css';
import { Link } from 'react-router-dom';
import Accueil from './Accueil';
const GriDetails=(props) => {
	return (
		<div class="col-lg-3 col-md-4 col-sm-12">
			<div class="card">
				<div class="file">
					<a href="javascript:void(0);">
						<div class="icon">
							<video height="240" width="100%" controls>
								<source src={ props.video } type="video/mp4" />
							</video>
						</div>
						<div class="file-name">
							<p class="m-b-5 text-muted">{ props.name }</p>
							<small>{ props.teacherName }<span className="date text-muted">{ props.chapter }</span></small>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
const Nav=() => {
	return (<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
		<div className="container"><a className="navbar-brand" href="#page-top"><strong>Nohellef&nbsp;</strong><br /></a><button
			data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right"
			type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i
				className="fa fa-bars"></i></button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ms-auto text-uppercase">
					<li className="nav-item"><Link className="nav-link" to='/'>Accueil</Link></li>
				</ul>
			</div>
		</div>
	</nav>)
}
export default function detailcours() {
	return (
		<>
			<Nav />
			<div id="main-content" className="file_manager">
				<div className="container">
					<div className="row clearfix">
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />
						<GriDetails name="Introduction au lanagage c" video={ video } teacherName="napoleon Hill " chapter="chapitre 1: les constantes " />

					</div>
				</div>
			</div>
		</>
	);
}
