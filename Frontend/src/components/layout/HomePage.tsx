import ContactButton from "../Shared/ContactButton";
import Socials from "../Shared/Socials";

const HomePage = () => {
	return (
		<div className="hp section">
			<span className="link-anchor" id="section-hp"></span>
			<div className="background-image">
				<img src="img/layout/logo_stroke.png" />
			</div>
			<div className="hp-grid">
				<div className="content-logo">
					<img src="/img/layout/profile-image.jpg" />
				</div>

				<div id="title-name" className="h1 name">
					Jiří Malec
				</div>
				<div id="title-profession" className="h3 profession">
					Softwarový vývojář
				</div>
				<div className="text description">
					Ahoj a vítejte na mém webu! Jsem Jiří Malec a jsem
					softwarový vývojář. Těším se, že vám mohu představit své
					dovednosti a nabídnout své služby. Pokud vás zaujmu a máte
					zájem o spolupráci, neváhejte mi napsat. Rád se s vámi
					sejdu, abychom mohli diskutovat o vašich potřebách a
					případně se domluvit na společném projektu.
				</div>
				<Socials />

				<div className="contact-email">
					<a href="mailto:jiri.malec@bizontek.cz" type="button">
						jiri.malec@bizontek.cz
					</a>
				</div>
				<div className="contact-btn" id="main-button">
					<ContactButton />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
