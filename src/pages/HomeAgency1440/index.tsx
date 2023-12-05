import React from "react";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import C1HomeAgency1440StackrectangleSixteen from "components/C1HomeAgency1440StackrectangleSixteen";

const HomeAgency1440Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-epilogue items-center justify-end mx-auto w-full">
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-start max-w-[1170px] mb-12 mx-auto md:px-5 w-full">
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
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[15px] w-[44%] md:w-full">
                <div className="md:h-60 h-[290px] relative w-full">
                  <Img
                    className="absolute h-[148px] right-[17%] top-[6%] w-[148px]"
                    src="images/img_star.svg"
                    alt="star"
                  />
                  <Text
                    className="absolute left-[0] text-base text-deep_orange-400 top-[0] tracking-[3.00px] uppercase"
                    size="txtEpilogueRegular16Deeporange400"
                  >
                    Modern Studio
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] leading-[80.00px] mx-auto md:text-5xl text-7xl text-white-A700 tracking-[-2.00px]"
                    size="txtEpilogueExtraBold72"
                  >
                    <>
                      We’re Help <br />
                      To Build Your <br />
                      Dream Project
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[32.00px] mt-6 text-base text-white-A700_a3 w-[92%] sm:w-full"
                  size="txtEpilogueRegular16WhiteA700a3"
                >
                  Agency provides a full service range including technical
                  skills, design, business understanding.
                </Text>
                <div className="flex flex-row gap-[46px] items-center justify-start mt-[34px] w-[57%] md:w-full">
                  <Button
                    className="cursor-pointer font-black leading-[normal] min-w-[154px] text-center text-sm uppercase"
                    shape="round"
                  >
                    How We Work
                  </Button>
                  <a href="javascript:" className="text-base text-white-A700">
                    <Text size="txtEpilogueRegular16">Contact Us</Text>
                  </a>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mt-28 w-[77%] md:w-full">
                  <div className="bg-purple-A200 flex flex-col h-12 items-start justify-start pt-1 px-1 rounded-[50%] w-12">
                    <Img
                      className="h-[43px] md:h-auto object-cover rounded-[24px] w-[95%]"
                      src="images/img_bitmap.png"
                      alt="bitmap"
                    />
                  </div>
                  <div className="flex flex-col gap-[11px] justify-start">
                    <Text
                      className="text-base text-white-A700_a3"
                      size="txtEpilogueRegular16WhiteA700a3"
                    >
                      <>
                        &quot;Put themselves in the merchant&#39;s shoes&quot;
                      </>
                    </Text>
                    <Text
                      className="ml-1.5 md:ml-[0] text-base text-white-A700"
                      size="txtEpilogueRegular16"
                    >
                      Meta Inc.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[501px] sm:h-[519px] h-[601px] relative w-[49%] md:w-full">
                <div className="flex flex-col gap-[39px] h-full justify-start m-auto w-full">
                  <div className="md:h-[370px] h-[470px] relative w-full">
                    <div className="absolute bg-blue_gray-800 bottom-[0] h-[370px] inset-x-[0] mx-auto rounded-[50%] w-[370px]"></div>
                    <Img
                      className="absolute h-[82px] right-[0] top-[17%]"
                      src="images/img_path.svg"
                      alt="path"
                    />
                    <Img
                      className="absolute bottom-[12%] h-[73px] left-[0]"
                      src="images/img_combinedshape.svg"
                      alt="combinedshape"
                    />
                    <Img
                      className="absolute h-[305px] left-[0] top-[0]"
                      src="images/img_combinedshape_purple_a200_01.svg"
                      alt="combinedshape_One"
                    />
                  </div>
                  <Img
                    className="h-[92px] md:ml-[0] ml-[314px] w-[93px]"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[142px] justify-start left-[4%] top-[4%] w-[45%]">
                  <Img
                    className="h-[265px] md:h-auto object-cover w-full"
                    src="images/img_bitmap_265x255.png"
                    alt="bitmap_One"
                  />
                  <Img
                    className="h-28 md:ml-[0] ml-[35px]"
                    src="images/img_block.svg"
                    alt="block"
                  />
                </div>
                <Img
                  className="absolute bottom-[18%] h-[305px] object-cover right-[0] w-[44%]"
                  src="images/img_bitmap_305x246.png"
                  alt="bitmap_Two"
                />
                <div className="absolute bg-deep_orange-400 flex flex-col h-28 items-center justify-start p-7 sm:px-5 right-[27%] rounded-[50%] top-[7%] w-28">
                  <Img
                    className="h-14"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50 sm:h-[15176px] md:h-[16571px] h-[20000px] md:px-5 py-[73px] relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-[82%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[42px] md:h-auto object-cover"
                src="images/img_bitmap_42x147.png"
                alt="bitmap_Three"
              />
              <Img
                className="h-8 md:h-auto object-cover"
                src="images/img_bitmap_32x108.png"
                alt="bitmap_Four"
              />
              <Img
                className="h-[47px] md:h-auto object-cover"
                src="images/img_bitmap_47x119.png"
                alt="bitmap_Five"
              />
              <Img
                className="h-[21px] md:h-auto object-cover"
                src="images/img_bitmap_21x86.png"
                alt="bitmap_Six"
              />
              <Img
                className="h-6 md:h-auto object-cover"
                src="images/img_bitmap_24x126.png"
                alt="bitmap_Seven"
              />
            </div>
            <Line className="bg-deep_orange-100 h-px mt-[72px] w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-1 md:ml-[0] mt-[101px] w-full">
              <div className="md:h-[319px] h-[585px] relative w-[49%] md:w-full">
                <div className="absolute md:h-[319px] h-[474px] inset-x-[0] mx-auto top-[0] w-[98%] sm:w-full">
                  <div className="absolute md:h-[319px] h-[334px] inset-x-[0] mx-auto top-[0] w-[98%] sm:w-full">
                    <div className="absolute bottom-[0] h-[319px] left-[0] w-[82%] sm:w-full">
                      <div className="absolute bg-deep_orange-50 h-[319px] inset-y-[0] my-auto right-[0] rounded-md w-[89%]"></div>
                      <Img
                        className="absolute h-[166px] left-[0] top-[19%]"
                        src="images/img_path_deep_orange_100_01.svg"
                        alt="path_One"
                      />
                    </div>
                    <Img
                      className="absolute h-[89px] right-[0] top-[0]"
                      src="images/img_combinedshape_deep_orange_100_01.svg"
                      alt="combinedshape_Two"
                    />
                  </div>
                  <Img
                    className="absolute h-[68px] right-[10%] top-[11%]"
                    src="images/img_block_white_a700.svg"
                    alt="block_One"
                  />
                  <div className="absolute bg-gray-400 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-md w-[86%]">
                    <Img
                      className="h-[319px] md:h-auto object-cover rounded-md w-full"
                      src="images/img_bitmap_319x470.png"
                      alt="bitmap_Eight"
                    />
                  </div>
                </div>
                <div className="absolute bg-deep_orange-400 bottom-[0] flex flex-col h-[219px] items-center justify-end left-[0] pt-6 sm:px-5 px-6 rounded-[109px] w-[219px]">
                  <Img
                    className="h-[195px] md:h-auto object-cover rounded-[109px] w-[94%]"
                    src="images/img_bitmap_195x160.png"
                    alt="bitmap_Nine"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[41%] md:w-full">
                <Text
                  className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                  size="txtEpilogueRegular16Deeporange400"
                >
                  About
                </Text>
                <Text
                  className="leading-[64.00px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                  size="txtEpilogueExtraBold56"
                >
                  <>
                    An Experience <br />
                    Design Agency
                  </>
                </Text>
                <Text
                  className="mt-[31px] text-gray-900 text-xl"
                  size="txtEpilogueRegular20"
                >
                  Provides a full service range
                </Text>
                <Text
                  className="leading-[32.00px] mt-[23px] text-base text-gray-900_a3 w-full"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  <>
                    Ability to put themselves in the merchant&#39;s shoes. It is
                    meant to partner on the long run, and work as an extension
                    of the merchant&#39;s team.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-black leading-[normal] min-w-[138px] mt-[34px] text-center text-sm uppercase"
                  shape="round"
                  color="white_A700"
                >
                  About Us
                </Button>
              </div>
            </div>
            <div className="flex mt-[161px] relative w-full">
              <div className="flex my-auto w-[67%] md:w-full">
                <div className="border border-deep_orange-100 border-solid flex flex-col gap-[26px] items-start justify-end my-auto p-[43px] md:px-10 sm:px-5 rounded-bl-md rounded-tl-md">
                  <Text
                    className="ml-1 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtEpilogueExtraBold40"
                  >
                    42%
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-gray-900 text-xl"
                    size="txtEpilogueRegular20"
                  >
                    Years of experience
                  </Text>
                </div>
                <div className="bg-red-50 border border-deep_orange-100 border-solid flex flex-col gap-[26px] items-start justify-end ml-[-1px] my-auto p-[43px] md:px-10 sm:px-5 z-[1]">
                  <Text
                    className="ml-1 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtEpilogueExtraBold40"
                  >
                    73+
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-gray-900 text-xl"
                    size="txtEpilogueRegular20"
                  >
                    Agency members
                  </Text>
                </div>
              </div>
              <div className="border border-deep_orange-100 border-solid flex flex-col gap-[26px] items-start justify-end ml-[-1px] my-auto p-[43px] md:px-10 sm:px-5 rounded-br-md rounded-tr-md z-[1]">
                <Text
                  className="ml-1 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtEpilogueExtraBold40"
                >
                  5.000
                </Text>
                <Text
                  className="ml-1 md:ml-[0] text-gray-900 text-xl"
                  size="txtEpilogueRegular20"
                >
                  Projects complete
                </Text>
              </div>
            </div>
            <Text
              className="mt-[145px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
              size="txtEpilogueRegular16Deeporange400"
            >
              How we work
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[26px] w-[89%] md:w-full">
              <Text
                className="leading-[48.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtEpilogueExtraBold40"
              >
                <>
                  Making Your Projects <br />
                  Look Awesome
                </>
              </Text>
              <Text
                className="mb-0.5 md:ml-[0] ml-[152px] md:mt-0 mt-[19px] md:text-5xl text-7xl text-gray-900 tracking-[-2.00px]"
                size="txtEpilogueExtraBold72Gray900"
              >
                1
              </Text>
              <Text
                className="mb-[23px] md:ml-[0] ml-[66px] md:mt-0 mt-[47px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtEpilogueBold24Gray900"
              >
                Full service range including
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[31px] w-[95%] md:w-full">
              <Text
                className="leading-[32.00px] text-base text-gray-900_a3 w-[43%] sm:w-full"
                size="txtEpilogueRegular16Gray900a3"
              >
                <>
                  Technical skills, design, business understanding, ability to
                  put themselves in the merchant&#39;s shoes.
                </>
              </Text>
              <Text
                className="md:ml-[0] ml-[130px] md:mt-0 mt-1 md:text-5xl text-7xl text-gray-900 tracking-[-2.00px]"
                size="txtEpilogueExtraBold72Gray900"
              >
                2
              </Text>
              <Text
                className="md:ml-[0] ml-[54px] md:mt-0 mt-8 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtEpilogueBold24Gray900"
              >
                Technical skills, design, business
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[23px] w-[92%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtEpilogueRegular16Gray900">Read More</Text>
              </a>
              <Text
                className="md:ml-[0] ml-[516px] md:mt-0 mt-[15px] md:text-5xl text-7xl text-gray-900 tracking-[-2.00px]"
                size="txtEpilogueExtraBold72Gray900"
              >
                3
              </Text>
              <Text
                className="md:ml-[0] ml-[53px] md:mt-0 mt-10 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtEpilogueBold24Gray900"
              >
                <>Themselves in the merchant&#39;s</>
              </Text>
            </div>
            <Line className="bg-deep_orange-100 h-px mt-[117px] w-full" />
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[9%] top-[10%] w-2/5">
            <div className="h-[368px] relative w-full">
              <Img
                className="h-[368px] m-auto object-cover rounded-md w-full"
                src="images/img_bitmap_368x570.png"
                alt="bitmap_Ten"
              />
              <div className="absolute bg-gray-900_77 flex flex-col gap-14 h-full inset-[0] items-center justify-center m-auto p-5 rounded-md w-full">
                <div className="border border-solid border-white-A700_80 flex flex-col h-[148px] items-end justify-start mt-[90px] p-[58px] md:px-10 sm:px-5 rounded-[50%] w-[148px]">
                  <Img
                    className="h-8 rounded-sm"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
                <div className="md:h-8 h-[34px] pb-0.5 relative w-[9%]">
                  <div className="bg-gray-900_6f h-8 mx-auto rounded-md w-full"></div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-base text-white-A700 top-[21%] w-max"
                    size="txtEpilogueRegular16"
                  >
                    1:45
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="mt-[273px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
              size="txtEpilogueRegular16Deeporange400"
            >
              Features
            </Text>
            <Text
              className="leading-[64.00px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
              size="txtEpilogueExtraBold56"
            >
              <>
                Give Your Site <br />A New Look
              </>
            </Text>
            <Text
              className="leading-[32.00px] mt-[26px] text-gray-900 text-xl w-[83%] sm:w-full"
              size="txtEpilogueRegular20"
            >
              Service range including technical skills, design, business
              understanding.
            </Text>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[253px] items-end justify-start right-[9%] top-[10%] w-[37%]">
            <div className="flex flex-col gap-[26px] items-start justify-start">
              <Text
                className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                size="txtEpilogueRegular16Deeporange400"
              >
                Video Reel
              </Text>
              <Text
                className="leading-[48.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-full"
                size="txtEpilogueExtraBold40"
              >
                Unlock The Greatest Value Possible
              </Text>
              <Text
                className="leading-[32.00px] text-base text-gray-900_a3 w-full"
                size="txtEpilogueRegular16Gray900a3"
              >
                <>
                  Design, business understanding, ability to put themselves in
                  the merchant&#39;s shoes meant to partner.
                </>
              </Text>
            </div>
            <div className="md:h-[362px] h-[550px] relative w-full">
              <div className="md:h-[362px] h-[550px] m-auto w-full">
                <div className="absolute md:h-[362px] h-[550px] inset-[0] justify-center m-auto w-[98%] sm:w-full">
                  <div className="absolute flex flex-col inset-y-[0] left-[0] my-auto w-[89%] sm:w-full">
                    <Img
                      className="h-[362px] mx-auto rounded-md"
                      src="images/img_rectangle.svg"
                      alt="rectangle_Four"
                    />
                    <Img
                      className="h-[130px] ml-4 mt-[-48.75px] z-[1]"
                      src="images/img_path_deep_orange_100_01_130x215.svg"
                      alt="path_Two"
                    />
                  </div>
                  <Img
                    className="absolute h-[252px] right-[0] top-[0]"
                    src="images/img_combinedshape_deep_orange_100_01_252x280.svg"
                    alt="combinedshape_Three"
                  />
                  <Img
                    className="absolute bottom-[0] h-[282px] right-[1%] rounded-md"
                    src="images/img_rectangle_amber_300.svg"
                    alt="rectangle_Five"
                  />
                </div>
                <div className="absolute bg-gray-500 bottom-[17%] flex flex-col items-center justify-start right-[0] rounded-md w-[90%]">
                  <Img
                    className="h-[290px] md:h-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_290x470.png"
                    alt="bitmap_Eleven"
                  />
                </div>
              </div>
              <div className="absolute bg-purple-A200_01 flex flex-col h-[184px] items-center justify-start left-[19%] pt-[15px] px-[15px] rounded-[50%] top-[4%] w-[184px]">
                <Img
                  className="h-[169px] md:h-auto object-cover rounded-[92px] w-[74%]"
                  src="images/img_bitmap_169x113.png"
                  alt="bitmap_Twelve"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[9%] top-[15%] w-[26%]">
            <div className="flex flex-row gap-4 items-center justify-start w-4/5 md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="deep_orange_400_01"
                size="xs"
              >
                <Img src="images/img_checkmark.svg" alt="checkmark" />
              </Button>
              <Text
                className="text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Range including technical skills
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start mt-4 w-[65%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="deep_orange_400_01"
                size="xs"
              >
                <Img src="images/img_checkmark.svg" alt="checkmark_One" />
              </Button>
              <Text
                className="text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Business understanding
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start mt-4 w-[63%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="deep_orange_400_01"
                size="xs"
              >
                <Img src="images/img_checkmark.svg" alt="checkmark_Two" />
              </Button>
              <Text
                className="text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                Partner on the long run
              </Text>
            </div>
            <Text
              className="mt-[327px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
              size="txtEpilogueRegular16Deeporange400"
            >
              Features
            </Text>
            <Text
              className="leading-[32.00px] mt-[39px] text-gray-900 text-xl w-full"
              size="txtEpilogueRegular20"
            >
              <>
                Long run, and work as an extension of the merchant&#39;s team.
              </>
            </Text>
            <a href="javascript:" className="mt-[33px] text-base text-gray-900">
              <Text size="txtEpilogueRegular16Gray900">Read More</Text>
            </a>
          </div>
          <div className="absolute flex right-[9%] top-[16%] w-[47%] md:w-full">
            <div className="bg-white-A700 border border-deep_orange-100 border-solid flex flex-col h-[336px] items-start justify-end my-auto p-[46px] md:px-10 sm:px-5 rounded-bl-md rounded-tl-md rounded-tr-md shadow-bs1 w-[336px]">
              <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start ml-0.5 md:ml-[0] mt-0.5 p-6 sm:px-5 rounded-[50%] w-20">
                <Img
                  className="h-8 w-8"
                  src="images/img_forward.svg"
                  alt="forward"
                />
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-[42px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtEpilogueBold24Gray900"
              >
                Professional
              </Text>
              <Text
                className="leading-[32.00px] ml-0.5 md:ml-[0] mt-6 text-base text-gray-900_a3 w-[99%] sm:w-full"
                size="txtEpilogueRegular16Gray900a3"
              >
                Full service range including technical skills, design.
              </Text>
            </div>
            <div className="border border-deep_orange-100 border-solid flex flex-col gap-[22px] items-start justify-end ml-[-1px] mt-auto p-[46px] md:px-10 sm:px-5 rounded-br-md rounded-tr-md z-[1]">
              <Text
                className="ml-0.5 md:ml-[0] mt-[62px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtEpilogueBold24Gray900"
              >
                Accessibility
              </Text>
              <Text
                className="leading-[32.00px] ml-0.5 md:ml-[0] text-base text-gray-900_a3 w-[99%] sm:w-full"
                size="txtEpilogueRegular16Gray900a3"
              >
                Business understanding, ability to put themselves.
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-32 h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-start justify-start w-[82%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[146px] items-start justify-start w-1/2 md:w-full">
                  <div className="md:h-[464px] sm:h-[493px] h-[570px] relative w-full">
                    <div className="md:h-[464px] sm:h-[493px] h-[570px] m-auto w-full">
                      <div className="absolute md:h-[464px] h-[522px] inset-x-[0] mx-auto top-[0] w-full">
                        <Img
                          className="absolute h-[464px] inset-x-[0] mx-auto rounded-[12px] top-[0]"
                          src="images/img_triangle.svg"
                          alt="triangle"
                        />
                        <Img
                          className="absolute bottom-[0] h-[211px] left-[27%]"
                          src="images/img_combinedshape_deep_orange_100_01_211x51.svg"
                          alt="combinedshape_Four"
                        />
                        <Img
                          className="absolute bottom-[18%] h-[184px] right-[0]"
                          src="images/img_combinedshape_deep_orange_100_01_184x127.svg"
                          alt="combinedshape_Five"
                        />
                      </div>
                      <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between right-[1%] top-[9%] w-[92%]">
                        <Img
                          className="h-[305px] md:h-auto object-cover"
                          src="images/img_bitmap_1.png"
                          alt="bitmap_Thirteen"
                        />
                        <Img
                          className="h-[148px] sm:mt-0 mt-6 w-[148px]"
                          src="images/img_star_amber_300.svg"
                          alt="star_One"
                        />
                      </div>
                      <div className="absolute bg-deep_orange-400_01 bottom-[0] flex flex-col h-[211px] items-center justify-end pt-2 px-2 right-[15%] rounded-[105px] w-[211px]">
                        <Img
                          className="h-[194px] md:h-auto mt-[9px] object-cover rounded-[105px] w-[99%]"
                          src="images/img_bitmap_194x192.png"
                          alt="bitmap_Fourteen"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-[142px] right-[11%] top-[23%]"
                      src="images/img_block_white_a700_142x166.svg"
                      alt="block_Two"
                    />
                  </div>
                  <Text
                    className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                    size="txtEpilogueRegular16Deeporange400"
                  >
                    Service
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-11 w-[41%] md:w-full">
                  <Text
                    className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                    size="txtEpilogueRegular16Deeporange400"
                  >
                    Service
                  </Text>
                  <Text
                    className="leading-[64.00px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                    size="txtEpilogueExtraBold56"
                  >
                    <>
                      Making Complex
                      <br />
                      Digital Products
                    </>
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-[26px] text-gray-900 text-xl w-full"
                    size="txtEpilogueRegular20"
                  >
                    Agency provides a full service range including technical
                    skills, design, business.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-[31px] w-full">
                    <div className="bg-amber-300_01 flex flex-col h-16 items-center justify-end pt-1.5 px-1.5 rounded-[50%] w-16">
                      <Img
                        className="h-[58px] md:h-auto object-cover rounded-[32px] w-[91%]"
                        src="images/img_bitmap_58x47.png"
                        alt="bitmap_Fifteen"
                      />
                    </div>
                    <Text
                      className="sm:flex-1 leading-[24.00px] text-gray-900_a3 text-sm w-[83%] sm:w-full"
                      size="txtEpilogueRegular14"
                    >
                      <>
                        &quot;Understanding, ability to put themselves in the
                        merchant&#39;s shoes. It is meant to partner.&quot;
                      </>
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[84px] mt-[11px] text-base text-gray-900"
                    size="txtEpilogueRegular16Gray900"
                  >
                    Jenny Murtaugh
                  </Text>
                  <Button
                    className="cursor-pointer font-black leading-[normal] min-w-[138px] mt-[43px] text-center text-sm uppercase"
                    shape="round"
                    color="white_A700"
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <Text
                className="leading-[48.00px] mt-[26px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtEpilogueExtraBold40"
              >
                <>
                  How Our Agency
                  <br />
                  Can Help
                </>
              </Text>
              <div className="flex mt-[35px] relative w-full">
                <div className="flex my-auto w-[67%] md:w-full">
                  <div className="border border-deep_orange-100 border-solid flex flex-col items-start justify-start my-auto p-12 md:px-10 sm:px-5 rounded-bl-md rounded-tl-md w-[51%]">
                    <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] w-20">
                      <Img
                        className="h-8 w-8"
                        src="images/img_instagram.svg"
                        alt="instagram"
                      />
                    </div>
                    <Text
                      className="mt-[45px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtEpilogueBold24Gray900"
                    >
                      Design
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[21px] text-base text-gray-900_a3 w-full"
                      size="txtEpilogueRegular16Gray900a3"
                    >
                      Agency provides a full service range including technical
                      skills, design.
                    </Text>
                    <a
                      href="javascript:"
                      className="mb-[13px] mt-[31px] text-base text-gray-900"
                    >
                      <Text size="txtEpilogueRegular16Gray900">Learn More</Text>
                    </a>
                  </div>
                  <div className="border border-deep_orange-100 border-solid flex flex-col items-start justify-start ml-[-1px] my-auto p-12 md:px-10 sm:px-5 w-[51%] z-[1]">
                    <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] w-20">
                      <Img
                        className="h-[26px] my-[3px]"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                    </div>
                    <Text
                      className="mt-11 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtEpilogueBold24Gray900"
                    >
                      Development
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[22px] text-base text-gray-900_a3 w-full"
                      size="txtEpilogueRegular16Gray900a3"
                    >
                      Full service range including technical skills, design,
                      business.
                    </Text>
                    <Text
                      className="mb-[13px] mt-[31px] text-base text-gray-900"
                      size="txtEpilogueRegular16Gray900"
                    >
                      Discover More
                    </Text>
                  </div>
                </div>
                <div className="border border-deep_orange-100 border-solid flex flex-col items-start justify-start ml-[-1px] my-auto p-12 md:px-10 sm:px-5 rounded-br-md rounded-tr-md w-[34%] z-[1]">
                  <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] w-20">
                    <Img
                      className="h-8 w-8"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                  <Text
                    className="mt-11 text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtEpilogueBold24Gray900"
                  >
                    Marketing
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-[22px] text-base text-gray-900_a3 w-full"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    Technical skills, design, business understanding, ability.
                  </Text>
                  <Text
                    className="mb-3 mt-[33px] text-base text-gray-900"
                    size="txtEpilogueRegular16Gray900"
                  >
                    Explore Now
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-[97px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mb-[78px] w-[94%] md:w-full">
                  <Text
                    className="text-base text-center text-deep_orange-400 tracking-[3.00px] uppercase"
                    size="txtEpilogueRegular16Deeporange400"
                  >
                    Portfolio
                  </Text>
                  <Text
                    className="mt-[26px] md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 tracking-[-1.00px]"
                    size="txtEpilogueExtraBold56WhiteA700"
                  >
                    Latest Work
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-11 w-1/2 md:w-full">
                    <Text
                      className="mb-2 sm:mt-0 mt-[11px] text-base text-white-A700"
                      size="txtEpilogueRegular16"
                    >
                      Show All
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700_a3"
                      size="txtEpilogueRegular14WhiteA700a3"
                    >
                      14
                    </Text>
                    <Text
                      className="mb-1.5 sm:ml-[0] ml-[46px] sm:mt-0 mt-[13px] text-base text-white-A700_a3"
                      size="txtEpilogueRegular16WhiteA700a3"
                    >
                      Design
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700_a3"
                      size="txtEpilogueRegular14WhiteA700a3"
                    >
                      6
                    </Text>
                    <Text
                      className="mb-1.5 sm:ml-[0] ml-[51px] sm:mt-0 mt-[13px] text-base text-white-A700_a3"
                      size="txtEpilogueRegular16WhiteA700a3"
                    >
                      Branding
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700_a3"
                      size="txtEpilogueRegular14WhiteA700a3"
                    >
                      4
                    </Text>
                    <Text
                      className="mb-2 sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-white-A700_a3"
                      size="txtEpilogueRegular16WhiteA700a3"
                    >
                      Illustration
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700_a3"
                      size="txtEpilogueRegular14WhiteA700a3"
                    >
                      3
                    </Text>
                    <Text
                      className="mb-[7px] sm:ml-[0] ml-[52px] sm:mt-0 mt-3 text-base text-white-A700_a3"
                      size="txtEpilogueRegular16WhiteA700a3"
                    >
                      Motion
                    </Text>
                    <Text
                      className="text-center text-sm text-white-A700_a3"
                      size="txtEpilogueRegular14WhiteA700a3"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[68px] w-full">
                    <List
                      className="flex flex-col gap-8 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                        <div className="h-[416px] relative w-[41%] md:w-full">
                          <Img
                            className="h-[416px] m-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_416x470.png"
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
                        <div className="h-[416px] relative w-[58%] md:w-full">
                          <Img
                            className="h-[416px] m-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_416x670.png"
                            alt="bitmap_One"
                          />
                          <div className="absolute bg-gray-900_77 flex flex-col gap-[26px] h-full inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 rounded-md w-full">
                            <Button
                              className="cursor-pointer min-w-[102px] mt-52 rounded-[19px] text-base text-center"
                              color="white_A700"
                              size="sm"
                            >
                              Branding
                            </Button>
                            <Text
                              className="mb-1.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                              size="txtEpilogueExtraBold40WhiteA700"
                            >
                              KeyBoard
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
                        <div className="h-[416px] relative w-[58%] md:w-full">
                          <Img
                            className="h-[416px] m-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_2.png"
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
                        <div className="h-[416px] relative w-[41%] md:w-full">
                          <Img
                            className="h-[416px] m-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_3.png"
                            alt="bitmap_One"
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
                      </div>
                    </List>
                    <Button
                      className="cursor-pointer font-black leading-[normal] min-w-[170px] md:ml-[0] ml-[500px] mt-16 text-center text-sm uppercase"
                      shape="round"
                      color="white_A700_4b"
                      variant="outline"
                    >
                      Explore More
                    </Button>
                    <div className="h-[411px] sm:h-[513px] md:h-[876px] mt-[117px] relative w-full">
                      <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[47px] md:px-10 sm:px-5 rounded-md w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[91%] md:w-full">
                          <div className="flex flex-col gap-[22px] items-start justify-start mb-[17px] md:mt-0 mt-[50px] w-[26%] md:w-full">
                            <Text
                              className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                              size="txtEpilogueRegular16Deeporange400"
                            >
                              Get Started
                            </Text>
                            <Text
                              className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                              size="txtEpilogueBold24Gray900"
                            >
                              <>
                                We Help Companies <br />
                                Move Faster
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer font-black leading-[normal] min-w-[154px] text-center text-sm uppercase"
                              shape="round"
                            >
                              Contact Us
                            </Button>
                          </div>
                          <div className="h-48 md:h-[193px] mb-[17px] md:ml-[0] ml-[68px] md:mt-0 mt-[33px] relative w-[35%] md:w-full">
                            <div className="absolute bottom-[0] md:h-44 h-[184px] inset-x-[0] mx-auto w-[91%]">
                              <div className="absolute bg-white-A700 bottom-[0] h-44 inset-x-[0] mx-auto rounded-md shadow-bs2 w-[90%]"></div>
                              <div className="absolute bg-white-A700 h-44 inset-x-[0] mx-auto rounded-md shadow-bs2 top-[0] w-full"></div>
                            </div>
                            <div className="absolute bg-white-A700 h-44 inset-x-[0] mx-auto rounded-md shadow-bs2 top-[0] w-full"></div>
                            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-[86%]">
                              <div className="flex flex-row items-start justify-between w-full">
                                <div className="flex flex-col gap-3.5 items-start justify-start">
                                  <div className="bg-amber-300 h-10 rounded-[50%] w-10"></div>
                                  <div className="bg-red-100 h-3.5 rounded-sm w-full"></div>
                                </div>
                                <Img
                                  className="h-14"
                                  src="images/img_combinedshape_deep_orange_400.svg"
                                  alt="combinedshape_Six"
                                />
                              </div>
                              <div className="bg-red-100 h-1.5 mt-2 rounded-[3px] w-[44%]"></div>
                              <div className="h-1.5 mt-[38px] overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-purple_50 rounded-[3px]"></div>
                                <div
                                  className="h-full absolute bg-purple_A200_01  rounded-[3px]"
                                  style={{ width: "39%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-[242px] md:ml-[0] ml-[38px]"
                            src="images/img_path_deep_orange_100_01.svg"
                            alt="path_Three"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-[148px] left-[7%] top-[0] w-[148px]"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <Img
                        className="absolute h-[396px] inset-y-[0] my-auto object-cover right-[7%] w-[21%]"
                        src="images/img_bitmap_396x239.png"
                        alt="bitmap_Sixteen"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[550px] mt-[145px] text-base text-center text-deep_orange-400 tracking-[3.00px] uppercase"
                      size="txtEpilogueRegular16Deeporange400"
                    >
                      Events
                    </Text>
                    <Text
                      className="leading-[64.00px] md:ml-[0] ml-[372px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 tracking-[-1.00px]"
                      size="txtEpilogueExtraBold56WhiteA700"
                    >
                      <>
                        Explore Future <br />
                        Conferences
                      </>
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-16 w-full"
                      orientation="horizontal"
                    >
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-md w-full">
                        <div className="flex flex-col items-start justify-start mb-[11px] w-[95%] md:w-full">
                          <div className="flex flex-row gap-3 items-end justify-start w-[65%] md:w-full">
                            <Text
                              className="md:text-5xl text-7xl text-white-A700 tracking-[-2.00px]"
                              size="txtEpilogueExtraBold72"
                            >
                              3
                            </Text>
                            <Text
                              className="leading-[32.00px] mt-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtEpilogueBold24"
                            >
                              <>
                                November
                                <br />
                                2021
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start mt-6 w-[56%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock_deep_orange_400.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtEpilogueRegular16"
                            >
                              9:00 am – 3:00 pm
                            </Text>
                          </div>
                          <Line className="bg-blue_gray-800_02 h-px mt-[43px] w-full" />
                          <Text
                            className="mt-[43px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtEpilogueBold24"
                          >
                            ‎Design Weeks
                          </Text>
                          <Text
                            className="leading-[32.00px] mt-[22px] text-base text-white-A700_a3 w-full"
                            size="txtEpilogueRegular16WhiteA700a3"
                          >
                            Digital agency is a business you hire to outsource
                            your digital.
                          </Text>
                          <Text
                            className="mt-[33px] text-base text-white-A700"
                            size="txtEpilogueRegular16"
                          >
                            Explore Now
                          </Text>
                        </div>
                      </div>
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-md w-full">
                        <div className="flex flex-col items-start justify-start mb-[11px] w-[95%] md:w-full">
                          <div className="flex flex-row gap-3 items-end justify-start w-[77%] md:w-full">
                            <Text
                              className="md:text-5xl text-7xl text-white-A700 tracking-[-2.00px]"
                              size="txtEpilogueExtraBold72"
                            >
                              15
                            </Text>
                            <Text
                              className="leading-[32.00px] mt-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtEpilogueBold24"
                            >
                              <>
                                November <br />
                                2021
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start mt-6 w-[55%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock_deep_orange_400.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtEpilogueRegular16"
                            >
                              1:00 pm – 8:00 pm
                            </Text>
                          </div>
                          <Line className="bg-blue_gray-800_02 h-px mt-[43px] w-full" />
                          <Text
                            className="mt-11 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtEpilogueBold24"
                          >
                            ‎Interior Design
                          </Text>
                          <Text
                            className="leading-[32.00px] mt-[21px] text-base text-white-A700_a3 w-full"
                            size="txtEpilogueRegular16WhiteA700a3"
                          >
                            Marketing efforts, instead of handling in-house.
                          </Text>
                          <Text
                            className="mt-[33px] text-base text-white-A700"
                            size="txtEpilogueRegular16"
                          >
                            Explore Now
                          </Text>
                        </div>
                      </div>
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-md w-full">
                        <div className="flex flex-col items-start justify-start mb-[11px] w-[95%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-end justify-start w-[68%] md:w-full">
                            <Text
                              className="md:text-5xl text-7xl text-white-A700 tracking-[-2.00px]"
                              size="txtEpilogueExtraBold72"
                            >
                              2
                            </Text>
                            <Text
                              className="leading-[32.00px] mt-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtEpilogueBold24"
                            >
                              <>
                                December <br />
                                2021
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start mt-6 w-[58%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock_deep_orange_400.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtEpilogueRegular16"
                            >
                              10:00 am – 2:00 pm
                            </Text>
                          </div>
                          <Line className="bg-blue_gray-800_02 h-px mt-[43px] w-full" />
                          <Text
                            className="mt-[43px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtEpilogueBold24"
                          >
                            The F design events
                          </Text>
                          <Text
                            className="leading-[32.00px] mt-[22px] text-base text-white-A700_a3 w-full"
                            size="txtEpilogueRegular16WhiteA700a3"
                          >
                            Provide your business with a variety of digital
                            solutions to promote.
                          </Text>
                          <Text
                            className="mt-[33px] text-base text-white-A700"
                            size="txtEpilogueRegular16"
                          >
                            Explore Now
                          </Text>
                        </div>
                      </div>
                    </List>
                    <Button
                      className="cursor-pointer font-black leading-[normal] min-w-[170px] md:ml-[0] ml-[500px] mt-16 text-center text-sm uppercase"
                      shape="round"
                      color="white_A700_4b"
                      variant="outline"
                    >
                      Explore More
                    </Button>
                    <Text
                      className="mt-[145px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                      size="txtEpilogueRegular16Deeporange400"
                    >
                      Our Team
                    </Text>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between mt-[29px] w-full">
                      <Text
                        className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[-1.00px]"
                        size="txtEpilogueExtraBold56WhiteA700"
                      >
                        <>
                          Team of Designers <br />
                          and Developers
                        </>
                      </Text>
                      <Img
                        className="h-12 sm:mt-0 mt-20"
                        src="images/img_arrow.svg"
                        alt="arrow"
                      />
                    </div>
                    <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-16 w-full">
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-end rounded-md w-full">
                        <Img
                          className="h-[247px] md:h-auto mt-[23px] object-cover w-[73%]"
                          src="images/img_bitmap_247x196.png"
                          alt="bitmap_Seventeen"
                        />
                      </div>
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-end rounded-md w-full">
                        <Img
                          className="h-[232px] md:h-auto mt-[38px] object-cover w-[96%]"
                          src="images/img_bitmap_232x259.png"
                          alt="bitmap_Eighteen"
                        />
                      </div>
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-end rounded-md w-full">
                        <Img
                          className="h-[238px] md:h-auto mt-8 object-cover w-[76%]"
                          src="images/img_bitmap_238x205.png"
                          alt="bitmap_Nineteen"
                        />
                      </div>
                      <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-start justify-end rounded-md w-full">
                        <Img
                          className="h-[233px] md:h-auto md:ml-[0] ml-[11px] mt-[37px] object-cover w-[86%]"
                          src="images/img_bitmap_233x230.png"
                          alt="bitmap_Twenty"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-[96%] md:w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtEpilogueBold24"
                      >
                        Azah Anyeni
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[153px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtEpilogueBold24"
                      >
                        Roelof Bekkenenks
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[67px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtEpilogueBold24"
                      >
                        Leonardo Oliveira
                      </Text>
                      <Text
                        className="mb-0.5 md:ml-[0] ml-[85px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtEpilogueBold24"
                      >
                        Izabella Tabakova
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[11px] w-[89%] md:w-full">
                      <Text
                        className="text-base text-white-A700_a3"
                        size="txtEpilogueRegular16WhiteA700a3"
                      >
                        Designer
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[230px] text-base text-white-A700_a3"
                        size="txtEpilogueRegular16WhiteA700a3"
                      >
                        React Developer
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[169px] text-base text-white-A700_a3"
                        size="txtEpilogueRegular16WhiteA700a3"
                      >
                        Illustrator
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[223px] text-base text-white-A700_a3"
                        size="txtEpilogueRegular16WhiteA700a3"
                      >
                        Product Designer
                      </Text>
                    </div>
                    <PagerIndicator
                      className="flex h-3 justify-center md:ml-[0] ml-[547px] mt-[59px] w-[76px]"
                      count={3}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-deep_orange-400 w-3"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 border-blue_gray-700 border border-solid w-3"
                      selectedWrapperCss="inline-block md:ml-[0] mx-[10.00px] sm:ml-[0]"
                      unselectedWrapperCss="inline-block md:ml-[0] mx-[10.00px] sm:ml-[0]"
                    />
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[180px] w-full">
                      <div className="border border-blue_gray-800_01 border-solid flex md:flex-1 flex-col items-center justify-start rounded-md w-[49%] md:w-full">
                        <div className="h-[448px] relative w-full">
                          <Img
                            className="h-[448px] m-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_448x570.png"
                            alt="bitmap_TwentyOne"
                          />
                          <Img
                            className="absolute bottom-[0] h-[420px] inset-x-[0] mx-auto object-cover rounded-md w-[84%]"
                            src="images/img_bitmap_420x477.png"
                            alt="bitmap_TwentyTwo"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[41%] md:w-full">
                        <div className="md:h-[193px] h-[252px] relative w-full">
                          <Img
                            className="absolute h-20 right-[10%] top-[1%]"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="absolute left-[0] text-base text-deep_orange-400 top-[0] tracking-[3.00px] uppercase"
                            size="txtEpilogueRegular16Deeporange400"
                          >
                            Founder Words
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] leading-[48.00px] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                            size="txtEpilogueExtraBold40WhiteA700"
                          >
                            Digital agency is a business you hire to outsource
                            your digital marketing efforts
                          </Text>
                        </div>
                        <Text
                          className="mt-[47px] text-white-A700 text-xl"
                          size="txtEpilogueRegular20WhiteA700"
                        >
                          Ren Delan
                        </Text>
                        <Text
                          className="mt-4 text-sm text-white-A700_a3"
                          size="txtEpilogueRegular14WhiteA700a3"
                        >
                          Founder
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[129px] text-base text-center text-deep_orange-400 tracking-[3.00px] uppercase"
                size="txtEpilogueRegular16Deeporange400"
              >
                Testimonials
              </Text>
              <Text
                className="leading-[64.00px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-center text-gray-900 tracking-[-1.00px]"
                size="txtEpilogueExtraBold56"
              >
                <>
                  What Our <br />
                  Clients Saying
                </>
              </Text>
              <div className="md:h-[464px] h-[735px] mt-16 relative w-[82%] md:w-full">
                <div className="md:h-[400px] h-[735px] m-auto w-full">
                  <div className="absolute bg-white-A700 border border-deep_orange-100 border-solid flex flex-col items-center justify-start left-[0] p-12 md:px-10 sm:px-5 rounded-tl-md shadow-bs1 top-[0] w-[51%]">
                    <div className="flex flex-col gap-9 items-start justify-start w-full">
                      <Img
                        className="h-6"
                        src="images/img_star_amber_400.svg"
                        alt="star_Two"
                      />
                      <Text
                        className="leading-[32.00px] text-base text-gray-900_a3 w-full"
                        size="txtEpilogueRegular16Gray900a3"
                      >
                        A digital agency is a business you hire to outsource
                        your digital marketing efforts, instead of handling
                        in-house. They can provide your business with a variety
                        of digital solutions to promote your product or service
                        online and help you.
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start w-[47%] md:w-full">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_oval.png"
                          alt="oval_Two"
                        />
                        <div className="flex flex-col gap-3.5 items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtEpilogueBold24Gray900"
                          >
                            Alan Martí
                          </Text>
                          <Text
                            className="text-base text-gray-900"
                            size="txtEpilogueRegular16Gray900"
                          >
                            Meta Inc.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-deep_orange-100 border-solid flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 right-[0] rounded-tr-md top-[0] w-[51%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        className="h-6"
                        src="images/img_star_amber_400.svg"
                        alt="star_Three"
                      />
                      <Text
                        className="leading-[32.00px] mt-9 text-base text-gray-900_a3 w-full"
                        size="txtEpilogueRegular16Gray900a3"
                      >
                        Provide your business with a variety of digital
                        solutions to promote your product or service online.
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start mt-[31px] w-[58%] md:w-full">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_oval_80x80.png"
                          alt="oval_Three"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtEpilogueBold24Gray900"
                          >
                            Richardo Kann
                          </Text>
                          <Text
                            className="text-base text-gray-900"
                            size="txtEpilogueRegular16Gray900"
                          >
                            Photogram
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-deep_orange-100 border-solid bottom-[0] flex flex-col items-center justify-end left-[0] p-[47px] md:px-10 sm:px-5 rounded-bl-md rounded-br-md w-[51%]">
                    <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                      <Img
                        className="h-6"
                        src="images/img_star_amber_400.svg"
                        alt="star_Four"
                      />
                      <Text
                        className="leading-[32.00px] mt-9 text-base text-gray-900_a3 w-full"
                        size="txtEpilogueRegular16Gray900a3"
                      >
                        Outsource your digital marketing efforts, instead of
                        handling in-house. They can provide your business with a
                        variety.
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start mt-[31px] w-[64%] md:w-full">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_oval_1.png"
                          alt="oval_Four"
                        />
                        <div className="flex flex-col gap-3.5 items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtEpilogueBold24Gray900"
                          >
                            Graham Griffiths
                          </Text>
                          <Text
                            className="text-base text-gray-900"
                            size="txtEpilogueRegular16Gray900"
                          >
                            Twitor
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-deep_orange-100 border-solid bottom-[9%] flex flex-col items-center justify-end p-[47px] md:px-10 sm:px-5 right-[0] rounded-br-md w-[51%]">
                  <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                    <Img
                      className="h-6"
                      src="images/img_star_amber_400.svg"
                      alt="star_Five"
                    />
                    <Text
                      className="leading-[32.00px] mt-9 text-base text-gray-900_a3 w-full"
                      size="txtEpilogueRegular16Gray900a3"
                    >
                      Promote your product or service online and help you hit
                      your marketing goals and grow your business.
                    </Text>
                    <div className="flex flex-row gap-6 items-center justify-start mt-[31px] w-[62%] md:w-full">
                      <Img
                        className="h-20 md:h-auto rounded-[50%] w-20"
                        src="images/img_oval_2.png"
                        alt="oval_Five"
                      />
                      <div className="flex flex-col gap-3.5 items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtEpilogueBold24Gray900"
                        >
                          Maria Trofimova
                        </Text>
                        <Text
                          className="text-base text-gray-900"
                          size="txtEpilogueRegular16Gray900"
                        >
                          Whochat
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-black leading-[normal] min-w-[138px] mt-[65px] text-center text-sm uppercase"
                shape="round"
                color="white_A700"
              >
                See All
              </Button>
              <Text
                className="mt-[113px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                size="txtEpilogueRegular16Deeporange400"
              >
                Pricing
              </Text>
              <Text
                className="leading-[64.00px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                size="txtEpilogueExtraBold56"
              >
                <>
                  Check Our
                  <br />
                  Pricing Plans
                </>
              </Text>
              <div className="flex mt-4 relative w-[82%] md:w-full">
                <div className="md:h-[557px] h-[560px] my-auto w-[67%] md:w-full">
                  <div className="absolute border border-deep_orange-100 border-solid bottom-[0] flex flex-col items-center justify-end left-[0] p-12 md:px-10 sm:px-5 rounded-bl-md rounded-tl-md w-[51%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                        size="txtEpilogueRegular16Deeporange400"
                      >
                        Consultation
                      </Text>
                      <Text
                        className="mt-[26px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                        size="txtEpilogueExtraBold40"
                      >
                        Free
                      </Text>
                      <Text
                        className="leading-[32.00px] mt-[22px] text-base text-gray-900_a3 w-full"
                        size="txtEpilogueRegular16Gray900a3"
                      >
                        Your digital marketing efforts, instead of handling
                        in-house.
                      </Text>
                      <div className="flex flex-row gap-4 items-start justify-start mt-[33px] w-[46%] md:w-full">
                        <div className="bg-deep_orange-400 flex flex-col h-4 items-center justify-start mb-0.5 p-1 rounded-[50%] w-4">
                          <Img
                            className="h-2 w-2"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                        <Text
                          className="text-base text-gray-900"
                          size="txtEpilogueRegular16Gray900"
                        >
                          Brand Design
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start mt-[29px] w-[53%] md:w-full">
                        <div className="bg-red-100_01 flex flex-col h-4 items-center justify-start mb-0.5 p-1 rounded-[50%] w-4">
                          <div className="bg-white-A700 h-0.5 my-[3px] rounded-[1px] w-full"></div>
                        </div>
                        <Text
                          className="text-base text-gray-900_a3"
                          size="txtEpilogueRegular16Gray900a3"
                        >
                          Market Analysis
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-start mt-[29px] w-[41%] md:w-full">
                        <div className="bg-red-100_01 flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                          <div className="bg-white-A700 h-0.5 my-[3px] rounded-[1px] w-full"></div>
                        </div>
                        <Text
                          className="text-base text-gray-900_a3"
                          size="txtEpilogueRegular16Gray900a3"
                        >
                          Production
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-black leading-[normal] min-w-[154px] mt-[45px] text-center text-sm uppercase"
                        shape="round"
                        color="white_A700"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 border border-deep_orange-100 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-8 sm:px-5 right-[0] rounded-tl-md rounded-tr-md shadow-bs1 w-[51%]">
                    <div className="flex flex-col gap-[27px] justify-start mb-4 w-[93%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[92px] mr-[211px] rounded-[19px] text-base text-center"
                        size="sm"
                      >
                        Popular
                      </Button>
                      <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[98%] md:w-full">
                        <Text
                          className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                          size="txtEpilogueRegular16Deeporange400"
                        >
                          Design
                        </Text>
                        <Text
                          className="mt-[26px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                          size="txtEpilogueExtraBold40"
                        >
                          $1500
                        </Text>
                        <Text
                          className="leading-[32.00px] mt-[22px] text-base text-gray-900_a3 w-full"
                          size="txtEpilogueRegular16Gray900a3"
                        >
                          Provide your business with a variety of digital
                          solutions to promote.
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start mt-[33px] w-[46%] md:w-full">
                          <div className="bg-deep_orange-400 flex flex-col h-4 items-center justify-start mb-0.5 p-1 rounded-[50%] w-4">
                            <Img
                              className="h-2 w-2"
                              src="images/img_plus.svg"
                              alt="plus_One"
                            />
                          </div>
                          <Text
                            className="text-base text-gray-900"
                            size="txtEpilogueRegular16Gray900"
                          >
                            Brand Design
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-start justify-start mt-[29px] w-[53%] md:w-full">
                          <div className="bg-deep_orange-400 flex flex-col h-4 items-center justify-start mb-0.5 p-1 rounded-[50%] w-4">
                            <Img
                              className="h-2 w-2"
                              src="images/img_plus.svg"
                              alt="plus_Two"
                            />
                          </div>
                          <Text
                            className="text-base text-gray-900"
                            size="txtEpilogueRegular16Gray900"
                          >
                            Market Analysis
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-start mt-[29px] w-[41%] md:w-full">
                          <div className="bg-red-100_01 flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                            <div className="bg-white-A700 h-0.5 my-[3px] rounded-[1px] w-full"></div>
                          </div>
                          <Text
                            className="text-base text-gray-900_a3"
                            size="txtEpilogueRegular16Gray900a3"
                          >
                            Production
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-black leading-[normal] min-w-[154px] mt-[45px] text-center text-sm uppercase"
                          shape="round"
                        >
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-deep_orange-100 border-solid flex flex-col items-center justify-end ml-[-1px] mt-auto p-12 md:px-10 sm:px-5 rounded-br-md rounded-tr-md w-[34%] z-[1]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                      size="txtEpilogueRegular16Deeporange400"
                    >
                      Design+Code
                    </Text>
                    <Text
                      className="mt-[26px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                      size="txtEpilogueExtraBold40"
                    >
                      $2900
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[22px] text-base text-gray-900_a3 w-full"
                      size="txtEpilogueRegular16Gray900a3"
                    >
                      Help you hit your marketing goals and grow your business.
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-start mt-[33px] w-[46%] md:w-full">
                      <div className="bg-deep_orange-400 flex flex-col h-4 items-center justify-start mb-0.5 p-1 rounded-[50%] w-4">
                        <Img
                          className="h-2 w-2"
                          src="images/img_plus.svg"
                          alt="plus_Three"
                        />
                      </div>
                      <Text
                        className="text-base text-gray-900"
                        size="txtEpilogueRegular16Gray900"
                      >
                        Brand Design
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-start mt-[29px] w-[53%] md:w-full">
                      <div className="bg-deep_orange-400 flex flex-col h-4 items-center justify-start mb-0.5 p-1 rounded-[50%] w-4">
                        <Img
                          className="h-2 w-2"
                          src="images/img_plus.svg"
                          alt="plus_Four"
                        />
                      </div>
                      <Text
                        className="text-base text-gray-900"
                        size="txtEpilogueRegular16Gray900"
                      >
                        Market Analysis
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start mt-[29px] w-[41%] md:w-full">
                      <div className="bg-deep_orange-400 flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                        <Img
                          className="h-2 w-2"
                          src="images/img_plus.svg"
                          alt="plus_Five"
                        />
                      </div>
                      <Text
                        className="text-base text-gray-900"
                        size="txtEpilogueRegular16Gray900"
                      >
                        Production
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-black leading-[normal] min-w-[154px] mt-[45px] text-center text-sm uppercase"
                      shape="round"
                      color="white_A700"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[162px] w-[82%] md:w-full">
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
                  <a
                    href="javascript:"
                    className="mt-[34px] text-base text-gray-900"
                  >
                    <Text size="txtEpilogueRegular16Gray900">Contact Us</Text>
                  </a>
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
              <Text
                className="mt-[155px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                size="txtEpilogueExtraBold40"
              >
                Our Awards
              </Text>
              <List
                className="flex flex-col gap-4 items-center mt-[90px] w-[82%]"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="h-20 relative w-[11%] md:w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-md w-full"
                      src="images/img_bitmap_80x120.png"
                      alt="bitmap"
                    />
                    <div className="absolute bg-gray-900_77 h-20 inset-[0] justify-center m-auto rounded-md w-full"></div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] text-gray-900 text-xl"
                    size="txtEpilogueRegular20"
                  >
                    SOFA
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[348px] text-base text-center text-gray-900_a3"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    25 Oct, 2021
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[385px] text-base text-gray-900 text-right"
                    size="txtEpilogueRegular16Gray900"
                  >
                    Awwwards
                  </Text>
                  <div className="flex flex-col h-12 items-center justify-start ml-6 md:ml-[0] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_48x48.png"
                      alt="bitmap_One"
                    />
                  </div>
                </div>
                <Line className="self-center h-px bg-deep_orange-100 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="h-20 relative w-[11%] md:w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-md w-full"
                      src="images/img_bitmap_4.png"
                      alt="bitmap"
                    />
                    <div className="absolute bg-gray-900_77 h-20 inset-[0] justify-center m-auto rounded-md w-full"></div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] text-gray-900 text-xl"
                    size="txtEpilogueRegular20"
                  >
                    KeyBoard
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[304px] text-base text-center text-gray-900_a3"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    19 Oct, 2021
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[319px] text-base text-gray-900 text-right"
                    size="txtEpilogueRegular16Gray900"
                  >
                    CSS Design Awards
                  </Text>
                  <div className="flex flex-col h-12 items-center justify-start ml-6 md:ml-[0] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_5.png"
                      alt="bitmap_One"
                    />
                  </div>
                </div>
                <Line className="self-center h-px bg-deep_orange-100 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="h-20 relative w-[11%] md:w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-md w-full"
                      src="images/img_bitmap_6.png"
                      alt="bitmap"
                    />
                    <div className="absolute bg-gray-900_77 h-20 inset-[0] justify-center m-auto rounded-md w-full"></div>
                  </div>
                  <Text
                    className="ml-6 md:ml-[0] text-gray-900 text-xl"
                    size="txtEpilogueRegular20"
                  >
                    Work Media
                  </Text>
                  <Text
                    className="ml-72 md:ml-[0] text-base text-center text-gray-900_a3"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    7 Oct, 2021
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[408px] text-base text-gray-900 text-right"
                    size="txtEpilogueRegular16Gray900"
                  >
                    The FWA
                  </Text>
                  <div className="flex flex-col h-12 items-center justify-start ml-6 md:ml-[0] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_7.png"
                      alt="bitmap_One"
                    />
                  </div>
                </div>
              </List>
              <div className="flex flex-row gap-2 items-start justify-center mt-[81px] w-[18%] md:w-full">
                <Text
                  className="text-base text-gray-900_a3 text-right"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  Want more awards?
                </Text>
                <Text
                  className="text-base text-gray-900"
                  size="txtEpilogueRegular16Gray900"
                >
                  Explore Now
                </Text>
              </div>
              <Text
                className="mt-[125px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                size="txtEpilogueRegular16Deeporange400"
              >
                Our Blog
              </Text>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[29px] w-[82%] md:w-full">
                <Text
                  className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                  size="txtEpilogueExtraBold56"
                >
                  <>
                    Latest Blog
                    <br />
                    Articles
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-black leading-[normal] mb-4 min-w-[170px] sm:mt-0 mt-16 text-center text-sm uppercase"
                  shape="round"
                  color="white_A700"
                >
                  Discover All
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-16 w-[82%]"
                orientation="horizontal"
              >
                <div className="h-56 relative w-full">
                  <Img
                    className="h-56 m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_224x370.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 h-56 inset-[0] justify-center m-auto rounded-md w-full"></div>
                </div>
                <div className="h-56 relative w-full">
                  <Img
                    className="h-56 m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_8.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 h-56 inset-[0] justify-center m-auto rounded-md w-full"></div>
                </div>
                <div className="h-56 relative w-full">
                  <Img
                    className="h-56 m-auto object-cover rounded-md w-full"
                    src="images/img_bitmap_9.png"
                    alt="bitmap"
                  />
                  <div className="absolute bg-gray-900_77 h-56 inset-[0] justify-center m-auto rounded-md w-full"></div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px] w-[63%] md:w-full">
                <Text
                  className="mb-0.5 text-gray-900 text-xl"
                  size="txtEpilogueRegular20"
                >
                  Stories
                </Text>
                <Text
                  className="md:ml-[0] ml-[329px] md:mt-0 mt-0.5 text-gray-900 text-xl"
                  size="txtEpilogueRegular20"
                >
                  Design
                </Text>
                <Text
                  className="md:ml-[0] ml-[333px] text-gray-900 text-xl"
                  size="txtEpilogueRegular20"
                >
                  Marketing
                </Text>
              </div>
              <div className="md:gap-10 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start mt-[19px] w-4/5 md:w-full">
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                  size="txtEpilogueBold24Gray900"
                >
                  Agency is a business you hire to outsource
                </Text>
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                  size="txtEpilogueBold24Gray900"
                >
                  Outsource your digital marketing efforts
                </Text>
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                  size="txtEpilogueBold24Gray900"
                >
                  Your business with a variety of digital
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[21px] w-[62%] md:w-full">
                <Text
                  className="text-base text-gray-900_a3"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  5 Nov, 2021
                </Text>
                <Text
                  className="md:ml-[0] ml-[316px] text-base text-gray-900_a3"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  29 Oct, 2021
                </Text>
                <Text
                  className="md:ml-[0] ml-[308px] text-base text-gray-900_a3"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  21 Oct, 2021
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-28 w-[82%] md:w-full">
                <Text
                  className="md:mt-0 mt-6 sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtEpilogueExtraBold40"
                >
                  Newsletter
                </Text>
                <div className="flex md:h-12 h-[76px] justify-end md:ml-[0] ml-[367px] pt-7 relative w-[32%] md:w-full">
                  <div className="bg-white-A700 border border-deep_orange-100 border-solid h-12 mt-auto mx-auto rounded-md w-full"></div>
                  <Text
                    className="absolute bottom-[21%] left-[4%] text-base text-gray-900_a3"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    Your email
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-black leading-[normal] min-w-[170px] md:ml-[0] ml-[30px] md:mt-0 mt-7 text-center text-sm uppercase"
                  shape="round"
                  color="white_A700"
                >
                  Subscribe
                </Button>
              </div>
              <div className="bg-blue_gray-100 flex flex-col items-center justify-start mt-28 w-full">
                <div className="h-[719px] relative w-full">
                  <Img
                    className="h-[719px] m-auto object-cover w-full"
                    src="images/img_bitmap_719x1440.png"
                    alt="bitmap_TwentyThree"
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
              <div className="flex mt-20 relative w-[82%] md:w-full">
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
              <div className="bg-deep_orange-400 flex flex-col items-center justify-start mt-[130px] p-[38px] sm:px-5 rounded-md w-[82%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[33px] w-[92%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[55px] w-[47%] md:w-full">
                    <Text
                      className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[-1.00px]"
                      size="txtEpilogueExtraBold56WhiteA700"
                    >
                      <>
                        We’re Help <br />
                        To Build Your <br />
                        Dream Project
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
                      Contact Us
                    </Button>
                  </div>
                  <div className="md:h-[316px] h-[431px] relative w-[45%] md:w-full">
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
                          alt="combinedshape_Seven"
                        />
                      </div>
                      <Img
                        className="absolute h-[305px] object-cover right-[0] top-[0] w-[66%]"
                        src="images/img_bitmap_10.png"
                        alt="bitmap_TwentyFour"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[24%] h-28 left-[3%]"
                      src="images/img_block_white_a700_112x214.svg"
                      alt="block_Three"
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
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-20 w-[82%] md:w-full">
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
                <div className="flex flex-row gap-2 items-center justify-between md:ml-[0] ml-[332px] w-[14%] md:w-full">
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
              <div className="flex flex-row items-center justify-between mt-3 w-[29%] md:w-full">
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
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[117px] w-[82%] md:w-full">
                <Text
                  className="text-base text-gray-900_a3"
                  size="txtEpilogueRegular16Gray900a3"
                >
                  Copyright © 2022 Laaqiq. All Rights Reserved.
                </Text>
                <Text
                  className="md:ml-[0] ml-[544px] text-base text-gray-900 text-right"
                  size="txtEpilogueRegular16Gray900"
                >
                  Terms of Use
                </Text>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[68px] text-base text-gray-900 text-right"
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

export default HomeAgency1440Page;
