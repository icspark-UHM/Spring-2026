import { Link } from 'react-router-dom';
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";
import 'bootstrap-icons/font/bootstrap-icons.css'

function HackathonHome() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Hero Section with Space Background */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            SWITCHing Things Up
            <br />
            <span className={styles.heroPresents}>HACKATHON</span>
          </h1>
          <div className={styles.partnershipBadge}>
            <div className={styles.switchLogo}>
              <span className={styles.logoText}>SWITCH</span>
              <span className={styles.logoSubtext}>Supporting Wellness in Technology Computing Hawaii</span>
            </div>
            <span className={styles.plusSign}>x</span>
            <div className={styles.torchLogo}>
              <span className={styles.logoText}>ICSpark</span>
              <span className={styles.logoSubtext}>Web Development Program</span>
            </div>
          </div>
        </div>

        {/*/!* Decorative Space Elements *!/*/}
        {/*<div className={styles.spaceElements}>*/}
        {/*  <div className={styles.planet1}></div>*/}
        {/*  <div className={styles.planet2}></div>*/}
        {/*  <div className={styles.planet3}></div>*/}
        {/*  <div className={styles.stars}></div>*/}
        {/*</div>*/}
      </section>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Welcome Message</h2>
          <p className={styles.welcomeText}>
            Welcome to the second SWITCH x ICSpark Hackathon.
            SWITCH is a dynamic community of students, faculty, and professionals committed to driving social change.
            ICSpark is a group of students who offer free coding classes on Saturdays for students from the 6th to 12th grade.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className={styles.infoCards}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <i className="bi bi-calendar3"></i>
              </div>
              <h3>When</h3>
              <p>Check the schedule for dates and times</p>
              <Link to="/hackathon/schedule" className={styles.cardLink}>View Schedule →</Link>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <i className="bi bi-people-fill"></i>
              </div>
              <h3>Who</h3>
              <p>Meet our talented students and mentors</p>
              <Link to="/hackathon/students" className={styles.cardLink}>Meet the Team →</Link>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <i className="bi bi-laptop"></i>
              </div>
              <h3>What</h3>
              <p>Learn about the hackathon format and goals</p>
              <Link to="/hackathon/about" className={styles.cardLink}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Build Something Amazing?</h2>
          <p>Explore our resources and get started on your hackathon project!</p>
          <div className={styles.ctaButtons}>
            <Link to="/hackathon/about" className={styles.primaryBtn}>Get Started</Link>
            <Link to="/class" className={styles.secondaryBtn}>View Course Materials</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HackathonHome;