import React from "react";

import { Button, Img, Line, PagerIndicator, Text } from "components";

const AboutAgency1440Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-epilogue items-end justify-end mx-auto w-full">
        <div className="flex flex-col items-center pl-[434px] md:px-5 w-full">
          <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-4 w-full">
            <div className="flex flex-col items-center justify-start mb-[50px] w-[84%] md:w-full">
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
                About Us
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
        </div>
        <div className="flex flex-col items-start md:px-5 w-full">
          <div className="flex overflow-auto relative w-full">
            <div className="h-[19680px] sm:h-[20506px] md:h-[20622px] m-auto w-full">
              <div className="h-[19680px] sm:h-[20506px] md:h-[20622px] m-auto w-full">
                <div className="absolute bg-red-50 flex flex-col h-full inset-y-[0] items-center justify-start my-auto py-[81px] right-[0] w-[77%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[13898px] w-full">
                    <div className="flex flex-col items-start justify-start w-[82%] md:w-full">
                      <Text
                        className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                        size="txtEpilogueRegular16Deeporange400"
                      >
                        About
                      </Text>
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[29px] w-full">
                        <Text
                          className="leading-[64.00px] md:text-5xl sm:text-[42px] text-[56px] text-gray-900 tracking-[-1.00px]"
                          size="txtEpilogueExtraBold56"
                        >
                          <>
                            An Experience <br />
                            Design Agency
                          </>
                        </Text>
                        <Text
                          className="leading-[32.00px] sm:mt-0 mt-7 text-base text-gray-900_a3"
                          size="txtEpilogueRegular16Gray900a3"
                        >
                          <>
                            Ability to put themselves in the merchant&#39;s
                            shoes. It is meant to partner on the long run, and
                            work as an extension of the merchant&#39;s team.
                            <br />
                            <br />A digital agency is a business you hire to
                            outsource your digital marketing efforts, instead of
                            handling in-house. They can provide your business
                            with a variety of digital solutions to promote your
                            product or service online and help you.
                          </>
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[113px] w-full">
                        <div className="h-[448px] relative w-[49%] md:w-full">
                          <Img
                            className="h-[448px] m-auto object-cover rounded-md w-full"
                            src="images/img_bitmap_11.png"
                            alt="bitmap"
                          />
                          <div className="absolute bg-gray-900_77 flex flex-col md:gap-10 gap-[94px] h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-md w-full">
                            <div className="border border-solid border-white-A700_80 flex flex-col h-[148px] items-end justify-start mt-32 p-[58px] md:px-10 sm:px-5 rounded-[50%] w-[148px]">
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
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                          <div className="sm:gap-5 gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                              <Img
                                className="h-52 md:h-auto object-cover rounded-md w-full"
                                src="images/img_bitmap_208x270.png"
                                alt="bitmap"
                              />
                            </div>
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                              <Img
                                className="h-52 md:h-auto object-cover rounded-md w-full"
                                src="images/img_bitmap_12.png"
                                alt="bitmap"
                              />
                            </div>
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                              <Img
                                className="h-52 md:h-auto object-cover rounded-md w-full"
                                src="images/img_bitmap_13.png"
                                alt="bitmap"
                              />
                            </div>
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start rounded-md w-full">
                              <Img
                                className="h-52 md:h-auto object-cover rounded-md w-full"
                                src="images/img_bitmap_14.png"
                                alt="bitmap"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-32 w-full">
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[81px]">
                          <Text
                            className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                            size="txtEpilogueRegular16Deeporange400"
                          >
                            Features
                          </Text>
                          <Text
                            className="leading-[32.00px] mt-[39px] text-gray-900 text-xl w-full"
                            size="txtEpilogueRegular20"
                          >
                            <>
                              Long run, and work as an extension of the
                              merchant&#39;s team.
                            </>
                          </Text>
                          <Text
                            className="leading-[32.00px] mt-3 text-base text-gray-900_a3 w-full"
                            size="txtEpilogueRegular16Gray900a3"
                          >
                            <>
                              Ability to put themselves in the merchant&#39;s
                              shoes. It is meant to partner on the long run, and
                              work as an extension.
                            </>
                          </Text>
                        </div>
                        <div className="flex relative w-[58%] md:w-full">
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
                              Full service range including technical skills,
                              design.
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
                      </div>
                      <div className="flex mt-36 relative w-full">
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
                    </div>
                    <div className="h-[3440px] md:h-[3643px] sm:h-[4226px] mt-32 relative w-full">
                      <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[97px] md:px-10 sm:px-5 w-full">
                        <div className="flex flex-col justify-start mb-[441px] w-[94%] md:w-full">
                          <Text
                            className="text-base text-deep_orange-400 tracking-[3.00px] uppercase"
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
                                alt="bitmap_One"
                              />
                            </div>
                            <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-end rounded-md w-full">
                              <Img
                                className="h-[232px] md:h-auto mt-[38px] object-cover w-[96%]"
                                src="images/img_bitmap_232x259.png"
                                alt="bitmap_Two"
                              />
                            </div>
                            <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-center justify-end rounded-md w-full">
                              <Img
                                className="h-[238px] md:h-auto mt-8 object-cover w-[76%]"
                                src="images/img_bitmap_238x205.png"
                                alt="bitmap_Three"
                              />
                            </div>
                            <div className="border border-blue_gray-800_01 border-solid flex flex-1 flex-col items-start justify-end rounded-md w-full">
                              <Img
                                className="h-[233px] md:h-auto md:ml-[0] ml-[11px] mt-[37px] object-cover w-[86%]"
                                src="images/img_bitmap_233x230.png"
                                alt="bitmap_Four"
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
                          <Text
                            className="md:ml-[0] ml-[516px] mt-[117px] text-base text-center text-deep_orange-400 tracking-[3.00px] uppercase"
                            size="txtEpilogueRegular16Deeporange400"
                          >
                            Testimonials
                          </Text>
                          <Text
                            className="leading-[64.00px] md:ml-[0] ml-[388px] mt-[29px] md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 tracking-[-1.00px]"
                            size="txtEpilogueExtraBold56WhiteA700"
                          >
                            <>
                              What Our <br />
                              Clients Saying
                            </>
                          </Text>
                          <PagerIndicator
                            className="flex h-3 justify-center md:ml-[0] ml-[547px] mt-[528px] w-[76px]"
                            count={3}
                            activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-deep_orange-400 w-3"
                            activeIndex={1}
                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 border-blue_gray-700 border border-solid w-3"
                            selectedWrapperCss="inline-block md:ml-[0] mx-[10.00px] sm:ml-[0]"
                            unselectedWrapperCss="inline-block md:ml-[0] mx-[10.00px] sm:ml-[0]"
                          />
                          <Text
                            className="md:ml-[0] ml-[200px] mt-[150px] text-base text-deep_orange-400 tracking-[3.00px] uppercase"
                            size="txtEpilogueRegular16Deeporange400"
                          >
                            Faq
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[200px] mt-7 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                            size="txtEpilogueExtraBold40WhiteA700"
                          >
                            Frequently Asked Questions
                          </Text>
                          <Text
                            className="leading-[32.00px] md:ml-[0] ml-[200px] mt-[34px] text-base text-white-A700_a3 w-[66%] sm:w-full"
                            size="txtEpilogueRegular16WhiteA700a3"
                          >
                            A digital agency is a business you hire to outsource
                            your digital marketing efforts, instead of handling
                            in-house.
                          </Text>
                          <div className="flex flex-col md:ml-[0] ml-[200px] mt-[65px] relative w-[66%] md:w-full">
                            <div className="flex flex-col mx-auto w-full">
                              <div className="flex flex-col mx-auto w-full">
                                <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-10 sm:px-5 rounded-tl-md rounded-tr-md shadow-bs1 w-full">
                                  <div className="flex flex-col gap-9 items-center justify-start mb-1 w-[99%] md:w-full">
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
                                        <Img
                                          src="images/img_arrowup.svg"
                                          alt="arrowup"
                                        />
                                      </Button>
                                    </div>
                                    <Text
                                      className="leading-[32.00px] text-base text-gray-900_a3 w-[98%] sm:w-full"
                                      size="txtEpilogueRegular16Gray900a3"
                                    >
                                      Digital marketing efforts, instead of
                                      handling in-house. They can provide your
                                      business with a variety of digital
                                      solutions to promote your product or
                                      service online and help you hit your
                                      marketing goals and grow your business.
                                      Digital marketing efforts, instead of
                                      handling in-house.
                                    </Text>
                                  </div>
                                </div>
                                <div className="border border-blue_gray-800_01 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[-1px] mx-auto p-10 sm:px-5 w-full z-[1]">
                                  <Text
                                    className="ml-2 sm:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                    size="txtEpilogueBold24"
                                  >
                                    Hire to outsource your digital
                                  </Text>
                                  <div className="bg-deep_orange-400 flex flex-col h-8 items-center justify-start p-2.5 rounded-[50%] w-8">
                                    <Img
                                      className="h-[7px] mt-1"
                                      src="images/img_arrowup.svg"
                                      alt="arrowup_One"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="border border-blue_gray-800_01 border-solid flex flex-row sm:gap-10 items-center justify-between mt-[-1px] mx-auto p-10 sm:px-5 w-full z-[1]">
                                <Text
                                  className="ml-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtEpilogueBold24"
                                >
                                  Marketing efforts
                                </Text>
                                <div className="bg-deep_orange-400 flex flex-col h-8 items-center justify-start p-2.5 rounded-[50%] w-8">
                                  <Img
                                    className="h-[7px] mt-1"
                                    src="images/img_arrowup.svg"
                                    alt="arrowup_Two"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="border border-blue_gray-800_01 border-solid flex flex-row sm:gap-10 items-center justify-between mt-[-1px] mx-auto p-10 sm:px-5 rounded-bl-md rounded-br-md w-full z-[1]">
                              <Text
                                className="ml-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtEpilogueBold24"
                              >
                                Can provide your business
                              </Text>
                              <div className="bg-deep_orange-400 flex flex-col h-8 items-center justify-start p-2.5 rounded-[50%] w-8">
                                <Img
                                  className="h-[7px] mt-1"
                                  src="images/img_arrowup.svg"
                                  alt="arrowup_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[117px] w-full">
                            <Img
                              className="h-[42px] md:h-auto object-cover"
                              src="images/img_bitmap_15.png"
                              alt="bitmap_Five"
                            />
                            <Img
                              className="h-8 md:h-auto object-cover"
                              src="images/img_bitmap_16.png"
                              alt="bitmap_Six"
                            />
                            <Img
                              className="h-[47px] md:h-auto object-cover"
                              src="images/img_bitmap_17.png"
                              alt="bitmap_Seven"
                            />
                            <Img
                              className="h-[21px] md:h-auto object-cover"
                              src="images/img_bitmap_18.png"
                              alt="bitmap_Eight"
                            />
                            <Img
                              className="h-6 md:h-auto object-cover"
                              src="images/img_bitmap_19.png"
                              alt="bitmap_Nine"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-deep_orange-400 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[41px] md:px-10 sm:px-5 rounded-md w-[82%]">
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
                              A digital agency is a business you hire to
                              outsource your digital marketing efforts, instead
                              of handling in-house.
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
                                alt="bitmap_Ten"
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
                                backgroundImage:
                                  "url('images/img_group96.svg')",
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
                    </div>
                    <div className="flex flex-col items-start justify-start mt-20 w-[82%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                <div className="absolute bg-white-A700_70 border border-deep_orange-100_70 border-solid flex flex-col items-center justify-end left-[0] p-[47px] md:px-10 sm:px-5 rounded-md top-[15%] w-[42%]">
                  <div className="flex flex-col gap-9 items-start justify-start mt-0.5 w-full">
                    <Img
                      className="h-6"
                      src="images/img_star_amber_400.svg"
                      alt="star"
                    />
                    <Text
                      className="leading-[32.00px] text-base text-gray-900_a3 w-full"
                      size="txtEpilogueRegular16Gray900a3"
                    >
                      Outsource your digital marketing efforts, instead of
                      handling in-house. They can provide your business with a
                      variety.
                    </Text>
                    <div className="flex flex-row gap-6 items-end justify-start w-[46%] md:w-full">
                      <Img
                        className="h-20 md:h-auto rounded-[50%] w-20"
                        src="images/img_oval_1.png"
                        alt="oval"
                      />
                      <div className="flex flex-col items-start justify-start mb-1 mt-[9px]">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtEpilogueBold24Gray900"
                        >
                          Graham Griffiths
                        </Text>
                        <Text
                          className="mt-[3px] text-base text-gray-900"
                          size="txtEpilogueRegular16Gray900"
                        >
                          Twitor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 border border-deep_orange-100 border-solid flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 right-[18%] rounded-bl-md rounded-br-md shadow-bs1 top-[15%] w-[42%]">
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <Img
                    className="h-6"
                    src="images/img_star_amber_400.svg"
                    alt="star_One"
                  />
                  <Text
                    className="leading-[32.00px] text-base text-gray-900_a3 w-full"
                    size="txtEpilogueRegular16Gray900a3"
                  >
                    A digital agency is a business you hire to outsource your
                    digital marketing efforts, instead of handling in-house.
                    They can provide your business with a variety of digital
                    solutions to promote your product or service online and help
                    you. A digital agency is a business you hire to outsource
                    your digital marketing efforts,{" "}
                  </Text>
                  <div className="flex flex-row gap-6 items-center justify-start w-[35%] md:w-full">
                    <Img
                      className="h-20 md:h-auto rounded-[50%] w-20"
                      src="images/img_oval.png"
                      alt="oval_One"
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
            </div>
            <div className="bg-white-A700_70 border border-deep_orange-100_70 border-solid flex flex-col items-center justify-start ml-[-336px] mt-[2976px] p-12 md:px-10 sm:px-5 rounded-tr-md w-[42%] z-[1]">
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
                  Provide your business with a variety of digital solutions to
                  promote your product or service online.
                </Text>
                <div className="flex flex-row gap-6 items-center justify-start w-[42%] md:w-full">
                  <Img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src="images/img_oval_80x80.png"
                    alt="oval_Two"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAgency1440Page;
