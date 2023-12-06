import PropTypes from "prop-types";
import React from "react";
import Link from 'next/link';

interface Props {
  className: any;
  buttonClassName: any;
  text: string;
  buttonLink: string;
}

export const DarkButton = ({ className, buttonClassName, text = "BUTTON", buttonLink }: Props): JSX.Element => {
  return (
    <Link href={`${buttonLink}`}
      className={`relative w-[170px] h-[48px] rounded-[6px] border border-solid border-[#ffffff4b] all-[unset] box-border ${className}`}
    >
      <p
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [font-family:'Epilogue',Helvetica] font-black text-white text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap all-[unset] box-border ${buttonClassName}`}
      >
        {text}
      </p>
    </Link>
  );
};

DarkButton.propTypes = {
  text: PropTypes.string,
};
