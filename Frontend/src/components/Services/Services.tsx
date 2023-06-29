import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import { ServiceModel } from "../../utils/Types";
import ServiceBox from "./ServiceBox";

const Services = () => {
	const [services, loading] = useFirestoreCollection("services");
	return (
		<div className="services section">
			<span className="link-anchor" id="section-services"></span>
			<div className="services__grid">
				<div className="services__title h2">Nabízím</div>
				{services
					.map((x) => x as ServiceModel)
					.sort((a, b) => a.order - b.order)
					.map((serviceModel, idx) => (
						<ServiceBox key={idx} model={serviceModel} />
					))}
			</div>
		</div>
	);
};

export default Services;
