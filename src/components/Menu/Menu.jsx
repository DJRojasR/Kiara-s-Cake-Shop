import { useState } from 'react';
import tresleches from '../../assets/KiaraCakes/pastel1.jfif';
import amor from '../../assets/KiaraCakes/pastel2.jfif';
import futbol from '../../assets/KiaraCakes/pastel3.jfif';  //Pastel jugando futbol
import programacion from '../../assets/KiaraCakes/pastel7.jfif';
import iglesia from '../../assets/KiaraCakes/pastel8.jfif';
import moka from '../../assets/KiaraCakes/postre7.jpg';
import digitalCircus from  '../../assets/KiaraCakes/pastel10.jpg';
import dinosaurio from  '../../assets/KiaraCakes/pastel12.jpg';
import alianza from  '../../assets/KiaraCakes/pastel13.jpg';
import patron from  '../../assets/KiaraCakes/pastel14.jpg';
import conejo from  '../../assets/KiaraCakes/pastel17.jpg';
import misa from  '../../assets/KiaraCakes/postre16.jpg';
import keke1 from  '../../assets/KiaraCakes/keke1.jpg';
import keke2 from  '../../assets/KiaraCakes/postre9.jpg';
import choco from '../../assets/KiaraCakes/postre1.jfif';
import chocomanjar from '../../assets/KiaraCakes/postre2.jfif';
import chocolucuma from '../../assets/KiaraCakes/postre3.jfif';
import caramandungas from '../../assets/KiaraCakes/postre6.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

// ── Datos del menú ──────────────────────────────────────────────────────────
// Se agrega "categoria" a cada item para que el filtro funcione
const MenuData = [
    // ── PASTELES ──
    { id: 1,  img: moka,          title: 'Moka',                     description: 'Bizcocho de café con crema de mantequilla y toque de chocolate. Intenso y suave a la vez.', categoria: 'Pasteles',      delay: 0.1 },
    { id: 2,  img: tresleches,    title: 'Tres leches de chocolate', description: 'Esponjoso bizcocho bañado en tres leches con cobertura de chocolate oscuro y chantilly.', categoria: 'Pasteles',      delay: 0.2 },
    { id: 3,  img: amor,          title: 'Tres leches clásico',      description: 'El favorito de siempre: húmedo, cremoso y con una cobertura de merengue perfecta.', categoria: 'Pasteles',      delay: 0.3 },

    // ── PERSONALIZADOS ──
    { id: 4,  img: futbol,        title: 'Fútbol',                   description: 'Pastel temático para los fanáticos del fútbol. Personalizable con colores de tu equipo.', categoria: 'Personalizados', delay: 0.4 },
    { id: 5,  img: programacion,  title: 'Programación',             description: 'Para los amantes del código. Diseño con teclados, pantallas y tu lenguaje favorito.', categoria: 'Personalizados', delay: 0.5 },
    { id: 6,  img: iglesia,       title: 'Iglesia',                  description: 'Elegante pastel para primera comunión o confirmación. Detalles en blanco y dorado.', categoria: 'Personalizados', delay: 0.6 },
    { id: 7,  img: digitalCircus, title: 'The Amazing Digital Circus', description: 'Colorido y divertido, ideal para cumpleaños de los fans del show. ¡Pomni incluida!', categoria: 'Personalizados', delay: 0.7 },
    { id: 8,  img: dinosaurio,    title: 'Jurassic World',           description: 'Pastel prehistórico con dinosaurios 3D. Perfecto para los pequeños exploradores.', categoria: 'Personalizados', delay: 0.8 },
    { id: 9,  img: alianza,       title: 'Alianza Lima',             description: 'Para los íntimos de corazón. Decorado con los colores blanquiazules y escudo del club.', categoria: 'Personalizados', delay: 0.9 },
    { id: 10, img: patron,        title: 'PAW Patrol',               description: 'Ryder y sus amigos en tu mesa. El pastel perfecto para los fans de la Patrulla Canina.', categoria: 'Personalizados', delay: 1 },
    { id: 11, img: conejo,        title: 'Pastel Conejo',            description: 'Tierno y adorable, ideal para bebés y niñas. Con detalles en rosa pastel y conejito 3D.', categoria: 'Personalizados', delay: 1.1 },
    { id: 12, img: misa,          title: 'Primera Comunión',         description: 'Delicado pastel blanco con detalles religiosos en dorado. Un recuerdo inolvidable.', categoria: 'Personalizados', delay: 1.2 },

    // ── KEKES ──
    { id: 13, img: keke1,         title: 'Keke de vainilla',         description: 'Suave y esponjoso con aroma a vainilla natural. Perfecto para el desayuno o la merienda.', categoria: 'Kekes', delay: 1.3 },
    { id: 14, img: keke2,         title: 'Keke de zanahoria',        description: 'Húmedo y aromático con canela y nueces. Con cobertura de queso crema irresistible.', categoria: 'Kekes', delay: 1.4 },

    // ── BOCADITOS ──
    { id: 15, img: choco,         title: 'Choco con manjar',         description: 'Bocadito de chocolate relleno de manjar blanco casero. Un mordisco y te enamoras.', categoria: 'Bocaditos', delay: 1.5 },
    { id: 16, img: chocolucuma,   title: 'Choco con lúcuma',         description: 'La combinación peruana perfecta: chocolate oscuro con crema de lúcuma natural.', categoria: 'Bocaditos', delay: 1.6 },
    { id: 17, img: chocomanjar,   title: 'Choco doble manjar',       description: 'Para los más golosos: doble cobertura de chocolate y relleno generoso de manjar blanco.', categoria: 'Bocaditos', delay: 1.7 },
    { id: 18, img: caramandungas, title: 'Caramandungas',            description: 'Tradicionales bocaditos peruanos rellenos de manjar blanco y cubiertos con suave azúcar impalpable. Dulces, delicados y perfectos para compartir.', categoria: 'Bocaditos', delay: 1.8},
];


