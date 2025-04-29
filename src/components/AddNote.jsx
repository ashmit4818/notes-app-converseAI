import React, { useState } from 'react';
import { saveNote } from '../utils/storage';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // Why I chose useState + this submit handler.
    // used React’s useState for simple form state and a single handler to manage validation and saving logic. I want to keep the form controlled, so I can easily reset the fields after submission.
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert('Both fields are required!');
    saveNote({ title, content });
    onAdd();
    setTitle('');
    setContent('');
  };

  return (
    <div id="note-wrapper">
      <style>{`
        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        #note-wrapper {
          margin: 2rem auto;
          padding: 1rem;
          animation: slideFadeIn 0.4s ease;
        }

        #note-card {
          background: linear-gradient(135deg, #4169e1, #1e3a8a);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        #note-heading {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-align: center;
          margin-bottom: 1rem;
        }

        #note-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        #note-title,
        #note-content {
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          font-size: 1rem;
          color: white;
        }

        #note-title::placeholder,
        #note-content::placeholder {
          color: #555;
        }

        #note-content {
          max-width: 1155px;
          min-width: 192px;
          min-height: 100px;
        }

        #note-submit {
          background-color: white;
          color: #1e3a8a;
          font-weight: 600;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        #note-submit:hover {
          background-color: #e0e7ff;
        }
      `}</style>

      <div id="note-card">
        <h2 id="note-heading">Add a New Note</h2>
        <form onSubmit={handleSubmit} id="note-form">
          <input
            id="note-title"
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="note-content"
            placeholder="Note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" id="note-submit">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
