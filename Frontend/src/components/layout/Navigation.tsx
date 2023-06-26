const Navigation = () => {
	return (
		<nav>
			<div className="navigation-container">
				<div className="navigation">
					<div className="title-part">
						<div className="logo">
							<img src="/img/layout/logo.png" />
						</div>
						<button className="title">BizonTek</button>
					</div>
					<div className="menu" id="menu-container">
						<div className="menu-bars-container">
							<button
								id="menu-bars-toggle"
								className="menu-bars appearance-border-text"
							>
								<span className="bars">
									<i className="fal fa-bars"></i>
								</span>
								<span className="times">
									<i className="fal fa-times"></i>
								</span>
							</button>
						</div>
						<div className="menu-items">
							<div>
								<button>O mně</button>
							</div>
							<div>
								<button>Co nabízím</button>
							</div>
							<div className="nav-contact-btn">
								<button className="btn btn-contact btn-sm btn-animated appearance-color-text-dark">
									Napište mi!
								</button>
							</div>
						</div>
						<div className="appearance-toggle">
							<button className="sun">
								<i className="fal fa-sun"></i>
							</button>
							<button className="moon">
								<i className="fal fa-moon"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
