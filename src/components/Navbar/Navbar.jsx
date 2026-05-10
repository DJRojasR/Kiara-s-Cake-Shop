import { useState } from 'react'
import logoKiara from '../../assets/logoKiara.png'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import cupcake from '../../assets/cup-cake.png'
import hogar from '../../assets/hogar.png'
import contacto from '../../assets/torta.png'
import nosotros from '../../assets/pastelera.png'

const NavbarMenu = [
    {id:1, icon:hogar,    name: 'Inicio',   link: '/',         delay: 0.1},
    {id:2, icon:cupcake,  name: 'Carta',    link: '#menu',     delay: 0.2},
    {id:3, icon:nosotros, name: 'Nosotros', link: '#nosotros', delay: 0.3},
    {id:4, icon:contacto, name: 'Contacto', link: '#contacto', delay: 0.4},
]

const SlideDown = (delay = 0) => ({
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay, duration: 0.5, ease: 'easeInOut' } },
})

// Animación del menú móvil
const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: 'none' },
    open:   { opacity: 1, y: 0,   pointerEvents: 'auto', transition: { duration: 0.35, ease: 'easeOut', staggerChildren: 0.07 } },
}

const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open:   { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleScroll = (link) => {
        setOpen(false)
        if (link.startsWith('#')) {
            document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.location.href = link
        }
    }

    return (
        <nav>
            <div className="navbar">
                {/* Logo */}
                <a href="/">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        src={logoKiara}
                        alt="logo-kiara"
                        className="logo-kiara"
                    />
                </a>

                {/* Menú desktop */}
                <div className="menunav">
                    <ul className="lista">
                        {NavbarMenu.map((menu) => (
                            <motion.li key={menu.id} variants={SlideDown(menu.delay)} initial="initial" animate="animate">
                                <a onClick={() => handleScroll(menu.link)} style={{ cursor: 'pointer' }}>
                                    <img src={menu.icon} alt={menu.name} className="menu-icon" />
                                    {menu.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Botón hamburguesa */}
                <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menú">
                    <span className={`ham-line ${open ? 'open' : ''}`} />
                    <span className={`ham-line ${open ? 'open' : ''}`} />
                    <span className={`ham-line ${open ? 'open' : ''}`} />
                </button>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-menu"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {NavbarMenu.map((menu) => (
                            <motion.a
                                key={menu.id}
                                variants={mobileItemVariants}
                                onClick={() => handleScroll(menu.link)}
                                className="mobile-menu-item"
                            >
                                <img src={menu.icon} alt={menu.name} className="menu-icon" />
                                {menu.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar