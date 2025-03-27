import { motion } from "framer-motion";
import { usePageTransition } from "../context/pagetransitioncontext.jsx";
import "../styles/pagetransition.css";

const PageTransition = () => {
    const { isAnimating } = usePageTransition();

    return (
        <>
            <motion.div
                className="page-1"
                initial={{ x: "100%" }} // Empieza desde la derecha
                animate={{ x: isAnimating ? "0%" : "100%" }} // Se desliza hacia la izquierda y luego desaparece
                transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <motion.div
                className="page-2"
                initial={{ x: "100%" }} // Empieza desde la derecha
                animate={{ x: isAnimating ? "0%" : "100%" }} // Se desliza hacia la izquierda y luego desaparece
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.div
                className="page-3"
                initial={{ x: "100%" }} // Empieza desde la derecha
                animate={{ x: isAnimating ? "0%" : "100%" }} // Se desliza hacia la izquierda y luego desaparece
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="page-4"
                initial={{ x: "100%" }} // Empieza desde la derecha
                animate={{ x: isAnimating ? "0%" : "100%" }} // Se desliza hacia la izquierda y luego desaparece
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
                className="page-5"
                initial={{ x: "100%" }} // Empieza desde la derecha
                animate={{ x: isAnimating ? "0%" : "100%" }} // Se desliza hacia la izquierda y luego desaparece
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        
        </>
        
    );
};

export default PageTransition;
