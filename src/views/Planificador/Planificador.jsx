import ListaMercado from '../../components/ListaMercado/ListaMercado'

function Planificador({ items, totalComprados, onAlternar }) {
  return (
    <ListaMercado
      items={items}
      totalComprados={totalComprados}
      onAlternar={onAlternar}
    />
  )
}

export default Planificador