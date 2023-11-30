import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface Props {
  buttonClassName: any;
  text: string;
  buttonLink: string;
}

export const DarkButton = ({ buttonClassName, text = "BUTTON", buttonLink }: Props): JSX.Element => {
  return (
    <Link
      className={`${buttonClassName}`}
      to={`${buttonLink}`}>
      {text}
    </Link>
  );
};

DarkButton.propTypes = {
  text: PropTypes.string,
};
