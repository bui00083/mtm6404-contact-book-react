import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  collection,
  getDocs
} from "firebase/firestore";

import db from "../db";

function ContactsView() {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const getContacts = async () => {

      const querySnapshot = await getDocs(
        collection(db, "contact")
      );

      const contactsArray = [];

      querySnapshot.forEach((document) => {

        contactsArray.push({
          id: document.id,
          ...document.data()
        });

      });

      console.log("contactsArray:", contactsArray);

      setContacts(contactsArray);
    };

    getContacts();

  }, []);

  const sortedContacts = [...contacts].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  const filteredContacts = sortedContacts.filter((contact) => {

    const fullName =
      `${contact.firstName} ${contact.lastName}`.toLowerCase();

    return fullName.includes(
      search.toLowerCase()
    );

  });

  return (
    <section>

      <h1>Contacts</h1>

      <input
        type="search"
        placeholder="Search contacts..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <ul>

        {filteredContacts.map((contact) => (

          <li key={contact.id}>

            <Link
              to={`/contacts/${contact.id}`}
            >
              {contact.firstName} {contact.lastName}
            </Link>

            <p>
              {contact.email}
            </p>

          </li>

        ))}

      </ul>

    </section>
  );
}

export default ContactsView;