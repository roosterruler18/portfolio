import React from "react";

import { Button, Img, Line, Text } from "components";
import C1HomeAgency1440StackrectangleSixteen from "components/C1HomeAgency1440StackrectangleSixteen";

const Contact1440Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-epilogue items-center justify-end mx-auto w-full">
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1170px] mb-[50px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-12 items-center justify-start p-3.5 w-12"
                  style={{ backgroundImage: "url('images/img_group88.svg')" }}
                >
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtEpilogueBold24"
                >
                  Agency
                </Text>
              </div>
              <Text
                className="sm:mt-0 mt-[19px] text-base text-center text-white-A700"
                size="txtEpilogueRegular16"
              >
                About Services Pricing Blog
              </Text>
              <Button
                className="cursor-pointer font-black leading-[normal] min-w-[138px] text-center text-sm uppercase"
                shape="round"
                color="white_A700_4b"
                variant="outline"
              >
                Contact
              </Button>
            </div>
            <Text
              className="mt-24 md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.00px]"
              size="txtEpilogueExtraBold72"
            >
              Contact
            </Text>
            <Text
              className="leading-[32.00px] mt-[33px] text-base text-center text-white-A700_a3 w-[49%] sm:w-full"
              size="txtEpilogueRegular16WhiteA700a3"
            >
              Agency provides a full service range including technical skills,
              design, business understanding.
            </Text>
          </div>
        </div>
        <div className="bg-red-50 flex flex-col items-center justify-start pb-[17403px] w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
            <div className="bg-blue_gray-100 flex flex-col items-center justify-start w-full">
              <div className="h-[719px] md:px-5 relative w-full">
                <Img
                  className="h-[719px] m-auto object-cover w-full"
                  src="images/img_bitmap_719x1440.png"
                  alt="bitmap"
                />
                <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-y-[0] items-center justify-between left-[9%] my-auto w-[61%]">
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-12 md:px-10 sm:px-5 rounded-md">
                    <Text
                      className="mt-2.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtEpilogueBold24Gray900"
                    >
                      Get In Touch
                    </Text>
                    <div className="flex flex-col relative w-full">
                      <div className="flex flex-col mx-auto w-full">
                        <div className="flex md:h-12 h-[76px] justify-end mx-auto pt-7 w-full">
                          <div className="bg-white-A700 border border-deep_orange-100 border-solid h-12 mt-auto mx-auto rounded-md w-full"></div>
                          <Text
                            className="absolute bottom-[21%] left-[4%] text-base text-gray-900_a3"
                            size="txtEpilogueRegular16Gray900a3"
                          >
                            Your email
                          </Text>
                        </div>
                        <C1HomeAgency1440StackrectangleSixteen className="flex md:h-9 h-[76px] justify-end mt-[-12px] mx-auto pt-7 w-full z-[1]" />
                      </div>
                      <div className="flex h-[124px] md:h-[84px] justify-end mt-[-12px] mx-auto pt-7 w-full z-[1]">
                        <div className="bg-white-A700 border border-deep_orange-100 border-solid h-24 mt-auto mx-auto rounded-md w-full"></div>
                        <Text
                          className="absolute left-[4%] text-base text-gray-900_a3 top-[35%]"
                          size="txtEpilogueRegular16Gray900a3"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-black leading-[normal] min-w-[154px] md:ml-[0] ml-[220px] mt-8 text-center text-sm uppercase"
                      shape="round"
                    >
                      Submit Now
                    </Button>
                  </div>
                  <Button
                    className="flex h-[72px] items-center justify-center sm:mt-0 my-[196px] rounded-[50%] w-[72px]"
                    shape="circle"
                    size="lg"
                  >
                    <Img src="images/img_linkedin.svg" alt="linkedin" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1171px] mx-auto md:px-5 w-full">
              <div className="flex relative w-full">
                <div className="flex my-auto w-[67%] md:w-full">
                  <div className="border border-deep_orange-100 border-solid flex flex-col items-start justify-start my-auto p-8 sm:px-5 rounded-bl-md rounded-tl-md w-[51%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start mb-[11px] ml-4 md:ml-[0] w-[55%] md:w-full">
                      <div className="flex flex-row gap-6 items-center justify-start w-[85%] md:w-full">
                        <Button
                          className="flex h-16 items-center justify-center rounded-[50%] w-16"
                          shape="circle"
                          size="lg"
                        >
                          <Img
                            className="h-6"
                            src="images/img_call.svg"
                            alt="call"
                          />
                        </Button>
                        <Text
                          className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                          size="txtEpilogueRegular16Deeporange400"
                        >
                          Phone
                        </Text>
                      </div>
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtEpilogueRegular20"
                      >
                        +1 (234) 567-89-00
                      </Text>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-deep_orange-100 border-solid flex flex-col items-start justify-start ml-[-1px] my-auto p-8 sm:px-5 w-[51%] z-[1]">
                    <div className="flex flex-col gap-[31px] items-start justify-start mb-[11px] ml-4 md:ml-[0] w-[55%] md:w-full">
                      <div className="flex flex-row gap-6 items-center justify-start w-[81%] md:w-full">
                        <Button
                          className="flex h-16 items-center justify-center rounded-[50%] w-16"
                          shape="circle"
                          size="lg"
                        >
                          <Img src="images/img_shape.svg" alt="shape" />
                        </Button>
                        <Text
                          className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                          size="txtEpilogueRegular16Deeporange400"
                        >
                          EMail
                        </Text>
                      </div>
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtEpilogueRegular20"
                      >
                        info@agency.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border border-deep_orange-100 border-solid flex flex-col items-center justify-start ml-[-1px] my-auto p-8 sm:px-5 rounded-br-md rounded-tr-md w-[34%] z-[1]">
                  <div className="flex flex-col gap-[31px] items-start justify-start mb-[11px] w-[86%] md:w-full">
                    <div className="flex flex-row gap-6 items-center justify-start w-[62%] md:w-full">
                      <Button
                        className="flex h-16 items-center justify-center rounded-[50%] w-16"
                        shape="circle"
                        size="lg"
                      >
                        <Img src="images/img_save.svg" alt="save" />
                      </Button>
                      <Text
                        className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                        size="txtEpilogueRegular16Deeporange400"
                      >
                        Address
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtEpilogueRegular20"
                    >
                      2247 Lunetta Street, TX 76301
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[130px] w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                    size="txtEpilogueRegular16Deeporange400"
                  >
                    Faq
                  </Text>
                  <Text
                    className="leading-[48.00px] mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtEpilogueExtraBold40"
                  >
                    <>
                      Frequently Asked <br />
                      Questions
                    </>
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-[31px] text-base text-gray-900_a3 w-full"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    A digital agency is a business you hire to outsource your
                    digital marketing efforts, instead of handling in-house.
                  </Text>
                  <Text
                    className="mt-9 text-base text-gray-900"
                    size="txtEpilogueRegular16Gray900"
                  >
                    Ask us anything
                  </Text>
                </div>
                <div className="flex flex-col md:mt-0 mt-[13px] relative w-[49%] md:w-full">
                  <div className="flex flex-col mx-auto w-full">
                    <div className="flex flex-col mx-auto w-full">
                      <div className="bg-white-A700 border border-deep_orange-100 border-solid flex flex-col items-center justify-start mx-auto p-[34px] sm:px-5 rounded-tl-md rounded-tr-md shadow-bs1 w-full">
                        <div className="flex flex-col gap-9 items-center justify-start mb-2.5 mt-1.5 w-[98%] md:w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="sm:mt-0 mt-1 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                              size="txtEpilogueBold24Gray900"
                            >
                              A digital agency is a business
                            </Text>
                            <Button
                              className="flex h-8 items-center justify-center w-8"
                              shape="circle"
                              size="sm"
                            >
                              <Img src="images/img_arrowup.svg" alt="arrowup" />
                            </Button>
                          </div>
                          <Text
                            className="leading-[32.00px] text-base text-gray-900_a3 w-[97%] sm:w-full"
                            size="txtEpilogueRegular16Gray900a3"
                          >
                            Digital marketing efforts, instead of handling
                            in-house. They can provide your business with a
                            variety of digital solutions to promote your product
                            or service online and help you hit your marketing
                            goals and grow your business.
                          </Text>
                        </div>
                      </div>
                      <div className="border border-deep_orange-100 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[-1px] mx-auto p-[34px] sm:px-5 w-full z-[1]">
                        <Text
                          className="ml-3.5 sm:ml-[0] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtEpilogueBold24Gray900"
                        >
                          Hire to outsource your digital
                        </Text>
                        <div className="bg-deep_orange-400 flex flex-col h-8 items-center justify-start sm:mt-0 my-1.5 p-2.5 rounded-[50%] w-8">
                          <Img
                            className="h-[7px] mt-1"
                            src="images/img_arrowup.svg"
                            alt="arrowup_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-deep_orange-100 border-solid flex flex-row sm:gap-10 items-center justify-between mt-[-1px] mx-auto p-[34px] sm:px-5 w-full z-[1]">
                      <Text
                        className="ml-3.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtEpilogueBold24Gray900"
                      >
                        Marketing efforts
                      </Text>
                      <div className="bg-deep_orange-400 flex flex-col h-8 items-center justify-start my-1.5 p-2.5 rounded-[50%] w-8">
                        <Img
                          className="h-[7px] mt-1"
                          src="images/img_arrowup.svg"
                          alt="arrowup_Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border border-deep_orange-100 border-solid flex flex-row sm:gap-10 items-center justify-between mt-[-1px] mx-auto p-[34px] sm:px-5 rounded-bl-md rounded-br-md w-full z-[1]">
                    <Text
                      className="ml-3.5 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtEpilogueBold24Gray900"
                    >
                      Can provide your business
                    </Text>
                    <div className="bg-deep_orange-400 flex flex-col h-8 items-center justify-start my-1.5 p-2.5 rounded-[50%] w-8">
                      <Img
                        className="h-[7px] mt-1"
                        src="images/img_arrowup.svg"
                        alt="arrowup_Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-deep_orange-100 h-px mt-[127px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[79px] w-full">
                <Text
                  className="md:mt-0 mt-[13px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtEpilogueBold24Gray900"
                >
                  Agency
                </Text>
                <Text
                  className="md:ml-[0] ml-[210px] md:mt-0 mt-[17px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                  size="txtEpilogueRegular16Deeporange400"
                >
                  Menu
                </Text>
                <Text
                  className="md:ml-[0] ml-[248px] md:mt-0 mt-[17px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                  size="txtEpilogueRegular16Deeporange400"
                >
                  Service
                </Text>
                <div className="flex md:flex-1 flex-row gap-2 items-center justify-between md:ml-[0] ml-[332px] w-[14%] md:w-full">
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                  >
                    <Img src="images/img_trash.svg" alt="trash" />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                  >
                    <Img className="h-4" src="images/img_info.svg" alt="info" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[301px] mt-3 w-[35%] md:w-full">
                <Text
                  className="leading-[32.00px] text-base text-gray-900"
                  size="txtEpilogueRegular16Gray900"
                >
                  <>
                    About
                    <br />
                    Services
                    <br />
                    Blog
                    <br />
                    Contact
                  </>
                </Text>
                <Text
                  className="leading-[32.00px] text-base text-gray-900"
                  size="txtEpilogueRegular16Gray900"
                >
                  <>
                    Design
                    <br />
                    Development
                    <br />
                    Marketing
                    <br />
                    See More
                  </>
                </Text>
              </div>
              <Line className="bg-deep_orange-100 h-px mt-[68px] w-full" />
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-12 w-full">
                <Text
                  className="text-base text-gray-900_a3"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  Copyright © 2022 Laaqiq. All Rights Reserved.
                </Text>
                <Text
                  className="sm:ml-[0] ml-[544px] text-base text-gray-900 text-right"
                  size="txtEpilogueRegular16Gray900"
                >
                  Terms of Use
                </Text>
                <a
                  href="javascript:"
                  className="sm:ml-[0] ml-[68px] text-base text-gray-900 text-right"
                >
                  <Text size="txtEpilogueRegular16Gray900">Privacy Policy</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact1440Page;
