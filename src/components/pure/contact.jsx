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
      <p>
        {connected ? (
          <span className="online">Contacto en línea</span>
        ) : (
          <span className="notOnline">Contacto no disponible</span>
        )}
      </p>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
