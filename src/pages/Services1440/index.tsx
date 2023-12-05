import React from "react";

import { Button, Img, Line, Text } from "components";

const Services1440Page: React.FC = () => {
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
              Services
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
        <div className="bg-red-50 flex flex-col items-center justify-start p-[81px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1170px] mb-[16394px] mx-auto w-full">
            <Text
              className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
              size="txtEpilogueRegular16Deeporange400"
            >
              Services
            </Text>
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[42px] w-full">
              <Text
                className="leading-[48.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtEpilogueExtraBold40"
              >
                Digital agency is a business you hire to outsource your digital
                marketing efforts
              </Text>
              <Text
                className="leading-[32.00px] sm:mt-0 mt-[15px] text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                <>
                  Ability to put themselves in the merchant&#39;s shoes. It is
                  meant to partner on the long run, and work as an extension of
                  the merchant&#39;s team.
                  <br />
                  <br />A digital agency is a business you hire to outsource
                  your digital marketing efforts, instead of handling in-house.
                  They can provide your business with a variety of digital
                  solutions to promote your product or service online and help
                  you.
                </>
              </Text>
            </div>
            <Line className="bg-deep_orange-100 h-px mt-[97px] w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] w-full">
              <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] w-20">
                <Img
                  className="h-8 w-8"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
              </div>
              <Text
                className="ml-9 md:ml-[0] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                size="txtEpilogueExtraBold56"
              >
                Design
              </Text>
              <Button
                className="flex h-8 items-center justify-center md:ml-[0] ml-[833px] md:mt-0 my-6 w-8"
                shape="circle"
                size="sm"
              >
                <Img src="images/img_arrowup.svg" alt="arrowup" />
              </Button>
            </div>
            <Line className="bg-deep_orange-100 h-px mt-12 w-full" />
            <Text
              className="leading-[48.00px] md:ml-[0] ml-[600px] mt-[76px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-[49%] sm:w-full"
              size="txtEpilogueExtraBold40"
            >
              Agency is a business you hire to outsource your digital marketing
              efforts
            </Text>
            <Text
              className="leading-[32.00px] md:ml-[0] ml-[600px] mt-7 text-base text-gray-900_a3 w-[49%] sm:w-full"
              size="txtEpilogueRegular16Gray900a3"
            >
              Business you hire to outsource your digital marketing efforts,
              instead of handling in-house. They can provide your business with
              a variety of digital solutions to promote your product or service
              online and help you.
            </Text>
            <div className="flex flex-row gap-4 items-center justify-end md:ml-[0] ml-[600px] mt-9 w-[17%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="deep_orange_400_01"
                size="xs"
              >
                <Img src="images/img_checkmark.svg" alt="checkmark" />
              </Button>
              <Text
                className="text-base text-gray-900"
                size="txtEpilogueRegular16Gray900"
              >
                Web Development
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end md:ml-[0] ml-[600px] mt-4 w-[15%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="deep_orange_400_01"
                size="xs"
              >
                <Img src="images/img_checkmark.svg" alt="checkmark_One" />
              </Button>
              <Text
                className="text-base text-gray-900"
                size="txtEpilogueRegular16Gray900"
              >
                Brand Strategy
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end md:ml-[0] ml-[600px] mt-4 w-[13%] md:w-full">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="deep_orange_400_01"
                size="xs"
              >
                <Img src="images/img_checkmark.svg" alt="checkmark_Two" />
              </Button>
              <Text
                className="text-base text-gray-900"
                size="txtEpilogueRegular16Gray900"
              >
                Art Direction
              </Text>
            </div>
            <Line className="bg-deep_orange-100 h-px mt-[102px] w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] w-full">
              <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] w-20">
                <Img
                  className="h-[26px] my-[3px]"
                  src="images/img_bag.svg"
                  alt="bag"
                />
              </div>
              <Text
                className="ml-9 md:ml-[0] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                size="txtEpilogueExtraBold56"
              >
                Development
              </Text>
              <Button
                className="flex h-8 items-center justify-center md:ml-[0] ml-[646px] md:mt-0 my-6 w-8"
                shape="circle"
                size="sm"
              >
                <Img src="images/img_arrowup.svg" alt="arrowup_One" />
              </Button>
            </div>
            <div className="md:h-[49px] h-px mt-12 relative w-full">
              <Line className="bg-deep_orange-100 h-px m-auto w-full" />
              <Line className="absolute bg-deep_orange-100 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[47px] w-full">
              <div className="bg-deep_orange-400_01 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] w-20">
                <Img
                  className="h-8 w-8"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <Text
                className="ml-9 md:ml-[0] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                size="txtEpilogueExtraBold56"
              >
                Marketing
              </Text>
              <Button
                className="flex h-8 items-center justify-center md:ml-[0] ml-[731px] md:mt-0 my-6 w-8"
                shape="circle"
                size="sm"
              >
                <Img src="images/img_arrowup.svg" alt="arrowup_Two" />
              </Button>
            </div>
            <Line className="bg-deep_orange-100 h-px mt-12 w-full" />
            <Text
              className="mt-28 text-base text-deep_orange-400 tracking-[3.00px] uppercase"
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
            <div className="flex sm:flex-col flex-row gap-[53px] items-center justify-end md:ml-[0] ml-[600px] mt-[38px] w-2/5 md:w-full">
              <Text
                className="md:text-5xl text-7xl text-gray-900 tracking-[-2.00px]"
                size="txtEpilogueExtraBold72Gray900"
              >
                3
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtEpilogueBold24Gray900"
              >
                <>Themselves in the merchant&#39;s</>
              </Text>
            </div>
            <div className="bg-deep_orange-400 flex flex-col items-center justify-start mt-[149px] p-[41px] md:px-10 sm:px-5 rounded-md w-full">
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
                      alt="bitmap"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[24%] h-28 left-[3%]"
                    src="images/img_block_white_a700_112x214.svg"
                    alt="block"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start left-[0] p-[72px] md:px-10 sm:px-5 top-[0] w-[177px]"
                    style={{ backgroundImage: "url('images/img_group96.svg')" }}
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
    </>
  );
};

export default Services1440Page;
