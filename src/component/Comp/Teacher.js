import React from 'react'
import t1 from "../assets/images/team/2.jpg"
import t2 from "../assets/images/team/4.jpg"
import t3 from "../assets/images/team/3.jpg"
import t4 from "../assets/images/team/1.jpg"
const GridTeacher=(props) => {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 col-6">
			<div className="team-main-box">
				<img src={ props.img } />
				<div className="team-content-box">
					<h3>{ props.teacherName }</h3>
					<b>{ props.JobTittle }</b>
				</div>
			</div>
		</div>
	)
}
export default function Teacher() {
	return (

		<section className="bg-03">
			<div className="container">
				<div className="row">
					<div className="heading">
						<h2>Nos enseignants</h2>
						<span></span>
					</div>
					<GridTeacher
						img={ t1 }
						teacherName="James"
						JobTittle="Designer"
					/>

					<GridTeacher
						img={ t2 }
						teacherName="Smith"
						JobTittle="Developer"
					/>
					<GridTeacher
						img={ t3 }
						teacherName="Johnsy"
						JobTittle="SEO"
					/>
					<GridTeacher
						img={ t4 }
						teacherName="Albert"
						JobTittle="Art Designer"
					/>
				</div>
			</div>
		</section>
	)
}
