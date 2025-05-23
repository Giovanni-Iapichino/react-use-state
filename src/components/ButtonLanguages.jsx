export default function ButtonLanguages({ lang, onClick }) {
  return (
    <button className={`btn btn-primary`} onClick={onClick}>
      {lang.title}
    </button>
  );
}
