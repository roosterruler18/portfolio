import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  buttonLink: any;
  buttonClassName: any;
  text: string;
}

export const LightButton = ({
  className,
  buttonLink,
  buttonClassName,
  text = "BUTTON",
}: Props): JSX.Element => {
  return (
    <Link
      className={`relative block w-36 h-12 -top-px -left-px bg-white rounded-[6px] shadow-[0px_3px_9px_#39140014] box-border ${className}`} href={`${buttonLink}`}      >
      <p
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-[#381300] text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap all-[unset] box-border ${buttonClassName}`}
      >
        {text}
      </p>
    </Link>
  );
};

LightButton.propTypes = {
  text: PropTypes.string,
};
