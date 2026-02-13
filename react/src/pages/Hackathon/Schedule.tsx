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
        {/* Timeline */}
        <div className={styles.contentCard}>
          <h2>Event Timeline</h2>
          <div className={styles.scheduleTimeline}>
            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>8:30 AM</div>
              <h3 className={styles.scheduleTitle}>Doors Open</h3>
              {/*<p className={styles.scheduleDescription}>*/}
              {/*  Introduction to hackathon requirements, brainstorming project ideas,*/}
              {/*  and creating your project plan.*/}
              {/*</p>*/}
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>9:00 AM</div>
              <h3 className={styles.scheduleTitle}>Open Ceremony</h3>
              {/*<p className={styles.scheduleDescription}>*/}
              {/*  Regular class sessions dedicated to building your project. Mentors*/}
              {/*  available for help and guidance each week.*/}
              {/*</p>*/}
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>9:30 AM</div>
              <h3 className={styles.scheduleTitle}>Development Starts</h3>
              {/*<p className={styles.scheduleDescription}>*/}
              {/*  Check-in with mentors to review progress and get feedback. Optional*/}
              {/*  workshops on advanced topics.*/}
              {/*</p>*/}
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>1:30 PM</div>
              <h3 className={styles.scheduleTitle}>Development Pau</h3>
              {/*<p className={styles.scheduleDescription}>*/}
              {/*  Polish your project, fix bugs, and prepare your presentation.*/}
              {/*</p>*/}
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>2:00 PM</div>
              <h3 className={styles.scheduleTitle}>Lunch/Presentations</h3>
              {/*<p className={styles.scheduleDescription}>*/}
              {/*  <strong>Time:</strong> 9:30 AM - 12:30 PM (arrive by 9:15 AM for setup)<br />*/}
              {/*  <strong>Location:</strong> Campus Center Ballroom, UH Mānoa<br />*/}
              {/*  <strong>Note:</strong> This is a mandatory, in-person event for all students.*/}
              {/*</p>*/}
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>~3:30 PM</div>
              <h3 className={styles.scheduleTitle}>Award Ceremony</h3>
              {/*<p className={styles.scheduleDescription}>*/}
              {/*  <strong>Time:</strong> 9:30 AM - 12:30 PM (arrive by 9:15 AM for setup)<br />*/}
              {/*  <strong>Location:</strong> Campus Center Ballroom, UH Mānoa<br />*/}
              {/*  <strong>Note:</strong> This is a mandatory, in-person event for all students.*/}
              {/*</p>*/}
            </div>
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