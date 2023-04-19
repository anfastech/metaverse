'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-1/4 right-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img
            src="/people-01.png" alt="people" className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/4 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img
            src="/people-02.png" alt="people" className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img
            src="/people-03.png" alt="people" className="w-full h-full"
          />
        </div>

        <div className="absolute lg:flex hidden top-1/2 left-[20%] w-[180px] h-[136px] p-[6px] rounded-[30px] bg-[#5d6680] drop-shadow-2xl ">
          <img
            src="/Mask-02.png" alt="people" className="w-full h-full drop-shadow-2xl"
          />
          <div className="absolute top-[74px]  mx-[8%] h-[100px]">
            <div>
              <div className="absolute left-[14%] w-[20px] h-[20px] rounded-full">
                <img
                  src="/people-01.png" alt="people" className="w-full h-full"
                />
              </div>
              <div className="absolute left-[7%] w-[20px] h-[20px] rounded-full">
                <img
                  src="/people-03.png" alt="people" className="w-full h-full"
                />
              </div>
              <div className="absolute left-[0%] w-[20px] h-[20px] rounded-full">
                <img
                  src="/people-02.png" alt="people" className="w-full h-full"
                />
              </div>
              <h2 className="absolute left-[35%] text-white w-full text-[12px]">+264 has joined</h2>
            </div>
            <h2 className="text-base font-bold text-white relative mt-[20px]">The Upside Down</h2>
          </div>
        </div>
        <div className="lg:flex hidden absolute top-1/4 right-[20%] w-[180px] bg-[#5d6680] h-[136px] p-[6px] rounded-[30px] drop-shadow-2xl">
          <img
            src="/Mask-01.png" alt="people" className="w-full h-full drop-shadow-2xl"
          />
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
