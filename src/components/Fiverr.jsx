import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { sectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utils/motion";

// Fiverr gigs data - customize with your actual gigs
const fiverrGigs = [
    {
        id: 1,
        title: "Starter Website",
        description: "Perfect for individuals or startups looking to establish their online presence with a professional landing page.",
        price: "$80",
        deliveryTime: "3 days delivery",
        features: [
            "3 pages",
            "Responsive design",
            "Speed optimization",
            "E-commerce ready",
            "2 Revisions",
        ],
        gigUrl: "https://www.fiverr.com/s/kLPNjNo",
        packageType: "Basic",
    },
    {
        id: 2,
        title: "Business Website",
        description: "Multi-page business website with custom sections tailored to showcase your brand and services effectively.",
        price: "$100",
        deliveryTime: "5 days delivery",
        features: [
            "5 pages",
            "Custom sections",
            "Payment integration",
            "Hosting setup",
            "4 Revisions",
        ],
        gigUrl: "https://www.fiverr.com/s/kLPNjNo",
        packageType: "Standard",
    },
    {
        id: 3,
        title: "Premium Custom Website",
        description: "Full custom website with advanced features, integrations, and complete e-commerce functionality for your business.",
        price: "$200",
        deliveryTime: "7 days delivery",
        features: [
            "10 pages",
            "Advanced features",
            "10 products",
            "Full integrations",
            "6 Revisions",
        ],
        gigUrl: "https://www.fiverr.com/s/kLPNjNo",
        packageType: "Premium",
    },
];

const FiverrGigCard = ({ gig, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            // FIX 1: Removed h-[420px] and replaced with h-auto and min-h-[450px]
            // Added flex & flex-col to allow the inner Tilt to stretch properly
            className="bg-tertiary p-6 rounded-[20px] w-full sm:w-[360px] min-h-[450px] h-auto relative overflow-hidden flex flex-col"
            style={{
                border: "2px solid #6a0dad",
                boxShadow: "0 0 10px 2px rgba(138, 43, 226, 0.6)",
                perspective: "1000px",
                transformStyle: "preserve-3d",
            }}
            animate={{
                y: [0, -15, 0],
                rotateZ: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
                y: {
                    duration: 3.5 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
                rotateZ: {
                    duration: 4.5 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
        >
            <Tilt
                options={{
                    max: 20,
                    scale: 1.01,
                    speed: 400,
                }}
                // FIX 2: Added flex-1 to ensure Tilt takes up remaining space and pushes the button down
                className="w-full h-full flex-1 flex flex-col relative"
            >
                {/* Package Type Badge */}
                <div className="mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-[12px] font-semibold rounded-full">
                        {gig.packageType}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-[24px] mb-2">
                    {gig.title}
                </h3>

                {/* Price & Delivery */}
                <div className="mb-4">
                    <p className="text-purple-400 font-bold text-[28px]">{gig.price}</p>
                    <p className="text-purple-300 text-[13px]">{gig.deliveryTime}</p>
                </div>

                {/* Description */}
                <p className="text-secondary text-[13px] leading-relaxed mb-4">
                    {gig.description}
                </p>

                {/* Features */}
                <div className="flex-grow mb-4">
                    <ul className="space-y-1">
                        {gig.features.map((feature, i) => (
                            <li key={i} className="text-white/80 text-[12px] flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fiverr Button */}
                <a
                    href={gig.gigUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // FIX 3: Added mt-auto to ensure the button is always pushed to the very bottom
                    className="mt-auto w-full px-6 py-3 bg-gradient-to-br from-[#915EFF] to-[#7e4fe3] text-white font-bold rounded-full text-[15px] text-center hover:scale-105 transition-all shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    Order Now
                </a>
            </Tilt>

            {/* Floating particles */}
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    style={{
                        top: `${30 + i * 40}%`,
                        left: `${15 + i * 30}%`,
                    }}
                    animate={{
                        x: [0, 25, 0, -25, 0],
                        y: [0, -25, 0, 25, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 2.5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                    }}
                />
            ))}
        </motion.div>
    );
};

const Fiverr = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Hire Me for Your Next Project
                </p>
                <h2 className={styles.sectionHeadText}>Fiverr Services.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
                >
                    Turn your vision into reality. From intelligent AI/ML models to seamless full-stack web apps, I deliver custom, high-quality solutions on Fiverr. Let’s build something amazing!
                </motion.p>
            </div>

            {/* Gigs Grid */}
            {/* FIX 4: Added items-stretch here so all cards match the height of the tallest card automatically */}
            <div className="mt-20 flex flex-wrap gap-7 justify-center items-stretch">
                {fiverrGigs.map((gig, index) => (
                    <FiverrGigCard key={gig.id} gig={gig} index={index} />
                ))}
            </div>

            {/* Call to Action */}
            <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="mt-16 flex justify-center"
            >
                <a
                    href="https://www.fiverr.com/s/kLPNjNo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-4 bg-gradient-to-br from-[#915EFF] to-[#7e4fe3] text-white font-bold rounded-full text-[18px] shadow-lg hover:scale-110 hover:shadow-xl transition-all"
                >
                    Visit My Fiverr Profile
                </a>
            </motion.div>
        </>
    );
};

export default sectionWrapper(Fiverr, "fiverr");