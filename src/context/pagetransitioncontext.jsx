import { createContext, useContext, useState } from "react";

const PageTransitionContext = createContext();

export const PageTransitionProvider = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDuration, setAnimationDuration] = useState(1000); // Tiempo de entrada
    const [exitDelay, setExitDelay] = useState(200); // Tiempo antes de quitar animación

    // Función para activar la animación con tiempos personalizados
    const startTransition = (callback, entryTime = animationDuration, exitTime = exitDelay) => {
        setIsAnimating(true);
        
        setTimeout(() => {
            callback(); // Cambia de ruta
            
            setTimeout(() => setIsAnimating(false), exitTime); // Espera antes de quitar la animación
        }, entryTime); 
    };

    return (
        <PageTransitionContext.Provider value={{ isAnimating, startTransition, setAnimationDuration, setExitDelay }}>
            {children}
        </PageTransitionContext.Provider>
    );
};

// Hook para usar el contexto
export const usePageTransition = () => useContext(PageTransitionContext);
