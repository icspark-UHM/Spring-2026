import styles from './Hackathon.module.css';
import HackathonNav from "../../components/hackathon/HackNav";
import Footer from "../../components/hackathon/Footer.tsx";

const projects = [
  {
    number: 1,
    theme: "Hawaiian Culture",
    title: "Learn Aloha",
    subtitle: "Educating tourists about Native Hawaiian culture",
    problem: `Hawai'i is a top global tourist destination, welcoming millions of visitors each year. However, many tourists arrive with limited knowledge of Native Hawaiian culture, traditions, and the islands' deep-rooted connection to the land (ʻāina). This lack of awareness can lead to unintentional cultural insensitivity, environmental harm, and missed opportunities for meaningful engagement with local communities.`,
    challenge: `Create an engaging, interactive mobile or web application that educates tourists about Native Hawaiian culture, including history, language, traditional practices, local plants, food, and customs. The app should encourage cultural respect and responsible tourism while making learning fun and accessible for visitors of all backgrounds.`,
    tips: [
      { label: "Cultural Education", detail: "Teach tourists about Hawaiian traditions, including hula, makahiki (Hawaiian New Year), kapu system (ancient laws), and ʻŌlelo Hawaiʻi (Hawaiian language)." },
      { label: "Flora & Fauna", detail: "Highlight native and endemic plants (e.g., taro, koa, ʻōhiʻa) and their cultural significance, as well as conservation efforts." },
      { label: "Local Food", detail: "Educate visitors about traditional Hawaiian foods (e.g., poi, laulau, poke) and where to find authentic dishes." },
      { label: "Sustainability & Responsible Tourism", detail: "Provide guidance on culturally appropriate behavior, such as respecting sacred sites, avoiding invasive species, and supporting local businesses." },
    ],
  },
  {
    number: 2,
    theme: "Project 2 Theme",
    title: "Project 2 Title",
    subtitle: "Short subtitle describing the project",
    problem: `[Problem description goes here.]`,
    challenge: `[Challenge description goes here.]`,
    tips: [
      { label: "Tip 1", detail: "Description of tip 1." },
      { label: "Tip 2", detail: "Description of tip 2." },
      { label: "Tip 3", detail: "Description of tip 3." },
      { label: "Tip 4", detail: "Description of tip 4." },
    ],
  },
  {
    number: 3,
    theme: "Project 3 Theme",
    title: "Project 3 Title",
    subtitle: "Short subtitle describing the project",
    problem: `[Problem description goes here.]`,
    challenge: `[Challenge description goes here.]`,
    tips: [
      { label: "Tip 1", detail: "Description of tip 1." },
      { label: "Tip 2", detail: "Description of tip 2." },
      { label: "Tip 3", detail: "Description of tip 3." },
      { label: "Tip 4", detail: "Description of tip 4." },
    ],
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

      <section className={styles.contentSection}>
        <div className={styles.container}>
          {projects.map((project) => (
            <div key={project.number} className={styles.challengeCard}>

              <div className={styles.challengeHeader}>
                <div className={styles.projectNumber}>
                  <span className={styles.challengeBadge}>Project {project.number}</span>
                  <span className={styles.projectTheme}>{project.theme}</span>
                </div>
              </div>

              <h2>{project.title}</h2>
              <p className={styles.challengeDesc}><em>{project.subtitle}</em></p>

              <p className={styles.sectionLabel}>Problem</p>
              <p className={styles.challengeDesc}>{project.problem}</p>

              <p className={styles.sectionLabel}>Challenge</p>
              <p className={styles.challengeDesc}>{project.challenge}</p>

              <p className={styles.sectionLabel}>Tips to Consider</p>
              <ul className={styles.objectivesList}>
                {project.tips.map((tip, i) => (
                  <li key={i}>
                    <strong>{tip.label}:</strong> {tip.detail}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default HackathonProjects;