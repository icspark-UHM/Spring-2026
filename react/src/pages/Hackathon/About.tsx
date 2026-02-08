import { Link } from 'react-router-dom';
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";

function HackathonAbout() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>About the Hackathon</h1>
          <p className={styles.pageSubtitle}>
            Learn about our collaborative web development event
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <h2>What is the ICSpark Hackathon?</h2>
              <p>
                The ICSpark Hackathon is an exciting culmination of our web development
                program, where students apply everything they've learned throughout the
                semester. This collaborative event brings together ICSpark students and
                TORCH (Technology Outreach Hawaii) mentors to create innovative web projects.
              </p>
              <p>
                Students work individually or in teams to build creative, functional websites
                and web applications using HTML, CSS, and JavaScript. The hackathon provides
                a supportive environment for students to push their skills, explore new ideas,
                and showcase their talents.
              </p>
            </div>

            <div className={styles.contentCard}>
              <h2>Goals & Objectives</h2>
              <ul className={styles.objectivesList}>
                <li>
                  <strong>Apply Skills:</strong> Use HTML, CSS, and JavaScript knowledge
                  to build real-world projects
                </li>
                <li>
                  <strong>Creative Expression:</strong> Develop unique projects that reflect
                  personal interests and ideas
                </li>
                <li>
                  <strong>Problem Solving:</strong> Overcome technical challenges with
                  mentor guidance and peer collaboration
                </li>
                <li>
                  <strong>Portfolio Building:</strong> Create showcase-worthy projects for
                  college applications and future opportunities
                </li>
                <li>
                  <strong>Community:</strong> Connect with fellow students and industry
                  professionals in the tech field
                </li>
              </ul>
            </div>

            <div className={styles.contentCard}>
              <h2>What to Expect</h2>
              <div className={styles.expectationGrid}>
                <div className={styles.expectationItem}>
                  <h3>Kickoff Session</h3>
                  <p>Introduction to the hackathon format, project ideas, and timeline</p>
                </div>
                <div className={styles.expectationItem}>
                  <h3>Development Time</h3>
                  <p>Dedicated coding sessions with mentor support and guidance</p>
                </div>
                <div className={styles.expectationItem}>
                  <h3>Workshops</h3>
                  <p>Mini sessions on advanced topics and helpful tools</p>
                </div>
                <div className={styles.expectationItem}>
                  <h3>Final Showcase</h3>
                  <p>Present your project to peers, mentors, and families</p>
                </div>
              </div>
            </div>

            <div className={styles.contentCard}>
              <h2>Partnership with TORCH</h2>
              <p>
                We're proud to partner with TORCH (Technology Outreach Hawaii), an organization
                dedicated to providing technology education and mentorship to Hawaii's youth.
                TORCH mentors bring industry experience and guidance to support students
                throughout the hackathon.
              </p>
              <p>
                This collaboration creates a unique learning environment where students gain
                exposure to real-world development practices and professional insights from
                working tech professionals.
              </p>
            </div>

            <div className={styles.contentCard}>
              <h2>Project Categories</h2>
              <p>Students can choose from various project types:</p>
              <ul className={styles.categoriesList}>
                <li>Personal Portfolio Websites</li>
                <li>Interactive Games & Animations</li>
                <li>Educational Tools & Resources</li>
                <li>Creative Storytelling Sites</li>
                <li>Utility Apps & Calculators</li>
                <li>Community Resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Get Started?</h2>
          <p>Check out the schedule and meet our mentors!</p>
          <div className={styles.ctaButtons}>
            <Link to="/hackathon/schedule" className={styles.primaryBtn}>View Schedule</Link>
            <Link to="/hackathon/mentors" className={styles.secondaryBtn}>Meet Mentors</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HackathonAbout;