const categorias = ['Todas', 'Pasteles', 'Kekes', 'Bocaditos', 'Personalizados'];

// ── Componente ───────────────────────────────────────────────────────────────
const Menu = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('Todas');

    // Filtra los productos según la categoría seleccionada
    const menuFiltrado = categoriaActiva === 'Todas'
        ? MenuData
        : MenuData.filter(item => item.categoria === categoriaActiva);

    return (
        <section className="menu" id="menu">
            <div className="container">

                {/* ── Título ── */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="menu_title"
                >
                    <span className="titulo">Con amor y cuidado,</span>
                    <h2 className="titulo2">Nuestro Menú</h2>
                    <div className="linea"></div>
                </motion.div>

                {/* ── Selector de categorías ── */}
                <div className="selector">
                    {categorias.map((categoria, index) => (
                        <motion.button
                            key={categoria}
                            onClick={() => setCategoriaActiva(categoria)}
                            className={`btn ${categoriaActiva === categoria ? 'activo' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}             
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {categoria}
                        </motion.button>
                    ))}
                </div>

                {/* ── Grid de productos ── */}
                {/* AnimatePresence permite animar la entrada y salida de items */}
                <div className="producto">
                    <AnimatePresence mode="popLayout">
                        {menuFiltrado.map((item) => (
                            <motion.div
                                key={item.id}
                                layout                              // reordena suavemente al filtrar
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, delay: item.delay }}
                                whileHover={{ y: -8 }}
                                className="producto_item"
                            >

                                {/* Imagen */}
                                <div className="imagen">
                                    <div className="imagen_overlay"></div>
                                    <img src={item.img} alt={item.title} className="imagen_img" />
                                </div>

                                {/* Contenido */}
                                <div className="contenido">
                                    <h3 className="text_h3">{item.title}</h3>
                                    <p className="text_p">{item.description}</p>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn_ordenar"
                                    >
                                        Disponible
                                    </motion.button>
                                </div>

                                {/* Decoración esquina */}
                                <div className="decoracion"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Menu;