const HomePage = () => {
	return (
		<div className="hp section">
			<div className="background-image">
				<img src="./img/logo_stroke.png" />
			</div>
			<div className="hp-grid">
				<div className="content-logo">
					<img src="./img/profile-image.jpg" />
				</div>

				<div id="title-name" className="h1 name">
					Jiří Malec
				</div>
				<div id="title-profession" className="h3 profession">
					Softwarový vývojář
				</div>
				<div className="text description">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Donec quis nibh at felis congue commodo. Nulla pulvinar
					eleifend sem. Nulla non lectus sed nisl molestie malesuada.
					Aenean vel massa quis mauris vehicula lacinia. Etiam dui
					sem, fermentum vitae, sagittis id, malesuada in, quam.
					Pellentesque sapien.
				</div>
				<div className="socials">
					<a href="#">
						<i className="fab fa-linkedin fa-lg"></i>
					</a>
					<a href="#">
						<i className="fab fa-github fa-lg"></i>
					</a>
					<a href="./../public/files/cv.pdf" download target="_blank">
						<span className="text-xxl">CV</span>
					</a>
				</div>

				<div className="contact-email">
					<a href="mailto:jiri.malec@bizontek.cz" type="button">
						jiri.malec@bizontek.cz
					</a>
				</div>
				<div className="contact-btn">
					<button
						id="main-button"
						className="btn btn-contact btn-animated appearance-color-text-dark"
					>
						Napište mi!
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
