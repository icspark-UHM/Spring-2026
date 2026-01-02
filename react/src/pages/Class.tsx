import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Define the Week data type
interface WeekData {
  week: number;
  title: string;
  desc: string;
  project: string | null;
  recording: string | null;
  internalLink?: string | null;
}

const weeksData: WeekData[] = [
  { week: 1, title: 'Week 1: 1/17', desc: 'Intro to HTML, CSS, JS', project: null, recording: null, internalLink: '/syllabus' },
  { week: 2, title: 'Week 2: 1/24', desc: 'Text Editors, File Paths, and Replit', project: null, recording: null },
  { week: 3, title: 'Week 3: 2/7', desc: 'CSS Basics and Flexbox', project: null, recording: null },
  { week: 4, title: 'Week 4: 2/14', desc: 'Javascript Variables, Data Types, Operators, and If statements', project: null, recording: null },
  { week: 5, title: 'Week 5: 2/21', desc: 'Functions', project: null, recording: null },
  { week: 6, title: 'Week 6: 2/28', desc: 'Data Structure: Arrays and Objects', project: null, recording: null },
  { week: 7, title: 'Week 7: 3/7', desc: 'Document Object Model I', project: null, recording: null },
  { week: 8, title: 'Week 8: 3/14', desc: 'Optional SWITCH x ICSpark Hackathon (Tentative)', project: null, recording: null },
  { week: 9, title: 'Week 9: 3/21', desc: 'SPRING BREAK No Class', project: null, recording: null },
  { week: 10, title: 'Week 10: 3/28', desc: 'Document Object Model II', project: null, recording: null },
  { week: 11, title: 'Week 11: 4/4', desc: 'CSS Pseudo-classes and Animations and Web Design', project: null, recording: null },
  { week: 12, title: 'Week 12: 4/11', desc: 'Final Review and Final Project I', project: null, recording: null, internalLink: '/showcase' },
  { week: 13, title: 'Week 13: 4/18', desc: 'Final Project II', project: null, recording: null, internalLink: '/showcase' },
  { week: 14, title: 'Week 14: 4/25', desc: 'Final Showcase', project: '', recording: null, internalLink: '/showcase' }
];

function Class() {
  const [selectedWeek, setSelectedWeek] = useState<WeekData | null>(null);

  const openModal = (week: WeekData): void => {
    setSelectedWeek(week);
  };

  const closeModal = (): void => {
    setSelectedWeek(null);
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedWeek) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedWeek]);

  return (
    <main className="content">
      <section className="weeks-grid" aria-label="Class weeks">
        <div className="grid-wrapper">
          {weeksData.map((week) => (
            <div
              key={week.week}
              className="weeks-card"
              onClick={() => openModal(week)}
            >
              <h3>{week.title}</h3>
              <p>{week.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for week details */}
      {selectedWeek && (
        <div className="modal open" role="dialog" aria-labelledby="modal-title">
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-panel" role="document">
            <button className="modal-close" aria-label="Close" onClick={closeModal}>
              ×
            </button>
            <h2 id="modal-title">{selectedWeek.title}</h2>
            <p>{selectedWeek.desc}</p>
            <p className="modal-project">
              Project Link: {selectedWeek.project ? (
              <a href={selectedWeek.project} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : (
              <em>Coming Soon</em>
            )}
            </p>
            <p className="modal-recording">
              Recording: {selectedWeek.recording ? (
              <a href={selectedWeek.recording} target="_blank" rel="noopener noreferrer">
                Watch Recording
              </a>
            ) : (
              <em>Coming Soon</em>
            )}
            </p>
            {selectedWeek.internalLink && (
              <div className="modal-section">
                <strong>Related Page:</strong>{' '}
                <Link to={selectedWeek.internalLink} onClick={closeModal}>
                  View Page
                </Link>
              </div>
            )}

          </div>
        </div>
      )}
    </main>
  );
}

export default Class;