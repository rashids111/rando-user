import React, { useEffect, useState } from "react"
import './App.css';
import fetchUser from './services/rando_user'
import UserSummary from './components/UserSummary'

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  function refreshUser() {
    fetchUser().then(response => setCurrentUser(response))
  }

  // If the [] argument is not used below, then multiple calls are made
  useEffect(() => {
    refreshUser()
  }, [])

  return (
    <div className="App">
      <h2>Random User</h2>
      <button onClick={() => refreshUser()}> Refresh </button>
      {/* <div>{JSON.stringify(currentUser)}</div> */}
      <UserSummary userData={currentUser} />
    </div>
  );
}

export default App;
