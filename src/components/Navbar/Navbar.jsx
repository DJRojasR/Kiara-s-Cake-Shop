import logoKiara from '../../assets/logoKiara.png'
import {animate, delay, motion} from 'framer-motion' /* importamos el motion para animar los componentes y el animate para crear animaciones personalizadas */
import './Navbar.css' /* importamos el archivo de estilos para el navbar */
import cupcake from '../../assets/cup-cake.png'
import hogar from '../../assets/hogar.png'
import contacto from '../../assets/torta.png'
import nosotros from '../../assets/pastelera.png'

/* creamos las rutas de navegacion del navbar, cada una con un id, un nombre, un link y un delay para la animacion */

const NavbarMenu = [
    {id: 1, icon:hogar, name: 'Inicio', link: '/inicio', delay: 0.2},
    {id:2, icon: cupcake, name: 'Carta', link: '/carta', delay: 0.3},
    {id:3, icon: nosotros, name: 'Nosotros', link: '/nosotros', delay: 0.4},
    {id:3, icon: contacto, name: 'Contacto', link: '/contacto', delay: 0.5},
]

/* creamos el slidedown para animar el navbar, con una animacion de entrada y salida, y un delay para cada elemento del navbar */
const SlideDown = (delay = 0) => {
    return {
        initial: {y: -50, opacity: 0}, // el navbar empieza con una posicion de -50 en el eje y y una opacidad de 0
        animate: {y: 0, opacity:1, transition:{delay: delay, duration: 0.5, ease: 'easeInOut'}}, // el navbar se anima a su posicion original con una opacidad de 1, y un delay para cada elemento del navbar
        exit: {y: -50, opacity: 0, transition:{duration: 0.5, ease: 'easeInOut'}} // el navbar se anima a una posicion de -50 en el eje y y una opacidad de 0 al salir
    }
    // Utilizaremos ease para suavizar la animacion, y duration para controlar la duracion de la animacion
}
 
const Navbar = () => {
    return(
        <nav>
            {/*Creamos la barra de navegacion con nav que sera un componente reutilizable*/}
            <div className="navbar">
                <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.5}} src={logoKiara} alt="logo-kiara" className='logo-kiara' /> {/* animamos el logo de kiara con una animacion de entrada, con una opacidad de 0 y una duracion de 8.8 segundos */}
                <div className="menunav">
                    <ul className="lista">
                        {NavbarMenu.map((menu) => {
                            return(
                                <motion.li key={menu.id} variants={SlideDown(menu.delay)} initial="initial" animate="animate" exit="exit">
                                <a href={menu.link}>
                                    <img src={menu.icon} alt={menu.name} className="menu-icon" />
                                    {menu.name}
                                </a>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
    

}

export default Navbar