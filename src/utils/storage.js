// utils/storage.js

const NOTES_KEY = 'notes';

export function getNotes() {
  const stored = localStorage.getItem(NOTES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveNote(note) {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}
