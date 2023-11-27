/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  buttonClassName: any;
  text: string;
}

export const DarkButton = ({ className, buttonClassName, text = "BUTTON" }: Props): JSX.Element => {
  return (
    <button
      className={`relative w-[170px] h-[48px] rounded-[6px] border border-solid border-[#ffffff4b] all-[unset] box-border ${className}`}
    >
      <button
        className={`absolute top-[17px] left-[55px] [font-family:'Epilogue',Helvetica] font-black text-white text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap all-[unset] box-border ${buttonClassName}`}
      >
        {text}
      </button>
    </button>
  );
};

DarkButton.propTypes = {
  text: PropTypes.string,
};
