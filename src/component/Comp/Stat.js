import React from 'react'
import imx from "../assets/images/slider/2.png"
const GridStat=(props) => {
	return (
		<li>
			<div className="_lk_bg_cd">
				<div className="counting" data-count={ props.number }>{ props.number }</div>
				<h5>{ props.description }</h5>
			</div>
		</li>
	)
}
export default function Stat() {
	return (
		<section className="bg-02">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<div className="cal-box">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio obcaecati modi itaque? Molestiae veniam iste
								totam eaque reprehenderit. Animi ametquos commodi nostrum
								ad corporis earum architecto omnis aspernatur ipsum!</p>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Distinctio obcaecati modi itaque? Molestiae veniam iste
								totam eaque reprehenderit. Animi ametquos commodi nostrum
								ad corporis earum architecto omnis aspernatur ipsum!</p>

							<ol>
								<GridStat
									number={ 100 }
									description="Active Courses"
								/>
								<GridStat
									number={ 130 }
									description="Student Learning"
								/>
								<GridStat
									number={ 20 }
									description="Free Courses"
								/>
							</ol>
						</div>
					</div>

					<div className="col-lg-6 col-md-6 col-12">
						<div className="cal-box">
							<img src={ imx } />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
