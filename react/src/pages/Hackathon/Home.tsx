import { Link } from 'react-router-dom';
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";
import Footer from "../../components/hackathon/Footer";

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
            <span className={styles.plusSign} style={{color: "black"}}>x</span>
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

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What is a hackathon?</h2>
          <p className={styles.welcomeText}>
            A hackathon is a competition where teams brainstorm, design, and build a
            prototype website as a solution to a specific challenge. The term combines <i>“hack”</i> (creative problem-solving) and <i>“marathon,”</i>
            reflecting the fast-paced,time-limited nature of the event, where participants develop technical solutions within a short period.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className={styles.infoCards}>
        <div className={styles.container}>
          <div className={styles.cardGrid}>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <i className="bi bi-laptop"></i>
              </div>
              <h3>Projects</h3>
              <p>Learn about this year's theme and available projects</p>
              <Link to="/hackathon/projects" className={styles.cardLink}>View Projects →</Link>
            </div>

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
                <i className="bi bi-journal-bookmark"></i>
              </div>
              <h3>Rules & Scoring</h3>
              <p>Read the official competition guidelines and scoring criteria</p>
              <Link to="/hackathon/rules" className={styles.cardLink}>Read Rules & Scoring →</Link>
            </div>


          </div>
        </div>
      </section>

      {/* Volunteer Info */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Volunteer with Us</h2>
          <p className={styles.welcomeText}>
            Do you want to mentor/support the next generation of tech innovators?
            We are looking for motivated hackathon volunteers to help with: 
            <strong> Setup/Breakdown</strong>,
            <strong> Hackathon Moderators</strong>,
            <strong> Workshop</strong>,
            <strong> Sign-in</strong> and,
            <strong> Food Servers</strong>.
          </p>

          <br />

          <p className={styles.welcomeText}>
            Interested? Please sign-up using this {" "} 
            <a
              href="https://forms.gle/KLNR4XruesDuZACz9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffcc00' }}
            >form</a>.
      
            See you then!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HackathonHome;