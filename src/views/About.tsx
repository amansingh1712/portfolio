import React, { useContext } from 'react';
import { techStack } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import './amanabout.css';

const About = () => {
  const theme = useContext<any>(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id='about amanabout'
      style={{ marginTop: '100px' }}
      className={darkMode === true ? 'bg-white' : 'bg-gray-900'}
    >
      <div className='max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12'>
        <h2
          // style={{ marginTop: "180px" }}
          id='amanabout'
          className={
            darkMode
              ? 'text-5xl font-bold px-4 md:px-0 text-center'
              : 'text-5xl font-bold px-4 md:px-0 text-center text-white'
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className='mt-12 text-3xl font-semibold text-blue-500'>
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? 'mt-4 text-xl text-justify text-gray-500'
                  : 'mt-4 text-xl text-justify text-white'
              }
            >
              I’ve always been a great problem solver, an independent introvert,
              and a technophile obsessed with the latest devices. After
              graduating in Mechanical & Automation Engineering, I was preparing
              for PSU. During this time I watched the growth in the IT industry
              and wanted to be a part of it. I wanted to learn to code and found
              Masai School. A self-motivated hard worker, I am enjoying my
              journey at Masai School where I am learning MERN stack, data
              structures, and algorithms. I am now a team player who is
              passionate about coding.
            </p>
          </motion.div>
          <motion.div>
            <h4 className='mt-12 text-3xl font-semibold text-blue-500'>
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? 'mt-4 text-xl text-justify text-gray-500'
                  : 'mt-4 text-xl text-justify text-white'
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused websites.
            </p>
          </motion.div>
          <motion.div className='flex flex-wrap mt-8 flex flex-wrap justify-between '>
            {techStack.map((el, index) => (
              <motion.div
                initial='hidden'
                key={index}
                whileInView={'visible'}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className='py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40'
              >
                <img alt='' src={el.link} className='w-12' />
                <h4 className='text-md ml-4'>{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
