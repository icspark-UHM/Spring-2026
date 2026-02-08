import { Link } from 'react-router-dom';
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";

function HackathonSchedule() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Hackathon Schedule</h1>
          <p className={styles.pageSubtitle}>
            Important dates and timeline for the Spring 2026 Hackathon
          </p>
        </div>
      </section>

      {/* Schedule Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <h2>Spring 2026 Timeline</h2>
            <div className={styles.scheduleTimeline}>
              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>Week of January 27, 2026</div>
                <h3 className={styles.scheduleTitle}>Hackathon Kickoff</h3>
                <p className={styles.scheduleDescription}>
                  Introduction to the hackathon format, project brainstorming, and team formation.
                  Students will learn about requirements and start planning their projects.
                </p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>February - March 2026</div>
                <h3 className={styles.scheduleTitle}>Development Phase</h3>
                <p className={styles.scheduleDescription}>
                  Students work on their projects during regular class time and at home.
                  Mentors provide guidance, answer questions, and help troubleshoot issues.
                </p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>Mid-March 2026</div>
                <h3 className={styles.scheduleTitle}>Checkpoint & Workshop</h3>
                <p className={styles.scheduleDescription}>
                  Mid-project check-in with mentors. Mini-workshops on advanced topics like
                  responsive design, animations, and deployment.
                </p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>Early April 2026</div>
                <h3 className={styles.scheduleTitle}>Final Push & Testing</h3>
                <p className={styles.scheduleDescription}>
                  Last development sessions. Students finalize features, test across browsers,
                  and prepare their presentations.
                </p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>Saturday, April 25, 2026</div>
                <h3 className={styles.scheduleTitle}>Final Showcase Event</h3>
                <p className={styles.scheduleDescription}>
                  <strong>Time:</strong> 9:30 AM - 12:30 PM<br />
                  <strong>Location:</strong> Campus Center Ballroom, UH Mānoa<br />
                  Students present their projects to peers, mentors, families, and guests.
                  This is a mandatory in-person event.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentCard}>
            <h2>Weekly Class Schedule</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              During the hackathon period, our regular Friday classes will follow this structure:
            </p>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Check-in (10 min)</h3>
                <p>Quick standup: What did you work on? What's next? Any blockers?</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Development Time (60 min)</h3>
                <p>Focused coding session with mentor support available</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Mini-Lesson (15 min)</h3>
                <p>Short workshop on relevant topics or tool demonstrations</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Wrap-up (5 min)</h3>
                <p>Share progress, celebrate wins, plan for next week</p>
              </div>
            </div>
          </div>

          <div className={styles.contentCard}>
            <h2>Important Notes</h2>
            <ul className={styles.objectivesList}>
              <li>
                <strong>Attendance:</strong> Regular attendance during the hackathon period
                is crucial for project success
              </li>
              <li>
                <strong>Communication:</strong> Stay in touch with your mentor if you need
                extra help or miss a session
              </li>
              <li>
                <strong>Showcase Prep:</strong> Plan to arrive at the Final Showcase by 9:15 AM
                for setup and last-minute checks
              </li>
              <li>
                <strong>Updates:</strong> Check your email regularly for any schedule changes
                or important announcements
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Questions About the Schedule?</h2>
          <p>Reach out to your mentors or check the about page for more information</p>
          <div className={styles.ctaButtons}>
            <Link to="/hackathon/about" className={styles.primaryBtn}>Learn More</Link>
            <Link to="/hackathon/mentors" className={styles.secondaryBtn}>Contact Mentors</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HackathonSchedule;