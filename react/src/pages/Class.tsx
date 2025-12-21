import { useState, useEffect } from 'react';

// Define the Week data type
interface WeekData {
  week: number;
  title: string;
  desc: string;
  project: string | null;
  zoom: string | null;
}

const weeksData: WeekData[] = [
  { week: 1, title: 'Week 1: 1/17', desc: 'Intro to the course and setup.', project: null, zoom: null },
  { week: 2, title: 'Week 2: 1/24', desc: 'HTML basics and semantic markup.', project: null, zoom: null },
  { week: 3, title: 'Week 3: 2/7', desc: 'CSS layout and flexbox/grid.', project: null, zoom: null },
  { week: 4, title: 'Week 4: 2/14', desc: 'Responsive design and media queries.', project: null, zoom: null },
  { week: 5, title: 'Week 5: 2/21', desc: 'JavaScript fundamentals.', project: null, zoom: null },
  { week: 6, title: 'Week 6: 2/28', desc: 'DOM manipulation and events.', project: null, zoom: null },
  { week: 7, title: 'Week 7: 3/7', desc: 'Working with APIs and fetch.', project: null, zoom: null },
  { week: 8, title: 'Week 8: 3/14', desc: 'SWITCH x ICSpark Hackathon (Tentative).', project: null, zoom: null },
  { week: 9, title: 'Week 9: 3/21', desc: 'SPRING BREAK', project: null, zoom: null },
  { week: 10, title: 'Week 10: 3/28', desc: 'Node.js and simple servers.', project: null, zoom: null },
  { week: 11, title: 'Week 11: 4/4', desc: 'Databases basics.', project: null, zoom: null },
  { week: 12, title: 'Week 12: 4/11', desc: 'Testing and quality.', project: null, zoom: null },
  { week: 13, title: 'Week 13: 4/18', desc: 'Deployment and CI/CD.', project: null, zoom: null },
  { week: 14, title: 'Week 14: 4/25', desc: 'Final projects and showcase.', project: null, zoom: null }
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
            <p className="modal-meta">This is a placeholder for the specific GitHub repo we are using.</p>
            <p className="modal-project">
              Project Link: {selectedWeek.project ? (
              <a href={selectedWeek.project} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : (
              <span>Coming Soon</span>
            )}
            </p>
            <p className="modal-zoom">
              Zoom recording: {selectedWeek.zoom ? (
              <a href={selectedWeek.zoom} target="_blank" rel="noopener noreferrer">
                Watch Recording
              </a>
            ) : (
              <em>Coming soon</em>
            )}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Class;