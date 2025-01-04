import { FC } from "react";
import { PageHelper } from "../../utils/PageHelper";
import Link from "next/link";

type Props = {
  isSmall?: boolean;
};

const ContactButton: FC<Props> = ({ isSmall = false }) => {
  return (
    <Link href="/#kontakt"
      aria-label="Napište mi"
      scroll={false}
      className={`btn btn-contact ${
        isSmall ? "btn-sm" : ""
      } btn-animated appearance-color-text-dark`}
    >
      Napište mi!
    </Link>
  );
};

export default ContactButton;
