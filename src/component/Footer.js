function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row" id="pied">
					<div className="col-md-4"><span className="copyright">Copyright&nbsp;©&nbsp;NOHELLEF2023</span></div>
					<div className="col-md-4">
						<ul className="list-inline social-buttons">
							<li className="list-inline-item"><a href="#pied"><i className="fa fa-twitter"></i></a></li>
							<li className="list-inline-item"><a href="#pied"><i className="fa fa-facebook"></i></a></li>
							<li className="list-inline-item"><a href="#pied"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
					<div className="col-md-4">
						<ul className="list-inline quicklinks">
							<li className="list-inline-item"><a href="#pied">Privacy Policy</a></li>
							<li className="list-inline-item"><a href="#pied">Terms of Use</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;