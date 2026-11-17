import ProductCard from '../../components/ProductCard/ProductCard'
import { PRODUCTOS_EJEMPLO } from '../../data/productos'
import styles from './Productos.module.css'

function Productos() {
  return (
    <section aria-labelledby="titulo-productos">
      <h1 id="titulo-productos" className={styles.titulo}>
        Productos
      </h1>
      <div className={styles.cuadricula}>
        {PRODUCTOS_EJEMPLO.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  )
}

export default Productos