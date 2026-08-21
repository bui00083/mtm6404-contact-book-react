import { useEffect, useState } from "react";

import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  doc,
  getDoc,
  deleteDoc
} from "firebase/firestore";

import db from "../db";

function ContactDetailsView() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [contact, setContact] = useState(null);

  useEffect(() => {

    const getContact = async () => {

      const contactRef = doc(
        db,
        "contact",
        id
      );

      const contactSnapshot =
        await getDoc(contactRef);

      console.log(
        "ID from URL:",
        id
      );

      console.log(
        "Document exists:",
        contactSnapshot.exists()
      );

      console.log(
        "Document data:",
        contactSnapshot.data()
      );

      if (contactSnapshot.exists()) {

        setContact({
          id: contactSnapshot.id,
          ...contactSnapshot.data()
        });

      }

    };

    getContact();

  }, [id]);

  const handleDelete = async () => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this contact?"
      );

    if (!confirmed) {
      return;
    }

    await deleteDoc(
      doc(
        db,
        "contacts",
        id
      )
    );

    navigate("/");
  };

  if (!contact) {
    return <p>Loading contact...</p>;
  }

  return (
    <section>

      <Link to="/">
        ← Back to Contacts
      </Link>

      <h1>
        {contact.firstName} {contact.lastName}
      </h1>

      <p>
        <strong>Email:</strong>{" "}
        {contact.email}
      </p>

      {contact.phone && (
        <p>
          <strong>Phone:</strong>{" "}
          {contact.phone}
        </p>
      )}

      <div>

        <Link
          to={`/contacts/${id}/edit`}
        >
          Edit Contact
        </Link>

        {" "}

        <button
          onClick={handleDelete}
        >
          Delete Contact
        </button>

      </div>

    </section>
  );
}

export default ContactDetailsView;