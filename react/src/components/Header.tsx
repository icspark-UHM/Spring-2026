import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import  logo from "/public/logo_rocket.svg";

function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string): string => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={styles.hero}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <img src={logo} alt="ICSpark Logo" className={styles.logo} />
          <span className="brand-text">ICSpark Web Development</span>
        </div>
        <button
          className={styles.navToggle}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.navLinks} ${navOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/class" className={isActive('/class')}>Class</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
        </ul>
      </nav>
      <div className={styles.heroOverlay}>
        <h1>Welcome to ICSpark Classroom</h1>
      </div>
    </header>
  );
}

export default Header;