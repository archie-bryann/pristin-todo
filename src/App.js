import React from "react";
import "./App.css";
import { useState } from "react";
import { X } from "react-bootstrap-icons";
import { v4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const addNote = () => {
    if (date == "" || note == "") {
      alert("All fields are required!");
    } else {
      let _note = { id: v4(), note, date };
      if (notes.length < 1) {
        setNotes([_note]);
      } else {
        setNotes([...notes, _note]);
      }
      setNote("");
      setDate("");
    }
  };

  const deleteNote = (id) => {
    const remainder = notes.filter((note) => {
      if (note.id !== id) return note;
    });
    setNotes(remainder);
  };

  return (
    <div className="main">
      <h3 align="center">Calender App</h3>
      <input
        type="text"
        placeholder="Add a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addNote}>Add</button>
      <div style={{ height: "15px" }}></div>
      <hr />
      <div className="notes">
        {notes.map((item) => (
          <div className="card-item" key={item.id}>
            {item.note} - {item.date}
            <X size={25} className="icon" onClick={() => deleteNote(item.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
