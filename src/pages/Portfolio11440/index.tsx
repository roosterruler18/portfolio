import React from "react";

import { Button, Img, Line, Text } from "components";

const Portfolio11440Page: React.FC = () => {
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
              className="mt-[95px] md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.00px]"
              size="txtEpilogueExtraBold72"
            >
              Portfolio
            </Text>
            <Text
              className="leading-[32.00px] mt-[34px] text-base text-center text-white-A700_a3 w-[49%] sm:w-full"
              size="txtEpilogueRegular16WhiteA700a3"
            >
              Agency provides a full service range including technical skills,
              design, business understanding.
            </Text>
          </div>
        </div>
        <div className="bg-red-50 flex flex-col items-center justify-start p-[68px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-[1170px] mb-[16631px] mx-auto w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-1/2 md:w-full">
              <Text
                className="mb-2 sm:mt-0 mt-[11px] text-base text-gray-900"
                size="txtEpilogueRegular16Gray900"
              >
                Show All
              </Text>
              <Text
                className="text-center text-gray-900_a3 text-sm"
                size="txtEpilogueRegular14"
              >
                14
              </Text>
              <Text
                className="mb-1.5 sm:ml-[0] ml-[46px] sm:mt-0 mt-[13px] text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Design
              </Text>
              <Text
                className="text-center text-gray-900_a3 text-sm"
                size="txtEpilogueRegular14"
              >
                6
              </Text>
              <Text
                className="mb-1.5 sm:ml-[0] ml-[51px] sm:mt-0 mt-[13px] text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Branding
              </Text>
              <Text
                className="text-center text-gray-900_a3 text-sm"
                size="txtEpilogueRegular14"
              >
                4
              </Text>
              <Text
                className="mb-2 sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Illustration
              </Text>
              <Text
                className="text-center text-gray-900_a3 text-sm"
                size="txtEpilogueRegular14"
              >
                3
              </Text>
              <Text
                className="mb-[7px] sm:ml-[0] ml-[52px] sm:mt-0 mt-3 text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Motion
              </Text>
              <Text
                className="text-center text-gray-900_a3 text-sm"
                size="txtEpilogueRegular14"
              >
                1
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="h-[720px] relative w-full">
                <Img
                  className="h-[720px] m-auto object-cover rounded-md w-full"
                  src="images/img_bitmap_720x1170.png"
                  alt="bitmap"
                />
                <div className="absolute bg-gray-900_77 flex flex-col gap-[29px] h-full inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 rounded-md w-full">
                  <Button
                    className="cursor-pointer min-w-[102px] mt-[496px] rounded-[19px] text-base text-center"
                    color="white_A700"
                    size="sm"
                  >
                    Branding
                  </Button>
                  <Text
                    className="mb-0.5 md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[-1.00px]"
                    size="txtEpilogueExtraBold56WhiteA700"
                  >
                    KeyBoard
                  </Text>
                </div>
              </div>
              <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-8 w-full">
                <div className="h-[416px] relative w-full">
                  <Img
                    className="h-[416px] m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_416x570.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 flex flex-col gap-[22px] h-full inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 rounded-md w-full">
                    <Button
                      className="cursor-pointer min-w-[84px] mt-52 rounded-[19px] text-base text-center"
                      color="white_A700"
                      size="sm"
                    >
                      Design
                    </Button>
                    <Text
                      className="mb-2.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtEpilogueExtraBold40WhiteA700"
                    >
                      SOFA
                    </Text>
                  </div>
                </div>
                <div className="h-[416px] relative w-full">
                  <Img
                    className="h-[416px] m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_20.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 flex flex-col gap-[22px] h-full inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 rounded-md w-full">
                    <Button
                      className="cursor-pointer min-w-[116px] mt-52 rounded-[19px] text-base text-center"
                      color="white_A700"
                      size="sm"
                    >
                      Illustration
                    </Button>
                    <Text
                      className="mb-2.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtEpilogueExtraBold40WhiteA700"
                    >
                      Work Media
                    </Text>
                  </div>
                </div>
                <div className="h-[416px] relative w-full">
                  <Img
                    className="h-[416px] m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_21.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 flex flex-col gap-[23px] h-full inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 rounded-md w-full">
                    <Button
                      className="cursor-pointer min-w-[86px] mt-52 rounded-[19px] text-base text-center"
                      color="white_A700"
                      size="sm"
                    >
                      Motion
                    </Button>
                    <Text
                      className="mb-2.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtEpilogueExtraBold40WhiteA700"
                    >
                      DDDone
                    </Text>
                  </div>
                </div>
                <div className="h-[416px] relative w-full">
                  <Img
                    className="h-[416px] m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_22.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 flex flex-col gap-[22px] h-full inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 rounded-md w-full">
                    <Button
                      className="cursor-pointer min-w-[102px] mt-52 rounded-[19px] text-base text-center"
                      color="white_A700"
                      size="sm"
                    >
                      Branding
                    </Button>
                    <Text
                      className="mb-2.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtEpilogueExtraBold40WhiteA700"
                    >
                      HandP
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[449px] mt-20 w-[24%] md:w-full">
                <Button
                  className="cursor-pointer font-black h-12 leading-[normal] text-center text-sm uppercase w-12"
                  shape="round"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer font-black h-12 leading-[normal] text-center text-sm uppercase w-12"
                  shape="round"
                  color="white_A700"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer font-black h-12 leading-[normal] text-center text-sm uppercase w-12"
                  shape="round"
                  color="white_A700"
                >
                  3
                </Button>
                <Button
                  className="cursor-pointer font-black h-12 leading-[normal] text-center text-sm uppercase w-12"
                  shape="round"
                  color="white_A700"
                >
                  4
                </Button>
                <Button
                  className="cursor-pointer font-black h-12 leading-[normal] text-center text-sm uppercase w-12"
                  shape="round"
                  color="white_A700"
                >
                  5
                </Button>
              </div>
              <div className="bg-deep_orange-400 flex flex-col items-center justify-start mt-28 p-[41px] md:px-10 sm:px-5 rounded-md w-full">
                <div className="flex md:flex-col flex-row gap-14 items-start justify-start mb-[29px] w-[90%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[54px] w-[49%] md:w-full">
                    <Text
                      className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[-1.00px]"
                      size="txtEpilogueExtraBold56WhiteA700"
                    >
                      <>
                        Help To Build <br />
                        Your Dream <br />
                        Project
                      </>
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-7 text-base text-white-A700_a3 w-full"
                      size="txtEpilogueRegular16WhiteA700a3"
                    >
                      A digital agency is a business you hire to outsource your
                      digital marketing efforts, instead of handling in-house.
                    </Text>
                    <Button
                      className="cursor-pointer font-black leading-[normal] min-w-[154px] mt-[34px] text-center text-sm uppercase"
                      shape="round"
                      color="white_A700"
                    >
                      Contact Now
                    </Button>
                  </div>
                  <div className="md:h-[316px] h-[431px] relative w-[46%] md:w-full">
                    <div className="absolute bottom-[0] md:h-[316px] h-[374px] right-[0] w-[374px] sm:w-full">
                      <div className="absolute bottom-[0] md:h-[316px] h-[345px] left-[0] w-[86%]">
                        <div className="absolute bg-deep_orange-300 bottom-[0] flex flex-col h-[318px] inset-x-[0] items-start justify-end mx-auto p-1.5 rounded-[50%] w-[318px]">
                          <Img
                            className="h-[95px] md:ml-[0] ml-[70px] mt-[209px]"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                        </div>
                        <Img
                          className="absolute h-[134px] left-[9%] top-[0]"
                          src="images/img_combinedshape_red_100_02.svg"
                          alt="combinedshape"
                        />
                      </div>
                      <Img
                        className="absolute h-[305px] object-cover right-[0] top-[0] w-[66%]"
                        src="images/img_bitmap_10.png"
                        alt="bitmap_One"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[24%] h-28 left-[3%]"
                      src="images/img_block_white_a700_112x214.svg"
                      alt="block"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start left-[0] p-[72px] md:px-10 sm:px-5 top-[0] w-[177px]"
                      style={{
                        backgroundImage: "url('images/img_group96.svg')",
                      }}
                    >
                      <Img
                        className="h-8 w-8"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-20 w-full">
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
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[300px] mt-3 w-[35%] md:w-full">
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

export default Portfolio11440Page;
