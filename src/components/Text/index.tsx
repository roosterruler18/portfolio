import React from "react";

const sizeClasses = {
  txtEpilogueExtraBold56: "font-epilogue font-extrabold",
  txtEpilogueBold24Gray900: "font-bold font-epilogue",
  txtEpilogueExtraBold40WhiteA700: "font-epilogue font-extrabold",
  txtEpilogueRegular20WhiteA700: "font-epilogue font-normal",
  txtEpilogueExtraBold72Gray900: "font-epilogue font-extrabold",
  txtEpilogueRegular16WhiteA700a3: "font-epilogue font-normal",
  txtEpilogueBold24: "font-bold font-epilogue",
  txtEpilogueRegular16Gray900a3: "font-epilogue font-normal",
  txtEpilogueBold12: "font-bold font-epilogue",
  txtEpilogueRegular16: "font-epilogue font-normal",
  txtEpilogueRegular14: "font-epilogue font-normal",
  txtEpilogueRegular14WhiteA700a3: "font-epilogue font-normal",
  txtEpilogueRegular16Deeporange400: "font-epilogue font-normal",
  txtEpilogueExtraBold40: "font-epilogue font-extrabold",
  txtEpilogueExtraBold72: "font-epilogue font-extrabold",
  txtEpilogueRegular16Gray900: "font-epilogue font-normal",
  txtEpilogueExtraBold56WhiteA700: "font-epilogue font-extrabold",
  txtEpilogueRegular20: "font-epilogue font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
