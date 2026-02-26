{/*import React from 'react';*/}
{/*import { Link } from 'react-router-dom'*/};
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";
import Footer from "../../components/hackathon/Footer";

function Rules() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Header Section */}
    {/* This section creates the large dark header like the Projects page */}
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Hackathon Rules</h1>
        <p className={styles.pageSubtitle}>
          Guidelines for a fair and fun competition
        </p>
      </header>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* Eligibility & Registration */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-shield-check"></i> Eligibility & Registration</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Who Can Participate?</h3>
                <p>Open to high school students only. Maximum of 4 members per team.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Registration</h3>
                <p>All participants must register in advance.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Pre-Hackathon Setup</h3>
                <p>Teams are encouraged to discuss ideas and decide on a project type (e.g., website, app, game) and programming language before the event begins. However, all actual coding must start during the hackathon.</p>
              </div>
            </div>
          </div>

          {/* Hackathon Format & Timing */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-clock"></i> Format & Timing</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Duration</h3>
                <p>The hackathon will run for 4 hours. Projects must be started and built within this timeframe.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Check-in & Setup</h3>
                <p>Participants are encouraged to arrive 15–30 minutes early for setup, forming teams, and ensuring that development environments (e.g., Replit projects) are ready.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Time Management</h3>
                <p>Coding begins promptly at the start time. Any setup work done prior to the event should only involve creating a blank project (with necessary plugins or downloads pre-installed) but without any substantive code.</p>
              </div>
            </div>
          </div>

          {/* Project Guidelines */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-list-check"></i> Project Guidelines</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Project Start</h3>
                <p>All coding must occur during the 4-hour period. Pre-coding or uploading finished projects before the start time is not allowed.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Project Scope</h3>
                <p>Projects can be a website, app, game, or any creative tech project. The project must be built from scratch during the event.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Environment Setup</h3>
                <p>
                    <strong>Replit Projects: </strong>Set up your Replit project in advance with your chosen language/environment.<br /><br />
                    <strong>Blank Slate: </strong>Your project can include necessary plugins or downloaded assets, but the actual content (code) must be blank at the start.
                </p>
              </div>
            </div>
          </div>

          {/* Conduct & Fair Play */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-heart"></i> Conduct & Fair Play</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Original Work</h3>
                <p>All code and project content must be created during the hackathon. AI, open-source libraries, and tools are allowed, but the main project logic should be original/creative.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Collaboration</h3>
                <p>Teams can discuss ideas and problem-solve together. However, plagiarism or copying from other teams or sources without proper credit will lead to disqualification.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Respect & Inclusivity</h3>
                <p>Treat all participants, mentors, and organizers with respect. Harassment or abusive behavior is not tolerated and will result in immediate disqualification.</p>
              </div>
            </div>
          </div>

          {/* Submission & Judging */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-cloud-arrow-up"></i> Submission & Judging</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Submission Deadline</h3>
                <p>Projects must be submitted before the 4-hour window closes. Late submissions will not be considered. Teams should have already shared their project prior to competition:<br />
                    <a
                        href="go.hawaii.edu/DJ8"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--hackathon-accent)' }}
                        >
                        go.hawaii.edu/DJ8
                    </a>
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Presentation</h3>
                <p>At the end of the hackathon, each team will have a few minutes (e.g., 3-5 minutes) to demonstrate their project and explain their approach.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Judging Criteria</h3>
                <p>See judging section for more information</p>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-pencil"></i> Additional Notes</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Support</h3>
                <p>Mentors and organizers will be available throughout the event to answer questions and offer guidance. The secret code is “have fun and learn a lot”!</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Termination</h3>
                <p>Destruction of property, illegal use of computer resources, or carrying weapons or illegal substances will result in immediate disqualification.
                    Normal school rules apply, including following Title IX guidelines. 
                    Any violation of the above will lead to immediate dismissal and depending on the case, reported to the UH Manoa Title IX Coordinator and authorities.
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Have Fun!</h3>
                <p>The goal is to learn, collaborate, and be creative. Enjoy the process, regardless of the outcome!</p>
              </div>
            </div>
          </div>   

        </div>
      </section>

      {/* Rules & Scoring */}
      <div className={styles.contentCard}>
        <h2>Scoring Criteria</h2>
        <ul className={styles.categoriesList}>
          <li><strong>Submission:</strong> Did the group submit their project? <b>( ___ / 10)</b></li>
          <li><strong>Creativity:</strong> How original and creative is the idea? Does it introduce a new or unique solution? <b>( ___ / 35)</b></li>
          <li><strong>Technical Difficulty:</strong> Does the project work as intended? <b>( ___ / 25)</b></li>
          <li><strong>User Experience:</strong> Is the design user-friendly and visually appealing? <br /><b>( ___ / 10)</b></li>
          <li><strong>Presentation Skills:</strong> How well was the team able to explain their project? Did the team clearly share their problem, solution, and impact? <b>( ___ / 20)</b></li>
          <li><strong>Total:</strong> The sum of all scores across the categories above: <b>( ___ / 100)</b></li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Rules;