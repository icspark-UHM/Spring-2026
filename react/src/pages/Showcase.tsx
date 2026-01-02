function Showcase() {
  return (
    <main className="content">
      <section className="about-section">
        <h2>Student Showcase</h2>

        <div className="card">
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>
            Check back soon for amazing student projects!
          </p>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            As students complete their projects, we'll feature the best work here.
            Projects will include portfolio websites, web applications, interactive games,
            and more!
          </p>
        </div>

        <h3 style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
          What to Expect
        </h3>

        <div className="grid-row">
          <div className="card">
            <h3>Portfolio Websites</h3>
            <p>
              Students create personal portfolio sites showcasing their skills,
              projects, and journey through the course.
            </p>
          </div>

          <div className="card">
            <h3>Web Applications</h3>
            <p>
              Functional web apps built with React, including todo lists,
              weather apps, recipe finders, and more.
            </p>
          </div>

          <div className="card">
            <h3>Creative Projects</h3>
            <p>
              Students bring their unique ideas to life - from interactive
              storytelling to educational tools and games.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: '3rem', background: '#fffdf0', border: '2px solid var(--accent)' }}>
          <h3>Want to be Featured?</h3>
          <p>
            Submit your completed project to your instructor for consideration.
            Projects are selected based on:
          </p>
          <ul>
            <li>Code quality and best practices</li>
            <li>Creativity and originality</li>
            <li>Functionality and user experience</li>
            <li>Visual design and polish</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Showcase;