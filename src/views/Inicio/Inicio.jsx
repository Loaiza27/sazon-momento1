import styles from './Inicio.module.css'

function Inicio({ totalComprados, totalItems, onIrAPlanificador }) {
  return (
    <section className={styles.inicio} aria-labelledby="titulo-inicio">
      <h1 id="titulo-inicio" className={styles.titulo}>
        Bienvenido al Planificador Sazón
      </h1>
      <p className={styles.texto}>
        Organiza tu mercado y marca lo que ya compraste.
      </p>
      <p className={styles.etiqueta}>
        {totalComprados} de {totalItems} comprados
      </p>
      <button type="button" className={styles.boton} onClick={onIrAPlanificador}>
        Ir a mi lista de mercado
      </button>
    </section>
  )
}

export default Inicio