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
      <section className={`${styles.pageHeader} ${styles.pageHeaderHero}`}>
        <div className={styles.container}>
          <h1 className={`${styles.pageTitle} ${styles.pageTitleDark}`}>Hackathon Rules</h1>
          <p className={`${styles.pageSubtitle} ${styles.pageSubtitleDark}`}>Guidelines for a fair and fun competition</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Eligibility & Registration */}
          <div className={styles.contentCard}>
            <h2><i className="bi bi-shield-check"></i> Eligibility & Registration</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Who Can Participate?</h3>
                <p>Open to middle school high school students only. Maximum of 4 members per team.</p>
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
                  <strong><a href="https://github.com/icspark-UHM/final-project-template"
                             target="_blank"
                             rel="noopener noreferrer" style={{ color: '#ffcc00'}}
                  >Github Projects:</a>
                  </strong> Set up your Github project in advance with your chosen language/environment. We have an example Github Project for you as a template/example. You do not need to use this for your project. <br /><br />
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
                <h3>Original Work & AI Usage</h3>
                <p>All code and project content must be created during the hackathon. AI (e.g ChatGPT, Github Copilot, Claude), open-source libraries, and other software tools are <strong>allowed</strong> throughout the phases of your project, but the main project logic should be original/creative.</p>
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
                    href="https://go.hawaii.edu/5ED"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ffcc00' }}
                  >
                    go.hawaii.edu/5ED
                  </a>
                </p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Presentation</h3>
                <p>At the end of the hackathon, each team will have a few minutes (e.g., 3-5 minutes) to demonstrate their project and explain their approach.</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Judging Criteria</h3>
                <p>See the {" "} 

                    <a
                    href="#scoring-section"
                    style={{ color: '#ffcc00', cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('scoring-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}

                    >scoring criteria </a>
                   
                   {" "}for more information</p>
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

          {/* ── SCORING RUBRIC ── */}
          <div className={styles.contentCard}>
            <h2 id="scoring-section"><i className="bi bi-trophy"></i> Scoring Criteria</h2>
            <p style={{ color: '#b0b0b0', marginBottom: '2rem' }}>
              100 points total — judges score each category independently using the rubric below.
            </p>

            <div className={styles.rubricTable}>

              {/* Column headers */}
              <div className={styles.rubricHeaderRow}>
                <div className={styles.rubricCatCol}>Category</div>
                <div className={styles.rubricLevelCol}>Level 1</div>
                <div className={styles.rubricLevelCol}>Level 2</div>
                <div className={styles.rubricLevelCol}>Level 3</div>
                <div className={styles.rubricLevelCol}>Level 4</div>
                <div className={styles.rubricLevelCol}>Level 5</div>
                <div className={styles.rubricLevelCol}>Level 6</div>
              </div>

              {/* 📬 Submission — 3 levels */}
              <div className={styles.rubricRow}>
                <div className={`${styles.rubricCatCol} ${styles.rubricCatCell}`}>
                  <span className={styles.rubricEmoji}>📬</span>
                  <span className={styles.rubricCatName}>Submission</span>
                  <span className={styles.rubricPts}>/ 10 pts</span>
                  <span className={styles.rubricDesc}>Did the group submit their project?</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricBest}`}>
                  <span className={styles.rubricScore}>10</span>
                  <span className={styles.rubricLabel}>Full Credit</span>
                  <span className={styles.rubricHint}>Fully submitted on time</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricMid}`}>
                  <span className={styles.rubricScore}>5</span>
                  <span className={styles.rubricLabel}>Partial</span>
                  <span className={styles.rubricHint}>Late or incomplete submission</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>0</span>
                  <span className={styles.rubricLabel}>No Credit</span>
                  <span className={styles.rubricHint}>No submission</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricEmpty}`}></div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricEmpty}`}></div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricEmpty}`}></div>
              </div>

              {/* 🎨 Creativity — 6 levels */}
              <div className={styles.rubricRow}>
                <div className={`${styles.rubricCatCol} ${styles.rubricCatCell}`}>
                  <span className={styles.rubricEmoji}>🎨</span>
                  <span className={styles.rubricCatName}>Creativity</span>
                  <span className={styles.rubricPts}>/ 35 pts</span>
                  <span className={styles.rubricDesc}>How original and creative is the idea?</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricBest}`}>
                  <span className={styles.rubricScore}>35</span>
                  <span className={styles.rubricLabel}>Exceptional</span>
                  <span className={styles.rubricHint}>Highly original, surprising, and inventive</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricMid}`}>
                  <span className={styles.rubricScore}>28</span>
                  <span className={styles.rubricLabel}>Strong</span>
                  <span className={styles.rubricHint}>Fresh idea with clear creative thought</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricOk}`}>
                  <span className={styles.rubricScore}>21</span>
                  <span className={styles.rubricLabel}>Good</span>
                  <span className={styles.rubricHint}>Some originality, builds on existing ideas</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricLow}`}>
                  <span className={styles.rubricScore}>14</span>
                  <span className={styles.rubricLabel}>Fair</span>
                  <span className={styles.rubricHint}>Conventional approach, limited novelty</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>7</span>
                  <span className={styles.rubricLabel}>Weak</span>
                  <span className={styles.rubricHint}>Little creative effort evident</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>0</span>
                  <span className={styles.rubricLabel}>None</span>
                  <span className={styles.rubricHint}>No original thinking demonstrated</span>
                </div>
              </div>

              {/* ⚙️ Technical Difficulty — 6 levels */}
              <div className={styles.rubricRow}>
                <div className={`${styles.rubricCatCol} ${styles.rubricCatCell}`}>
                  <span className={styles.rubricEmoji}>⚙️</span>
                  <span className={styles.rubricCatName}>Technical Difficulty</span>
                  <span className={styles.rubricPts}>/ 25 pts</span>
                  <span className={styles.rubricDesc}>Does the project work as intended?</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricBest}`}>
                  <span className={styles.rubricScore}>25</span>
                  <span className={styles.rubricLabel}>Excellent</span>
                  <span className={styles.rubricHint}>Fully functional and technically impressive</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricMid}`}>
                  <span className={styles.rubricScore}>20</span>
                  <span className={styles.rubricLabel}>Good</span>
                  <span className={styles.rubricHint}>Works well with minor issues</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricOk}`}>
                  <span className={styles.rubricScore}>15</span>
                  <span className={styles.rubricLabel}>Partial</span>
                  <span className={styles.rubricHint}>Core features work, some bugs</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricLow}`}>
                  <span className={styles.rubricScore}>10</span>
                  <span className={styles.rubricLabel}>Limited</span>
                  <span className={styles.rubricHint}>Significant functionality missing</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>5</span>
                  <span className={styles.rubricLabel}>Broken</span>
                  <span className={styles.rubricHint}>Barely functional</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>0</span>
                  <span className={styles.rubricLabel}>None</span>
                  <span className={styles.rubricHint}>Does not work</span>
                </div>
              </div>

              {/* ✨ User Experience — 5 levels */}
              <div className={styles.rubricRow}>
                <div className={`${styles.rubricCatCol} ${styles.rubricCatCell}`}>
                  <span className={styles.rubricEmoji}>✨</span>
                  <span className={styles.rubricCatName}>User Experience</span>
                  <span className={styles.rubricPts}>/ 10 pts</span>
                  <span className={styles.rubricDesc}>Is the design user-friendly and visually appealing?</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricBest}`}>
                  <span className={styles.rubricScore}>10</span>
                  <span className={styles.rubricLabel}>Excellent</span>
                  <span className={styles.rubricHint}>Intuitive, polished, and delightful</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricMid}`}>
                  <span className={styles.rubricScore}>7</span>
                  <span className={styles.rubricLabel}>Good</span>
                  <span className={styles.rubricHint}>Easy to use, visually solid</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricOk}`}>
                  <span className={styles.rubricScore}>4</span>
                  <span className={styles.rubricLabel}>Fair</span>
                  <span className={styles.rubricHint}>Functional but rough around edges</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricLow}`}>
                  <span className={styles.rubricScore}>1</span>
                  <span className={styles.rubricLabel}>Poor</span>
                  <span className={styles.rubricHint}>Confusing or unappealing design</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>0</span>
                  <span className={styles.rubricLabel}>None</span>
                  <span className={styles.rubricHint}>No UX consideration</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricEmpty}`}></div>
              </div>

              {/* 🎤 Presentation Skills — 5 levels */}
              <div className={styles.rubricRow}>
                <div className={`${styles.rubricCatCol} ${styles.rubricCatCell}`}>
                  <span className={styles.rubricEmoji}>🎤</span>
                  <span className={styles.rubricCatName}>Presentation Skills</span>
                  <span className={styles.rubricPts}>/ 20 pts</span>
                  <span className={styles.rubricDesc}>How well did the team explain their project?</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricBest}`}>
                  <span className={styles.rubricScore}>20</span>
                  <span className={styles.rubricLabel}>Outstanding</span>
                  <span className={styles.rubricHint}>Compelling, clear, confident delivery</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricMid}`}>
                  <span className={styles.rubricScore}>15</span>
                  <span className={styles.rubricLabel}>Strong</span>
                  <span className={styles.rubricHint}>Clear explanation with good structure</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricOk}`}>
                  <span className={styles.rubricScore}>10</span>
                  <span className={styles.rubricLabel}>Adequate</span>
                  <span className={styles.rubricHint}>Gets the point across, some gaps</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricLow}`}>
                  <span className={styles.rubricScore}>5</span>
                  <span className={styles.rubricLabel}>Weak</span>
                  <span className={styles.rubricHint}>Hard to follow or incomplete</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricNone}`}>
                  <span className={styles.rubricScore}>0</span>
                  <span className={styles.rubricLabel}>None</span>
                  <span className={styles.rubricHint}>No meaningful presentation</span>
                </div>
                <div className={`${styles.rubricLevelCol} ${styles.rubricEmpty}`}></div>
              </div>

              {/*/!* Total *!/*/}
              {/*<div className={styles.rubricTotalRow}>*/}
              {/*  <div className={styles.rubricCatCol}>*/}
              {/*    <span className={styles.rubricEmoji}>🏆</span>*/}
              {/*    <span className={styles.rubricCatName}>Total</span>*/}
              {/*    <span className={styles.rubricDesc}>The sum of all scores across the categories above.</span>*/}
              {/*  </div>*/}
              {/*  /!*<div className={styles.rubricTotalScore}>*!/*/}
              {/*  /!*  ___ / 100 pts*!/*/}
              {/*  /!*</div>*!/*/}
              {/*</div>*/}

            </div>
          </div>

          {/* Rules & Scoring */}
          {/*<div className={styles.contentCard}>*/}
          {/*  <h2 id="scoring-section">Scoring Criteria</h2>*/}
          {/*  <div className={styles.scoringGrid}>*/}
          {/*    /!* Header Row *!/*/}
          {/*    <div className={`${styles.gridRow} ${styles.header}`}>*/}
          {/*      <div>Submission</div>*/}
          {/*      <div>Description</div>*/}
          {/*      <div>Scoring</div>*/}
          {/*    </div>*/}

          {/*    /!* Data Rows *!/*/}
          {/*    <div className={styles.gridRow}>*/}
          {/*      <div className={styles.category}>Submission</div>*/}
          {/*      <div className={styles.description}>Did the group submit their project?</div>*/}
          {/*      <div className={styles.score}> ___ / 10 </div>*/}
          {/*    </div>*/}

          {/*    /!* Creativity *!/*/}
          {/*    <div className={styles.gridRow}>*/}
          {/*      <div className={styles.category}>Creativity</div>*/}
          {/*      <div className={styles.description}>How original and creative is the idea? Does it introduce a new or unique solution</div>*/}
          {/*      <div className={styles.score}> ___ / 35 </div>*/}
          {/*    </div>*/}

          {/*    /!* Technical Difficulty *!/*/}
          {/*    <div className={styles.gridRow}>*/}
          {/*      <div className={styles.category}>Technical Difficulty</div>*/}
          {/*      <div className={styles.description}>Does the project work as intended?</div>*/}
          {/*      <div className={styles.score}> ___ / 25 </div>*/}
          {/*    </div>*/}

          {/*    /!* Technical Difficulty *!/*/}
          {/*    <div className={styles.gridRow}>*/}
          {/*      <div className={styles.category}>User Experience</div>*/}
          {/*      <div className={styles.description}>Is the design user-friendly and visually appealing?</div>*/}
          {/*      <div className={styles.score}> ___ / 10 </div>*/}
          {/*    </div>*/}

          {/*    /!* User Experience *!/*/}
          {/*    <div className={styles.gridRow}>*/}
          {/*      <div className={styles.category}>Presentation Skills</div>*/}
          {/*      <div className={styles.description}>How well was the team to explain their project? Did the team clearly share their problem, solution, and impact?</div>*/}
          {/*      <div className={styles.score}> ___ / 20 </div>*/}
          {/*    </div>*/}

          {/*    /!* Repeat for other categories... *!/*/}

          {/*    <div className={`${styles.gridRow} ${styles.total}`}>*/}
          {/*      <div className={styles.category}>Total</div>*/}
          {/*      <div className={styles.description}>The sum of all scores across the categories above.</div>*/}
          {/*      <div className={styles.score}> ___ / 100 </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*</div>*/}

        </div>
      </section>



      <Footer />
    </div>
);
}

export default Rules;