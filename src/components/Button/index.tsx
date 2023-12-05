import React from "react";

const shapes = { round: "rounded-md", circle: "rounded-[50%]" } as const;
const variants = {
  fill: {
    gray_900_6f: "bg-gray-900_6f text-white-A700",
    deep_orange_400_01: "bg-deep_orange-400_01",
    white_A700: "bg-white-A700 shadow-bs text-gray-900",
    deep_orange_400: "bg-deep_orange-400 text-white-A700",
  },
  outline: {
    white_A700_4b: "border border-solid border-white-A700_4b text-white-A700",
  },
} as const;
const sizes = { xs: "p-[7px]", sm: "p-2.5", md: "p-4", lg: "p-5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "deep_orange_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
