import ContactCard from "components/ContactCard/ContactCard";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useGetContactsQuery } from "redux/sliceContact";

function ContactList() {
  const { data } = useGetContactsQuery();

  const filterValue = useSelector((state) => state.filter.filter);

  const response = data?.filter(({ name }) =>
    name.toLowerCase().startsWith(filterValue.toLowerCase())
  );

  return (
    <Container>
      <ListGroup 
      as="ul"
      className="mx-auto" style={{ width: "400px" }}>
        {response &&
          response.map((contact, index) => (
            <ContactCard contact={contact} key={index} />
          ))}
      </ListGroup>
    </Container>
  );
}

export default ContactList;
