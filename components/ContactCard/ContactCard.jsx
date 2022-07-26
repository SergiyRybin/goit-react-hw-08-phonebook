import PropTypes from "prop-types";
import React from "react";
import { useDelContactMutation } from "redux/slice";

const ContactCard = ({ contact }) => {
  const [delContact] = useDelContactMutation();
  return (
    <li>
      {contact.name}: {contact.number}
      <button
        type="submite"
        className="delete"
        onClick={() => delContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactCard;
