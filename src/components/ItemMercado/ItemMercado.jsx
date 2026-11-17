import styles from './ItemMercado.module.css'

function ItemMercado({ item, onAlternar }) {
  const idCheckbox = `item-${item.id}`

  const clasesItem = [styles.item, item.comprado && 'planificador-item-comprado']
    .filter(Boolean)
    .join(' ')

  const clasesTexto = [styles.etiqueta, item.comprado && 'planificador-item-tachado']
    .filter(Boolean)
    .join(' ')

  return (
    <li className={clasesItem}>
      <input
        id={idCheckbox}
        name={idCheckbox}
        type="checkbox"
        className={styles.checkbox}
        checked={item.comprado}
        onChange={() => onAlternar(item.id)}
      />
      <label htmlFor={idCheckbox} className={clasesTexto}>
        {item.nombre}
      </label>
    </li>
  )
}

export default ItemMercado