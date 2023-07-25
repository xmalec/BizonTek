import { FC, useState } from "react";
import { EventModel, ModalModel } from "../../utils/Types";

const Socials = () => {
	return (
		<div className="socials">
			<a
				href="https://www.linkedin.com/in/jiri-malec/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fab fa-linkedin"></i>
			</a>
			<a
				href="https://github.com/xmalec"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fab fa-github"></i>
			</a>
			<a href="/files/cv.pdf" target="_blank">
				<span className="text-xl">CV</span>
			</a>
		</div>
	);
};

export default Socials;
