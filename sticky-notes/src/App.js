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
  } else if (action.type === "DELETE_NOTE") {
    const newState = {
      ...prevState,
      totalNotes: prevState.notes.length - 1,
      notes: prevState.notes.filter((note) => note.id !== action.payload.id),
    };

    console.log("After deleting the note", newState);

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
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20),
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setNoteInput("");
  };

  const dropNote = (e) => {
    e.target.style.left = `${e.pageX - 50}px`;
    e.target.style.top = `${e.pageY - 50}px`;
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div onDragOver={dragOver} className="app">
      <h1>Sticky notes ({notesState.totalNotes})</h1>
      <span>
        {notesState.totalNotes > 0
          ? `Last Node Created At: ${notesState.lastNodeCreatedAt}`
          : ""}
      </span>
      <form onSubmit={addNote} className="note-form">
        <textarea
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Create a new Note..."
        ></textarea>
        <button>Add</button>
      </form>
      {notesState.notes.map((note) => (
        <div
          className="note"
          style={{ transform: `rotate(${note.rotate}deg)` }}
          draggable="true"
          onDragEnd={dropNote}
          key={note.id}
        >
          <div
            onClick={() => dispatch({ type: "DELETE_NOTE", payload: note })}
            className="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <pre className="text">{note.text}</pre>
        </div>
      ))}
    </div>
  );
}

export default App;
