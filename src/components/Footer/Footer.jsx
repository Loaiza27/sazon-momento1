import styles from './Footer.module.css'

function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>© {anio} Planificador Sazón</p>
      <p className={styles.etiqueta}>Lista de mercado · Sazón</p>
    </footer>
  )
}

export default Footer