export class PageHelper {
	static handleClickScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth" });
			const container = document.getElementById("menu-container");
			if (container != undefined) {
				if (container.classList.contains("collapsed")) {
					container.classList.remove("collapsed");
				}
			}
		}
	};

	static scrollUp = () => {
		this.handleClickScroll("section-hp");
	};
}
