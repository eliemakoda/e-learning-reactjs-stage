import cocher from './assets/img/icone.png';
import noncocher from './assets/img/uncheck.png';
function Offres() {
	return (
		<section id="about">
			<div className="pricing6 py-5 bg-light">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8 text-center">
							<h3 className="mb-3">Nos Prix</h3>
							<h6 className="subtitle font-weight-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Fugit aut alias
								perspiciatis.
							</h6>
						</div>
					</div>
					<div className="row mt-4">

						<div className="col-md-6">
							<div className="card card-shadow border-0 mb-4">
								<div className="card-body p-4">
									<div className="d-flex align-items-center">
										<h5 className="font-weight-medium mb-0">Basic Plan</h5>
										<div className="ml-auto"><span
											className="badge badge-danger font-weight-normal p-2">Popular</span></div>
									</div>
									<div className="row">
										<div className="col-lg-5 text-center">
											<div className="price-box my-3">
												<sup>$</sup><span className="text-dark display-5">36</span>
												<h6 className="font-weight-light">MONTHLY</h6>
												<a className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
													href="#row"> souscrire
													&nbsp; &nbsp;
												</a>
											</div>
										</div>
										<div className="col-lg-7 align-self-center">
											<ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
												<li className="py-2"><i className="icon-check text-info mr-2">
													<img src={ cocher } alt="icone cochée" height={ 40 } />
												</i> <span>6 Lorem,
													ipsum dolor. </span></li>
												<li className="py-2"><i className="icon-check text-info mr-2">
													<img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>Lorem,
														ipsum dolor.</span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>Lorem,
													ipsum dolor. </span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ noncocher } alt="icone cochée" height={ 40 } /></i> <span>Lorem ipsum
													dolor sit amet.</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="card card-shadow border-0 mb-4">
								<div className="card-body p-4">
									<div className="d-flex align-items-center">
										<h5 className="font-weight-medium mb-0">Basic Plan</h5>
										<div className="ml-auto"><span
											className="badge badge-danger font-weight-normal p-2">Popular</span></div>
									</div>
									<div className="row">
										<div className="col-lg-5 text-center">
											<div className="price-box my-3">
												<sup>$</sup><span className="text-dark display-5">36</span>
												<h6 className="font-weight-light">MONTHLY</h6>
												<a className="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3"
													href="#row"> souscrire
													&nbsp; &nbsp;
												</a>
											</div>
										</div>
										<div className="col-lg-7 align-self-center">
											<ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>6 Days a
													Week </span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>Dedicated
													Trainer</span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ noncocher } alt="icone cochée" height={ 40 } /></i> <span>Diet Plan
													Included </span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>Morning and
													Evening Batches</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="card card-shadow border-0 mb-4">
								<div className="card-body p-4">
									<div className="d-flex align-items-center">
										<h5 className="font-medium m-b-0">Advanced Plan</h5>
									</div>
									<div className="row" id="row">
										<div className="col-lg-5 text-center">
											<div className="price-box my-3">
												<sup>$</sup><span className="text-dark display-5">368</span>
												<h6 className="font-weight-light">YEARLY</h6>
												<a className="btn btn-info-gradiant border-0 font-14 text-white p-3 btn-block mt-3"
													href="#row">
													souscrire &nbsp; &nbsp;
												</a>
											</div>
										</div>
										<div className="col-lg-7 align-self-center">
											<ul className="list-inline pl-3 font-14 font-weight-medium text-dark">
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>fichier illimité
												</span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>
													enseignant</span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>video </span></li>
												<li className="py-2"><i className="icon-check text-info mr-2"><img src={ cocher } alt="icone cochée" height={ 40 } /></i> <span>
													acces conference</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Offres;