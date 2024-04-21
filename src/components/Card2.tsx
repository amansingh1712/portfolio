import React from 'react';
import { motion } from 'framer-motion';

const Card1 = () => {
  return (
    <motion.div
      initial={'hidden'}
      whileInView={'visible'}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className='max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8'
    >
      <a
        href='https://epic-swanson-c038fa.netlify.app/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='rounded-t-lg w-full'
          src='https://i.ibb.co/DgPK25k/skinstore.png'
          alt=''
        />
      </a>
      <div className='p-5'>
        <a
          href='https://epic-swanson-c038fa.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Skinstore Website Clone
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          A website where we can buy all types of skincare and makeup products,
          It’s a website where you can buy a lot of skincare products, beauty
          products which will enhance your skin.
        </p>
        <a
          href='https://epic-swanson-c038fa.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Live
          {/* <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg> */}
        </a>
        <a
          style={{ marginLeft: '10px' }}
          href='https://github.com/amansingh1712/skinstoreWebsiteClone'
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Code
          {/* <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg> */}
        </a>
      </div>
    </motion.div>
  );
};

export default Card1;
