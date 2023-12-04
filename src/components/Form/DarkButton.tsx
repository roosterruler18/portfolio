import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

interface Props {
    buttonClassName: any;
    text: string;
    buttonLink: string;
}

export const DarkButton = ({ buttonClassName, text = "BUTTON", buttonLink }: Props) => {
    return (
        <Link
            className={`${buttonClassName}`}
            href={`${buttonLink}`}>
            <p>{text}</p>
        </Link>
    );
};

DarkButton.propTypes = {
    text: PropTypes.string,
    buttonClassName: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
};

