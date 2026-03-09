import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './HackNav.module.css';

function HackathonNav() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? styles.active : '';

  const closeNav = () => setNavOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link to="/hackathon" className={styles.brand} onClick={closeNav}>
          <span className={styles.brandMain}>SWITCH</span>
          <span className={styles.brandSep}>×</span>
          <span className={styles.brandSub}>ICSpark</span>
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.toggle} ${navOpen ? styles.toggleOpen : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <ul className={`${styles.links} ${navOpen ? styles.open : ''}`}>
          <li><Link to="/hackathon"           className={isActive('/hackathon')}          onClick={closeNav}>Home</Link></li>
          <li><Link to="/hackathon/projects"  className={isActive('/hackathon/projects')} onClick={closeNav}>Projects</Link></li>
          <li><Link to="/hackathon/rules"     className={isActive('/hackathon/rules')}    onClick={closeNav}>Rules &amp; Scoring</Link></li>
          <li><Link to="/hackathon/schedule"  className={isActive('/hackathon/schedule')} onClick={closeNav}>Schedule</Link></li>
          <a
            href="https://go.hawaii.edu/EUD"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerBtn}
          >
            Register
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default HackathonNav;