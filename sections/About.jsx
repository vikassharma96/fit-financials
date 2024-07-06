"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Fit-Financials" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">At FitFinancials</span>{" "}
        we're committed to empowering individuals worldwide with expert
        financial guidance and innovative tools to optimize their investments
        and secure their financial future. We understand the unique challenges
        of managing wealth across borders, which is why our team of seasoned
        advisors combines global expertise with deep insights into diverse
        markets. Our approach is tailored to each client's specific needs,
        <span className="font-extrabold text-white">
          {" "}
          offering personalized investment strategies that align with individual
          goals, risk tolerance, and cross-border financial situations.{" "}
        </span>{" "}
        <span className="font-extrabold text-white">Explore</span> to help you
        strengthen your wealth and achieve your financial goals.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
