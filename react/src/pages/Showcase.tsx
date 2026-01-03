import { useState, useEffect } from 'react';
import styles from "./Showcase.module.css";

function Showcase() {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with your actual showcase photos
  const showcaseImages = [
    { src: '/imgs/showcase/showcase1.jpg', alt: 'Students presenting their projects' },
    { src: '/imgs/showcase/showcase2.JPG', alt: 'Final showcase event' },
    { src: '/imgs/showcase/showcase3.jpeg', alt: 'Project demonstrations' },
    { src: '/imgs/showcase/showcase4.jpeg', alt: 'Team collaboration' },
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

  // Auto play: Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]); // Re-run when currentSlide changes

  return (
    <main className="content">
      <section className="about-section">
        <h2>Final Showcase</h2>

        {/* What is Final Showcase */}
        <div className={`card ${styles.showcaseIntro}`}>
          <h3>What is Final Showcase?</h3>
          <p>
            Final Showcase is a way to submit and showcase what you have accomplished this semester.
            Some featured projects are on our{' '}
            <a
              href="https://icspark.github.io/showcase.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              main website
            </a>
            , so please check it out!
          </p>
        </div>

        {/* Event Details Card */}
        <div className={`card ${styles.eventDetailsCard}`}>
          <div className={styles.eventHeader}>
            <h3>Event Details (Save the Date)</h3>
          </div>

          <div className={styles.eventInfoGrid}>
            <div className={styles.eventInfoItem}>
              <strong>Date:</strong>
              <span>Saturday, April 25, 2026</span>
            </div>
            <div className={styles.eventInfoItem}>
              <strong>Time:</strong>
              <span>9:30 AM - 12:30 PM</span>
            </div>
            <div className={styles.eventInfoItem}>
              <strong>Location:</strong>
              <span>POST 318, UH Mānoa</span>
            </div>
          </div>

          <div className={styles.eventNotice}>
            <p>
              <strong>⚠️ Important:</strong> This event is <strong>mandatory</strong> for all students
              and is an <strong>in-person event only</strong>.
            </p>
            <p className={styles.eventDisclaimer}>
              Event details are subject to change. Please check your emails closer to the event
              for any updates or changes.
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className={styles.carouselSection}>
          <h3>Previous Showcases</h3>
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

        {/* What to Expect */}
        <h3 style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem', fontSize: '1.8rem' }}>
          What to Expect
        </h3>

        <div className={`grid-row ${styles.threeCol}`}>
          <div className={`card ${styles.featureCard}`}>
            <h3>Interactive Websites</h3>
            <p>
              Students create personal sites showcasing their skills,
              projects, and journey through the course.
            </p>
          </div>

          <div className={`card ${styles.featureCard}`}>
            <h3>Web Applications</h3>
            <p>
              Functional web apps built with HTML, CSS, and JavaScript, including
              interactive games, tools, and creative projects.
            </p>
          </div>

          <div className={`card ${styles.featureCard}`}>
            <h3>Creative Projects</h3>
            <p>
              Students bring their unique ideas to life - from interactive
              storytelling to educational tools and animations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Showcase;