export default function StudentCard({ id, name, major, score, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{major}</p>
      <p className={score >= 60 ? 'passed' : 'failed'}>
        {score} · {score >= 60 ? 'Passed' : 'Failed'}
      </p>
      {onDelete && (
        <button type="button" onClick={() => onDelete(id)} aria-label={`Delete ${name}`}>
          Delete
        </button>
      )}
    </div>
  );
}
