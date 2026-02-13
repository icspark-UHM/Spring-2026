import { Link } from 'react-router-dom';
import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";

function HackathonInfo() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Hackathon Overivew</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about the Spring 2026 Hackathon
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* What is the Hackathon */}
          <div className={styles.contentCard}>
            <h2>What is the ICSpark Hackathon?</h2>
            <p>
              The ICSpark Hackathon is the culminating project for our web development
              program. Over the course of the semester, you'll apply everything you've
              learned to create your own unique web project. This is your chance to:
            </p>
            <ul className={styles.objectivesList}>
              <li><strong>Build a Real Project:</strong> Create a functional website or web application from scratch</li>
              <li><strong>Express Your Creativity:</strong> Choose a project that reflects your interests and passions</li>
              <li><strong>Learn by Doing:</strong> Apply HTML, CSS, and JavaScript skills in a real-world context</li>
              <li><strong>Get Mentorship:</strong> Receive guidance from experienced developers and instructors</li>
              <li><strong>Showcase Your Work:</strong> Present your project at our final showcase event</li>
            </ul>
          </div>

          {/*/!* Partnership *!/*/}
          {/*<div className={styles.contentCard}>*/}
          {/*  <h2>ICSpark + TORCH Partnership</h2>*/}
          {/*  <p>*/}
          {/*    This hackathon is made possible through our partnership with TORCH*/}
          {/*    (Technology Outreach Hawaii). TORCH mentors are experienced professionals*/}
          {/*    who volunteer their time to support Hawaii's youth in technology education.*/}
          {/*  </p>*/}
          {/*  <p>*/}
          {/*    Throughout the hackathon, you'll have access to both ICSpark instructors*/}
          {/*    and TORCH mentors who can help with technical challenges, project planning,*/}
          {/*    and career advice.*/}
          {/*  </p>*/}
          {/*</div>*/}

          {/*/!* Timeline *!/*/}
          {/*<div className={styles.contentCard}>*/}
          {/*  <h2>Event Timeline</h2>*/}
          {/*  <div className={styles.scheduleTimeline}>*/}
          {/*    <div className={styles.scheduleItem}>*/}
          {/*      <div className={styles.scheduleDate}>8:30 AM</div>*/}
          {/*      <h3 className={styles.scheduleTitle}>Doors Open</h3>*/}
          {/*      /!*<p className={styles.scheduleDescription}>*!/*/}
          {/*      /!*  Introduction to hackathon requirements, brainstorming project ideas,*!/*/}
          {/*      /!*  and creating your project plan.*!/*/}
          {/*      /!*</p>*!/*/}
          {/*    </div>*/}

          {/*    <div className={styles.scheduleItem}>*/}
          {/*      <div className={styles.scheduleDate}>9:00 AM</div>*/}
          {/*      <h3 className={styles.scheduleTitle}>Open Ceremony</h3>*/}
          {/*      /!*<p className={styles.scheduleDescription}>*!/*/}
          {/*      /!*  Regular class sessions dedicated to building your project. Mentors*!/*/}
          {/*      /!*  available for help and guidance each week.*!/*/}
          {/*      /!*</p>*!/*/}
          {/*    </div>*/}

          {/*    <div className={styles.scheduleItem}>*/}
          {/*      <div className={styles.scheduleDate}>9:30 AM</div>*/}
          {/*      <h3 className={styles.scheduleTitle}>Development Starts</h3>*/}
          {/*      /!*<p className={styles.scheduleDescription}>*!/*/}
          {/*      /!*  Check-in with mentors to review progress and get feedback. Optional*!/*/}
          {/*      /!*  workshops on advanced topics.*!/*/}
          {/*      /!*</p>*!/*/}
          {/*    </div>*/}

          {/*    <div className={styles.scheduleItem}>*/}
          {/*      <div className={styles.scheduleDate}>1:30 PM</div>*/}
          {/*      <h3 className={styles.scheduleTitle}>Development Pau</h3>*/}
          {/*      /!*<p className={styles.scheduleDescription}>*!/*/}
          {/*      /!*  Polish your project, fix bugs, and prepare your presentation.*!/*/}
          {/*      /!*</p>*!/*/}
          {/*    </div>*/}

          {/*    <div className={styles.scheduleItem}>*/}
          {/*      <div className={styles.scheduleDate}>2:00 PM</div>*/}
          {/*      <h3 className={styles.scheduleTitle}>Lunch/Presentations</h3>*/}
          {/*      /!*<p className={styles.scheduleDescription}>*!/*/}
          {/*      /!*  <strong>Time:</strong> 9:30 AM - 12:30 PM (arrive by 9:15 AM for setup)<br />*!/*/}
          {/*      /!*  <strong>Location:</strong> Campus Center Ballroom, UH Mānoa<br />*!/*/}
          {/*      /!*  <strong>Note:</strong> This is a mandatory, in-person event for all students.*!/*/}
          {/*      /!*</p>*!/*/}
          {/*    </div>*/}

          {/*    <div className={styles.scheduleItem}>*/}
          {/*      <div className={styles.scheduleDate}>~3:30 PM</div>*/}
          {/*      <h3 className={styles.scheduleTitle}>Award Ceremony</h3>*/}
          {/*      /!*<p className={styles.scheduleDescription}>*!/*/}
          {/*      /!*  <strong>Time:</strong> 9:30 AM - 12:30 PM (arrive by 9:15 AM for setup)<br />*!/*/}
          {/*      /!*  <strong>Location:</strong> Campus Center Ballroom, UH Mānoa<br />*!/*/}
          {/*      /!*  <strong>Note:</strong> This is a mandatory, in-person event for all students.*!/*/}
          {/*      /!*</p>*!/*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Project Requirements */}
          <div className={styles.contentCard}>
            <h2>Project Requirements</h2>
            <p style={{marginBottom: '1.5rem'}}>
              Your project must meet the following minimum requirements:
            </p>
            <ul className={styles.objectivesList}>
              <li>
                <strong>Use Web Technologies:</strong> Built primarily with HTML, CSS,
                and JavaScript (frameworks and libraries are allowed)
              </li>
              <li>
                <strong>Be Functional:</strong> The website/app should work and be
                interactive (buttons do things, forms work, etc.)
              </li>
              <li>
                <strong>Be Original:</strong> Your own work and ideas (can use tutorials
                as learning, but project should be unique)
              </li>
              <li>
                <strong>Be Presentable:</strong> Clean design, works on different screen
                sizes, and is easy to navigate
              </li>
              <li>
                <strong>Include Documentation:</strong> Brief README or description
                explaining what your project does and how to use it
              </li>
            </ul>
          </div>

          {/* Project Ideas */}
          <div className={styles.contentCard}>
            <h2>Project Ideas & Categories</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Not sure what to build? Here are some popular project categories:
            </p>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Personal Portfolio</h3>
                <p>Showcase your skills, projects, and resume in a professional website</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Interactive Game</h3>
                <p>Build games like tic-tac-toe, snake, memory match, or trivia</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Productivity Tool</h3>
                <p>To-do list, habit tracker, study planner, or note-taking app</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Educational Resource</h3>
                <p>Flashcards, quiz app, tutorial site, or learning platform</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Creative Showcase</h3>
                <p>Photo gallery, music player, art portfolio, or storytelling site</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Community Resource</h3>
                <p>Club website, event calendar, local guide, or information hub</p>
              </div>
            </div>
          </div>

          {/* Rules & Guidelines */}
          <div className={styles.contentCard}>
            <h2>Rules & Guidelines</h2>
            <ul className={styles.categoriesList}>
              <li><strong>Attendance:</strong> Regular attendance during development phase is required</li>
              <li><strong>Original Work:</strong> Projects must be your own work (no plagiarism)</li>
              <li><strong>Respectful Content:</strong> Projects must be appropriate for all ages</li>
              <li><strong>Collaboration:</strong> Team projects (2-3 people) are allowed with instructor approval</li>
              <li><strong>Help is Encouraged:</strong> Ask mentors for help, but don't have them do the work for you</li>
              <li><strong>Showcase Attendance:</strong> You must attend and present at the Final Showcase</li>
              <li><strong>Deadlines:</strong> Project must be completed and submitted by April 24, 2026</li>
            </ul>
          </div>

          {/* Judging Criteria */}
          <div className={styles.contentCard}>
            <h2>Judging & Evaluation</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Projects will be evaluated based on:
            </p>
            <ul className={styles.objectivesList}>
              <li>
                <strong>Functionality (30%):</strong> Does it work? Are there bugs?
                Is it interactive?
              </li>
              <li>
                <strong>Creativity (25%):</strong> Is it original? Unique features?
                Innovative ideas?
              </li>
              <li>
                <strong>Design (20%):</strong> Is it visually appealing? Easy to use?
                Responsive?
              </li>
              <li>
                <strong>Code Quality (15%):</strong> Is the code organized? Readable?
                Uses best practices?
              </li>
              <li>
                <strong>Presentation (10%):</strong> Can you explain your project well?
                Demonstrate features?
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.contentCard}>
            <h2>Resources & Help</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Here's where to find help during the hackathon:
            </p>
            <ul className={styles.categoriesList}>
              <li>
                <strong>Weekly Class Sessions:</strong> Fridays 4:30-6:00 PM on Zoom -
                dedicated development time with mentor support
              </li>
              <li>
                <strong>Course Materials:</strong> Review{' '}
                <Link to="/class" style={{ color: 'var(--hackathon-accent)' }}>
                  HTML, CSS, and JavaScript lessons
                </Link>
              </li>
              <li>
                <strong>MDN Web Docs:</strong> Comprehensive documentation at{' '}
                <a
                  href="https://developer.mozilla.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--hackathon-accent)' }}
                >
                  developer.mozilla.org
                </a>
              </li>
              <li>
                <strong>Discord:</strong> Ask questions and collaborate with classmates
              </li>
              <li>
                <strong>Office Hours:</strong> Schedule one-on-one time with mentors (details in class)
              </li>
            </ul>
          </div>

          {/* Tips for Success */}
          <div className={styles.contentCard}>
            <h2>Tips for Success</h2>
            <div className={styles.expectationGrid}>
              <div className={styles.expectationItem}>
                <h3>Start Simple</h3>
                <p>Build a basic version first, then add features gradually</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Test Often</h3>
                <p>Check your work frequently to catch problems early</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Ask for Help</h3>
                <p>Don't struggle alone - your mentors are here to help!</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Keep It Manageable</h3>
                <p>Better to have a small finished project than a large unfinished one</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Document as You Go</h3>
                <p>Take notes on your process and challenges solved</p>
              </div>
              <div className={styles.expectationItem}>
                <h3>Have Fun!</h3>
                <p>This is your chance to build something you're excited about</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Get Started?</h2>
          <p>Check out past projects for inspiration or jump into your course materials!</p>
          <div className={styles.ctaButtons}>
            <Link to="/hackathon/projects" className={styles.primaryBtn}>View Projects</Link>
            <Link to="/class" className={styles.secondaryBtn}>Course Materials</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HackathonInfo;