import React, { useEffect, useState, useRef } from 'react'           // Importa hooks de React
import meki from '../../assets/meki2.png'                            // Importa imagen del personaje
import './Meki.css'                                                  // Importa estilos CSS

const Meki = () => {                                                 // Componente principal Meki
  // ========== ESTADOS ==========
  const [abierto, setAbierto] = useState(false)                      // Controla ventana de chat abierta/cerrada
  const [dir, setDir] = useState(1)                                  // Dirección visual (1: derecha, -1: izquierda)
  const [running, setRunning] = useState(false)                      // Estado de carrera (para estilos CSS)

  // ========== REFERENCIAS MUTABLES ==========
  const posRef    = useRef(20)                                       // Posición horizontal actual del personaje
  const dirRef    = useRef(1)                                        // Dirección actual para cálculos (1: derecha, -1: izquierda)
  const speedRef  = useRef(1.2)                                      // Velocidad actual (1.2: caminando, 3.5: corriendo, 0: parado)
  const btnRef    = useRef(null)                                     // Referencia al botón/DOM del personaje
  const rafRef    = useRef(null)                                     // Referencia para requestAnimationFrame
  const pawTimer  = useRef(0)                                        // Temporizador para frecuencia de huellas
  const animateRef = useRef(null)                                    // Guarda la función animate para llamarla recursivamente
  const clickTimer = useRef(null)                                    // Timer para distinguir click simple vs doble

  // ========== EFECTO DE ANIMACIÓN ==========
  useEffect(() => {                                                  // Se ejecuta UNA sola vez al montar el componente
    // Función que crea huellas 🐾 en pantalla
    const spawnPaw = (x) => {                                        // Recibe posición X donde crear la huella
      const paw = document.createElement('span')                     // Crea elemento span en el DOM
      paw.className = 'meki-paw'                                     // Asigna clase CSS para animación
      paw.textContent = '🐾🐾'                                       // Texto con dos emojis de pata
      paw.style.left = (x + 10) + 'px'                               // Posiciona con offset de 10px
      paw.style.transform = dirRef.current === -1 ? 'scaleX(-1)' : 'scaleX(1)'  // Voltea si va izquierda
      document.body.appendChild(paw)                                 // Añade al cuerpo del documento
      setTimeout(() => paw.remove(), 600)                            // Elimina después de 600ms (evita acumulación)
    }

    // Función principal del loop de animación
    animateRef.current = function animate() {                        // Guardada en ref para llamada recursiva
      const maxX = window.innerWidth - 80                            // Límite derecho (ancho ventana - ancho personaje)
      posRef.current += dirRef.current * speedRef.current            // Actualiza posición según dirección y velocidad

      // Control de rebote en bordes
      if (posRef.current >= maxX) {                                  // Si alcanza o supera borde derecho
        posRef.current = maxX                                        // Limita a posición máxima
        dirRef.current = -1                                          // Cambia dirección a izquierda
        setDir(-1)                                                   // Actualiza estado visual
      }
      if (posRef.current <= 10) {                                    // Si alcanza o supera borde izquierdo
        posRef.current = 10                                          // Limita a posición mínima
        dirRef.current =  1                                          // Cambia dirección a derecha
        setDir(1)                                                    // Actualiza estado visual
      }

      // Aplica transformaciones al botón/personaje
      if (btnRef.current) {                                          // Si el elemento existe en el DOM
        btnRef.current.style.left      = posRef.current + 'px'       // Mueve horizontalmente
        btnRef.current.style.right     = 'unset'                     // Asegura que prevalezca 'left'
        btnRef.current.style.transform = dirRef.current === -1 ? 'scaleX(-1)' : 'scaleX(1)'  // Voltea imagen
      }

      // Control de generación de huellas
      pawTimer.current += speedRef.current                           // Acumula tiempo/velocidad
      const interval = speedRef.current > 2 ? 18 : 30                // Intervalo: rápido(18) o normal(30)
      if (pawTimer.current > interval) {                             // Si supera el intervalo
        spawnPaw(posRef.current)                                     // Crea nueva huella en posición actual
        pawTimer.current = 0                                         // Reinicia el temporizador
      }

      // Continúa el loop de animación
      rafRef.current = requestAnimationFrame(animateRef.current)     // Llama a sí misma recursivamente
    }

    // Inicia la animación
    rafRef.current = requestAnimationFrame(animateRef.current)       // Arranca el loop por primera vez
    
    // Limpieza al desmontar el componente
    return () => cancelAnimationFrame(rafRef.current)                // Cancela animación para evitar fugas de memoria
  }, [])                                                             // Array vacío = solo ejecuta una vez

  // ========== MANEJADOR DE CLICK SIMPLE ==========
  // ─── CLICK SIMPLE: para y abre chat ───────────────────────────────
  const handleClick = () => {                                        // Manejador para un solo click
    // Si ya hay un doble click pendiente, lo cancela
    if (clickTimer.current) return                                  // Previene ejecución si viene doble click

    clickTimer.current = setTimeout(() => {                          // Espera 220ms para confirmar que es click simple
      clickTimer.current = null                                      // Limpia el timer

      // Si está abierto → cierra y reanuda
      if (abierto) {                                                 // Si la ventana de chat está abierta
        setAbierto(false)                                            // Cierra la ventana
        setRunning(false)                                            // Estado no corriendo
        speedRef.current = 1.2                                       // Restaura velocidad normal
        rafRef.current = requestAnimationFrame(animateRef.current)   // Reanuda la animación
      } else {                                                       // Si la ventana está cerrada
        // Para y abre chat
        cancelAnimationFrame(rafRef.current)                         // Detiene la animación
        speedRef.current = 0                                         // Velocidad 0 (personaje quieto)
        setRunning(false)                                            // Estado no corriendo
        setAbierto(true)                                             // Abre la ventana de chat
      }
    }, 220) // espera 220ms para ver si es doble click               // Tiempo típico para distinguir doble click
  }

  // ========== MANEJADOR DE DOBLE CLICK ==========
  // ─── DOBLE CLICK: corre ───────────────────────────────────────────
  const handleDoubleClick = () => {                                  // Manejador para doble click
    clearTimeout(clickTimer.current)                                 // Cancela el temporizador del click simple
    clickTimer.current = null                                        // Limpia la referencia

    if (abierto) {                                                   // Si la ventana está abierta
      setAbierto(false)                                              // La cierra automáticamente
    }

    // Activa/desactiva carrera
    const nowRunning = !running                                      // Invierte el estado de carrera
    setRunning(nowRunning)                                           // Actualiza estado (para clases CSS)
    speedRef.current = nowRunning ? 3.5 : 1.2                        // Velocidad: 3.5 corriendo, 1.2 caminando

    // Si estaba parado, reanuda
    cancelAnimationFrame(rafRef.current)                             // Detiene animación actual si existe
    rafRef.current = requestAnimationFrame(animateRef.current)       // Reanuda la animación con nueva velocidad
  }

  // ========== RENDERIZADO DEL COMPONENTE ==========
  return (
    <>
      <button
        ref={btnRef}                                                  // Referencia para manipular posición/estilos
        className={`meki-btn ${running ? 'meki-running' : ''}`}      // Clase condicional: añade 'meki-running' si corre
        onClick={handleClick}                                         // Click simple: abre/cierra chat
        onDoubleClick={handleDoubleClick}                             // Doble click: inicia/detiene carrera
        title="Click = chat · Doble click = correr"                   // Tooltip informativo
      >
        <img src={meki} alt="meki" className='meki-icon'/>           
      </button>

      {abierto && (                                                   // Renderizado condicional: solo si abierto es true
      <div
        className="meki-ventana"                                      // Clase para estilos base
        style={{
          position: 'fixed',                                          // Posicionamiento fijo en pantalla
          bottom: '100px',                                           // Encima del botón (altura del botón + margen)
          left: `${posRef.current - 100}px`,                         // Centrado horizontalmente sobre Meki
          right: 'unset',                                            // Asegura que prevalezca 'left'
        }}
      >
        <div className="meki-header">                                 
          <span>¡Hola! Soy Meki 🩷</span>                           
          <button onClick={() => {                                   // Botón de cerrar (✕)
            setAbierto(false)                                        // Cierra la ventana
            speedRef.current = 1.2                                   // Restaura velocidad normal
            rafRef.current = requestAnimationFrame(animateRef.current)  // Reanuda la animación
          }}>✕</button>                                              
        </div>
      </div>
    )}
    </>
  )
}

export default Meki                                                  // Exporta el componente para uso en otros archivos