import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <main className="content">
      {/* First row: Picture + Updates */}
      <section className={styles.firstRow}>
        <div className={`card ${styles.pictureCard}`}>
          <img src="/imgs/classroom.jpg" alt="Classroom Picture" />
        </div>
        <div className={`card ${styles.updatesCard}`}>
          <h2>Information &amp; Updates</h2>
          <p className="meta">Last updated: <span>6/5/2025</span></p>
          <div className={styles.updatesText}>
            Welcome back! Check out the new module on React next week.
          </div>
        </div>
      </section>

      {/* Second row: Quick Links bar */}
      <section className={styles.quickLinksSection}>
        <div className={`card ${styles.fullWidth}`}>
          <h3>Quick Links</h3>
        </div>
      </section>

      {/* Third row: 3 Cards */}
      <section className="gridRow">
        <div className="card">
          <h3>Modules</h3>
          <p>Browse all course modules.</p>
          <Link to="/class">Go →</Link>
        </div>
        <div className="card">
          <h3>Syllabus / Rules</h3>
          <p>Read the classroom syllabus and rules.</p>
          <a href="#syllabus">Go →</a>
        </div>
        <div className="card">
          <h3>Showcase</h3>
          <p>See student projects and highlights.</p>
          <a href="#showcase">Go →</a>
        </div>
      </section>
    </main>
  );
}

export default Home;