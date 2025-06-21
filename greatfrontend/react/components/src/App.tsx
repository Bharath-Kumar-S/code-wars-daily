import { useState } from "react";
import "./App.css";

function App() {
  const [sections] = useState([
    { title: "Section 1", value: "section1", content: "Content for section 1" },
    { title: "Section 2", value: "section2", content: "Content for section 2" },
    { title: "Section 3", value: "section3", content: "Content for section 3" },
  ]);

  const [activeSection, setActiveSection] = useState(new Set());

  return (
    <>
      <h1>Accordion</h1>
      <p>This is a simple accordion component built with React.</p>

      {sections.map((section) => {
        const isActive = activeSection.has(section.value);
        return (
          <div key={section.value} className="accordion">
            <button
              className={`accordion-header ${isActive ? "active" : ""}`}
              onClick={() => {
                const newActiveSection = new Set(activeSection);
                if (isActive) {
                  newActiveSection.delete(section.value);
                } else {
                  newActiveSection.add(section.value);
                }
                setActiveSection(newActiveSection);
              }}
            >
              {section.title}
            </button>
            {isActive && (
              <div className="accordion-content">{section.content}</div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;
