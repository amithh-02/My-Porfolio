import { motion } from "framer-motion";
import { styles } from "../styles";
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  const resumePDF = "/Amith_M_Jain_Resume.pdf"; // Put Amith_M_Jain_Resume.pdf inside public/

  return (
    <>
      {/* Section Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Download my complete CV</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        Here's a quick access to my complete professional resume, covering my
        background in AI/ML engineering, project experience, internships,
        technical skills, and certifications.  
        You can download the full resume using the button below.
      </motion.p>

      {/* Resume Download Button */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-16 flex justify-center items-center relative"
        style={{ perspective: "1000px" }}
      >
        <motion.a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-6 bg-gradient-to-br from-[#915EFF] via-[#7e4fe3] to-[#6b3fd1] text-white text-[24px] font-bold rounded-2xl relative overflow-hidden z-10"
          style={{
            boxShadow: `
              0 8px 0 #5a2fb3,
              0 12px 20px rgba(91, 47, 179, 0.4),
              inset 0 2px 0 rgba(255, 255, 255, 0.3),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2)
            `,
            transform: "translateZ(0)",
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -3, 3, -3, 3, 0],
            boxShadow: `
              0 12px 0 #5a2fb3,
              0 16px 30px rgba(91, 47, 179, 0.6),
              0 0 40px rgba(145, 94, 255, 0.8),
              inset 0 2px 0 rgba(255, 255, 255, 0.4),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2)
            `,
            rotateX: 5,
          }}
          whileTap={{ 
            scale: 0.95,
            rotate: -5,
            boxShadow: `
              0 2px 0 #5a2fb3,
              0 4px 10px rgba(91, 47, 179, 0.3),
              inset 0 2px 0 rgba(255, 255, 255, 0.3),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2)
            `,
            translateY: 6,
          }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            hover: {
              duration: 0.4,
              rotate: {
                duration: 0.5,
              },
            },
            tap: {
              duration: 0.1,
            },
          }}
        >
          <motion.span
            className="relative z-10 drop-shadow-lg"
            animate={{
              textShadow: [
                "0 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.5)",
                "0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.8)",
                "0 2px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Download Resume
          </motion.span>
          
          {/* Animated background shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
          
          {/* 3D Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rounded-t-2xl" />
        </motion.a>
      </motion.div>
    </>
  );
};

export default sectionWrapper(Resume, "resume");