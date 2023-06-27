import { ServiceModel } from "../../utils/Types";
import ServiceBox from "../Services/ServiceBox";

const Services = () => {
	const services: ServiceModel[] = [
		{
			title: "Webové aplikace",
			thumbnail: "",
			order: 1,
			id: "5",
			description: "aaa",
		},
	];
	return (
		<div className="services section">
			<div className="services__grid">
				<div className="services__title h2">Nabízím</div>
				{services.map((serviceModel, idx) => (
					<ServiceBox key={idx} model={serviceModel} />
				))}
			</div>
		</div>
	);
};

export default Services;
