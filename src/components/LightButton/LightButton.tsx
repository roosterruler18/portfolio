/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  overlapGroupClassName: any;
  buttonClassName: any;
  text: string;
}

export const LightButton = ({
  className,
  overlapGroupClassName,
  buttonClassName,
  text = "BUTTON",
}: Props): JSX.Element => {
  return (
    <button className={`w-[170px] h-[48px] all-[unset] box-border ${className}`}>
      <button
        className={`relative w-[172px] h-[50px] -top-px -left-px bg-white rounded-[6px] shadow-[0px_3px_9px_#39140014] all-[unset] box-border ${overlapGroupClassName}`}
      >
        <button
          className={`absolute top-[19px] left-[57px] [font-family:'Epilogue',Helvetica] font-black text-[#381300] text-[14px] text-center tracking-[0] leading-[normal] whitespace-nowrap all-[unset] box-border ${buttonClassName}`}
        >
          {text}
        </button>
      </button>
    </button>
  );
};

LightButton.propTypes = {
  text: PropTypes.string,
};
