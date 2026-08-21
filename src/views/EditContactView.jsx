import {
  useEffect,
  useState
} from "react";

import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";

import db from "../db";

import ContactForm from "../components/ContactForm";

function EditContactView() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });

  useEffect(() => {

    const getContact = async () => {

      const contactRef = doc(
        db,
        "contacts",
        id
      );

      const contactSnapshot =
        await getDoc(contactRef);

      if (contactSnapshot.exists()) {

        setFormData({
          firstName:
            contactSnapshot.data().firstName || "",

          lastName:
            contactSnapshot.data().lastName || "",

          email:
            contactSnapshot.data().email || "",

          phone:
            contactSnapshot.data().phone || ""
        });

      }

    };

    getContact();

  }, [id]);

  const handleSubmit = async (event) => {

    event.preventDefault();

    const contactRef = doc(
      db,
      "contact",
      id
    );

    await updateDoc(
      contactRef,
      formData
    );

    navigate(
      `/contacts/${id}`
    );
  };

  return (
    <section>

      <Link
        to={`/contacts/${id}`}
      >
        ← Cancel
      </Link>

      <h1>
        Edit Contact
      </h1>

      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Save Changes"
      />

    </section>
  );
}

export default EditContactView;