import CardLanguages from "./components/cardLanguages";
import ButtonLanguages from "./components/ButtonLanguages";

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
            <ButtonLanguages
              key={lang.id}
              lang={lang}
              onClick={() => setSelectedLang(lang)}
            />
          ))}
        </div>

        <CardLanguages selectedLang={selectedLang} />
      </div>
    </>
  );
}
