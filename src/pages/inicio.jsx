import '../styles/inicio.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Inicio() {
const navigate = useNavigate();
const [showImage, setShowImage] = useState(false);
const [showText, setShowText] = useState(false);
const [showButton, setShowButton] = useState(false);

useEffect(() => {
    setTimeout(() => setShowImage(true), 5000);  // Imagen aparece después de 5s
    setTimeout(() => setShowText(true), 5500);   // Texto comienza a escribirse después de 5.5s
    setTimeout(() => setShowButton(true), 9000); // Botón aparece después de 7s
}, []);

    return(
        <section className='inicio'>
            <div className="inicio-main">
                <motion.img
                    src="https://i.postimg.cc/vmyD5bZg/10449207.png"
                    alt=""
                    className="inicio-maniqui"
                    initial={{ x: "100%", opacity: 0 }}  // Empieza fuera de la pantalla a la derecha
                    animate={showImage ? { x: 0, opacity: 1 } : {}} // Se mueve a su posición normal
                    transition={{ duration: 1.5, ease: "easeOut" }} 
                />
                <motion.div
                    className='inicio-text'
                    initial={{ opacity: 0 }}
                    animate={showText ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }} // Se mostrará de manera progresiva
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Bienvenida al Ropero de Martina
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        Glamur, Fashion y Calidad
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        Categorías Destacadas
                    </motion.h2>

                    <motion.div
                        className="categories-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.6 }}
                    >
                        <img src="https://i.postimg.cc/T1n71cyz/jeans.png" alt="Jeans" />
                        <img src="https://i.postimg.cc/J7XdpRTp/abrigo.png" alt="Chaquetas" />
                        <img src="https://i.postimg.cc/gkPt51Qm/blusa.png" alt="Blusas" />
                        <img src="https://i.postimg.cc/KvrpyJhL/chaqueta-larga-de-mujer.png" alt="Gabanes" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 2.4 }}
                    >
                        ¿Por qué comprar con nosotros?
                    </motion.h2>

                    <motion.ul
                        className="benefits-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={showText ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 2.6 }}
                    >
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={showText ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 2.8 }}
                        >
                            Envíos rápidos y seguros 
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={showText ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 3 }}
                        >
                            Pagos 100% protegidos 
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={showText ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 3.2 }}
                        >
                            Devoluciones fáciles 
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={showText ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 3.4 }}
                        >
                            Atención personalizada 
                        </motion.li>
                    </motion.ul>

                    <motion.button
                        onClick={() => { window.scrollTo(0, 0); navigate("/products"); }}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={showButton ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <i className="fa-solid fa-bag-shopping"></i> Vamos de Compras <i className="fa-solid fa-bag-shopping"></i>
                    </motion.button>
                </motion.div>
                </div>
        </section>
    )
}