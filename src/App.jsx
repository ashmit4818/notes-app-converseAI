import { useState } from 'react'
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';


import './App.css'
// App.jsx

function App() {
  const [view, setView] = useState('list');
  const [refresh, setRefresh] = useState(false);

  const reloadNotes = () => setRefresh(!refresh); // force NotesList to refresh

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* // Why this nav approach for simplicity. */
      // I chose a simple navigation approach with buttons to switch between views. This keeps the UI clean and allows for easy toggling between adding and viewing notes without complex routing or state management. It’s straightforward and effective for this use case. */}
      }

      <nav className="flex gap-4 mb-6 justify-center">
        <button
          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
          onClick={() => setView('list')}
        >
          View Notes
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-600"
          onClick={() => setView('add')}
        >
          Add Note
        </button>
      </nav>

      {view === 'list' ? <NotesList key={refresh} /> : <AddNote onAdd={reloadNotes} />}
    </div>
  );
}

export default App;


