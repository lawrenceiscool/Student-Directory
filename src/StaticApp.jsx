import Header from './components/Header.jsx';
import StudentCard from './components/StudentCard.jsx';
import Footer from './components/Footer.jsx';
import { initialStudents } from './students.js';

export default function StaticApp() {
  return (
    <div className="page">
      <Header />
      <main className="student-grid">
        {initialStudents.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </main>
      <Footer count={initialStudents.length} />
    </div>
  );
}
