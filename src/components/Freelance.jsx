import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { nayana_landing, geektrust } from "../assets";

// Freelance projects data - add this to your constants file or keep it here
const freelanceProjects = [
    {
        id: 1,
        name: "Portfolio Website",
        client: "Construction Company - Nayana Constructions",
        date: "Sept 2025 - Oct 2025",
        description: "Built a responsive website using React, Vite, Tailwind CSS, and TypeScript. Integrated EmailJS for automated client inquiries and improved communication efficiency. Deployed a fast, SEO friendly website showcasing company services and projects.",
        tags: [
            { name: "React+Vite", color: "text-blue-500" },
            { name: "Tailwind CSS", color: "text-green-500" },
            { name: "TypeScript", color: "text-green-400" },
            { name: "EmailJS", color: "text-purple-400" },
        ],
        image: nayana_landing, // Add your project image
        website_link: "https://www.nayanaconstructions.com",
        size: "large", // large or small
    },
    {
        id: 2,
        name: "AI Interview Proctor",
        client: "HR Agency - GeekTrust",
        date: "Aug 2025 - Dec 2025",
        description: "Monitored AI-based technical interviews, ensuring fairness, compliance, and professionalism.",
        tags: [
            { name: "Attention to Detail", color: "text-blue-500" },
            { name: "Monitoring", color: "text-cyan-400" },
            { name: "Reporting", color: "text-pink-500" },
        ],
        image: geektrust,
        website_link: "https://www.geektrust.com",
        size: "small",
    },
];


const FreelanceCard = ({ index, name, client, date, description, tags, image, website_link, size }) => {
    // Define size classes for puzzle layout
    const sizeClasses = {
        large: "col-span-1 md:col-span-2 row-span-2",
        small: "col-span-1 row-span-1",
    };

    const heightClasses = {
        large: "h-[600px]",
        small: "h-[350px]",
    };

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className={`bg-tertiary p-5 rounded-[20px] ${sizeClasses[size]} ${heightClasses[size]} relative overflow-hidden`}
            animate={{
                y: [0, -20, 0],
                rotateZ: [0, 2, 0, -2, 0],
            }}
            transition={{
                y: {
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
                rotateZ: {
                    duration: 5 + index * 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
            }}
        >
            <Tilt
                options={{
                    max: 25,
                    scale: 1.01,
                    speed: 400,
                }}
                className="w-full h-full relative flex flex-col"
            >
                <div className={`relative w-full ${size === 'large' ? 'h-[320px]' : 'h-[160px]'} flex-shrink-0`}>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* Static border */}
                    <div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                            border: "3px solid #915EFF",
                        }}
                    />

                    {/* Visit Website Button on Image */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#915EFF]/95 to-[#7e4fe3]/95 rounded-2xl">
                        <a
                            href={website_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white text-[#915EFF] font-bold rounded-full text-[14px] shadow-lg hover:scale-110 transition-transform"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Visit Website
                        </a>
                    </div>
                </div>

                <div className={`flex-1 flex flex-col ${size === 'large' ? 'mt-5' : 'mt-3'}`}>
                    <h3 className={`text-white font-bold ${size === 'large' ? 'text-[22px]' : 'text-[18px]'}`}>
                        {name}
                    </h3>
                    <p className={`text-purple-400 font-semibold mt-1 ${size === 'large' ? 'text-[15px]' : 'text-[13px]'}`}>
                        {client}
                    </p>
                    <p className={`text-purple-300 mt-1 ${size === 'large' ? 'text-[13px]' : 'text-[11px]'}`}>
                        {date}
                    </p>
                    <p className={`mt-2 text-secondary overflow-hidden ${size === 'large' ? 'text-[14px] line-clamp-3' : 'text-[12px] line-clamp-2'}`}>
                        {description}
                    </p>

                    <div className={`${size === 'large' ? 'mt-4' : 'mt-2'} flex flex-wrap gap-2`}>
                        {tags.map((tag) => (
                            <p
                                key={tag.name}
                                className={`${size === 'large' ? 'text-[13px]' : 'text-[11px]'} ${tag.color} font-medium`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>

            {/* Floating particles around card */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
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
    );
};

const Freelance = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Building Solutions Beyond Boundaries
                </p>
                <h2 className={styles.sectionHeadText}>Freelance Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
                >
                    Beyond my professional experience, I've collaborated with diverse clients
                    on web development projects, creating custom websites that combine stunning
                    design with powerful functionality. Each project showcases my commitment to
                    delivering exceptional user experiences and scalable solutions.
                </motion.p>
            </div>

            {/* Puzzle-style grid layout */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-7">
                {freelanceProjects.map((project, index) => (
                    <FreelanceCard key={`freelance-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default sectionWrapper(Freelance, "freelance");