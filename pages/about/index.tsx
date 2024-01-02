import React, { useState } from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';
//  about data
export const aboutData: {
  title: string;
  info: {
    title: string;
    icons?: JSX.Element[];
    stage?: string;
  }[];
}[] = [
    {
      title: 'skills',
      info: [
        {
          title: 'Web Development',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
            <FaWordpress />,
          ],
        },
        {
          title: 'UI/UX Design',
          icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
        },
      ],
    },
    // {
    //   title: 'awards',
    //   info: [
    //     {
    //       title: 'Webby Awards - Honoree',
    //       stage: '2011 - 2012',
    //     },
    //     {
    //       title: 'Adobe Design Achievement Awards - Finalist',
    //       stage: '2009 - 2010',
    //     },
    //   ],
    // },
    {
      title: 'experience',
      info: [
        {
          title: 'Web developer - HDBank',
          stage: '2021 - now',
        },
        {
          title: 'Web developer - Canh Cam Website Design Agency',
          stage: '2019 - 2021',
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: 'Web Developer - South Telecom JSC Digital Service Provider',
          stage: '2021 - 2022',
        },
      ],
    },
  ];
// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
// counter
import CountUp from 'react-countup';
const About = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className="grid grid-cols-12 gap-3">
          <div className='flex-1 flex flex-col justify-center col-span-6'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'
            >
              Captivating <span className='text-accent'>stories</span> birth
              magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            >
              3 years ago, I began freelancing as a developer. Since then, I've
              done remote work for agencies, counsulted for startups, and
              collaborated on digital products for business and consumer use.
            </motion.p>
            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex mx-auto xl:mx-0 mb-8'
            >
              <div className='flex flex-1 xl:gap-x-6'>
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Years of experience
                  </div>
                </div>
                {/* clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={150} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Satisfied clients
                  </div>
                </div>
                {/* projects */}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={150} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished projects
                  </div>
                </div>
                {/* awards */}
                {/* <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div> */}
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col col-span-6'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex &&
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                  >
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return <div className='text-2xl text-white' key={itemIndex}>{icon}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
export default About;

