import { useState } from 'react';
import Header from './components/Header.jsx';
import StudentCard from './components/StudentCard.jsx';
import AddStudentForm from './components/AddStudentForm.jsx';
import Footer from './components/Footer.jsx';
import { initialStudents } from './students.js';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [showPassedOnly, setShowPassedOnly] = useState(false);

  function handleAddStudent(newStudent) {
    setStudents((currentStudents) => [...currentStudents, newStudent]);
  }

  function handleDeleteStudent(id) {
    setStudents((currentStudents) => currentStudents.filter((student) => student.id !== id));
  }

  const visibleStudents = showPassedOnly
    ? students.filter((student) => student.score >= 60)
    : students;

  return (
    <div className="page">
      <Header />
      <AddStudentForm onAdd={handleAddStudent} />
      <div className="directory-controls">
        <p aria-live="polite">Current number of students: {students.length}</p>
        <button type="button" aria-pressed={showPassedOnly}
          onClick={() => setShowPassedOnly((current) => !current)}>
          {showPassedOnly ? 'Show All' : 'Show Passed Only'}
        </button>
      </div>
      <main className="student-grid">
        {visibleStudents.map((student) => (
          <StudentCard key={student.id} id={student.id} name={student.name}
            major={student.major} score={student.score} onDelete={handleDeleteStudent} />
        ))}
      </main>
      {visibleStudents.length === 0 && <p>No students to display.</p>}
      <Footer count={students.length} />
    </div>
  );
}
