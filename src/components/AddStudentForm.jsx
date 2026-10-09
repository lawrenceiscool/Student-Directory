import { useState } from 'react';

export default function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [score, setScore] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() === '') return;

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      major: major.trim(),
      score: Number(score),
    });
    setName('');
    setMajor('');
    setScore('');
  }

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" placeholder="Name" value={name}
          onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Major
        <input type="text" placeholder="Major" value={major}
          onChange={(event) => setMajor(event.target.value)} />
      </label>
      <label>
        Score
        <input type="number" placeholder="Score" value={score}
          onChange={(event) => setScore(event.target.value)} />
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}
