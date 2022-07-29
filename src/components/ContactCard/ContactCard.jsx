import PropTypes from "prop-types";
import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDelContactMutation } from "redux/slice";

const ContactCard = ({ contact }) => {
  const [delContact] = useDelContactMutation();
  return (
    <ListGroupItem
      action
      as="li"
      variant="success"
      className="d-flex justify-content-between align-items-center"
    >
      {contact.name}: {contact.number}
      <Button
        className="ms-auto"
        variant="success"
        type="submite"
        onClick={() => delContact(contact.id)}
      >
        Delete
      </Button>
    </ListGroupItem>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactCard;
