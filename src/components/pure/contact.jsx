import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  const { firstName, lastName, email, connected } = contact;
  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{email}</p>
      <p>{connected ? "Contacto en línea" : "Contacto no disponible"}</p>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
