import { SkillsData } from "../../data/SkillsData";
import Skill from "./Skill";
import { SkillModel } from "../../utils/Types";

const Skills = () => {
  const services = SkillsData;
  return (
    <div className="skills section">
      <span className="link-anchor" id="section-skills"></span>
      <div className="services__title h2">Technologie a dovednosti</div>
      <div className="services__grid">
        {services != undefined &&
          services
            .map((x) => x as SkillModel)
            .sort((a, b) => a.order - b.order)
            .map((serviceModel, idx) => (
              <Skill key={idx} model={serviceModel} />
            ))}
      </div>
    </div>
  );
};

export default Skills;
