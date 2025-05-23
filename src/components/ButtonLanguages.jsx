export default function ButtonLanguages({ lang, onClick, isSelected }) {
  return (
    <button
      className={`btn ${isSelected ? "btn-warning" : "btn-primary"}`}
      onClick={onClick}
    >
      {lang.title}
    </button>
  );
}
