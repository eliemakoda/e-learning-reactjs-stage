import px1 from './assets/img/a2.png';
import px2 from './assets/img/im3.png';

import { Link } from 'react-router-dom';

const GridCours=(props) => {
	return (<div className="col-md-3 col-sm-6">
		<div className="product-grid7">
			<div className="product-image7">
				<Link to="/detail">
					<img className="pic-1" src={ props.img } alt="image du cour " />
					<img className="pic-2" src={ props.img2 } alt="image du cour " />
				</Link>
				<ul className="social">
					<li><a href="#cours" className="fa fa-search"></a></li>
					<li><a href="#cours" className="fa fa-shopping-bag"></a></li>
					<li><a href="#cours" className="fa fa-shopping-cart"></a></li>
				</ul>
				<span className="product-new-label">{ props.statut }</span>
			</div>
			<div className="product-content">
				<h3 className="title"><a href="#cours">{ props.cours }</a></h3>
				<ul className="rating">
					<li className="fa fa-star"></li>
					<li className="fa fa-star"></li>
					<li className="fa fa-star"></li>
					<li className="fa fa-star"></li>
					<li className="fa fa-star"></li>
				</ul>
				<div className="price">{ props.prix }
					<span>{ props.ancienPrix }</span>
				</div>
			</div>
		</div>
	</div>
	)
}
const Cours=() => {
	return (
		<>
			<div className="shopping-grid">
				<div className="container">
					<h3 className="" align="center" id="cours">Nos cours</h3>
					<div className="row">
						<GridCours img={ px1 } img2={ px2 } statut="nouveau" cours="Developpement langage c_sharp" prix="$15.00" ancienPrix="$20.00" />
						<GridCours img={ px2 } img2={ px1 } statut="" cours="Developpement Javascript" prix="$35.00" ancienPrix="$100.00" />
						<GridCours img={ px1 } img2={ px2 } statut="nouveau" cours="Developpement php" prix="$65.00" ancienPrix="$100.00" />
						<GridCours img={ px1 } img2={ px2 } statut="nouveau" cours="Modelisation Merise " prix="$65.00" ancienPrix="$100.00" />
					</div>
				</div>
			</div>
		</>
	);
}
export default Cours;