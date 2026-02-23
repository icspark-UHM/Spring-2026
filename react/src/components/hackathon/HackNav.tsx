import { Link } from 'react-router-dom';
import styles from './HackNav.module.css';

function HackathonNav() {
  return (
    <nav className={styles.hackathonNav}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          {/*<Link to="/" className={styles.backLink}>← Back to ICSpark</Link>*/}

            {/*<img src={logo} alt="ICSpark Logo" className={styles.logo} />*/}
            <span className="brand-text">SWITCH x ICSpark</span>
        </div>
        <div className={styles.navLinks}>
          <Link to="/hackathon" className={styles.navLink}>Home</Link>
          <Link to="/hackathon/info" className={styles.navLink}>Info</Link>
          <Link to="/hackathon/projects" className={styles.navLink}>Projects</Link>
          <Link to="/hackathon/rules" className={styles.navLink}>Rules</Link>
          <Link to="/hackathon/schedule" className={styles.navLink}>Schedule</Link>

        </div>
      </div>
    </nav>
  );
}

export default HackathonNav;