import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="content">
      {/* First row: Picture + Updates */}
      <section className="first-row">
        <div className="card picture-card">
          <img src="/imgs/classroom.jpg" alt="Classroom Picture" />
        </div>
        <div className="card updates-card">
          <h2>Information &amp; Updates</h2>
          <p className="meta">Last updated: <span>6/5/2025</span></p>
          <div className="updates-text">
            Welcome back! Check out the new module on React next week.
          </div>
        </div>
      </section>

      {/* Second row: Quick Links bar */}
      <section className="quick-links-section">
        <div className="card full-width">
          <h3>Quick Links</h3>
        </div>
      </section>

      {/* Third row: 3 Cards - Updated Links */}
      <section className="grid-row">
        <div className="card">
          <h3>Modules</h3>
          <p>Browse all course modules.</p>
          <Link to="/class">Go →</Link>
        </div>
        <div className="card">
          <h3>Syllabus / Rules</h3>
          <p>Read the classroom syllabus and rules.</p>
          <Link to="/syllabus">Go →</Link>
        </div>
        <div className="card">
          <h3>Showcase</h3>
          <p>See student projects and highlights.</p>
          <Link to="/showcase">Go →</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;