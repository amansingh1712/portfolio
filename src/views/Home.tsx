import React, { useContext } from 'react';
import heroBg from '../assets/webdev.svg';
// import Typical from "react-typical";
import { contactLinks } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import cloud from '../assets/cloudBg.png';
import cloudDark from '../assets/cloudDark.png';
import style from './img.module.css';

const Home = () => {
  const theme = useContext<any>(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? {
                backgroundImage: `url('${cloud}')`,
                backgroundSize: 'cover',
                marginTop: '50px',
              }
            : {
                backgroundImage: `url('${cloudDark}'`,
                backgroundSize: 'cover',
                marginTop: '50px',
              }
        }
      >
        <main
          className='mx-auto max-w-7.5xl px-4 sm:px-50 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen'
          id='/'
        >
          <img
            src='https://i.ibb.co/g7crCRp/Aman-Singh.jpg'
            style={{
              marginBottom: '100px',
              height: '300px',
              width: '300px',
              borderRadius: '200px',
              marginRight: '100px',
            }}
            className={style.amanImage}
          ></img>

          <div className='sm:text-center lg:text-left'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <motion.span
                className={darkMode ? 'block text-black' : ' text-white'}
                style={{ marginTop: '100px' }}
              >
                Hi, I am Aman Singh
              </motion.span>
              <span className='block text-blue-500 z-0 lg:inline'>
                {/* <Typical
                  steps={[
                    'Front End Developer',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'Back End Developer',
                    1000,
                  ]}
                  loop={Infinity}
                /> */}
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? 'mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                  : 'mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
              }
            >
              I am a Front-End / Full-Stack Developer. I am currently gaining
              more skills in Full-Stack developement at Masai School.
            </p>
            <div className='flex md:justify-start '>
              {contactLinks.map((el, index) => (
                <a
                  href={el.link}
                  key={index}
                  target='_blank'
                  className='mr-5 cursor-pointer mt-8 hover:scale-125'
                >
                  <img alt='' src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <div className='mt-3 sm:mt-0 cursor-pointer w-1/2'>
                {/* <Link to={{ pathname: "https://drive.google.com/drive/folders/1bi1lu9gfZ-SYbMYpXz2urVyKvBCOSZ_t" }} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"> */}
                <a
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10'
                  href='https://drive.google.com/file/d/1lKaO4E14jBE3V6Hg2n3rBqe4vk4AhI7P/view?usp=sharing'
                  target='_blank'
                >
                  Resume
                </a>

                {/* </Link> */}
              </div>
            </div>
          </div>
          <motion.img
            initial='hidden'
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
            src={heroBg}
            alt=''
            className='md:w-3/6 hidden sm:block'
          />
        </main>
      </div>
    </>
  );
};

export default Home;
