const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__container section">
				<div className="contact__title">
					Máte zájem o aplikaci na míru nebo se jen chcete na něco
					zeptat?
				</div>
				<div className="contact__form">
					<form className="form">
						<div className="form-control has-error">
							<div className="input-wrapper">
								<input
									placeholder="Jméno a příjmení"
									autoComplete="name"
								/>
							</div>
							<span className="error">Prosím vyplňte jméno</span>
						</div>
						<div className="form-control">
							<div className="input-wrapper">
								<input
									placeholder="E-mail"
									autoComplete="email"
								/>
							</div>
							<span className="error">Prosím vyplňte e-mail</span>
						</div>
						<div className="form-control">
							<div className="input-wrapper">
								<textarea
									placeholder="Obsah zprávy"
									rows={10}
								></textarea>
							</div>
							<span className="error">
								Prosím vyplňte tělo zprávy
							</span>
						</div>
						<div className="form-control">
							<div className="form-checkbox">
								<div className="input-wrapper">
									<input id="input-consent" type="checkbox" />
									<span className="checkmark"></span>
								</div>
								<label htmlFor="input-consent">
									Souhlasím se zpracováním osobních údajů
								</label>
							</div>

							<span className="error">
								Je nutné potvrdit souhlas
							</span>
						</div>
						<div className="form-control">
							<button
								type="submit"
								className="btn btn-contact submit-btn btn-md btn-animated"
							>
								Odeslat
							</button>
						</div>
					</form>
				</div>
				<div className="contact__info-grid">
					<span className="contact__name color-transition">
						Jiří Malec
					</span>
					<div className="socials contact__socials">
						<a href="#">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="#">
							<i className="fab fa-github"></i>
						</a>
						<a
							href="./../public/files/cv.pdf"
							download
							target="_blank"
						>
							<span className="text">CV</span>
						</a>
					</div>

					<span className="contact__cities color-transition">
						Brno, Jihlava
					</span>
					<a
						className="contact__email"
						href="mailto:jiri.malec@bizontek.cz"
					>
						jiri.malec@bizontek.cz
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
