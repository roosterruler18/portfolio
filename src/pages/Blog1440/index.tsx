import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Blog1440Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-epilogue items-center justify-end mx-auto w-full">
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-4 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1170px] mb-[50px] mx-auto md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
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
              className="mt-[103px] md:text-5xl text-7xl text-center text-white-A700 tracking-[-2.00px]"
              size="txtEpilogueExtraBold72"
            >
              Blog Articles
            </Text>
            <Text
              className="leading-[32.00px] mt-[26px] text-base text-center text-white-A700_a3 w-[49%] sm:w-full"
              size="txtEpilogueRegular16WhiteA700a3"
            >
              Agency provides a full service range including technical skills,
              design, business understanding.
            </Text>
          </div>
        </div>
        <div className="bg-red-50 flex flex-col items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1170px] mb-[16491px] mx-auto w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="h-[336px] relative w-[49%] md:w-full">
                <Img
                  className="h-[336px] m-auto object-cover rounded-md w-full"
                  src="images/img_bitmap_336x570.png"
                  alt="bitmap"
                />
                <div className="absolute bg-gray-900_77 h-[336px] inset-[0] justify-center m-auto rounded-md w-full"></div>
              </div>
              <div className="h-[336px] relative w-[49%] md:w-full">
                <Img
                  className="h-[336px] m-auto object-cover rounded-md w-full"
                  src="images/img_bitmap_34.png"
                  alt="bitmap_One"
                />
                <div className="absolute bg-gray-900_77 h-[336px] inset-[0] justify-center m-auto rounded-md w-full"></div>
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[30px] w-[58%] md:w-full">
              <Text
                className="mb-0.5 text-gray-900 text-xl"
                size="txtEpilogueRegular20"
              >
                Stories
              </Text>
              <Text
                className="mt-0.5 text-gray-900 text-xl"
                size="txtEpilogueRegular20"
              >
                Design
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[23px] w-[98%] md:w-full">
              <Text
                className="leading-[48.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtEpilogueExtraBold40"
              >
                Performance marketing agencies specialize
              </Text>
              <Text
                className="leading-[48.00px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                size="txtEpilogueExtraBold40"
              >
                Digital marketing channels
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-[18px] w-3/5 md:w-full">
              <Text
                className="text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                7 Dec, 2021
              </Text>
              <Text
                className="text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                23 Nov, 2021
              </Text>
            </div>
            <Line className="bg-deep_orange-100 h-px mt-[76px] w-full" />
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[79px] w-full"
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px] w-[77%] md:w-full">
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
            <div className="md:gap-10 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[19px] w-[98%] md:w-full">
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
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[21px] w-[77%] md:w-full">
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
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[76px] w-full"
              orientation="horizontal"
            >
              <div className="h-56 relative w-full">
                <Img
                  className="h-56 m-auto object-cover rounded-md w-full"
                  src="images/img_bitmap_35.png"
                  alt="bitmap"
                />
                <div className="absolute bg-gray-900_77 h-56 inset-[0] justify-center m-auto rounded-md w-full"></div>
              </div>
              <div className="h-56 relative w-full">
                <Img
                  className="h-56 m-auto object-cover rounded-md w-full"
                  src="images/img_bitmap_36.png"
                  alt="bitmap"
                />
                <div className="absolute bg-gray-900_77 h-56 inset-[0] justify-center m-auto rounded-md w-full"></div>
              </div>
              <div className="h-56 relative w-full">
                <Img
                  className="h-56 m-auto object-cover rounded-md w-full"
                  src="images/img_bitmap_37.png"
                  alt="bitmap"
                />
                <div className="absolute bg-gray-900_77 h-56 inset-[0] justify-center m-auto rounded-md w-full"></div>
              </div>
            </List>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px] w-3/4 md:w-full">
              <Text
                className="md:mt-0 mt-0.5 text-gray-900 text-xl"
                size="txtEpilogueRegular20"
              >
                Design
              </Text>
              <Text
                className="md:ml-[0] ml-[333px] text-gray-900 text-xl"
                size="txtEpilogueRegular20"
              >
                Branding
              </Text>
              <Text
                className="mb-0.5 md:ml-[0] ml-[313px] text-gray-900 text-xl"
                size="txtEpilogueRegular20"
              >
                Stories
              </Text>
            </div>
            <div className="md:gap-10 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[19px] w-[98%] md:w-full">
              <Text
                className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                size="txtEpilogueBold24Gray900"
              >
                Analytics to track and report on results
              </Text>
              <Text
                className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                size="txtEpilogueBold24Gray900"
              >
                The most well known performance
              </Text>
              <Text
                className="leading-[32.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                size="txtEpilogueBold24Gray900"
              >
                Marketing channels native advertising
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[21px] w-[76%] md:w-full">
              <Text
                className="text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                17 Nov, 2021
              </Text>
              <Text
                className="md:ml-[0] ml-[311px] text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                12 Oct, 2021
              </Text>
              <Text
                className="md:ml-[0] ml-[310px] text-base text-gray-900_a3"
                size="txtEpilogueRegular16Gray900a3"
              >
                9 Oct, 2021
              </Text>
            </div>
            <Button
              className="cursor-pointer font-black leading-[normal] min-w-[170px] md:ml-[0] ml-[500px] mt-[76px] text-center text-sm uppercase"
              shape="round"
              color="white_A700"
            >
              Load More
            </Button>
            <Line className="bg-deep_orange-100 h-px mt-20 w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[35px] w-full">
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
            <Line className="bg-deep_orange-100 h-px mt-16 w-full" />
            <div className="bg-deep_orange-400 flex flex-col items-center justify-start mt-[111px] p-[41px] md:px-10 sm:px-5 rounded-md w-full">
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
                      alt="bitmap_Two"
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

export default Blog1440Page;
