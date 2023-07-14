import a from './assets/img/team/1.jpg'
import b from './assets/img/team/2.jpg'
import c from './assets/img/team/3.jpg'
const Equipe=(props) => {
	return (<>
		<div className="col-sm-4">
			<div className="team-member"><img className="rounded-circle mx-auto" src={ props.img } />
				<h4>{ props.name }</h4>
				<p className="text-muted"> { props.poste }</p>
				<ul className="list-inline social-buttons">
					<li className="list-inline-item"><a href={ props.twiter }><i className="fa fa-twitter"></i></a></li>
					<li className="list-inline-item"><a href={ props.facebook }><i className="fa fa-facebook"></i></a></li>
					<li className="list-inline-item"><a href={ props.linkeldn }><i className="fa fa-linkedin"></i></a></li>
				</ul>
			</div>
		</div>
	</>)
}
function Team() {
	return (
		<section className="bg-light" id="team">
			<h1 className="text-center">Nos Enseignants</h1>
			<div className="container">
				<div className="row">
					<Equipe img={ b } name="Kay Garland" poste="Designer" twiter="#team" facebook="#team" linkeldn="#team" />
					<Equipe img={ b } name="Larry Parker" poste="Frontend react js" twiter="#team" facebook="#team" linkeldn="#team" />
					<Equipe img={ c } name="Diana Perterse" poste="Developer c#" twiter="#team" facebook="#team" linkeldn="#team" />
				</div>
			</div>
		</section>
	);
}

export default Team;