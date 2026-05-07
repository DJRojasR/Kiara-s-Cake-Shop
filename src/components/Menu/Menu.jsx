import { useState } from 'react';
import pie from '../../assets/pie.jpg';
import Pastel1 from '../../assets/pastel1.png';
import Pastel2 from '../../assets/pastel2.jpg';
import keke1 from '../../assets/keke1.jpg';
import keke2 from '../../assets/keke2.jpg';
import empanadas from '../../assets/empanadas.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

// ── Datos del menú ──────────────────────────────────────────────────────────
// Se agrega "categoria" a cada item para que el filtro funcione
const MenuData = [
    { id: 1, img: Pastel1, title: 'Pastel de vainilla',   description: 'Pastel de Vainilla hecho con ingredientes naturales', price: 'S/15.00', categoria: 'Pasteles', delay: 0.1 },
    { id: 2, img: Pastel2, title: 'Pastel de chocolate',  description: 'Pastel de Chocolate con relleno de crema',             price: 'S/20.00', categoria: 'Pasteles', delay: 0.2 },
    { id: 3, img: keke1,   title: 'Keke de limón',        description: 'Keke de Limón con glaseado de limón',                  price: 'S/10.00', categoria: 'Kekes',    delay: 0.3 },
    { id: 4, img: keke2,   title: 'Keke de fresa',        description: 'Keke de Fresa con glaseado de fresa',                  price: 'S/12.00', categoria: 'Kekes',    delay: 0.4 },
    { id: 5, img: empanadas, title: 'Empanadas de carne', description: 'Empanadas de Carne con masa casera',                   price: 'S/8.00',  categoria: 'Empanadas', delay: 0.5 },
    { id: 6, img: pie,     title: 'Pie de manzana',       description: 'Pie de Manzana con masa hojaldrada',                   price: 'S/18.00', categoria: 'Pies',     delay: 0.6 },
];

const categorias = ['Todas', 'Pasteles', 'Kekes', 'Empanadas', 'Pies'];

// ── Componente ───────────────────────────────────────────────────────────────
const Menu = () => {
    const [categoriaActiva, setCategoriaActiva] = useState('Todas');

    // Filtra los productos según la categoría seleccionada
    const menuFiltrado = categoriaActiva === 'Todas'
        ? MenuData
        : MenuData.filter(item => item.categoria === categoriaActiva);

    return (
        <section className="menu">
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
                                {/* Precio */}
                                <div className="precio">
                                    <span className="precio_span">{item.price}</span>
                                </div>

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
                                        Ordenar Ahora
                                    </motion.button>
                                </div>

                                {/* Decoración esquina */}
                                <div className="decoracion"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* ── CTA final ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="cta"
                >
                    <p className="buscar">¿No encuentras lo que buscas?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ver_mas"
                    >
                        Explora más
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default Menu;