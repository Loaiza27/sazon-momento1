import { useState } from 'react'
import { useListaMercado } from './hooks/useListaMercado'
import { useTema } from './hooks/useTema'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Inicio from './views/Inicio/Inicio'
import Planificador from './views/Planificador/Planificador'
import Productos from './views/Productos/Productos'
import styles from './App.module.css'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [vista, setVista] = useState('inicio')
  const { items, alternarComprado, totalComprados } = useListaMercado()
  const { esNoche, alternarTema } = useTema()

  const alternarMenu = () => setMenuAbierto((abierto) => !abierto)
  const cerrarMenu = () => setMenuAbierto(false)

  const navegar = (id) => {
    setVista(id)
    cerrarMenu()
  }

  return (
    <div className={styles.app}>
      <Navbar
        menuAbierto={menuAbierto}
        onAlternarMenu={alternarMenu}
        onPerfil={() => console.log('Perfil de usuario')}
      />
      <Sidebar
        abierta={menuAbierto}
        onCerrar={cerrarMenu}
        vistaActiva={vista}
        onNavegar={navegar}
      />

      <main className={styles.principal}>
        {vista === 'inicio' && (
          <Inicio
            totalComprados={totalComprados}
            totalItems={items.length}
            onIrAPlanificador={() => navegar('planificador')}
          />
        )}
        {vista === 'planificador' && (
          <Planificador
            items={items}
            totalComprados={totalComprados}
            onAlternar={alternarComprado}
          />
        )}
        {vista === 'productos' && <Productos />}
      </main>

      <Footer />
      <ThemeToggle esNoche={esNoche} onAlternar={alternarTema} />
    </div>
  )
}

export default App