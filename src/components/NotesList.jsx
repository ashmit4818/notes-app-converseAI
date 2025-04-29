import React, { useEffect, useState } from 'react';
import { getNotes, deleteNote } from '../utils/storage';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [deletingIndex, setDeletingIndex] = useState(null);
  
  // Why useEffect to sync storage → state.
  // I used useEffect to sync the component state with local storage. This ensures that the component reflects the latest data whenever it mounts or updates, keeping the UI in sync with the underlying data source.
  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleDelete = (index) => {
    setDeletingIndex(index);
    // Wait for animation to finish before updating state
    setTimeout(() => {
      deleteNote(index);
      setNotes(getNotes());
      setDeletingIndex(null);
    }, 300); // match animation duration
  };

  return (
    <div id="notes-wrapper">
      {/* Scoped CSS */}
      <style>{`
        #notes-wrapper {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .note-card {
          background: linear-gradient(135deg, #4169e1, #1e3a8a);
          border-radius: 1rem;
          padding: 1.5rem;
          color: white;
          position: relative;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.4s ease;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .note-card.deleting {
          opacity: 0;
          transform: scale(0.95);
        }

        .note-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .note-content {
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .note-delete {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: #dc2626;
          padding: 0.4rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          color: white;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .note-delete:hover {
          background-color: #b91c1c;
        }

        .note-empty {
          text-align: center;
          color: white;
          grid-column: 1 / -1;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {notes.length === 0 ? (
        <p className="note-empty">No notes yet.</p>
      ) : (
        notes.map((note, index) => (
          <div
            key={index}
            className={`note-card ${deletingIndex === index ? 'deleting' : ''}`}
          >
            <button className="note-delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
