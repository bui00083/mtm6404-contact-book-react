import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import ContactsView from "./views/ContactsView"
import ContactDetailsView from "./views/ContactDetailsView"
import NewContactView from "./views/NewContactView"
import EditContactView from "./views/EditContactView"


function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route 
            path="/" 
            element={<ContactsView />} 
          />

          <Route
            path="/Contacts/:id"
            element={<ContactDetailsView />} 
          />

          <Route
            path="/new"
            element={<NewContactView />} 
          />

          <Route
            path="/Contacts/:id/edit"
            element={<EditContactView />} 
          />

        </Routes>
      </main>
    </>
  )
}

export default App
