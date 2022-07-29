import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactsViewComponent = () => {
  const defaulContact = new Contact(
    "Manuel",
    "Perdomo",
    "manuelperdomo@email.com",
    true
  );
  return (
    <div>
      <h2>Contacts</h2>
      <ContactComponent contact={defaulContact} />
    </div>
  );
};

export default ContactsViewComponent;
