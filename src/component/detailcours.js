import React from "react";
import './det.css';
import { useState } from "react";
function Detailcours() {
	const [cocher, noncocher]=useState(false);
	const OnchangeInput=() => {
		noncocher(!cocher);
	}
	return (
		<>
			<div id="faq">
				<h1>Nos cours </h1>
				<ul>
					<li>
						<input type="checkbox" checked={ cocher } onChange={ OnchangeInput } />
						<i></i>
						<h2>Introduction au langage consectetur</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae debitis iusto voluptatum doloribus rem, qui nesciunt labore tempore fugit iste deserunt incidunt error provident repudiandae laudantium quo ipsa unde perspiciatis, nihil autem distinctio! Deserunt, aspernatur.</p>
					</li>
					<li>
						<input type="checkbox" checked={ cocher } onChange={ OnchangeInput } />
						<i></i>
						<h2>Base de la programmation orientée objet</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.</p>
					</li>
					<li>
						<input type="checkbox" checked={ cocher } onChange={ OnchangeInput } />
						<i></i>
						<h2>developpement api rest</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
					</li>
				</ul>
			</div>
		</>
	);
}
export default Detailcours;
