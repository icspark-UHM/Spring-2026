import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";
import Footer from "../../components/hackathon/Footer";

function HackathonSchedule() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Page Header */}
      <section className={`${styles.pageHeader} ${styles.pageHeaderHero}`}>
        <div className={styles.container}>
          <h1 className={`${styles.pageTitle} ${styles.pageTitleDark}`}>Hackathon Schedule</h1>
          <p className={`${styles.pageSubtitle} ${styles.pageSubtitleDark}`}>Timeline and location for the Spring 2026 Hackathon</p>
        </div>
      </section>

      {/* Location and Parking */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <h2>Location and Parking</h2>

            <div className={styles.contentCard} style={{ marginTop: '1.5rem' }}>
              <h3>Our Venue</h3>

              <img
                src='imgs/hackathon/Parking.png'
                alt="Hackathon Venue Map"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '1rem 0' }}
              />

              <div className={styles.mapLegend} style={{ margin: '1rem 0' }}>
                <p>⭐ <strong>Star:</strong> Campus Center Ballroom (3rd Floor)</p>
                <p>📍 <strong>Red Pin:</strong> Recommended Parking</p>
              </div>

              <h4 style={{ fontSize: '1.1rem', margin: '0.75rem 0 0.25rem' }}>
                Campus Center Ballroom, 3rd Floor
              </h4>
              <p style={{ color: '#ffcc00', margin: '0.25rem 0' }}>
                Subject to change — will notify if building location changes.
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                2465 Campus Rd, Honolulu, HI 96822 · University of Hawaiʻi at Mānoa
              </p>
            </div>

            <ul className={styles.objectivesList} style={{ marginTop: '1.5rem' }}>
              <li>
                <strong>Parking:</strong> Parking is free on weekends and State Holidays in permit-only
                and visitor lots except during Athletic and special events. SWITCH and ICSpark are not
                liable for any mode of transportation chosen by students or parent/guardian/coach to
                travel to and from the UH Mānoa campus.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className={styles.contentSection} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <h2>Event Timeline</h2>
            <div className={styles.scheduleTimeline}>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>8:30 AM</div>
                <h3 className={styles.scheduleTitle}>Doors Open</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>9:00 AM</div>
                <h3 className={styles.scheduleTitle}>Opening Ceremony</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>9:30 AM</div>
                <h3 className={styles.scheduleTitle}>Development Starts</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>1:30 PM</div>
                <h3 className={styles.scheduleTitle}>Development Pau</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>2:00 PM</div>
                <h3 className={styles.scheduleTitle}>Lunch / Presentations</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>~3:30 PM</div>
                <h3 className={styles.scheduleTitle}>Award Ceremony</h3>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HackathonSchedule;