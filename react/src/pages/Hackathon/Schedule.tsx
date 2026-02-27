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

      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <h1>Location and Parking</h1>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h2>Our Venue</h2>
                <img src='imgs/hackathon/Parking.png' alt="Hackathon Venue" />

                <h3> Welcome Room Campus Center 3rd Floor R307 </h3>
                <h4> Subject to change building location. Will notify if happens </h4>
                <h4><br /> 2465 Campus Rd, Honolulu, HI 96822 <br /> University of Hawaiʻi at Mānoa </h4>

                {/* Add this Legend Overlay or List */}
                <br />
                <div className={styles.mapLegend}>
                  <p>⭐ <strong>Star:</strong> Welcome Room (Campus Center, R307)</p>
                  <p>📍 <strong>Red Pin:</strong> Recommended Parking </p>
                </div>

              </div>
            </div>
              <ul className={styles.objectivesList}>
                <li>
                  <strong>Parking Situation:</strong> Parking is free on weekends and State Holidays in permit-only and visitor lots except during Athletic and special events. 
                  SWITCH and ICSpark are not liable for any mode of transportation chosen by the students or parent/guardian/coach to travel to and from the UH Mānoa campus.
                </li>
              </ul>
          </div>
        </div>
      </section>
     
      {/* Schedule Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
        {/* Timeline */}
        <div className={styles.contentCard}>
          <h2>Event Timeline</h2>
          <div className={styles.scheduleTimeline}>
            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>8:30 AM</div>
              <h3 className={styles.scheduleTitle}>Doors Open</h3>
            </div>

            <div className={styles.scheduleItem}>
              <div className={styles.scheduleDate}>9:00 AM</div>
              <h3 className={styles.scheduleTitle}>Open Ceremony</h3>
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
              <h3 className={styles.scheduleTitle}>Lunch/Presentations</h3>
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