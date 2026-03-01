import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";
import Footer from "../../components/hackathon/Footer.tsx";

const projects = [
  {
    number: 1,
    theme: "Student Inconvenience",
    title: "Smart Assignment Tracker",
    subtitle: "A planner that works as hard as you do",
    problem: `Students juggle multiple classes, each with its own assignments, deadlines, and difficulty levels. 
    It's easy to lose track of what's due, underestimate how long something will take, or suddenly realize you've fallen behind —
     all at the worst possible moment. Traditional planners and calendar apps don't account for how urgent, difficult, or 
     behind-schedule an assignment actually is.`,
    challenge: `Build a smart assignment planner that automatically prioritizes tasks based on deadline, 
    estimated difficulty, and how far behind the student is.`
    // tips: [
    //   { label: "Priority Score", detail: "Combine deadline urgency, self-reported difficulty (easy/medium/hard), and completion percentage into a single priority score that ranks assignments automatically." },
    //   { label: "Behind-Schedule Detection", detail: "If a deadline is approaching and progress is low, flag the assignment with a warning so students know to act fast." },
    //   { label: "Input UX", detail: "Make it fast to add an assignment — class name, due date, difficulty, and estimated hours. Fewer clicks = more likely students will actually use it." },
    //   { label: "Visual Feedback", detail: "Use color coding (red/yellow/green) or progress bars to give students an at-a-glance sense of their workload." },
    // ],
  },
  {
    number: 2,
    theme: "Student Inconvenience",
    title: "Motivation Streak App",
    subtitle: "Turn school into a quest and actually want to show up",
    problem: `Staying motivated through a long semester is hard. Homework feels repetitive, 
    progress is invisible, and it's easy to fall into a slump. Students often know what they need to do but 
    just can't seem to start.`,
    challenge: `Create a motivation and streak app that gamifies school subjects 
    by turning assignments and study sessions into quest-based challenges with rewards, 
    levels, and leaderboards. Bonus: Add a social layer so students can see their friends' progress and compete or cheer each other on.`
    // tips: [
    //   { label: "Quest System", detail: "Let students log completed tasks as finished quests. Each subject is its own quest line with levels and milestones to unlock." },
    //   { label: "Streaks & Rewards", detail: "Track daily study streaks and reward consistent effort with badges, XP, or custom titles (e.g., 'Math Wizard', 'Essay Machine')." },
    //   { label: "Leaderboard", detail: "Display a class or friend-group leaderboard ranked by XP or streak length. Keep it fun and non-toxic — focus on personal bests too." },
    //   { label: "Co-op Mode (Extra)", detail: "Let friends link accounts to see each other's progress in real time. Add a simple 'cheer' or reaction feature to encourage teammates." },
    // ],
  },
  {
    number: 3,
    theme: "Student Inconvenience",
    title: "Study Organizer",
    subtitle: "One place for everything — notes, deadlines, and study plans",
    problem: `When exam season hits, students scramble to piece together what they actually need to study. N
    otes are spread across notebooks, Google Docs, and random screenshots. 
    Assignments are scattered across multiple platforms. There's no single place that ties it all together into a clear study plan.`,
    challenge: `Design a smart study organizer that helps students consolidate their notes, assignments, 
    deadlines, and study materials into one organized hub. The app should help students figure out what to review, 
    in what order, and how much time to spend on each topic before their exam.`
    // tips: [
    //   { label: "Subject Dashboard", detail: "Give each class its own space where students can store notes, links, and uploaded files alongside upcoming deadlines." },
    //   { label: "Study Plan Generator", detail: "When a student inputs an exam date and the topics they need to cover, automatically suggest a daily study schedule that spreads the work out." },
    //   { label: "Progress Tracking", detail: "Let students check off topics as they review them and show an overall exam readiness percentage." },
    //   { label: "Quick Capture", detail: "Include a fast way to jot down notes or paste links without navigating away from the current view — keeping the workflow smooth during crunch time." },
    // ],
  },
];

function HackathonProjects() {
  return (
    <div className={styles.hackathonWrapper}>
      <HackathonNav />

      <section className={`${styles.pageHeader} ${styles.pageHeaderHero}`}>
        <div className={styles.container}>
          <h1 className={`${styles.pageTitle} ${styles.pageTitleDark}`}>Hackathon Projects</h1>
          <p className={`${styles.pageSubtitle} ${styles.pageSubtitleDark}`}>Choose your challenge and build something amazing</p>
        </div>
      </section>


      <section className={styles.welcomeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Project Theme: Student Inconvenience</h2>
          <p className={styles.welcomeText}>
            As students, we face many challenges: deadlines, burnout, and messy notes. Creating projects that solve real student problems can save
            time, reduce anxiety, and level up how students learn. What’s your best solution to tackle the issues below?
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          {projects.map((project) => (
            <div key={project.number} className={styles.challengeCard}>

              <div className={styles.challengeHeader}>
                <div className={styles.projectNumber}>
                  <span className={styles.challengeBadge}>Project {project.number}</span>
                  {/*<span className={styles.projectTheme}>{project.theme}</span>*/}
                </div>
              </div>

              <h2>{project.title}</h2>
              <p className={styles.challengeDesc}><em>{project.subtitle}</em></p>

              <p className={styles.sectionLabel}>Problem</p>
              <p className={styles.challengeDesc}>{project.problem}</p>

              <p className={styles.sectionLabel}>Challenge</p>
              <p className={styles.challengeDesc}>{project.challenge}</p>

              {/*<p className={styles.sectionLabel}>Tips to Consider</p>*/}
              {/*<ul className={styles.objectivesList}>*/}
              {/*  {project.tips.map((tip, i) => (*/}
              {/*    <li key={i}>*/}
              {/*      <strong>{tip.label}:</strong> {tip.detail}*/}
              {/*    </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}

            </div>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
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
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default HackathonProjects;