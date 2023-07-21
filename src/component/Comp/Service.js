import React from 'react'
import im1 from "../assets/images/services/process1.png"
import im2 from "../assets/images/services/process3.png"
import im3 from "../assets/images/services/process2.png"
const GridService=(props) => {
	return (
		<div className="col-md-4 mb-4">
			<div className="border rounded text-center p-4">
				<img src={ props.img } alt="" />
				<h4 className="fw-bolder my-3">{ props.title }</h4>
				<p className="fs-6">{ props.description }</p>
			</div>
		</div>
	)
}
export default function Service() {
	return (

		<div id="services" className="our-services bg-white border-top big-padding container-fluid">
			<div className="container-xl p-0 max-1200">
				<div className="section-title row" style={ { alignContent: 'center', textAlign: 'center' } }>
					<h2 style={ { marginLeft: '50%' } }>Nos Services</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
				</div>
				<div className="container-xl max-1200">
					<div className="row">
						<GridService title="Digital Marketing" img={ im1 } description="Lorem ipsum dolor sit amet, 
								consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut"/>
						<GridService title="Business Consultant" img={ im3 } description="Lorem ipsum dolor sit amet, 
								consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut"/>
						<GridService title="Marketing Automation" img={ im2 } description="Lorem ipsum dolor sit amet, 
								consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut"/>
					</div>
				</div>
			</div>
		</div>

	)
}
