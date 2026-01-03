
function About() {
  return (
    <main className="content">
      {/* About the Class */}
      <section className="about-section">
        <h2>About the Class</h2>
        <div className="card">
          <h3>Web Development Journey</h3>
          <p>This 14-week intensive course is designed to take you from the basics of web development to building modern,
            interactive web applications. Whether you're a complete beginner or have some coding experience, our structured
            curriculum and hands-on approach will help you develop the skills needed in today's tech industry.</p>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="about-section">
        <h2>What You'll Learn</h2>
        <div className="grid-row three-col">
          <div className="card feature-card">
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript, and modern frameworks like React</p>
          </div>
          <div className="card feature-card">
            <h3>Web Design</h3>
            <p>Responsive layouts, animations, and user-friendly interfaces</p>
          </div>
          <div className="card feature-card">
            <h3>Real Projects</h3>
            <p>Build a portfolio website and showcase your skills</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="grid-row two-col">
          <div className="card team-card highlight-card">
            <div className="card-header">
              <h3>Mentors</h3>
            </div>
            <p>
              Our mentors are excited to help guide you develop your own website and add to your resume.
              They are volunteers ranging from freshmen to graduate students in computer science or related
              field. Please feel free to ask them about college!
            </p>
            <a
              href="https://icspark.github.io/people.html"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Meet This Year's Mentors →
            </a>
          </div>

          <div className="card team-card highlight-card">
            <div className="card-header">
              <h3>Technology Outreach Hawaii (TORCH)</h3>
            </div>
            <p>
              We are part of a 501c3 non-profit organization promoting technology education in Hawaii
              known as TORCH. They are dedicated to push STEM education and access to the islands.
            </p>
            <a
              href="https://hitorch.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Learn More About TORCH →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="card contact-card-large">
            <div className="contact-header">
              <h3>ICSpark Board</h3>
            </div>
            <p className="contact-subtitle">Have questions or need to report an absence?</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:info@icspark.org">info@icspark.org</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>Provided during orientation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;