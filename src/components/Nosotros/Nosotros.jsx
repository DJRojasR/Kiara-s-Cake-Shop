import { motion } from 'framer-motion'
import './Nosotros.css'
import kiara from '../../assets/kiara.png'

const Nosotros = () => {
    return (
        <section id="nosotros" className="nosotros">
            <div className="nosotros__container">

                {/* ── Texto izquierda ── */}
                <div className="nosotros__content">

                    <motion.span
                        className="nosotros__chip"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Nuestra historia
                    </motion.span>

                    <motion.h2
                        className="nosotros__title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hechos con <span className="nosotros__title-accent">amor</span>,<br />
                        desde casa.
                    </motion.h2>

                    <motion.p
                        className="nosotros__text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        Somos una pequeña pastelería familiar que nació de un sueño
                        sencillo: compartir el amor por la pastelería con cada persona
                        que prueba nuestros productos.
                    </motion.p>

                    <motion.p
                        className="nosotros__text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        Cada pastel, keke y empanada que preparamos lleva consigo
                        ingredientes naturales, recetas heredadas y mucho cariño.
                        Porque creemos que la comida hecha con dedicación
                        tiene un sabor que no se puede imitar.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="nosotros__stats"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        <div className="nosotros__stat">
                            <span className="nosotros__stat-num">3+</span>
                            <span className="nosotros__stat-label">Años horneando</span>
                        </div>
                        <div className="nosotros__stat-divider" />
                        <div className="nosotros__stat">
                            <span className="nosotros__stat-num">100+</span>
                            <span className="nosotros__stat-label">Clientes felices</span>
                        </div>
                        <div className="nosotros__stat-divider" />
                        <div className="nosotros__stat">
                            <span className="nosotros__stat-num">100%</span>
                            <span className="nosotros__stat-label">Hecho a mano</span>
                        </div>
                    </motion.div>
                </div>

                {/* ── Imagen derecha ── */}
                <motion.div
                    className="nosotros__image-wrap"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    {/* Reemplaza el src con tu imagen */}
                    <img
                        src= {kiara}
                        alt="Kiara's Pastry"
                        className="nosotros__image"
                    />

                    {/* Tarjetita flotante */}
                    <div className="nosotros__badge">
                        <span className="nosotros__badge-emoji">🧁</span>
                        <span>¡Pedidos personalizados!</span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Nosotros