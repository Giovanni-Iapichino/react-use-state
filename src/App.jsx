// LAYOUT COMPONENTS
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

// DATA COMPONENTS
import languages from "./data/languages";
import { useState } from "react";

export default function App() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <>
      <div className="container">
        <h1>Learn Web Development</h1>
      </div>
      <div className="container">
        <div className="d-flex gap-4 p-3 mt-5">
          {languages.map((lang) => (
            <button
              key={lang.id}
              className={`btn btn-primary`}
              onClick={() => setSelectedLang(lang)}
            >
              {lang.title}
            </button>
          ))}
        </div>

        <div class="card ms-3 mt-3">
          <div class="card-body">
            <h5 class="card-title">{selectedLang.title}</h5>
            <p class="card-text">{selectedLang.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
