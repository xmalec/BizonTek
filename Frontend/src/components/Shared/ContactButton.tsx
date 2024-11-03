import { FC } from "react";
import { PageHelper } from "../../utils/PageHelper";

type Props = {
  isSmall?: boolean;
};

const ContactButton: FC<Props> = ({ isSmall = false }) => {
  return (
    <button
      aria-label="Napište mi"
      className={`btn btn-contact ${
        isSmall ? "btn-sm" : ""
      } btn-animated appearance-color-text-dark`}
      onClick={() => PageHelper.handleClickScroll("section-contact")}
    >
      Napište mi!
    </button>
  );
};

export default ContactButton;
