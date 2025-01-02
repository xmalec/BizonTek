import { FC, useCallback, useState } from "react";
import { SkillModel } from "../../utils/Types";
import { Icons } from "../../utils/Icons";
import SvgIcon from "../Shared/SvgIcon";

type Props = {
  model: SkillModel;
};

const Skill: FC<Props> = ({ model }) => {
  return (
    <>
      <div
        className={`skill appearance-skill type_${model.type}`}>
        <div className="skill-header">
          <div className="skill-name">
            {model.name}
          </div>
          <div className="skill-value">
            <b>{model.level}/10</b>
          </div>
        </div>

        {model.description && (<div className="skill-desc">
          {model.description}
        </div>)}
        <div className="skill-bar">
          <div className={`skill-bar__fill unactive duration-${model.level}`} style={{ width: `${model.level * 10}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Skill;
