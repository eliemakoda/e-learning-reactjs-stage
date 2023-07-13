import px1 from './assets/img/a2.png';
import px2 from './assets/img/im3.png';

import { Link } from 'react-router-dom';
const Cours=() => {
	return (
		<>
			<div className="shopping-grid">
				<div className="container">
					<h3 className="" align="center" id="cours">Nos cours</h3>
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<div className="product-grid7">
								<div className="product-image7">
									<Link to="/detail">
										<img className="pic-1" src={ px1 } />
										<img className="pic-2" src={ px2 } />
									</Link>
									<ul className="social">
										<li><a href="#cours" className="fa fa-search"></a></li>
										<li><a href="#cours" className="fa fa-shopping-bag"></a></li>
										<li><a href="#cours" className="fa fa-shopping-cart"></a></li>
									</ul>
									<span className="product-new-label">Nouveau</span>
								</div>
								<div className="product-content">
									<h3 className="title"><a href="#cours">Developpement Javascript</a></h3>
									<ul className="rating">
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
									</ul>
									<div className="price">$15.00
										<span>$20.00</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="product-grid7">
								<div className="product-image7">
									<Link to="/detail">
										<img className="pic-1" src={ px1 } />
										<img className="pic-2" src={ px2 } />
									</Link>
									<ul className="social">
										<li><a href="#cours" className="fa fa-search"></a></li>
										<li><a href="#cours" className="fa fa-shopping-bag"></a></li>
										<li><a href="#cours" className="fa fa-shopping-cart"></a></li>
									</ul>
								</div>
								<div className="product-content">
									<h3 className="title"><a href="#cours">Developpement Javascript</a></h3>
									<ul className="rating">
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
									</ul>
									<div className="price">$15.00</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="product-grid7">
								<div className="product-image7">
									<Link to="/detail">
										<img className="pic-1" src={ px1 } />
										<img className="pic-2" src={ px2 } />
									</Link>
									<ul className="social">
										<li><a href="#cours" className="fa fa-search"></a></li>
										<li><a href="#cours" className="fa fa-shopping-bag"></a></li>
										<li><a href="#cours" className="fa fa-shopping-cart"></a></li>
									</ul>
									<span className="product-new-label">New</span>
								</div>
								<div className="product-content">
									<h3 className="title"><a href="#cours">Developpement Javascript</a></h3>
									<ul className="rating">
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
									</ul>
									<div className="price">$15.00
										<span>$20.00</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="product-grid7">
								<div className="product-image7">
									<Link to="/detail">
										<img className="pic-1" src={ px1 } />
										<img className="pic-2" src={ px2 } />
									</Link>
									<ul className="social">
										<li><a href="#cours" className="fa fa-search"></a></li>
										<li><a href="#cours" className="fa fa-shopping-bag"></a></li>
										<li><a href="#cours" className="fa fa-shopping-cart"></a></li>
									</ul>
									<span className="product-new-label">New</span>
								</div>
								<div className="product-content">
									<h3 className="title"><a href="#cours">Developpement Javascript</a></h3>
									<ul className="rating">
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
										<li className="fa fa-star"></li>
									</ul>
									<div className="price">$15.00
										<span>$20.00</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Cours;