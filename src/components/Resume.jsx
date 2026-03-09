import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { resume_bg } from "../assets";

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
        You can download the full resume using the card below.
      </motion.p>

      {/* Resume Card */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-16 flex justify-center items-center"
      >
        <motion.div
          className="relative p-8 rounded-[20px] w-full max-w-[400px] h-[200px] overflow-hidden"
          style={{
            border: "2px solid #6a0dad",
            boxShadow: "0 0 10px 2px rgba(138, 43, 226, 0.6)",
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 2, 0, -2, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              backgroundImage: `url(${resume_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.3,
            }}
          />

          <Tilt
            options={{
              max: 25,
              scale: 1.01,
              speed: 400,
            }}
            className="w-full h-full relative flex items-center justify-center z-10"
          >
            {/* Download Button */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-br from-[#915EFF] to-[#7e4fe3] text-white font-bold rounded-full text-[18px] shadow-lg hover:scale-110 hover:shadow-xl transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              Download Resume
            </a>
          </Tilt>

          {/* Floating particles around card */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full z-10"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                x: [0, 30, 0, -30, 0],
                y: [0, -30, 0, 30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default sectionWrapper(Resume, "resume");