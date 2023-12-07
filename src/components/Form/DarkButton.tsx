import PropTypes from "prop-types";
import React from "react";
import Link from 'next/link';

interface DarkButtonProps {
  className?: string;
  buttonClassName?: string;
  text?: string;
  buttonLink: string;
  onClick?: () => void;
}

export const DarkButton = ({ className, buttonClassName, text = "BUTTON", buttonLink, onClick }: DarkButtonProps): JSX.Element => {
  return (
    <Link href={`${buttonLink}`}
      onClick={onClick}
      className={`relative w-[120px] h-[40px] sm:w-[170px] sm-[48px] rounded-[6px] border border-solid border-[#ffffff4b] all-[unset] box-border ${className}`}
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
