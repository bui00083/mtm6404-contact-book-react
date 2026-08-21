import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  addDoc,
  collection
} from "firebase/firestore";

import db from "../db";

import ContactForm from "../components/ContactForm";

function NewContactView() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });

  const handleSubmit = async (event) => {

    event.preventDefault();

    const contactRef =
      await addDoc(
        collection(
          db,
          "contact"
        ),
        formData
      );

    navigate(
      `/contacts/${contactRef.id}`
    );
  };

  return (
    <section>

      <Link to="/">
        ← Back to Contacts
      </Link>

      <h1>
        Add New Contact
      </h1>

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Create Contact"
      />

    </section>
  );
}

export default NewContactView;