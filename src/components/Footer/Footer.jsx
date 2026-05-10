import { motion } from 'framer-motion'
import logoKiara from '../../assets/logoKiara.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="contacto" className="footer">
            <div className="footer__container">

                {/* ── Logo + descripción ── */}
                <motion.div
                    className="footer__brand"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <img src={logoKiara} alt="Kiara's Pastry" className="footer__logo" />
                    <p className="footer__desc">
                        Pasteles, kekes y más,<br />
                        hechos con amor desde casa.
                    </p>

                    {/* Redes sociales */}
                    <div className="footer__socials">
                        <a
                            href="https://www.instagram.com/kiaraspastry?igsh=MW9tcmowM3lzbmN2dg=="
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social-btn footer__social-btn--ig"
                            aria-label="Instagram"
                        >
                            {/* Instagram SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                            </svg>
                            Instagram
                        </a>

                        <a
                            href="https://www.facebook.com/share/1DxTRv3cpT/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__social-btn footer__social-btn--fb"
                            aria-label="Facebook"
                        >
                            {/* Facebook SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                            Facebook
                        </a>
                    </div>
                </motion.div>

                {/* ── Links rápidos ── */}
                <motion.div
                    className="footer__links"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h4 className="footer__heading">Navegación</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#menu">Carta</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </motion.div>

                {/* ── Contacto ── */}
                <motion.div
                    className="footer__contact"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h4 className="footer__heading">Contáctanos</h4>
                    <ul>
                        <li>
                            {/* WhatsApp */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.845L.057 23.428a.75.75 0 0 0 .916.916l5.583-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.52-5.16-1.427l-.36-.214-3.795 1 1.02-3.682-.235-.375A9.964 9.964 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                            </svg>
                            +51 999 999 999
                        </li>
                        <li>
                            {/* Email */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                            kiaraspastry@gmail.com
                        </li>
                        <li>
                            {/* Ubicación */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Lima, Perú
                        </li>
                    </ul>
                </motion.div>

            </div>

            {/* ── Bottom bar ── */}
            <div className="footer__bottom">
                <p>© {new Date().getFullYear()} Kiara's Pastry · Hecho con 🩷</p>
            </div>
        </footer>
    )
}

export default Footer