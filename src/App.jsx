import './App.css'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact'
import { useState } from 'react'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
