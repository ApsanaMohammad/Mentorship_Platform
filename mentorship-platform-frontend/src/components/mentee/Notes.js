import React, { useState } from 'react';

const Notes = () => {
  // Static initial notes list
  const initialNotes = [
    { id: 1, content: 'Meeting with mentor tomorrow at 3 PM', createdAt: '2024-12-12T14:00:00Z' },
    { id: 2, content: 'Research on machine learning algorithms', createdAt: '2024-12-11T10:00:00Z' }
  ];

  const [notes, setNotes] = useState(initialNotes); // State for notes
  const [newNote, setNewNote] = useState(''); // State for new note input

  // Handle adding a new note
  const handleAddNote = (e) => {
    e.preventDefault();

    if (!newNote.trim()) {
      alert('Note content cannot be empty');
      return;
    }

    // Add the new note to the existing notes list
    const newNoteObject = {
      id: notes.length + 1, // Incremental ID
      content: newNote,
      createdAt: new Date().toISOString(), // Current timestamp
    };

    setNotes([...notes, newNoteObject]); // Update state with the new note
    setNewNote(''); // Reset new note input field
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your Notes</h2>
      
      <form onSubmit={handleAddNote} className="mb-4">
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Write a new note..."
            rows="4"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)} // Update newNote state on input change
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Note</button>
      </form>

      {notes.length > 0 ? (
        <div className="list-group">
          {notes.map((note) => (
            <div key={note.id} className="list-group-item list-group-item-action shadow mb-2">
              <p>{note.content}</p>
              <small className="text-muted">Added on {new Date(note.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">You have no notes yet.</p>
      )}
    </div>
  );
};

export default Notes;
