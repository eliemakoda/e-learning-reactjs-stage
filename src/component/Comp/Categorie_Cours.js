import React from 'react'
import im1 from "../assets/images/icons/design.png"
import im2 from "../assets/images/icons/coin.png"
import im3 from "../assets/images/icons/budget.png"
import im4 from "../assets/images/icons/monitor.png"
import im5 from "../assets/images/icons/art.png"
import im6 from "../assets/images/icons/mail.png"
import im7 from "../assets/images/icons/photo.png"
import im8 from "../assets/images/icons/gym.png"
import im9 from "../assets/images/icons/account.png"
import { Link } from 'react-router-dom'
const GridCategorie_Cours=(props) => {
	return (
		<div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			<Link to={ props.endpoint }>
				<div className="category-box">
					<div className="my-card">
						<ul>
							<li>
								<img src={ props.img } />
								<h3>{ props.title }</h3>
								<p>
									{ props.description }
								</p>

							</li>
						</ul>
					</div>
				</div>
			</Link>
		</div>
	)
}
export default function Categorie_Cours() {
	return (
		<section className="bg-01" id='catcours'>
			<div className="container">
				<div className="row">
					<div className="heading">
						<h2>Categorie Populaire</h2>
						<span></span>
					</div>
					<GridCategorie_Cours
						img={ im1 }
						title="DEVELOPPEMENT Personnel"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>
					<GridCategorie_Cours
						img={ im2 }
						title="business"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>

					<GridCategorie_Cours
						img={ im3 }
						title="Comptabilité"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>

					<GridCategorie_Cours
						img={ im4 }
						title="Genie Logiciel"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>

					<GridCategorie_Cours
						img={ im5 }
						title="arts & design"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>

					<GridCategorie_Cours
						img={ im6 }
						title="marketing"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>
					<GridCategorie_Cours
						img={ im7 }
						title="Photographie"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>

					<GridCategorie_Cours
						img={ im8 }
						title="Santé et bien être"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>


					<GridCategorie_Cours
						img={ im9 }
						title="Sport"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Facilis molestias excepturi fugit, similique laborum necessitatibus?"
						endpoint="/detail"
					/>

				</div>
			</div>
		</section>

	)
}
