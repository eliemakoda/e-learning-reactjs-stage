import React from 'react'
import Banniere from './Banniere'
import { Link } from 'react-router-dom'
export default function Nav() {
	return (
		<header>
			<div className="my-nav">
				<div className="container">
					<div className="row">
						<div className="nav-items">
							<div className="menu-toggle"></div>
							<div className="logo">
								<h1 style={ { backgroundColor: "blue", color: 'white' } }>NOHELLEF</h1>
							</div>
							<div className="menu-items">
								<div className="menu">
									<ul>
										<li><Link to='/' >Accueil</Link></li>
										<li><a href="">A propos</a></li>
										<li><a href="">Services</a></li>
										<li><a href="">Nos Prix</a></li>
										<li><a href="">Classe </a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
