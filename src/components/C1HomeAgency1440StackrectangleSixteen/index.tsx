import React from "react";

import { Img, Text } from "components";

type C1HomeAgency1440StackrectangleSixteenProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "subjecttext"
> &
  Partial<{ subjecttext: string }>;

const C1HomeAgency1440StackrectangleSixteen: React.FC<
  C1HomeAgency1440StackrectangleSixteenProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-deep_orange-100 border-solid bottom-[0] h-12 inset-x-[0] mx-auto rounded-md w-full"></div>
        <div className="absolute bottom-[18%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[92%]">
          <Text
            className="text-base text-gray-900_a3"
            size="txtEpilogueRegular16Gray900a3"
          >
            {props?.subjecttext}
          </Text>
          <Img
            className="h-1.5 mt-1"
            src="images/img_triangle_deep_orange_400.svg"
            alt="triangle_One"
          />
        </div>
      </div>
    </>
  );
};

C1HomeAgency1440StackrectangleSixteen.defaultProps = { subjecttext: "Subject" };

export default C1HomeAgency1440StackrectangleSixteen;
