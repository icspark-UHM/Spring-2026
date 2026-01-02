import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="content">
      {/* First row: Picture + Updates */}
      <section className="first-row">
        <div className="card picture-card">
          {/*<img src="public/imgs/classroom.svg" alt="Classroom Picture" />*/}
          <iframe
            src="public/files/classroom.pdf"
            width="100%"
            height="800px"
            style={{ border: 'none', borderRadius: 'var(--radius)' }}
            title="Classroom PDF"
          />
        </div>
        <div className="card updates-card">
          <h2>Information &amp; Updates</h2>

          {/* Update Card 1 - Most Recent */}
          <div className="update-item">
            <p className="update-date">Added 1/10/2026</p>
            <p className="update-text">
              Please have{' '}
              <a
                href="https://drive.google.com/file/d/1NzW2O4x_pyR02vMxOzit9a3mxP3RFjTG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parent-Legal Guardian Consent Waiver Release, Indemnity, and Medical Agreement
              </a> and <a
                href="https://docs.google.com/document/d/1xrxqwa-Hp-w6f5gy013AetnNRmWaXL1Q2uriGi1nKhQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                2026 Parent-Student Program Agreement
              </a>

              {' '}signed by the second class period on 2/1.
            </p>
          </div>

          {/* Add more updates here - they'll stack vertically */}
          {/*
          <div className="update-item">
            <p className="update-date">12/15/2025</p>
            <p className="update-text">
              Previous update message here...
            </p>
          </div>
          */}
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