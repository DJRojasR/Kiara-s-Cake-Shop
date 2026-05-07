import pastel from '../../assets/pastel.png'
import { IoCartOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import './Header.css'

export const SlideUp = (delay = 0) => {
    return {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.7, delay, ease: 'easeOut' } },
    }
}

const Header = () => {
    return (
        <main>
            <div className="container">
                <div className="header">

                    {/* ── Texto ── */}
                    <div className="header_content">
                        {/* Chip decorativo encima del título */}
                        <motion.span
                            className="header_content-chip"
                            variants={SlideUp(0.3)}
                            initial="initial"
                            animate="animate"
                        >
                            Hecho con amor
                        </motion.span>

                        {/* Título línea 1 */}
                        <motion.h1
                            className="header_content-title"
                            variants={SlideUp(0.5)}
                            initial="initial"
                            animate="animate"
                        >
                            Kiara's
                        </motion.h1>

                        {/* Título línea 2 — con gradiente rosa */}
                        <motion.h1
                            className="header_content-title accent"
                            variants={SlideUp(0.7)}
                            initial="initial"
                            animate="animate"
                        >
                            Pastry!
                        </motion.h1>

                        {/* Descripción */}
                        <motion.p
                            variants={SlideUp(0.9)}
                            initial="initial"
                            animate="animate"
                        >
                            Sirviendo amor y cuidado,<br />
                            solo una mordida y quedarás encantado.<br />
                            ¡Pide con nosotros!
                        </motion.p>

                        {/* Botón CTA */}
                        <motion.button
                            className="header_content-btn"
                            variants={SlideUp(1.1)}
                            initial="initial"
                            animate="animate"
                        >
                            <IoCartOutline className="header_content-btn-icon" />
                            Ordena ahora
                        </motion.button>

                        {/* Stats opcionales — puedes quitar este bloque si no los quieres */}
                        <motion.div
                            className="header_stats"
                            variants={SlideUp(1.3)}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="header_stats-item">
                                <strong>+500</strong>
                                <span>Pedidos</span>
                            </div>
                            <div className="header_stats-divider" />
                            <div className="header_stats-item">
                                <strong>100%</strong>
                                <span>Natural</span>
                            </div>
                            <div className="header_stats-divider" />
                            <div className="header_stats-item">
                                <strong>4.9★</strong>
                                <span>Reseñas</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Imagen ── */}
                    <div className="header_logo">
                        <motion.img
                            src={pastel}
                            alt="pastel"
                            className="header_logo-pastel"
                            initial={{ opacity: 0, rotate: 15, x: 120, y: 80 }}
                            animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            whileHover={{ scale: 1.04, rotate: -2, transition: { duration: 0.4 } }}
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Header