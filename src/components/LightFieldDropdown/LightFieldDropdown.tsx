/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  labelClassName: any;
  text: string;
  overlapGroupClassName: any;
  divClassName: any;
  text1: string;
  triangleClassName: any;
}

export const LightFieldDropdown = ({
  className,
  labelClassName,
  text = "LABEL",
  overlapGroupClassName,
  divClassName,
  text1 = "Placeholder",
  triangleClassName,
}: Props): JSX.Element => {
  return (
    <div className={`relative w-[270px] h-[76px] ${className}`}>
      <div
        className={`absolute top-0 left-0 [font-family:'Epilogue',Helvetica] font-bold text-[#381300] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap ${labelClassName}`}
      >
        {text}
      </div>
      <div
        className={`absolute w-[270px] h-[48px] top-[28px] left-0 bg-white rounded-[6px] border border-solid border-[#f3d1bf] ${overlapGroupClassName}`}
      >
        <div
          className={`absolute top-[8px] left-[15px] [font-family:'Epilogue',Helvetica] font-normal text-[#391400a3] text-[16px] tracking-[0] leading-[32px] whitespace-nowrap ${divClassName}`}
        >
          {text1}
        </div>
        <img
          className={`absolute w-[10px] h-[6px] top-[20px] left-[243px] ${triangleClassName}`}
          alt="Triangle"
          src="/img/triangle.svg"
        />
      </div>
    </div>
  );
};

LightFieldDropdown.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
