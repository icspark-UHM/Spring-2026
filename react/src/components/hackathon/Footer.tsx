import styles from './Footer.module.css';

function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} SWITCH x ICSpark. For education use.</p>
    </footer>
  );
}

export default Footer;