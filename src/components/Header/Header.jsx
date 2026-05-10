import pastel from '../../assets/pastel5.png'
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
                            whileInView="animate"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Hecho con amor
                        </motion.span>

                        {/* Título línea 1 */}
                        <motion.h1
                            className="header_content-title"
                            variants={SlideUp(0.5)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Kiara's
                        </motion.h1>

                        {/* Título línea 2 — con gradiente rosa */}
                        <motion.h1
                            className="header_content-title accent"
                            variants={SlideUp(0.7)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Pastry!
                        </motion.h1>

                        {/* Descripción */}
                        <motion.p
                            variants={SlideUp(0.9)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Sirviendo amor y cuidado,<br />
                            solo una mordida y quedarás encantado.<br />
                            ¡Pide con nosotros!
                        </motion.p>
                    </div>

                    {/* ── Imagen ── */}
                    <div className="header_logo">
                        <motion.img
                            src={pastel}
                            alt="pastel"
                            className="header_logo-pastel"
                            initial={{ opacity: 0, rotate: 15, x: 150, y: 80 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            whileHover={{ transition: { duration: 0.4 } }}
                            whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                        />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Header