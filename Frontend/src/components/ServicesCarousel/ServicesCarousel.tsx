import { ServiceModels } from "../../data/ServicesData";
import { ServiceModel } from "../../utils/Types";
import ServiceCard from "./ServiceCard";

const ServicesCarousel = () => {
  const services = ServiceModels;
  return (
    <div className="services section">
      <div
        className="l-cards-carousel l-cards-carousel--4 link-anchor"
        id="section-services"
      >
        <div className="container">
          <div className="services__title h2">Nabízím</div>
          <div className="l-cards-carousel__carousel-wrap">
            <div className="embla js-embla">
              <div className="embla__viewport">
                <div className="l-cards-carousel__list embla__container">
                  {services != undefined &&
                    services
                      .map((x) => x as ServiceModel)
                      .filter((x) => !x.disabled)
                      .sort((a, b) => a.order - b.order)
                      .map((serviceModel, idx) => (
                        <div className="l-cards-carousel__item embla__item">
                          <ServiceCard key={idx} model={serviceModel} />
                        </div>
                      ))}
                </div>
              </div>
            </div>
            <div className="embla__controls">
              <div className="embla__progress">
                <div
                  className="embla__progress-bar "
                  style={{
                    transform: "translate3d(0%, 0px, 0px)",
                  }}
                ></div>
              </div>
              <div className="embla__buttons">
                <button
                  className="embla__button embla__button--prev js-embla-btn-prev"
                  type="button"
                  disabled={true}
                >
                  <i className="fas fa-long-arrow-left"></i>
                </button>
                <button
                  className="embla__button embla__button--next js-embla-btn-next"
                  type="button"
                  disabled={true}
                >
                  <i className="fas fa-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
