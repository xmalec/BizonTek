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
        className="skill appearance-skill">
      </div>
    </>
  );
};

export default Skill;
