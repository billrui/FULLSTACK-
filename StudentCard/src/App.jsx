import { useState } from 'react'
import './App.css'
import StudentCard from "./components/StudentCard"

function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard name="Mark " course="Computer Science" age={20} />
      <StudentCard name="Kevin"  course="Graphic Design"   age={21} />
      <StudentCard name="Brian"     course="Civil Engineer" age={22} />
    </div>
  );
}

export default App
