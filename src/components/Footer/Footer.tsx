import styles from './footer.module.scss'
import logo from 'assets/logo.svg'

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <img src={logo} alt="Footer" />
    </footer>
  )
}