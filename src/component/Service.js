import Cours from "./Cours";
import im3 from './assets/img/im3.png';
import a2 from './assets/img/a2.png';
import im7 from './assets/img/im7.png';
function Service() {
	return (
		<>
			<section id="services">
				<section className="article-list">
					<h2 className="text-center">A propos</h2>
					<div className="container">
						<div className="intro">
							<p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum
								nibh erat, pellentesque ut laoreet vitae. </p>
						</div>
						<div className="row articles" id="art">
							<div className="col-sm-6 col-md-4 item"><a href="#art"><img className="img-fluid" src={ im3 } /></a>
								<h3 className="name">Outil conçu par les experts<br /></h3>
								<p className="description"><br /><br />Outil conçu par les expertsUn prof particulier disponible en
									ligne grâce au tchat Tutoring !Du lundi au vendredi de 17h à 20h, et le week-end de 14h à
									17hDu lundi au vendredi de 17h à 20h, et le week-end de 14h à 17hRéponse en moins de
									2minQuestions illimitées (Méthode, exercice corsé...)Pour toutes les matières (enseignement
									de spécialités compris)Du CP à la TerminaleAccessible depuis l'ordinateur familial, la
									tablette ou son mobile<br /><br /><br /></p><a className="action" href="#art"></a>
							</div>
							<div className="col-sm-6 col-md-4 item"><a href="#art"><img className="img-fluid" src={ a2 } /></a>
								<h3 className="name"><br />Des contenus uniques et novateurs<br /><br /><br /></h3>
								<p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
									Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit
									id.</p><a className="action" href="#art"></a>
							</div>
							<div className="col-sm-6 col-md-4 item"><a href="#art"><img className="img-fluid" src={ im7 } /></a>
								<h3 className="name">outil idéal</h3>
								<p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
									Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit
									id.</p><a className="action" href="#art"></a>
							</div>
						</div>
					</div>
				</section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="text-uppercase section-heading">Services</h2>
							<h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur</h3>
						</div>
					</div>
					<div className="row text-center">
						<div className="col-md-4"><span className="fa-stack fa-4x"><i
							className="fa fa-circle fa-stack-2x text-primary"></i><i
								className="fa fa-desktop fa-stack-1x fa-inverse"></i></span>
							<h4 className="section-heading">VIDEOS</h4>
							<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
								architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="col-md-4"><span className="fa-stack fa-4x"><i
							className="fa fa-circle fa-stack-2x text-primary"></i><i
								className="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
							<h4 className="section-heading">FICHIERS ILLIMITE</h4>
							<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
								architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="col-md-4"><span className="fa-stack fa-4x"><i
							className="fa fa-circle fa-stack-2x text-primary"></i><i
								className="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
							<h4 className="section-heading">Mise en Pratique&nbsp;</h4>
							<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
								architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
						<div className="col-md-4"><span className="fa-stack fa-4x"><i
							className="fa fa-circle fa-stack-2x text-primary"></i><i
								className="fa fa-mobile fa-stack-1x fa-inverse"></i></span>
							<h4 className="section-heading">Web Conference</h4>
							<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
								architecto quo inventore harum ex magni, dicta impedit.</p>
						</div>
					</div>
				</div>
				<Cours />
			</section>
		</>
	);
}
export default Service;