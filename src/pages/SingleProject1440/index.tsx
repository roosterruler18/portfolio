import React from "react";

import { Button, Img, Line, List, Text } from "components";

const SingleProject1440Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-epilogue h-[4848px] justify-end mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue_gray-900 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-4 w-full">
              <div className="flex flex-row gap-3.5 items-center justify-center sm:ml-[0] ml-[119px] md:px-5">
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
                className="text-base text-center text-white-A700"
                size="txtEpilogueRegular16"
              >
                About Services Pricing Blog
              </Text>
              <Button
                className="cursor-pointer font-black leading-[normal] min-w-[138px] mr-[119px] text-center text-sm uppercase"
                shape="round"
                color="white_A700_4b"
                variant="outline"
              >
                Contact
              </Button>
            </div>
            <div className="bg-red-50 flex flex-col items-center justify-start p-[37px] sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-[1170px] mb-[15254px] mx-auto md:px-5 w-full">
                <div className="flex flex-col items-start justify-start w-[49%] md:w-full">
                  <div className="flex flex-row gap-3.5 items-start justify-start w-[26%] md:w-full">
                    <Img
                      className="h-2.5"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="text-gray-900 text-xs uppercase"
                      size="txtEpilogueBold12"
                    >
                      Back to portfolio
                    </Text>
                  </div>
                  <Text
                    className="leading-[80.00px] mt-[49px] md:text-5xl text-7xl text-gray-900 tracking-[-2.00px]"
                    size="txtEpilogueExtraBold72Gray900"
                  >
                    <>
                      Work Media <br />
                      Project
                    </>
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-[22px] text-gray-900 text-xl w-full"
                    size="txtEpilogueRegular20"
                  >
                    Agency provides a full service range including technical
                    skills, design, business understanding.
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-8 text-base text-gray-900_a3 w-full"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    Outsource your digital marketing efforts, instead of
                    handling in-house. They can provide your business with a
                    variety of digital solutions to promote your product or
                    service online and help you.
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-[59px] w-[65%] md:w-full">
                    <Text
                      className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                      size="txtEpilogueRegular16Deeporange400"
                    >
                      Category
                    </Text>
                    <Text
                      className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                      size="txtEpilogueRegular16Deeporange400"
                    >
                      Client
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[25px] w-[72%] md:w-full">
                    <Text
                      className="leading-[32.00px] text-base text-gray-900"
                      size="txtEpilogueRegular16Gray900"
                    >
                      <>
                        Art Direction
                        <br />
                        User Interface
                        <br />
                        Branding Strategy
                        <br />
                        Print Design
                        <br />
                        3D Render
                      </>
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <Img
                        className="h-8 md:h-auto object-cover w-full"
                        src="images/img_bitmap_32x108.png"
                        alt="bitmap"
                      />
                      <Text
                        className="mt-[49px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                        size="txtEpilogueRegular16Deeporange400"
                      >
                        Date
                      </Text>
                      <Text
                        className="mt-[27px] text-gray-900 text-xl"
                        size="txtEpilogueRegular20"
                      >
                        Dec 2021
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-gray-500_01 flex flex-col items-center justify-start rounded-md w-full">
                    <Img
                      className="h-[720px] md:h-auto object-cover rounded-md w-full"
                      src="images/img_bitmap_720x1170.png"
                      alt="bitmap_One"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[300px] mt-[76px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtEpilogueExtraBold40"
                  >
                    Problem
                  </Text>
                  <Text
                    className="leading-[32.00px] md:ml-[0] ml-[300px] mt-[38px] text-base text-gray-900_a3"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    <>
                      Ability to put themselves in the merchant&#39;s shoes. It
                      is meant to partner on the long run, and work as an
                      extension of the merchant&#39;s team.
                      <br />
                      <br />A digital agency is a business you hire to outsource
                      your digital marketing efforts, instead of handling
                      in-house. They can provide your business with a variety of
                      digital solutions to promote your product or service
                      online and help you.
                    </>
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mt-[65px] w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[76px] justify-start w-[49%] md:w-full">
                      <div className="h-[448px] relative w-full">
                        <Img
                          className="h-[448px] m-auto object-cover rounded-md w-full"
                          src="images/img_bitmap_30.png"
                          alt="bitmap_Two"
                        />
                        <div className="absolute bg-gray-900_77 flex flex-col md:gap-10 gap-[94px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-md w-full">
                          <div className="border border-solid border-white-A700_80 flex flex-col h-[148px] items-end justify-start mt-[126px] p-[58px] md:px-10 sm:px-5 rounded-[50%] w-[148px]">
                            <Img
                              className="h-8 rounded-sm"
                              src="images/img_overflowmenu.svg"
                              alt="overflowmenu"
                            />
                          </div>
                          <Button
                            className="cursor-pointer min-w-[47px] text-base text-center"
                            shape="round"
                            color="gray_900_6f"
                            size="xs"
                          >
                            2:14
                          </Button>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[300px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                        size="txtEpilogueExtraBold40"
                      >
                        Solution
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                      <div className="sm:gap-5 gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                          <Img
                            className="h-52 md:h-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_31.png"
                            alt="bitmap"
                          />
                        </div>
                        <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                          <Img
                            className="h-[207px] md:h-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_207x270.png"
                            alt="bitmap"
                          />
                        </div>
                        <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                          <Img
                            className="h-52 md:h-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_32.png"
                            alt="bitmap"
                          />
                        </div>
                        <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                          <Img
                            className="h-52 md:h-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_33.png"
                            alt="bitmap"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[32.00px] md:ml-[0] ml-[300px] mt-[38px] text-base text-gray-900_a3"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    <>
                      Put themselves in the merchant&#39;s shoes. It is meant to
                      partner on the long run, and work as an extension of the
                      merchant&#39;s team.
                      <br />
                      <br />
                      Agency is a business you hire to outsource your digital
                      marketing efforts, instead of handling in-house. They can
                      provide your business with a variety of digital solutions
                      to promote your product or service online and help you.
                    </>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[553px] mt-[68px] text-center text-gray-900_a3 text-sm"
                    size="txtEpilogueRegular14"
                  >
                    SHARE ON
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[505px] mt-[29px] w-[14%] md:w-full">
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
                      <Img src="images/img_user_white_a700.svg" alt="user" />
                    </Button>
                  </div>
                  <Line className="bg-deep_orange-100 h-px mt-16 w-full" />
                  <Text
                    className="mt-[75px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtEpilogueBold24Gray900"
                  >
                    Related Projects
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[42px] w-full"
                    orientation="horizontal"
                  >
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
                  </List>
                  <div className="bg-deep_orange-400 flex flex-col items-center justify-start mt-40 p-[41px] md:px-10 sm:px-5 rounded-md w-full">
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
                          A digital agency is a business you hire to outsource
                          your digital marketing efforts, instead of handling
                          in-house.
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
                            alt="bitmap_Three"
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
                        <Img src="images/img_facebook.svg" alt="facebook_One" />
                      </Button>
                      <Button
                        className="flex h-12 items-center justify-center rounded-[50%] w-12"
                        shape="circle"
                      >
                        <Img src="images/img_trash.svg" alt="trash_One" />
                      </Button>
                      <Button
                        className="flex h-12 items-center justify-center rounded-[50%] w-12"
                        shape="circle"
                      >
                        <Img
                          className="h-4"
                          src="images/img_info.svg"
                          alt="info"
                        />
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
                      <Text size="txtEpilogueRegular16Gray900">
                        Privacy Policy
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="absolute right-[6%] text-base text-center text-white-A700 top-[1%]"
          size="txtEpilogueRegular16"
        >
          About Services Pricing Blog
        </Text>
      </div>
    </>
  );
};

export default SingleProject1440Page;