import { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const initialState = {
  lastNodeCreatedAt: null,
  totalNotes: 0,
  notes: [],
};

const notesReducer = (prevState, action) => {
  if (action.type === "ADD_NOTE") {
    const newState = {
      lastNodeCreatedAt: new Date().toTimeString().slice(0, 8),
      totalNotes: prevState.notes.length + 1,
      notes: [...prevState.notes, action.payload],
    };

    console.log("After Add Note", newState);
    return newState;
  }
};

function App() {
  const [noteInput, setNoteInput] = useState("");
  const [notesState, dispatch] = useReducer(notesReducer, initialState);

  const addNote = (e) => {
    e.preventDefault();
    if (!noteInput) {
      return;
    }

    const newNote = {
      text: noteInput,
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setNoteInput("");
  };

  return (
    <div>
      <form onSubmit={addNote} className="note-form">
        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Create a new Note..."
        ></textarea>
        <button>Add</button>
      </form>
      {noteInput}
    </div>
  );
}

export default App;
