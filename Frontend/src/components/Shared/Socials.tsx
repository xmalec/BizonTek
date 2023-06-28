import { FC, useState } from "react";
import { EventModel, ModalModel } from "../../utils/Types";

const Socials = () => {
	return (
		<div className="socials">
			<a href="https://www.linkedin.com/in/jiri-malec/">
				<i className="fab fa-linkedin"></i>
			</a>
			<a href="#">
				<i className="fab fa-github"></i>
			</a>
			<a href="./../public/files/cv.pdf" download target="_blank">
				<span className="text-xl">CV</span>
			</a>
		</div>
	);
};

export default Socials;
