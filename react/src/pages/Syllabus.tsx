import styles from "./Syllabus.module.css";

export default function Syllabus() {
  // Use the EMBED URL from Google Docs:
  // File → Share → Publish to web → Embed
  const docEmbedUrl =
    "https://docs.google.com/document/d/e/2PACX-1vThpfLQpcFNBi_Pq0U7JoUTEwOAnFv9DQgrikeTX75dWPpGI5BcrIGsIr86Uxcp3-hhwBckid7GcSqW/pub?embedded=true";

  return (
    <main className="content">
        <iframe
          className={styles.doc}
          src={docEmbedUrl}
          title="Syllabus"
          loading="lazy"
          frameBorder="0"
          // allowFullScreen // optional
        />
    </main>
  );
}

