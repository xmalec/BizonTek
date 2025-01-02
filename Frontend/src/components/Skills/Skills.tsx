import { SkillsData } from "../../data/SkillsData";
import Skill from "./Skill";
import { SkillModel } from "../../utils/Types";
import { useState } from "react";

const Skills = () => {
  const services = SkillsData;
  const [unloaded, setUnloaded] = useState<boolean>(true);
  return (
    <div className="skills section">
      <span className="link-anchor" id="section-skills"></span>
      <div className={`skills__container ${unloaded && "unloaded"}`}>
        <h3 className="skills__title h3 m-0">Technologie a&nbsp;dovednosti</h3>
        <div className="skills__grid-container">
        <div className="skills__grid">
          {services != undefined &&
            services
              .map((x) => x as SkillModel)
              .sort((a, b) => a.order - b.order)
              .map((serviceModel, idx) => (
                <Skill key={idx} model={serviceModel} />
              ))}
        </div>
        </div>
        <button className="skills-load-more btn btn-contact btn-sm btn-animated appearance-color-text-dark" onClick={() => setUnloaded(false)}>
          Zobrazit více
        </button>
      </div>
    </div>
  );
};

export default Skills;
