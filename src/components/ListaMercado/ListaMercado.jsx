import { useListaMercado } from '../../hooks/useListaMercado'
import ItemMercado from '../ItemMercado/ItemMercado'
import styles from './ListaMercado.module.css'

function ListaMercado() {
  const { items, alternarComprado, totalComprados } = useListaMercado()

  return (
    <section className={styles.lista} aria-labelledby="titulo-lista-mercado">
      <h2 id="titulo-lista-mercado" className={styles.titulo}>
        Lista de mercado
      </h2>
      <p className={styles.contador} aria-live="polite">
        {totalComprados} de {items.length} comprados
      </p>
      <ul className={styles.items}>
        {items.map((item) => (
          <ItemMercado key={item.id} item={item} onAlternar={alternarComprado} />
        ))}
      </ul>
    </section>
  )
}

export default ListaMercado