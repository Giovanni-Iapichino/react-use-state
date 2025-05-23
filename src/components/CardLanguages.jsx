export default function CardLanguages({ selectedLang }) {
  return (
    <div className="card ms-3 mt-3">
      <div className="card-body">
        <h5 className="card-title">{selectedLang ? selectedLang.title : ""}</h5>
        <p className="card-text">
          {selectedLang
            ? selectedLang.description
            : "nessun linguaggio selezionato"}
        </p>
      </div>
    </div>
  );
}
