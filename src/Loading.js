import { motion } from "framer-motion";

export const FramerLoading = () => (
  <motion.div
    style={{
      width: 50, // Example width
      height: 50,
      // Example height
      backgroundColor: "black", // Example background color
    }}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 1, // Animation duration (in seconds)
      repeat: Infinity, // Repeats the animation indefinitely
      repeatDelay: 0, // Delay before repeating (if needed)
      ease: "linear", // Easing function for the animation
    }}
  />
);
