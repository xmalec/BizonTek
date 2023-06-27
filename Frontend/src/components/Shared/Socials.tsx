import { FC, useState } from "react";
import { EventModel, ModalModel } from "../../utils/Types";


const Socials => {
	return (
		<div class="socials">
						<a href="#">
							<i class="fab fa-linkedin fa-lg"></i>
						</a>
						<a href="#">
							<i class="fab fa-github fa-lg"></i>
						</a>
						<a
							href="./../public/files/cv.pdf"
							download
							target="_blank"
						>
							<span class="text-xxl">CV</span>
						</a>
					</div>
	);
};

export default Socials;
