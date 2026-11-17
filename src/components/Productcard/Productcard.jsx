import styles from './ProductCard.module.css'

const formatoPrecio = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

function ProductCard({ producto, onAgregar }) {
  const { nombre, presentacion, categoria, precio } = producto

  return (
    <article className={styles.tarjeta}>
      <div className={styles.imagen} aria-hidden="true">
        {nombre.charAt(0)}
      </div>

      <span className={styles.categoria}>{categoria}</span>
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.presentacion}>{presentacion}</p>
      <p className={styles.precio}>{formatoPrecio.format(precio)}</p>

      {onAgregar && (
        <button
          type="button"
          className={styles.boton}
          onClick={() => onAgregar(producto)}
          aria-label={`Agregar ${nombre} ${presentacion} a mi lista`}
        >
          Agregar a mi lista
        </button>
      )}
    </article>
  )
}

export default ProductCard