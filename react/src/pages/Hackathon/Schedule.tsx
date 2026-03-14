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
          <p className={`${styles.pageSubtitle} ${styles.pageSubtitleDark}`}><strong>March 14, 2026</strong></p>
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
                src='imgs/hackathon/venue.png'
                alt="Hackathon Venue Map"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '1rem 0' }}
              />

              <div className={styles.mapLegend} style={{ margin: '1rem 0' }}>
                <p><s>⭐ <strong>Star:</strong> Pacific Ocean Science & Technology (POST) Building</s></p>
                <p><s>📍 <strong>Red Pin:</strong> Recommended Parking</s></p>
              </div>

              <h4 style={{ fontSize: '1.1rem', margin: '0.75rem 0 0.25rem' }}>
                <s>Pacific Ocean Science & Technology | Room 318A (3rd Floor)</s>
              </h4>
              <p style={{ color: '#ffcc00', margin: '0.25rem 0' }}>
                <s>Subject to change — will notify if building location changes.</s>
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <s>1680 East-West Rd, Honolulu, HI 96822 · University of Hawaiʻi at Mānoa</s>
              </p>
            </div>

            <ul className={styles.objectivesList} style={{ marginTop: '1.5rem' }}>
              <li>
                <strong><s>Parking:</s></strong> <s>Parking is free on weekends and State Holidays in permit-only
                and visitor lots except during Athletic and special events. SWITCH and ICSpark are not
                liable for any mode of transportation chosen by students or parent/guardian/coach to
                travel to and from the UH Mānoa campus.</s>
              </li>
    
              <li style={{ background: '#ffcc0022', border: '1px solid #ffcc00', borderRadius: '8px', padding: '1rem', marginTop: '1.5rem' }}>
                <p> <strong>⚠️Update: </strong>
                  Due to UH Mānoa closing campus on Friday and canceling other events, we have decided to move the SWITCH x ICSpark Hackathon to an online format. </p>
                
                  <p>
                    We would also like to invite you to our annual ICSpark Spring Showcase on <strong>April 25</strong>.
                    At the showcase, the top 3 teams will have the opportunity to present their projects, we will recognize and award them, and you will have the opportunity to see in person what they were able to build.
                    More details will be shared in a later email.
                  </p>

                  <a
                    href="#event-timeline"
                    style={{ color: '#ffcc00', cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('event-timeline')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >View the modified timeline below!</a>
                </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section id="event-timeline" className={styles.contentSection} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <div className={styles.contentCard}>
            <h2>Date of Competition: March 14, 2026</h2>
            <h2>Event Timeline</h2>
            <div className={styles.scheduleTimeline}>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>9:00 - 9:15 AM</div>
                <h3 className={styles.scheduleTitle}>Introduction</h3>
                <p>15 minutes to make sure teams are all set up</p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>9:30 - 1:30 PM</div>
                <h3 className={styles.scheduleTitle}>Hackathon</h3>
                <p>Must submit your project link here 
                  (
                    <a
                      href="https://go.hawaii.edu/5ED"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#ffcc00' }}
                    >
                    go.hawaii.edu/5ED
                    </a>
                  )
                </p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>1:30 - 2:15 PM</div>
                <h3 className={styles.scheduleTitle}>Lunch Break</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>2:30 - 3:45 PM</div>
                <h3 className={styles.scheduleTitle}>Presentations</h3>
                <p>Please be back online ready to present by 2:20 PM</p>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>4:00 - 4:15 PM</div>
                <h3 className={styles.scheduleTitle}>Break</h3>
              </div>

              <div className={styles.scheduleItem}>
                <div className={styles.scheduleDate}>4:15 - 4:30 PM</div>
                <h3 className={styles.scheduleTitle}>Announce Winners</h3>
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