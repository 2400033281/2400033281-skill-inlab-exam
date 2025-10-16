import React, { useState } from "react";
import "./App.css";

function App() {
  const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [presentCount, setPresentCount] = useState(0);
  const [attendance, setAttendance] = useState({});

  const handleCheckboxChange = (name) => {
    setAttendance((prev) => {
      const newAttendance = { ...prev, [name]: !prev[name] };
      const newCount = Object.values(newAttendance).filter(Boolean).length;
      setPresentCount(newCount);
      return newAttendance;
    });
  };

  return (
    <div className="App">
      <h1>Attendance Tracker</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>
            <label>
              <input
                type="checkbox"
                checked={attendance[student] || false}
                onChange={() => handleCheckboxChange(student)}
              />
              {student}
            </label>
          </li>
        ))}
      </ul>
      <h2>Total Present: {presentCount}</h2>
    </div>
  );
}

export default App;
