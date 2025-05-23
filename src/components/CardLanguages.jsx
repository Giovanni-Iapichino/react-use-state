export default function CardLanguages({ selectedLang }) {
  return (
    <div className="card ms-3 mt-3">
      <div className="card-body">
        <h5 className="card-title">{selectedLang.title}</h5>
        <p className="card-text">{selectedLang.description}</p>
      </div>
    </div>
  );
}
