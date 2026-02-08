import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";

// Import showcase images - update these paths to match your actual images
// import showcase1 from '/public/imgs/showcase/showcase1.jpg';
// import showcase2 from '/public/imgs/showcase/showcase2.jpg';
// etc.

function HackathonProjects() {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with your actual showcase photos
  const showcaseImages = [
    { src: '/imgs/showcase/showcase1.jpg', alt: '2024 ICSpark Showcase' },
    { src: '/imgs/showcase/showcase2.jpg', alt: '2025 ICSpark Showcase - Students presenting' },
    { src: '/imgs/showcase/showcase3.jpeg', alt: '2025 ICSpark Showcase - Project demos' },
    { src: '/imgs/showcase/showcase4.jpeg', alt: '2025 ICSpark Showcase - Award ceremony' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Student Projects</h1>
          <p className={styles.pageSubtitle}>
            Showcasing amazing work from ICSpark hackathon participants
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* Coming Soon Section */}
          <div className={styles.contentCard}>
            <h2>Spring 2026 Projects</h2>
            <p>
              Student projects from the Spring 2026 hackathon will be featured here
              after the Final Showcase event on April 25, 2026.
            </p>
            <p>
              Check back after the showcase to see the incredible websites and
              applications created by this year's participants!
            </p>
          </div>

          {/* Image Carousel - Previous Showcases */}
          <div className={styles.carouselSection}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>
              Previous Showcases
            </h3>
            <div className={styles.carouselContainer}>
              <button
                className={`${styles.carouselBtn} ${styles.prev}`}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                ‹
              </button>

              <div className={styles.carouselSlide}>
                <img
                  src={showcaseImages[currentSlide].src}
                  alt={showcaseImages[currentSlide].alt}
                  className={styles.carouselImage}
                />
              </div>

              <button
                className={`${styles.carouselBtn} ${styles.next}`}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Dots Navigation */}
              <div className={styles.carouselDots}>
                {showcaseImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Past Projects - Example */}
          <div className={styles.contentCard}>
            <h2>Featured Past Projects</h2>
            <p style={{ marginBottom: '2rem' }}>
              Here are some standout projects from previous ICSpark hackathons. Visit our{' '}
              <a
                href="https://icspark.github.io/showcase.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--hackathon-accent)', textDecoration: 'underline' }}
              >
                main showcase page
              </a>{' '}
              to see more!
            </p>

            {/* You can add specific past projects here */}
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Interactive Portfolio</h3>
                <p>
                  A creative personal portfolio featuring animations, project galleries,
                  and smooth scrolling effects.
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Study Buddy App</h3>
                <p>
                  Flashcard system with categories, progress tracking, and quiz mode
                  for students.
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Local Restaurant Guide</h3>
                <p>
                  Interactive map showcasing Hawaii restaurants with filters, reviews,
                  and favorites.
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Typing Speed Game</h3>
                <p>
                  Fun typing game with difficulty levels, high scores, and
                  competitive leaderboard.
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Eco Tracker</h3>
                <p>
                  Carbon footprint calculator helping users track and reduce their
                  environmental impact.
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Art Gallery</h3>
                <p>
                  Beautiful online gallery featuring student artwork with zoom features
                  and artist bios.
                </p>
              </div>
            </div>
          </div>

          {/* What Makes a Great Project */}
          <div className={styles.contentCard}>
            <h2>What Makes a Great Project?</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Looking at past successful projects, here are common qualities:
            </p>
            <ul className={styles.objectivesList}>
              <li>
                <strong>Solves a Problem:</strong> Addresses a real need or makes something easier
              </li>
              <li>
                <strong>User-Friendly:</strong> Easy to navigate and understand without instructions
              </li>
              <li>
                <strong>Polished Design:</strong> Clean, professional look with attention to details
              </li>
              <li>
                <strong>Interactive Elements:</strong> Engages users with buttons, forms, or animations
              </li>
              <li>
                <strong>Personal Touch:</strong> Reflects the creator's unique interests and style
              </li>
              <li>
                <strong>Works Well:</strong> Few bugs, fast loading, and responsive on mobile
              </li>
            </ul>
          </div>

          {/* Showcase Event Info */}
          <div className={styles.contentCard}>
            <h2>About the Final Showcase</h2>
            <p>
              The Final Showcase is a celebration of student achievement where participants
              present their projects to an audience of peers, mentors, families, and guests.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ color: 'var(--hackathon-accent)', marginBottom: '1rem' }}>
                Event Details
              </h3>
              <div className={styles.expectationGrid}>
                <div className={styles.expectationItem}>
                  <h3>When</h3>
                  <p>Saturday, April 25, 2026<br />9:30 AM - 12:30 PM</p>
                </div>
                <div className={styles.expectationItem}>
                  <h3>Where</h3>
                  <p>Campus Center Ballroom<br />University of Hawaii at Mānoa</p>
                </div>
                <div className={styles.expectationItem}>
                  <h3>Who</h3>
                  <p>All students must attend and present their projects (mandatory event)</p>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#b0b0b0' }}>
              Families and friends are welcome to attend! Event details subject to change -
              check your email for updates closer to the date.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Want to See Your Project Here?</h2>
          <p>Review the hackathon info and start planning your project!</p>
          <div className={styles.ctaButtons}>
            <Link to="/hackathon/info" className={styles.primaryBtn}>View Hackathon Info</Link>
            <Link to="/class" className={styles.secondaryBtn}>Start Learning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HackathonProjects;